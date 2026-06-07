const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

pool.query(`
  CREATE TABLE IF NOT EXISTS pos_manifests (
    id TEXT PRIMARY KEY,
    session_id TEXT,
    name TEXT,
    items JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS pos_received (
    session_id TEXT,
    manifest_id TEXT,
    item_num TEXT,
    qty INTEGER DEFAULT 0,
    PRIMARY KEY (session_id, manifest_id, item_num)
  );

  CREATE TABLE IF NOT EXISTS pos_sales (
    id TEXT PRIMARY KEY,
    session_id TEXT,
    manifest_id TEXT,
    item_num TEXT,
    description TEXT,
    brand TEXT,
    price NUMERIC,
    pay_method TEXT,
    sale_time TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`)
.then(() => console.log('DB ready'))
.catch(err => console.error('DB error:', err.message));


pool.query(`
  CREATE TABLE IF NOT EXISTS pos_damaged (
    session_id TEXT,
    manifest_id TEXT,
    item_num TEXT,
    qty INTEGER DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (session_id, manifest_id, item_num)
  );
`)
.then(() => console.log('Damaged table ready'))
.catch(err => console.error('Damaged table error:', err.message));


pool.query(`
  CREATE TABLE IF NOT EXISTS pos_barcodes (
    session_id TEXT,
    barcode TEXT,
    item_num TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (session_id, barcode)
  );
`)
.then(() => console.log('Barcode table ready'))
.catch(err => console.error('Barcode table error:', err.message));

const clients = {};

function notify(sid, data) {
  if (!clients[sid]) return;

  clients[sid].forEach(res => {
    try {
      res.write('data: ' + JSON.stringify(data) + '\n\n');
    } catch {}
  });
}

app.post('/api/manifest', async (req, res) => {
  try {
    const { id, session_id, name, items } = req.body;

    await pool.query(
      `INSERT INTO pos_manifests (id, session_id, name, items)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (id)
       DO UPDATE SET name = $3, items = $4`,
      [id, session_id, name, JSON.stringify(items)]
    );

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/manifests/:sid', async (req, res) => {
  try {
    const r = await pool.query(
      'SELECT * FROM pos_manifests WHERE session_id = $1 ORDER BY created_at DESC',
      [req.params.sid]
    );

    res.json(r.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/barcodes/:sid', async (req, res) => {
  try {
    const { sid } = req.params;

    const r = await pool.query(
      'SELECT barcode, item_num FROM pos_barcodes WHERE session_id = $1',
      [sid]
    );

    const map = {};

    r.rows.forEach(row => {
      if (row.barcode && row.item_num) {
        map[String(row.barcode).trim()] = String(row.item_num).trim();
      }
    });

    res.json({
      ok: true,
      map,
      rows: r.rows
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/barcode', async (req, res) => {
  try {
    const { session_id, barcode, item_num } = req.body;

    const cleanSession = String(session_id || '').trim();
    const cleanBarcode = String(barcode || '').trim();
    const cleanItem = String(item_num || '').trim();

    if (!cleanSession || !cleanBarcode || !cleanItem) {
      return res.status(400).json({ error: 'Missing session_id, barcode, or item_num' });
    }

    await pool.query(
      `INSERT INTO pos_barcodes (session_id, barcode, item_num, updated_at)
       VALUES ($1, $2, $3, NOW())
       ON CONFLICT (session_id, barcode)
       DO UPDATE SET item_num = $3, updated_at = NOW()`,
      [cleanSession, cleanBarcode, cleanItem]
    );

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/data/:sid/:mid', async(req,res)=>{
  try{
    const {sid,mid}=req.params;

    const [received,sales,damaged]=await Promise.all([
      pool.query(
        'SELECT * FROM pos_received WHERE session_id=$1 AND manifest_id=$2',
        [sid,mid]
      ),
      pool.query(
        'SELECT * FROM pos_sales WHERE session_id=$1 AND manifest_id=$2 ORDER BY created_at DESC',
        [sid,mid]
      ),
      pool.query(
        'SELECT * FROM pos_damaged WHERE session_id=$1 AND manifest_id=$2',
        [sid,mid]
      )
    ]);

    res.json({
      received: received.rows,
      sales: sales.rows,
      damaged: damaged.rows
    });
  }catch(e){
    res.status(500).json({error:e.message});
  }
});

app.post('/api/receive', async (req, res) => {
  try {
    const { session_id, manifest_id, item_num, qty } = req.body;

    await pool.query(
      `INSERT INTO pos_received (session_id, manifest_id, item_num, qty)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (session_id, manifest_id, item_num)
       DO UPDATE SET qty = $4`,
      [session_id, manifest_id, item_num, qty]
    );

    notify(session_id, {
      type: 'receive',
      manifest_id,
      item_num,
      qty
    });

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/damaged', async(req,res)=>{
  try{
    const {session_id,manifest_id,item_num,qty}=req.body;

    await pool.query(
      `INSERT INTO pos_damaged(session_id,manifest_id,item_num,qty,updated_at)
       VALUES($1,$2,$3,$4,NOW())
       ON CONFLICT(session_id,manifest_id,item_num)
       DO UPDATE SET qty=$4, updated_at=NOW()`,
      [session_id,manifest_id,item_num,qty]
    );

    notify(session_id,{
      type:'damaged',
      manifest_id,
      item_num,
      qty
    });

    res.json({ok:true});
  }catch(e){
    res.status(500).json({error:e.message});
  }
});

app.post('/api/sale', async (req, res) => {
  try {
    const {
      id,
      session_id,
      manifest_id,
      item_num,
      description,
      brand,
      price,
      pay_method,
      sale_time
    } = req.body;

    await pool.query(
      `INSERT INTO pos_sales
       (id, session_id, manifest_id, item_num, description, brand, price, pay_method, sale_time)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [id, session_id, manifest_id, item_num, description, brand, price, pay_method, sale_time]
    );

    notify(session_id, {
      type: 'sale',
      id,
      manifest_id,
      item_num,
      description,
      brand,
      price: Number(price),
      pay_method,
      sale_time
    });

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/events/:sid', (req, res) => {
  const { sid } = req.params;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  if (!clients[sid]) clients[sid] = new Set();

  clients[sid].add(res);

  res.write('data: {"type":"connected"}\n\n');

  const ping = setInterval(() => {
    try {
      res.write(': ping\n\n');
    } catch {}
  }, 25000);

  req.on('close', () => {
    clearInterval(ping);
    if (clients[sid]) clients[sid].delete(res);
  });
});


app.delete('/api/manifest/:sid/:mid', async (req, res) => {
  const { sid, mid } = req.params;
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    await client.query(
      'DELETE FROM pos_sales WHERE session_id = $1 AND manifest_id = $2',
      [sid, mid]
    );

    await client.query(
      'DELETE FROM pos_damaged WHERE session_id = $1 AND manifest_id = $2',
      [sid, mid]
    );

    await client.query(
      'DELETE FROM pos_received WHERE session_id = $1 AND manifest_id = $2',
      [sid, mid]
    );

    await client.query(
      'DELETE FROM pos_manifests WHERE session_id = $1 AND id = $2',
      [sid, mid]
    );

    await client.query('COMMIT');

    notify(sid, {
      type: 'delete_manifest',
      manifest_id: mid
    });

    res.json({ ok: true });
  } catch (e) {
    try {
      await client.query('ROLLBACK');
    } catch {}

    res.status(500).json({ error: e.message });
  } finally {
    client.release();
  }
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Running on port ' + PORT);
});
