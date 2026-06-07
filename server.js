const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();

app.get('/api/recover-sales-page', (req,res)=>{
  res.type('html').send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Recover Sales - Klou POS</title>
  <style>
    body{margin:0;background:#020617;color:#e5e7eb;font-family:Arial, sans-serif;padding:18px}
    .box{max-width:650px;margin:0 auto;background:#111827;border:2px solid #facc15;border-radius:18px;padding:18px}
    h1{color:#facc15;font-size:24px;margin:0 0 10px}
    button{width:100%;padding:14px;border:0;border-radius:12px;font-weight:900;font-size:15px;margin-top:10px}
    .green{background:#22c55e;color:#00110a}
    .blue{background:#06b6d4;color:#00111a}
    .gray{background:#334155;color:#fff}
    pre{white-space:pre-wrap;background:#020617;border-radius:10px;padding:12px;font-size:12px;max-height:260px;overflow:auto}
    select,input{width:100%;padding:12px;border-radius:10px;border:1px solid #475569;background:#0f172a;color:#fff;margin:8px 0;font-size:14px}
    .small{color:#94a3b8;font-size:12px;line-height:1.45}
    .ok{color:#22c55e;font-weight:800}
    .warn{color:#facc15;font-weight:800}
  </style>
</head>
<body>
  <div class="box">
    <h1>🛟 Recuperar ventas locales</h1>
    <div class="small">
      Esta página busca ventas guardadas en el teléfono con <b>pos_sales_</b> y las puede volver a subir a Postgres.
      No borres caché antes de probar.
    </div>

    <label>Sesión</label>
    <input id="sid" value="XJIF9Y">

    <button class="blue" onclick="loadEverything()">1. Buscar ventas y manifiestos</button>

    <div id="summary" style="margin-top:12px"></div>

    <label>Manifiesto destino</label>
    <select id="manifest"></select>

    <button class="green" onclick="uploadToday()">2. Subir ventas de hoy al manifiesto seleccionado</button>
    <button class="gray" onclick="uploadAllMatching()">Subir TODAS las ventas locales que coincidan</button>

    <pre id="log">Listo para buscar...</pre>
  </div>

<script>
let localSales = [];
let manifests = [];

function log(msg){
  document.getElementById('log').textContent += "\\n" + msg;
}

function resetLog(msg){
  document.getElementById('log').textContent = msg;
}

function getLocalSales(){
  const keys = Object.keys(localStorage).filter(k => k.startsWith('pos_sales_'));
  const found = [];

  keys.forEach(k=>{
    try{
      const arr = JSON.parse(localStorage.getItem(k) || '[]');
      if(Array.isArray(arr)){
        arr.forEach(tx => found.push(Object.assign({}, tx, {_sourceKey:k})));
      }
    }catch(e){
      found.push({_badKey:k, _error:e.message});
    }
  });

  return {keys, found};
}

async function loadEverything(){
  resetLog("Buscando en este teléfono...");

  const sid = document.getElementById('sid').value.trim() || "XJIF9Y";

  const local = getLocalSales();
  localSales = local.found.filter(x => !x._badKey);

  log("Claves pos_sales_ encontradas: " + local.keys.length);
  local.keys.forEach(k => {
    try{
      const arr = JSON.parse(localStorage.getItem(k) || '[]');
      log(" - " + k + " = " + (Array.isArray(arr) ? arr.length : 0) + " ventas");
    }catch(e){
      log(" - " + k + " = error");
    }
  });

  log("Ventas locales totales encontradas: " + localSales.length);

  const r = await fetch('/api/manifests/' + encodeURIComponent(sid));
  manifests = await r.json();

  const sel = document.getElementById('manifest');
  sel.innerHTML = '';

  manifests.forEach(m=>{
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = (m.name || m.id) + " | " + ((m.items||[]).length) + " items";
    sel.appendChild(opt);
  });

  document.getElementById('summary').innerHTML =
    '<p class="ok">Ventas locales: ' + localSales.length + '</p>' +
    '<p class="warn">Manifiestos en sesión ' + sid + ': ' + manifests.length + '</p>';

  log("Manifiestos cargados: " + manifests.length);
}

function selectedManifest(){
  const id = document.getElementById('manifest').value;
  return manifests.find(m => m.id === id);
}

function manifestItemSet(m){
  const set = new Set();
  (m.items || []).forEach(i => {
    if(i.itemNum) set.add(String(i.itemNum).trim());
  });
  return set;
}

function cleanTx(tx, manifestId){
  const itemNum = String(tx.item_num || tx.itemNum || '').trim();
  const now = new Date().toISOString();
  const saleDateTime = tx.sale_datetime || tx.created_at || now;
  const saleDate = tx.sale_date || String(saleDateTime).slice(0,10);
  const saleTime = tx.sale_time || tx.time || new Date(saleDateTime).toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'});

  return {
    id: tx.id || (Math.random().toString(36).slice(2) + Date.now().toString(36)),
    item_num: itemNum,
    barcode: tx.barcode || '',
    description: tx.description || '',
    brand: tx.brand || '',
    price: Number(tx.price) || 0,
    pay_method: tx.pay_method || tx.payMethod || 'cash',
    sale_time: saleTime,
    sale_date: saleDate,
    sale_datetime: saleDateTime,
    manifest_id: manifestId,
    created_at: tx.created_at || saleDateTime
  };
}

async function uploadList(list){
  const sid = document.getElementById('sid').value.trim() || "XJIF9Y";
  const m = selectedManifest();

  if(!m){
    alert("No hay manifiesto seleccionado.");
    return;
  }

  if(list.length === 0){
    alert("No encontré ventas para subir.");
    return;
  }

  const ok = confirm("Voy a subir " + list.length + " ventas al manifiesto:\\n\\n" + (m.name || m.id) + "\\n\\n¿Continuar?");
  if(!ok) return;

  resetLog("Subiendo " + list.length + " ventas...");

  let uploaded = 0;
  for(const tx0 of list){
    const tx = cleanTx(tx0, m.id);

    const res = await fetch('/api/sale', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        id: tx.id,
        session_id: sid,
        manifest_id: m.id,
        item_num: tx.item_num,
        barcode: tx.barcode,
        description: tx.description,
        brand: tx.brand,
        price: tx.price,
        pay_method: tx.pay_method,
        sale_time: tx.sale_time,
        sale_date: tx.sale_date,
        sale_datetime: tx.sale_datetime
      })
    });

    if(!res.ok){
      log("Error subiendo item " + tx.item_num + ": HTTP " + res.status);
    }else{
      uploaded++;
    }
  }

  log("LISTO. Ventas subidas: " + uploaded);
  alert("Listo. Ventas subidas: " + uploaded);
}

function uploadToday(){
  const m = selectedManifest();
  if(!m){
    alert("Primero busca y selecciona un manifiesto.");
    return;
  }

  const set = manifestItemSet(m);
  const today = new Date().toISOString().slice(0,10);

  const list = localSales.filter(tx=>{
    const itemNum = String(tx.item_num || tx.itemNum || '').trim();
    const d = String(tx.sale_date || tx.sale_datetime || tx.created_at || '').slice(0,10);
    return set.has(itemNum) && d === today;
  });

  uploadList(list);
}

function uploadAllMatching(){
  const m = selectedManifest();
  if(!m){
    alert("Primero busca y selecciona un manifiesto.");
    return;
  }

  const set = manifestItemSet(m);

  const list = localSales.filter(tx=>{
    const itemNum = String(tx.item_num || tx.itemNum || '').trim();
    return set.has(itemNum);
  });

  uploadList(list);
}

window.addEventListener('load', ()=>{
  setTimeout(loadEverything, 500);
});
</script>
</body>
</html>`);
});



app.get('/api/debug/all-sales', async(req,res)=>{
  try{
    const key=req.query.key;
    const sid=req.query.sid || '';

    if(key !== 'lu-find-sales'){
      return res.status(403).json({error:'Forbidden'});
    }

    const r = await pool.query(
      `SELECT id, session_id, manifest_id, item_num, description, brand, price, pay_method, sale_time, created_at
       FROM pos_sales
       WHERE ($1 = '' OR session_id = $1)
       ORDER BY created_at DESC
       LIMIT 500`,
      [sid]
    );

    res.json(r.rows);
  }catch(e){
    res.status(500).json({error:e.message});
  }
});



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

app.get('/api/debug/all-manifests', async(req,res)=>{
  try{
    const key=req.query.key;

    if(key!=='lu-find-manifests'){
      return res.status(403).json({error:'Forbidden'});
    }

    const r=await pool.query(
      `SELECT session_id, id, name, jsonb_array_length(items) AS item_count, created_at
       FROM pos_manifests
       ORDER BY created_at DESC
       LIMIT 50`
    );

    res.json(r.rows);
  }catch(e){
    res.status(500).json({error:e.message});
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
