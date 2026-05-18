<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #8f2608; -webkit-text-stroke: #8f2608}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #55534e; -webkit-text-stroke: #55534e; min-height: 14.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #0d0d0d; -webkit-text-stroke: #0d0d0d}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #5700a6; -webkit-text-stroke: #5700a6}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #940011; -webkit-text-stroke: #940011}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #494f61; -webkit-text-stroke: #494f61}
    p.p7 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; color: #136002; -webkit-text-stroke: #136002}
    span.s1 {font-kerning: none; color: #5700a6; background-color: #ffffff; -webkit-text-stroke: 0px #5700a6}
    span.s2 {font-kerning: none; color: #0d0d0d; background-color: #ffffff; -webkit-text-stroke: 0px #0d0d0d}
    span.s3 {font-kerning: none; background-color: #ffffff}
    span.s4 {font-kerning: none; color: #0e0f13; background-color: #ffffff; -webkit-text-stroke: 0px #0e0f13}
    span.s5 {font-kerning: none; color: #136002; background-color: #ffffff; -webkit-text-stroke: 0px #136002}
    span.s6 {font-kerning: none}
    span.s7 {font-kerning: none; color: #8f2608; background-color: #ffffff; -webkit-text-stroke: 0px #8f2608}
    span.s8 {font-kerning: none; color: #940011; background-color: #ffffff; -webkit-text-stroke: 0px #940011}
    span.s9 {font-kerning: none; color: #125c5a; background-color: #ffffff; -webkit-text-stroke: 0px #125c5a}
    span.s10 {font: 12.0px 'Apple Color Emoji'; font-kerning: none; background-color: #ffffff}
    span.s11 {font: 12.0px 'Lucida Grande'; font-kerning: none; background-color: #ffffff}
    span.s12 {font: 12.0px Menlo; font-kerning: none; background-color: #ffffff}
    span.s13 {font: 12.0px 'Hiragino Sans'; font-kerning: none; background-color: #ffffff}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const</span><span class="s2"> </span><span class="s3">express</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> </span><span class="s3">require</span><span class="s2">(</span><span class="s5">'express'</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s1">const</span><span class="s3"> { Pool } </span><span class="s4">=</span><span class="s3"> </span><span class="s7">require</span><span class="s3">(</span><span class="s5">'pg'</span><span class="s3">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s1">const</span><span class="s2"> </span><span class="s3">cors</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> </span><span class="s3">require</span><span class="s2">(</span><span class="s5">'cors'</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s1">const</span><span class="s2"> </span><span class="s3">app</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> </span><span class="s3">express</span><span class="s2">();</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s3">app</span><span class="s2">.</span><span class="s8">use</span><span class="s2">(</span><span class="s3">cors</span><span class="s2">());</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s7">app</span><span class="s3">.</span><span class="s8">use</span><span class="s3">(</span><span class="s7">express</span><span class="s3">.</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">limit</span><span class="s3">: </span><span class="s5">'10mb'</span><span class="s3"> }));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p4"><span class="s3">const</span><span class="s2"> </span><span class="s7">pool</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> </span><span class="s3">new</span><span class="s2"> </span><span class="s7">Pool</span><span class="s2">({</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p5"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s3">connectionString</span><span class="s2">: </span><span class="s7">process</span><span class="s2">.</span><span class="s3">env</span><span class="s2">.</span><span class="s3">DATABASE_URL</span><span class="s2">,</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p5"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s3">ssl</span><span class="s2">: { </span><span class="s3">rejectUnauthorized</span><span class="s2">: false }</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3">});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p6"><span class="s3">// Auto-create tables on startup</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p5"><span class="s7">pool</span><span class="s2">.</span><span class="s3">query</span><span class="s2">(</span><span class="s5">`</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>CREATE TABLE IF NOT EXISTS pos_manifests (id TEXT PRIMARY KEY, session_id TEXT, name TEXT, items JSONB, created_at TIMESTAMPTZ DEFAULT NOW());</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>CREATE TABLE IF NOT EXISTS pos_received (session_id TEXT, manifest_id TEXT, item_num TEXT, qty INTEGER DEFAULT 0, PRIMARY KEY (session_id, manifest_id, item_num));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>CREATE TABLE IF NOT EXISTS pos_sales (id TEXT PRIMARY KEY, session_id TEXT, manifest_id TEXT, item_num TEXT, description TEXT, brand TEXT, price NUMERIC, pay_method TEXT, sale_time TEXT, created_at TIMESTAMPTZ DEFAULT NOW());</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p5"><span class="s5">`</span><span class="s2">).</span><span class="s3">then</span><span class="s2">(() </span><span class="s4">=&gt;</span><span class="s2"> </span><span class="s7">console</span><span class="s2">.</span><span class="s3">log</span><span class="s2">(</span><span class="s5">'DB ready'</span><span class="s2">)).</span><span class="s3">catch</span><span class="s2">(</span><span class="s7">console</span><span class="s2">.</span><span class="s3">error</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p6"><span class="s3">// Real-time SSE clients</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s1">const</span><span class="s2"> </span><span class="s3">clients</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> {};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s1">function</span><span class="s2"> </span><span class="s3">notify</span><span class="s2">(</span><span class="s3">sessionId</span><span class="s2">, </span><span class="s3">data</span><span class="s2">) {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">if</span><span class="s2"> (</span><span class="s4">!</span><span class="s3">clients</span><span class="s2">[</span><span class="s3">sessionId</span><span class="s2">]) </span><span class="s1">return</span><span class="s2">;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> </span><span class="s7">msg</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> </span><span class="s3">`data: ${JSON.stringify(data)}\n\n`</span><span class="s2">;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s7">clients</span><span class="s3">[</span><span class="s7">sessionId</span><span class="s3">].</span><span class="s8">forEach</span><span class="s3">(</span><span class="s7">res</span><span class="s3"> </span><span class="s4">=&gt;</span><span class="s3"> { </span><span class="s1">try</span><span class="s3"> { </span><span class="s7">res</span><span class="s3">.</span><span class="s8">write</span><span class="s3">(</span><span class="s7">msg</span><span class="s3">); } </span><span class="s1">catch</span><span class="s3"> {} });</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3">}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p6"><span class="s3">// ── API Routes ─────────────────────────────────────────────</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s7">app</span><span class="s2">.</span><span class="s8">post</span><span class="s2">(</span><span class="s3">'/api/manifest'</span><span class="s2">, </span><span class="s1">async</span><span class="s2"> (</span><span class="s7">req</span><span class="s2">, </span><span class="s7">res</span><span class="s2">) </span><span class="s4">=&gt;</span><span class="s2"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s1">try</span><span class="s3"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s3"> { id, session_id, name, items } </span><span class="s4">=</span><span class="s3"> </span><span class="s7">req</span><span class="s3">.</span><span class="s8">body</span><span class="s3">;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s1">await</span><span class="s3"> </span><span class="s7">pool</span><span class="s3">.</span><span class="s8">query</span><span class="s3">(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s3">'INSERT INTO pos_manifests (id, session_id, name, items) VALUES ($1,$2,$3,$4) ON CONFLICT (id) DO UPDATE SET name=$3, items=$4'</span><span class="s2">,</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>[</span><span class="s3">id</span><span class="s2">, </span><span class="s3">session_id</span><span class="s2">, </span><span class="s3">name</span><span class="s2">, </span><span class="s3">JSON</span><span class="s2">.</span><span class="s8">stringify</span><span class="s2">(</span><span class="s3">items</span><span class="s2">)]</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s7">res</span><span class="s3">.</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">ok</span><span class="s3">: true });</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span>} </span><span class="s1">catch</span><span class="s3">(</span><span class="s7">e</span><span class="s3">) { </span><span class="s7">res</span><span class="s3">.</span><span class="s8">status</span><span class="s3">(</span><span class="s9">500</span><span class="s3">).</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">error</span><span class="s3">: </span><span class="s7">e</span><span class="s3">.</span><span class="s8">message</span><span class="s3"> }); }</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3">});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s7">app</span><span class="s2">.</span><span class="s8">get</span><span class="s2">(</span><span class="s3">'/api/manifests/:sessionId'</span><span class="s2">, </span><span class="s1">async</span><span class="s2"> (</span><span class="s7">req</span><span class="s2">, </span><span class="s7">res</span><span class="s2">) </span><span class="s4">=&gt;</span><span class="s2"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s1">try</span><span class="s3"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s2"> </span><span class="s7">r</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> </span><span class="s1">await</span><span class="s2"> </span><span class="s7">pool</span><span class="s2">.</span><span class="s8">query</span><span class="s2">(</span><span class="s3">'SELECT * FROM pos_manifests WHERE session_id=$1 ORDER BY created_at DESC'</span><span class="s2">, [</span><span class="s7">req</span><span class="s2">.</span><span class="s8">params</span><span class="s2">.</span><span class="s8">sessionId</span><span class="s2">]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s7">res</span><span class="s3">.</span><span class="s8">json</span><span class="s3">(</span><span class="s7">r</span><span class="s3">.</span><span class="s8">rows</span><span class="s3">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span>} </span><span class="s1">catch</span><span class="s3">(</span><span class="s7">e</span><span class="s3">) { </span><span class="s7">res</span><span class="s3">.</span><span class="s8">status</span><span class="s3">(</span><span class="s9">500</span><span class="s3">).</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">error</span><span class="s3">: </span><span class="s7">e</span><span class="s3">.</span><span class="s8">message</span><span class="s3"> }); }</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3">});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s7">app</span><span class="s2">.</span><span class="s8">get</span><span class="s2">(</span><span class="s3">'/api/data/:sessionId/:manifestId'</span><span class="s2">, </span><span class="s1">async</span><span class="s2"> (</span><span class="s7">req</span><span class="s2">, </span><span class="s7">res</span><span class="s2">) </span><span class="s4">=&gt;</span><span class="s2"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s1">try</span><span class="s3"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s3"> { sessionId, manifestId } </span><span class="s4">=</span><span class="s3"> </span><span class="s7">req</span><span class="s3">.</span><span class="s8">params</span><span class="s3">;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s3"> [</span><span class="s7">rcv</span><span class="s3">, </span><span class="s7">sales</span><span class="s3">] </span><span class="s4">=</span><span class="s3"> </span><span class="s1">await</span><span class="s3"> </span><span class="s7">Promise</span><span class="s3">.</span><span class="s8">all</span><span class="s3">([</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s7">pool</span><span class="s2">.</span><span class="s8">query</span><span class="s2">(</span><span class="s3">'SELECT * FROM pos_received WHERE session_id=$1 AND manifest_id=$2'</span><span class="s2">, [</span><span class="s7">sessionId</span><span class="s2">, </span><span class="s7">manifestId</span><span class="s2">]),</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s7">pool</span><span class="s2">.</span><span class="s8">query</span><span class="s2">(</span><span class="s3">'SELECT * FROM pos_sales WHERE session_id=$1 AND manifest_id=$2 ORDER BY created_at DESC'</span><span class="s2">, [</span><span class="s7">sessionId</span><span class="s2">, </span><span class="s7">manifestId</span><span class="s2">]),</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span>]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p5"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s7">res</span><span class="s2">.</span><span class="s3">json</span><span class="s2">({ </span><span class="s3">received</span><span class="s2">: </span><span class="s7">rcv</span><span class="s2">.</span><span class="s3">rows</span><span class="s2">, </span><span class="s3">sales</span><span class="s2">: </span><span class="s7">sales</span><span class="s2">.</span><span class="s3">rows</span><span class="s2"> });</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span>} </span><span class="s1">catch</span><span class="s3">(</span><span class="s7">e</span><span class="s3">) { </span><span class="s7">res</span><span class="s3">.</span><span class="s8">status</span><span class="s3">(</span><span class="s9">500</span><span class="s3">).</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">error</span><span class="s3">: </span><span class="s7">e</span><span class="s3">.</span><span class="s8">message</span><span class="s3"> }); }</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3">});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s7">app</span><span class="s2">.</span><span class="s8">post</span><span class="s2">(</span><span class="s3">'/api/receive'</span><span class="s2">, </span><span class="s1">async</span><span class="s2"> (</span><span class="s7">req</span><span class="s2">, </span><span class="s7">res</span><span class="s2">) </span><span class="s4">=&gt;</span><span class="s2"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s1">try</span><span class="s3"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s3"> { session_id, manifest_id, item_num, qty } </span><span class="s4">=</span><span class="s3"> </span><span class="s7">req</span><span class="s3">.</span><span class="s8">body</span><span class="s3">;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s1">await</span><span class="s3"> </span><span class="s7">pool</span><span class="s3">.</span><span class="s8">query</span><span class="s3">(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s3">'INSERT INTO pos_received (session_id, manifest_id, item_num, qty) VALUES ($1,$2,$3,$4) ON CONFLICT (session_id, manifest_id, item_num) DO UPDATE SET qty=$4'</span><span class="s2">,</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>[</span><span class="s3">session_id</span><span class="s2">, </span><span class="s3">manifest_id</span><span class="s2">, </span><span class="s3">item_num</span><span class="s2">, </span><span class="s3">qty</span><span class="s2">]</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s7">notify</span><span class="s3">(</span><span class="s7">session_id</span><span class="s3">, { </span><span class="s8">type</span><span class="s3">: </span><span class="s5">'receive'</span><span class="s3">, manifest_id, item_num, qty });</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s7">res</span><span class="s3">.</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">ok</span><span class="s3">: true });</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span>} </span><span class="s1">catch</span><span class="s3">(</span><span class="s7">e</span><span class="s3">) { </span><span class="s7">res</span><span class="s3">.</span><span class="s8">status</span><span class="s3">(</span><span class="s9">500</span><span class="s3">).</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">error</span><span class="s3">: </span><span class="s7">e</span><span class="s3">.</span><span class="s8">message</span><span class="s3"> }); }</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3">});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s7">app</span><span class="s3">.</span><span class="s8">post</span><span class="s3">(</span><span class="s5">'/api/sale'</span><span class="s3">, </span><span class="s1">async</span><span class="s3"> (</span><span class="s7">req</span><span class="s3">, </span><span class="s7">res</span><span class="s3">) </span><span class="s4">=&gt;</span><span class="s3"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s1">try</span><span class="s3"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s1">const</span><span class="s3"> { id, session_id, manifest_id, item_num, description, brand, price, pay_method, sale_time } </span><span class="s4">=</span><span class="s3"> </span><span class="s7">req</span><span class="s3">.</span><span class="s8">body</span><span class="s3">;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s1">await</span><span class="s3"> </span><span class="s7">pool</span><span class="s3">.</span><span class="s8">query</span><span class="s3">(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">      </span></span><span class="s3">'INSERT INTO pos_sales (id, session_id, manifest_id, item_num, description, brand, price, pay_method, sale_time) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)'</span><span class="s2">,</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">      </span>[</span><span class="s3">id</span><span class="s2">, </span><span class="s3">session_id</span><span class="s2">, </span><span class="s3">manifest_id</span><span class="s2">, </span><span class="s3">item_num</span><span class="s2">, </span><span class="s3">description</span><span class="s2">, </span><span class="s3">brand</span><span class="s2">, </span><span class="s3">price</span><span class="s2">, </span><span class="s3">pay_method</span><span class="s2">, </span><span class="s3">sale_time</span><span class="s2">]</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s7">notify</span><span class="s3">(</span><span class="s7">session_id</span><span class="s3">, { </span><span class="s8">type</span><span class="s3">: </span><span class="s5">'sale'</span><span class="s3">, id, manifest_id, item_num, description, brand, </span><span class="s8">price</span><span class="s3">: </span><span class="s7">Number</span><span class="s3">(</span><span class="s7">price</span><span class="s3">), pay_method, sale_time });</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s7">res</span><span class="s3">.</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">ok</span><span class="s3">: true });</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span>} </span><span class="s1">catch</span><span class="s3">(</span><span class="s7">e</span><span class="s3">) { </span><span class="s7">res</span><span class="s3">.</span><span class="s8">status</span><span class="s3">(</span><span class="s9">500</span><span class="s3">).</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">error</span><span class="s3">: </span><span class="s7">e</span><span class="s3">.</span><span class="s8">message</span><span class="s3"> }); }</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3">});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s7">app</span><span class="s2">.</span><span class="s8">get</span><span class="s2">(</span><span class="s3">'/api/events/:sessionId'</span><span class="s2">, (</span><span class="s7">req</span><span class="s2">, </span><span class="s7">res</span><span class="s2">) </span><span class="s4">=&gt;</span><span class="s2"> {</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s3"> { sessionId } </span><span class="s4">=</span><span class="s3"> </span><span class="s7">req</span><span class="s3">.</span><span class="s8">params</span><span class="s3">;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s7">res</span><span class="s2">.</span><span class="s8">setHeader</span><span class="s2">(</span><span class="s3">'Content-Type'</span><span class="s2">, </span><span class="s3">'text/event-stream'</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s7">res</span><span class="s2">.</span><span class="s8">setHeader</span><span class="s2">(</span><span class="s3">'Cache-Control'</span><span class="s2">, </span><span class="s3">'no-cache'</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s7">res</span><span class="s2">.</span><span class="s8">setHeader</span><span class="s2">(</span><span class="s3">'Connection'</span><span class="s2">, </span><span class="s3">'keep-alive'</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s7">res</span><span class="s2">.</span><span class="s8">setHeader</span><span class="s2">(</span><span class="s3">'X-Accel-Buffering'</span><span class="s2">, </span><span class="s3">'no'</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">if</span><span class="s2"> (</span><span class="s4">!</span><span class="s3">clients</span><span class="s2">[</span><span class="s3">sessionId</span><span class="s2">]) </span><span class="s3">clients</span><span class="s2">[</span><span class="s3">sessionId</span><span class="s2">] </span><span class="s4">=</span><span class="s2"> </span><span class="s1">new</span><span class="s2"> </span><span class="s3">Set</span><span class="s2">();</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s3">clients</span><span class="s2">[</span><span class="s3">sessionId</span><span class="s2">].</span><span class="s8">add</span><span class="s2">(</span><span class="s3">res</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s7">res</span><span class="s2">.</span><span class="s8">write</span><span class="s2">(</span><span class="s3">'data: {"type":"connected"}\n\n'</span><span class="s2">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s3"> </span><span class="s7">ping</span><span class="s3"> </span><span class="s4">=</span><span class="s3"> </span><span class="s7">setInterval</span><span class="s3">(() </span><span class="s4">=&gt;</span><span class="s3"> { </span><span class="s1">try</span><span class="s3"> { </span><span class="s7">res</span><span class="s3">.</span><span class="s8">write</span><span class="s3">(</span><span class="s5">': ping\n\n'</span><span class="s3">); } </span><span class="s1">catch</span><span class="s3"> {} }, </span><span class="s9">25000</span><span class="s3">);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s3">req</span><span class="s2">.</span><span class="s8">on</span><span class="s2">(</span><span class="s5">'close'</span><span class="s2">, () </span><span class="s4">=&gt;</span><span class="s2"> { </span><span class="s3">clearInterval</span><span class="s2">(</span><span class="s3">ping</span><span class="s2">); </span><span class="s3">clients</span><span class="s2">[</span><span class="s3">sessionId</span><span class="s2">]?.</span><span class="s8">delete</span><span class="s2">(</span><span class="s3">res</span><span class="s2">); });</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3">});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p6"><span class="s3">// Health check</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s7">app</span><span class="s3">.</span><span class="s8">get</span><span class="s3">(</span><span class="s5">'/health'</span><span class="s3">, (</span><span class="s7">_</span><span class="s3">, </span><span class="s7">res</span><span class="s3">) </span><span class="s4">=&gt;</span><span class="s3"> </span><span class="s7">res</span><span class="s3">.</span><span class="s8">json</span><span class="s3">({ </span><span class="s8">ok</span><span class="s3">: true }));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p6"><span class="s3">// ── Serve Frontend ─────────────────────────────────────────</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s7">app</span><span class="s3">.</span><span class="s8">get</span><span class="s3">(</span><span class="s5">'*'</span><span class="s3">, (</span><span class="s7">_</span><span class="s3">, </span><span class="s7">res</span><span class="s3">) </span><span class="s4">=&gt;</span><span class="s3"> </span><span class="s7">res</span><span class="s3">.</span><span class="s8">send</span><span class="s3">(</span><span class="s7">HTML</span><span class="s3">));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p1"><span class="s1">const</span><span class="s2"> </span><span class="s3">PORT</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> </span><span class="s3">process</span><span class="s2">.</span><span class="s8">env</span><span class="s2">.</span><span class="s8">PORT</span><span class="s2"> </span><span class="s4">||</span><span class="s2"> </span><span class="s9">3000</span><span class="s2">;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s7">app</span><span class="s2">.</span><span class="s8">listen</span><span class="s2">(</span><span class="s7">PORT</span><span class="s2">, () </span><span class="s4">=&gt;</span><span class="s2"> </span><span class="s7">console</span><span class="s2">.</span><span class="s8">log</span><span class="s2">(</span><span class="s3">`Inventory POS running on port ${PORT}`</span><span class="s2">));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p6"><span class="s3">// ── Frontend HTML ──────────────────────────────────────────</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s1">const</span><span class="s2"> </span><span class="s7">HTML</span><span class="s2"> </span><span class="s4">=</span><span class="s2"> </span><span class="s3">`&lt;!DOCTYPE html&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;html lang="es"&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;head&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;meta charset="UTF-8"/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;meta name="mobile-web-app-capable" content="yes"/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;meta name="apple-mobile-web-app-capable" content="yes"/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;title&gt;Inventory + POS&lt;/title&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"&gt;&lt;/script&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"&gt;&lt;/script&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js"&gt;&lt;/script&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"&gt;&lt;/script&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;style&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">body{background:#080c10;font-family:'DM Mono','Courier New',monospace;overscroll-behavior:none;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">::-webkit-scrollbar{width:4px;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">::-webkit-scrollbar-thumb{background:#1a2840;border-radius:2px;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;/style&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;/head&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;body&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;div id="root"&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;script type="text/babel"&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">const {useState,useRef,useEffect,useCallback,useMemo}=React;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">const C={bg:"#080c10",panel:"#0e1520",card:"#131c28",border:"#1a2840",accent:"#00d4ff",green:"#00e676",yellow:"#ffd600",red:"#ff3d57",orange:"#ff9100",purple:"#c07aff",cash:"#00e676",cardC:"#00d4ff",whatnot:"#ff6ec7",text:"#e8f4fd",muted:"#3d5a78",dim:"#1e2d3d"};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">const PAY=[{id:"cash",label:"</span><span class="s10">💵</span><span class="s3"> Cash",emoji:"</span><span class="s10">💵</span><span class="s3">",color:C.cash},{id:"card",label:"</span><span class="s10">💳</span><span class="s3"> Tarjeta",emoji:"</span><span class="s10">💳</span><span class="s3">",color:C.cardC},{id:"whatnot",label:"</span><span class="s10">📦</span><span class="s3"> Whatnot",emoji:"</span><span class="s10">📦</span><span class="s3">",color:C.whatnot}];</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">const fmt=n=&gt;('$'+Number(n).toFixed(2));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">const genId=()=&gt;Math.random().toString(36).substr(2,9);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">const genCode=()=&gt;Math.random().toString(36).substr(2,6).toUpperCase();</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">const LS={get:(k,d)=&gt;{try{const v=localStorage.getItem(k);return v!=null?JSON.parse(v):d;}catch{return d;}},set:(k,v)=&gt;{try{localStorage.setItem(k,JSON.stringify(v));}catch{}}};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">const api={</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>post:(path,body)=&gt;fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=&gt;r.json()),</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>get:(path)=&gt;fetch(path).then(r=&gt;r.json()),</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">function SetupScreen({onSave}){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [code,setCode]=useState(LS.get('pos_session','')||genCode());</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const save=()=&gt;{if(!code.trim())return;const c=code.trim().toUpperCase();LS.set('pos_session',c);onSave(c);};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const inp={width:'100%',background:C.card,border:'2px solid '+C.accent,borderRadius:10,padding:14,fontSize:28,fontFamily:'monospace',color:C.text,textAlign:'center',outline:'none',boxSizing:'border-box',letterSpacing:6,fontWeight:700,marginBottom:14};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>return(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;div style={{minHeight:'100vh',background:C.bg,display:'flex',alignItems:'center',justifyContent:'center',padding:24,color:C.text}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{maxWidth:380,width:'100%',textAlign:'center'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{fontSize:60,marginBottom:12}}&gt;</span><span class="s10">📦</span><span class="s3">&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;h1 style={{color:C.accent,fontSize:20,fontWeight:700,letterSpacing:3,textTransform:'uppercase',marginBottom:4}}&gt;Inventory + POS&lt;/h1&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;p style={{color:C.muted,fontSize:11,letterSpacing:2,marginBottom:32,textTransform:'uppercase'}}&gt;Recepción · Inventario · Ventas&lt;/p&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{background:C.panel,borderRadius:14,padding:24,border:'1px solid '+C.border}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.muted,fontSize:10,letterSpacing:2,textTransform:'uppercase',marginBottom:8}}&gt;Código de Sesión&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;p style={{color:C.text,fontSize:13,marginBottom:16,lineHeight:1.6}}&gt;Este código conecta todos tus dispositivos. Usa el &lt;strong style={{color:C.yellow}}&gt;mismo código&lt;/strong&gt; en cada teléfono o tablet.&lt;/p&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;input value={code} onChange={e=&gt;setCode(e.target.value.toUpperCase())} style={inp} maxLength={8} placeholder="ABC123"/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{display:'flex',gap:10,marginBottom:16}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;button onClick={()=&gt;setCode(genCode())} style={{flex:1,background:C.dim,border:'none',borderRadius:10,padding:12,color:C.text,fontWeight:700,cursor:'pointer',fontSize:13}}&gt;</span><span class="s10">🎲</span><span class="s3"> Nuevo&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;button onClick={save} style={{flex:2,background:C.green,border:'none',borderRadius:10,padding:12,color:C.bg,fontWeight:700,cursor:'pointer',fontSize:14,letterSpacing:1}}&gt;</span><span class="s11">✓</span><span class="s3"> Entrar&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;p style={{color:C.muted,fontSize:11}}&gt;Si ya tienes un código activo, escríbelo arriba y toca Entrar&lt;/p&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">function HomeScreen({manifests,sessionId,onSelect,onNewFile,onSettings}){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const fileRef=useRef();</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const totalSales=manifests.reduce((s,m)=&gt;{const sl=LS.get('pos_sales_'+m.id,[]);return s+sl.reduce((a,t)=&gt;a+Number(t.price),0);},0);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>return(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;div style={{minHeight:'100vh',background:C.bg,color:C.text,display:'flex',flexDirection:'column'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{background:C.panel,padding:'14px 16px',borderBottom:'1px solid '+C.border}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;h1 style={{color:C.accent,fontSize:16,fontWeight:700,letterSpacing:2,textTransform:'uppercase'}}&gt;</span><span class="s10">📦</span><span class="s3"> Inventory POS&lt;/h1&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.green,fontSize:11,marginTop:2}}&gt;</span><span class="s10">🔗</span><span class="s3"> Sesión: &lt;strong&gt;{sessionId}&lt;/strong&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;button onClick={onSettings} style={{background:C.card,border:'1px solid '+C.border,borderRadius:8,padding:'8px 12px',color:C.muted,fontSize:16,cursor:'pointer'}}&gt;</span><span class="s12">⚙</span><span class="s3">&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{background:C.card,borderRadius:8,padding:'10px 12px',border:'1px solid '+C.border}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.accent,fontSize:20,fontWeight:700}}&gt;{manifests.length}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.muted,fontSize:9,letterSpacing:1,textTransform:'uppercase'}}&gt;Manifiestos&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{background:C.card,borderRadius:8,padding:'10px 12px',border:'1px solid '+C.border}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.green,fontSize:20,fontWeight:700}}&gt;{fmt(totalSales)}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.muted,fontSize:9,letterSpacing:1,textTransform:'uppercase'}}&gt;Ventas Totales&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{padding:'12px 12px 0'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;input ref={fileRef} type="file" accept=".csv" style={{display:'none'}} onChange={onNewFile}/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;button onClick={()=&gt;fileRef.current&amp;&amp;fileRef.current.click()} style={{width:'100%',background:C.accent,color:C.bg,border:'none',borderRadius:12,padding:'16px',fontWeight:700,fontSize:14,cursor:'pointer',letterSpacing:2,textTransform:'uppercase'}}&gt;+ Subir Nuevo Manifiesto CSV&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{flex:1,overflow:'auto',padding:'12px 12px 24px'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{manifests.length===0?(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{textAlign:'center',padding:'40px 20px',color:C.muted}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{fontSize:40,marginBottom:12}}&gt;</span><span class="s10">📄</span><span class="s3">&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{fontSize:13}}&gt;No hay manifiestos aún&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{fontSize:11,marginTop:6}}&gt;Sube tu primer CSV para comenzar&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>):(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>manifests.map(m=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>const sl=LS.get('pos_sales_'+m.id,[]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>const rcv=LS.get('pos_rcv_'+m.id,{});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>const tr=Object.values(rcv).reduce((s,v)=&gt;s+v,0);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>const ts=sl.reduce((s,t)=&gt;s+Number(t.price),0);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>return(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;div key={m.id} onClick={()=&gt;onSelect(m.id)} style={{background:C.card,borderRadius:12,padding:'14px 16px',marginBottom:8,border:'1px solid '+C.border,cursor:'pointer'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;div style={{flex:1,minWidth:0}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                    </span>&lt;div style={{fontWeight:700,fontSize:13,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}&gt;{m.name}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                    </span>&lt;div style={{color:C.muted,fontSize:10,marginTop:2}}&gt;{m.uploadedAt} · {m.items?m.items.length:0} SKUs&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;div style={{color:C.accent,fontSize:18,flexShrink:0,marginLeft:8}}&gt;›&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                  </span>{[{l:'Recibidas',v:tr,c:C.green},{l:'Vendidas',v:sl.length,c:C.yellow},{l:'Ventas',v:fmt(ts),c:C.green}].map(s=&gt;(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                    </span>&lt;div key={s.l} style={{background:C.panel,borderRadius:7,padding:'6px 8px',textAlign:'center'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                      </span>&lt;div style={{color:s.c,fontSize:13,fontWeight:700}}&gt;{s.v}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                      </span>&lt;div style={{color:C.muted,fontSize:9,textTransform:'uppercase'}}&gt;{s.l}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                  </span>))}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>})</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>)}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">function App(){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [sessionId,setSessionId]=useState(()=&gt;LS.get('pos_session',null));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [manifests,setManifests]=useState([]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [upcMap,setUpcMap]=useState(()=&gt;LS.get('pos_upc_map',{}));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [activeId,setActiveId]=useState(null);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [appMode,setAppMode]=useState('receiving');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [page,setPage]=useState('home');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [received,setReceived]=useState({});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [salesLog,setSalesLog]=useState([]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [lastResult,setLastResult]=useState(null);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [flash,setFlash]=useState(null);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [manualInput,setManualInput]=useState('');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [scanMode,setScanMode]=useState('item');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [cameraActive,setCameraActive]=useState(false);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [camError,setCamError]=useState('');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [upcPending,setUpcPending]=useState(null);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [upcInput,setUpcInput]=useState('');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [pendingSale,setPendingSale]=useState(null);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [salePrice,setSalePrice]=useState('');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [hasBD]=useState(()=&gt;'BarcodeDetector' in window);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [syncDot,setSyncDot]=useState('');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const [loading,setLoading]=useState(false);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const videoRef=useRef(null),streamRef=useRef(null),detRef=useRef(null);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const scanningRef=useRef(false),lastCodeRef=useRef(null),lastTimeRef=useRef(0);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const manualRef=useRef(null),upcRef=useRef(null),priceRef=useRef(null),evsRef=useRef(null);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const activeManifest=useMemo(()=&gt;manifests.find(m=&gt;m.id===activeId),[manifests,activeId]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const mMap=useMemo(()=&gt;{const map={};activeManifest&amp;&amp;activeManifest.items&amp;&amp;activeManifest.items.forEach(i=&gt;map[i.itemNum]=i);return map;},[activeManifest]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const stock=useMemo(()=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const s={};if(!activeManifest||!activeManifest.items)return s;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>activeManifest.items.forEach(i=&gt;{s[i.itemNum]=received[i.itemNum]||0;});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>salesLog.forEach(t=&gt;{const k=t.item_num||t.itemNum;if(s[k]!==undefined)s[k]=Math.max(0,s[k]-1);});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>return s;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>},[activeManifest,received,salesLog]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>// Load manifests from server</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const loadManifests=useCallback(async(sid)=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>try{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const data=await api.get('/api/manifests/'+sid);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>if(Array.isArray(data)){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>setManifests(data.map(m=&gt;({...m,items:m.items||[]})));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}catch(e){console.error(e);}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>},[]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>useEffect(()=&gt;{if(sessionId)loadManifests(sessionId);},[sessionId]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>// Load manifest data</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const loadData=useCallback(async(mId)=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(!mId||!sessionId)return;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setLoading(true);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>try{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const d=await api.get('/api/data/'+sessionId+'/'+mId);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const rm={};(d.received||[]).forEach(r=&gt;{rm[r.item_num]=r.qty;});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>setReceived(rm);setSalesLog(d.sales||[]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>LS.set('pos_rcv_'+mId,rm);LS.set('pos_sales_'+mId,d.sales||[]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}catch{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>setReceived(LS.get('pos_rcv_'+mId,{}));setSalesLog(LS.get('pos_sales_'+mId,[]));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setLoading(false);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>},[sessionId]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>// SSE subscription</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>useEffect(()=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(!activeId||!sessionId)return;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setReceived({});setSalesLog([]);setLastResult(null);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>loadData(activeId);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(evsRef.current){evsRef.current.close();}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const evs=new EventSource('/api/events/'+sessionId);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>evsRef.current=evs;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>evs.onmessage=e=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>try{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>const d=JSON.parse(e.data);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>if(d.type==='receive'&amp;&amp;d.manifest_id===activeId){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>setReceived(prev=&gt;({...prev,[d.item_num]:d.qty}));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>setSyncDot('ok');setTimeout(()=&gt;setSyncDot(''),1500);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>if(d.type==='sale'&amp;&amp;d.manifest_id===activeId){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>setSalesLog(prev=&gt;[d,...prev]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>setSyncDot('ok');setTimeout(()=&gt;setSyncDot(''),1500);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>}catch{}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>return()=&gt;{evs.close();};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>},[activeId,sessionId]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>useEffect(()=&gt;{LS.set('pos_upc_map',upcMap);},[upcMap]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const onFile=e=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const file=e.target.files[0];if(!file)return;e.target.value='';</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>Papa.parse(file,{header:true,skipEmptyLines:true,complete:({data})=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const items=data.map(r=&gt;({</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>itemNum:r['Item #']&amp;&amp;r['Item #'].trim(),</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>description:(r['Item Description']&amp;&amp;r['Item Description'].trim())||'—',</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>qty:parseInt(r['Qty'])||0,</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>unitRetail:parseFloat(r['Unit Retail'])||0,</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>brand:(r['Brand']&amp;&amp;r['Brand'].trim())||(r['Vendor']&amp;&amp;r['Vendor'].trim())||'—',</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>})).filter(i=&gt;i.itemNum);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const nm={id:genId(),session_id:sessionId,name:file.name.replace('.csv','').replace(/_/g,' ').substring(0,45),uploadedAt:new Date().toLocaleDateString('en-US'),items};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>api.post('/api/manifest',nm).catch(console.error);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>setManifests(p=&gt;[nm,...p]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>setActiveId(nm.id);setAppMode('receiving');setPage('recv');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>useEffect(()=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if((page==='recv'||page==='pos')&amp;&amp;hasBD&amp;&amp;!detRef.current){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>try{detRef.current=new window.BarcodeDetector({formats:['ean_13','upc_a','upc_e','code_128','code_39','qr_code']});}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>catch{try{detRef.current=new window.BarcodeDetector();}catch{}}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>},[page,hasBD]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const startCam=async()=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setCamError('');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>try{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment',width:{ideal:1920}}});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>streamRef.current=s;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>if(videoRef.current){videoRef.current.srcObject=s;await videoRef.current.play();}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>setCameraActive(true);scanningRef.current=true;camLoop();</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}catch(e){setCamError('Sin acceso a cámara: '+e.message);}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const stopCam=()=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>scanningRef.current=false;streamRef.current&amp;&amp;streamRef.current.getTracks().forEach(t=&gt;t.stop());</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>streamRef.current=null;setCameraActive(false);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const camLoop=async()=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(!scanningRef.current||!detRef.current||!videoRef.current)return;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(videoRef.current.readyState&gt;=2){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>try{const codes=await detRef.current.detect(videoRef.current);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>if(codes.length&gt;0){onScan(codes[0].rawValue);await new Promise(r=&gt;setTimeout(r,1400));}}catch{}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(scanningRef.current)requestAnimationFrame(camLoop);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>useEffect(()=&gt;()=&gt;stopCam(),[]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const pulse=type=&gt;{setFlash(type);setTimeout(()=&gt;setFlash(null),350);if(navigator.vibrate)navigator.vibrate(type==='ok'?[70]:[70,40,70]);};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const processCode=useCallback(async itemNum=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>itemNum=itemNum.toString().trim();</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(appMode==='receiving'){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const item=mMap[itemNum];</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>if(!item){setLastResult({itemNum,status:'miss'});pulse('miss');return;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const newQty=(received[itemNum]||0)+1;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const newRcv=Object.assign({},received,{[itemNum]:newQty});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>setReceived(newRcv);setLastResult(Object.assign({},item,{status:'found'}));pulse('ok');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>LS.set('pos_rcv_'+activeId,newRcv);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>api.post('/api/receive',{session_id:sessionId,manifest_id:activeId,item_num:itemNum,qty:newQty}).then(()=&gt;{setSyncDot('ok');setTimeout(()=&gt;setSyncDot(''),1500);}).catch(()=&gt;setSyncDot('err'));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}else{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>const item=mMap[itemNum];</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>if(!item){setLastResult({itemNum,status:'miss'});pulse('miss');return;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>if((stock[itemNum]||0)&lt;=0){setLastResult(Object.assign({},item,{status:'nostock'}));pulse('miss');return;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>setPendingSale({item});setSalePrice(item.unitRetail.toFixed(2));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>setTimeout(()=&gt;priceRef.current&amp;&amp;priceRef.current.select(),150);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>},[appMode,mMap,received,stock,activeId,sessionId]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const onScan=useCallback(raw=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>raw=raw.toString().trim();const now=Date.now();</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(raw===lastCodeRef.current&amp;&amp;now-lastTimeRef.current&lt;2000)return;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>lastCodeRef.current=raw;lastTimeRef.current=now;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(upcMap[raw])processCode(upcMap[raw]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>else{setUpcPending(raw);stopCam();setTimeout(()=&gt;upcRef.current&amp;&amp;upcRef.current.focus(),100);}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>},[upcMap,processCode]);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const confirmUpc=()=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const n=upcInput.trim();if(!n||!upcPending)return;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setUpcMap(p=&gt;Object.assign({},p,{[upcPending]:n}));processCode(n);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setUpcPending(null);setUpcInput('');setTimeout(startCam,300);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const onManual=e=&gt;{e&amp;&amp;e.preventDefault();if(!manualInput.trim())return;processCode(manualInput.trim());setManualInput('');manualRef.current&amp;&amp;manualRef.current.focus();};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const confirmSale=async payMethod=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>if(!pendingSale)return;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const{item}=pendingSale;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const price=parseFloat(salePrice)||0;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const time=new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const id=genId();</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const tx={id,item_num:item.itemNum,itemNum:item.itemNum,description:item.description,brand:item.brand,price,pay_method:payMethod,payMethod,sale_time:time,time,manifest_id:activeId};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const newSales=[tx,...salesLog];</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setSalesLog(newSales);setLastResult(Object.assign({},item,{status:'sold',price,payMethod}));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setPendingSale(null);setSalePrice('');pulse('ok');</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>LS.set('pos_sales_'+activeId,newSales);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>api.post('/api/sale',{id,session_id:sessionId,manifest_id:activeId,item_num:item.itemNum,description:item.description,brand:item.brand,price,pay_method:payMethod,sale_time:time}).then(()=&gt;{setSyncDot('ok');setTimeout(()=&gt;setSyncDot(''),1500);}).catch(()=&gt;setSyncDot('err'));</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>setTimeout(()=&gt;manualRef.current&amp;&amp;manualRef.current.focus(),100);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const totalExp=activeManifest&amp;&amp;activeManifest.items?activeManifest.items.reduce((s,i)=&gt;s+i.qty,0):0;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const totalRcv=Object.values(received).reduce((s,v)=&gt;s+v,0);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const pct=totalExp&gt;0?Math.round(totalRcv/totalExp*100):0;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const salesByPay={cash:0,card:0,whatnot:0};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const cntByPay={cash:0,card:0,whatnot:0};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>salesLog.forEach(t=&gt;{const pm=t.pay_method||t.payMethod;if(salesByPay[pm]!==undefined){salesByPay[pm]+=Number(t.price);cntByPay[pm]+=1;}});</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const totalSales=salesLog.reduce((s,t)=&gt;s+Number(t.price),0);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const totalStockLeft=Object.values(stock).reduce((s,v)=&gt;s+v,0);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const goHome=()=&gt;{stopCam();if(evsRef.current)evsRef.current.close();setPage('home');setActiveId(null);loadManifests(sessionId);};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const goPos=()=&gt;{setAppMode('pos');setPage('pos');setLastResult(null);setTimeout(()=&gt;manualRef.current&amp;&amp;manualRef.current.focus(),200);};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const goRecv=()=&gt;{stopCam();setAppMode('receiving');setPage('recv');setLastResult(null);};</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>if(!sessionId)return &lt;SetupScreen onSave={sid=&gt;{setSessionId(sid);loadManifests(sid);}}/&gt;;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>if(page==='settings'){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>return(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{minHeight:'100vh',background:C.bg,color:C.text,padding:20}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{display:'flex',alignItems:'center',gap:12,marginBottom:24}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;button onClick={()=&gt;setPage('home')} style={{background:'none',border:'none',color:C.accent,cursor:'pointer',fontSize:22,padding:0}}&gt;</span><span class="s11">←</span><span class="s3">&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;span style={{fontWeight:700,letterSpacing:2,textTransform:'uppercase',fontSize:13}}&gt;Configuración&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{background:C.panel,borderRadius:12,padding:20,border:'1px solid '+C.border,marginBottom:16}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.muted,fontSize:10,letterSpacing:2,textTransform:'uppercase',marginBottom:8}}&gt;Código de Sesión Actual&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.green,fontSize:32,fontWeight:700,letterSpacing:6,textAlign:'center',padding:'16px 0'}}&gt;{sessionId}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.muted,fontSize:12,textAlign:'center'}}&gt;Comparte este código para sync multi-dispositivo&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;button onClick={()=&gt;{LS.set('pos_session',null);setSessionId(null);}} style={{width:'100%',background:'#1a0505',border:'1px solid '+C.red,borderRadius:10,padding:14,color:C.red,fontWeight:700,cursor:'pointer',fontSize:13,letterSpacing:1,textTransform:'uppercase'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>Cambiar Código de Sesión</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>if(page==='home')return &lt;HomeScreen manifests={manifests} sessionId={sessionId} onSelect={id=&gt;{setActiveId(id);setAppMode('receiving');setPage('recv');}} onNewFile={onFile} onSettings={()=&gt;setPage('settings')}/&gt;;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const UpcDialog=upcPending&amp;&amp;(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.88)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200,padding:20}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{background:C.panel,borderRadius:16,padding:24,maxWidth:360,width:'100%',border:'1px solid '+C.yellow}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{color:C.yellow,fontWeight:700,fontSize:13,letterSpacing:1,textTransform:'uppercase',marginBottom:8}}&gt;</span><span class="s10">⚡</span><span class="s3"> Nuevo Barcode&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{color:C.muted,fontSize:11,marginBottom:4}}&gt;UPC escaneado:&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{color:C.accent,fontFamily:'monospace',fontSize:15,marginBottom:14,background:C.card,padding:'8px 12px',borderRadius:8}}&gt;{upcPending}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{color:C.text,fontSize:13,marginBottom:12,lineHeight:1.6}}&gt;Escribe el &lt;strong style={{color:C.yellow}}&gt;Item #&lt;/strong&gt; encima del barcode:&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;input ref={upcRef} type="tel" value={upcInput} onChange={e=&gt;setUpcInput(e.target.value)} onKeyDown={e=&gt;e.key==='Enter'&amp;&amp;confirmUpc()}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>style={{width:'100%',background:C.card,border:'2px solid '+C.accent,borderRadius:10,padding:14,fontSize:20,fontFamily:'monospace',color:C.text,textAlign:'center',outline:'none',boxSizing:'border-box',marginBottom:14}}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>placeholder="Ej: 1897988"/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{display:'flex',gap:10}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;button onClick={()=&gt;{setUpcPending(null);setUpcInput('');setTimeout(startCam,200);}} style={{flex:1,background:C.dim,border:'none',borderRadius:10,padding:13,color:C.text,fontWeight:700,cursor:'pointer',fontSize:13}}&gt;Cancelar&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;button onClick={confirmUpc} style={{flex:2,background:C.accent,border:'none',borderRadius:10,padding:13,color:C.bg,fontWeight:700,cursor:'pointer',fontSize:13,letterSpacing:1}}&gt;Confirmar&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const SaleDialog=pendingSale&amp;&amp;(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.92)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200,padding:20}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{background:C.panel,borderRadius:16,padding:24,maxWidth:380,width:'100%',border:'1px solid '+C.green}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{marginBottom:16}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.muted,fontSize:10,letterSpacing:2,textTransform:'uppercase',marginBottom:4}}&gt;Artículo a Vender&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.text,fontWeight:700,fontSize:15,marginBottom:2}}&gt;{pendingSale.item.description}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.muted,fontSize:12}}&gt;{pendingSale.item.brand} · #{pendingSale.item.itemNum}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{display:'flex',gap:16,marginTop:8}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.muted,fontSize:11}}&gt;Retail: &lt;span style={{color:C.yellow}}&gt;{fmt(pendingSale.item.unitRetail)}&lt;/span&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.muted,fontSize:11}}&gt;Stock: &lt;span style={{color:C.green}}&gt;{stock[pendingSale.item.itemNum]||0}&lt;/span&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{marginBottom:18}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.muted,fontSize:10,letterSpacing:2,textTransform:'uppercase',marginBottom:6}}&gt;Precio de Venta&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{display:'flex',alignItems:'center',background:C.card,borderRadius:10,border:'2px solid '+C.green,overflow:'hidden'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;span style={{color:C.green,fontWeight:700,fontSize:22,padding:'0 12px'}}&gt;$&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;input ref={priceRef} type="number" step="0.01" min="0" value={salePrice} onChange={e=&gt;setSalePrice(e.target.value)}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>style={{flex:1,background:'none',border:'none',padding:'14px 12px 14px 0',fontSize:26,fontFamily:'monospace',color:C.green,fontWeight:700,outline:'none',width:'100%'}}/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{color:C.muted,fontSize:10,letterSpacing:2,textTransform:'uppercase',marginBottom:10}}&gt;¿Cómo pagó?&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:14}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>{PAY.map(p=&gt;(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;button key={p.id} onClick={()=&gt;confirmSale(p.id)}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>style={{background:p.color+'18',border:'2px solid '+p.color,borderRadius:12,padding:'16px 20px',color:p.color,fontWeight:700,fontSize:16,cursor:'pointer',letterSpacing:1,textAlign:'left',display:'flex',alignItems:'center',gap:14}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;span style={{fontSize:24}}&gt;{p.emoji}&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;span style={{flex:1}}&gt;{p.label.split(' ').slice(1).join(' ')}&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;span style={{fontSize:20,fontWeight:800}}&gt;{fmt(parseFloat(salePrice)||0)}&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>))}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;button onClick={()=&gt;{setPendingSale(null);setTimeout(()=&gt;manualRef.current&amp;&amp;manualRef.current.focus(),100);}}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>style={{width:'100%',background:C.dim,border:'none',borderRadius:10,padding:13,color:C.muted,fontWeight:700,cursor:'pointer',fontSize:13}}&gt;Cancelar&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const ScannerUI=(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{margin:'8px 12px 0',display:'flex',gap:6}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{hasBD&amp;&amp;&lt;button onClick={()=&gt;setScanMode('camera')} style={{flex:1,background:scanMode==='camera'?C.accent:C.card,border:'1px solid '+(scanMode==='camera'?C.accent:C.border),borderRadius:8,padding:'8px 0',color:scanMode==='camera'?C.bg:C.muted,fontWeight:700,fontSize:11,cursor:'pointer',letterSpacing:1,textTransform:'uppercase'}}&gt;</span><span class="s10">📷</span><span class="s3"> Cámara&lt;/button&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;button onClick={()=&gt;{setScanMode('item');if(cameraActive)stopCam();setTimeout(()=&gt;manualRef.current&amp;&amp;manualRef.current.focus(),100);}}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>style={{flex:1,background:scanMode==='item'?C.green:C.card,border:'1px solid '+(scanMode==='item'?C.green:C.border),borderRadius:8,padding:'8px 0',color:scanMode==='item'?C.bg:C.muted,fontWeight:700,fontSize:11,cursor:'pointer',letterSpacing:1,textTransform:'uppercase'}}&gt;# Item&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{Object.keys(upcMap).length&gt;0&amp;&amp;&lt;div style={{background:C.card,border:'1px solid '+C.border,borderRadius:8,padding:'8px 10px',color:C.muted,fontSize:10,display:'flex',alignItems:'center',gap:4}}&gt;&lt;span style={{color:C.accent}}&gt;</span><span class="s13">◉</span><span class="s3">&lt;/span&gt;{Object.keys(upcMap).length}&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{syncDot&amp;&amp;&lt;div style={{background:C.card,border:'1px solid '+(syncDot==='ok'?C.green:C.red),borderRadius:8,padding:'8px 10px',display:'flex',alignItems:'center'}}&gt;&lt;span style={{width:8,height:8,borderRadius:'50%',background:syncDot==='ok'?C.green:C.red,display:'inline-block'}}/&gt;&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>{scanMode==='camera'&amp;&amp;hasBD&amp;&amp;(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{margin:'8px 12px 0'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{position:'relative',background:'#000',borderRadius:12,overflow:'hidden',height:180}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;video ref={videoRef} style={{width:'100%',height:'100%',objectFit:'cover'}} muted playsInline/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>{!cameraActive&amp;&amp;&lt;div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;button onClick={startCam} style={{background:C.accent,color:C.bg,border:'none',borderRadius:10,padding:'12px 24px',fontWeight:700,fontSize:14,cursor:'pointer'}}&gt;</span><span class="s10">📷</span><span class="s3"> Activar Cámara&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>{camError&amp;&amp;&lt;div style={{color:C.red,fontSize:12,textAlign:'center',padding:'0 16px'}}&gt;{camError}&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>{cameraActive&amp;&amp;&lt;div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;div style={{position:'absolute',inset:0,border:'2px solid '+C.accent,borderRadius:12,pointerEvents:'none',opacity:.5}}/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;button onClick={stopCam} style={{position:'absolute',top:8,right:8,background:'rgba(255,61,87,.8)',border:'none',borderRadius:6,padding:'4px 10px',color:'#fff',fontSize:11,cursor:'pointer'}}&gt;Detener&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;div style={{position:'absolute',bottom:8,left:0,right:0,textAlign:'center'}}&gt;&lt;span style={{background:'rgba(0,0,0,.6)',color:C.accent,fontSize:11,padding:'4px 10px',borderRadius:20}}&gt;Apunta al barcode...&lt;/span&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>)}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{margin:'8px 12px 0'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;form onSubmit={onManual} style={{display:'flex',gap:8}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;input ref={manualRef} type="tel" value={manualInput} onChange={e=&gt;setManualInput(e.target.value)}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>style={{flex:1,background:C.card,border:'1px solid '+C.border,borderRadius:10,padding:'12px 14px',fontSize:18,fontFamily:'monospace',color:C.text,outline:'none'}}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>placeholder="Ingresa Item #" autoFocus={scanMode==='item'}/&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;button type="submit" style={{background:appMode==='pos'?C.green:C.accent,color:C.bg,border:'none',borderRadius:10,padding:'12px 18px',fontWeight:700,fontSize:18,cursor:'pointer'}}&gt;</span><span class="s11">✓</span><span class="s3">&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/form&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{color:C.muted,fontSize:10,marginTop:5,textAlign:'center'}}&gt;Item # de la etiqueta · Compatible con escáner Bluetooth&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const ResultCard=lastResult?(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;div style={{margin:'8px 12px 0'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{background:lastResult.status==='found'||lastResult.status==='sold'?'#0a1f0e':lastResult.status==='nostock'?'#1f1200':'#1f0a0e',border:'1px solid '+(lastResult.status==='found'||lastResult.status==='sold'?C.green:lastResult.status==='nostock'?C.orange:C.red),borderRadius:12,padding:'12px 14px'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{lastResult.status==='found'&amp;&amp;&lt;div style={{display:'flex',gap:12,alignItems:'flex-start'}}&gt;&lt;span style={{fontSize:26}}&gt;</span><span class="s10">✅</span><span class="s3">&lt;/span&gt;&lt;div style={{flex:1,minWidth:0}}&gt;&lt;div style={{fontWeight:700,fontSize:13,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}&gt;{lastResult.description}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:11}}&gt;{lastResult.brand} · #{lastResult.itemNum} · {fmt(lastResult.unitRetail)}&lt;/div&gt;&lt;div style={{marginTop:6,display:'flex',gap:16}}&gt;&lt;div&gt;&lt;span style={{color:C.muted,fontSize:10}}&gt;REC: &lt;/span&gt;&lt;span style={{color:C.green,fontWeight:700,fontSize:16}}&gt;{received[lastResult.itemNum]||0}&lt;/span&gt;&lt;/div&gt;&lt;div&gt;&lt;span style={{color:C.muted,fontSize:10}}&gt;ESP: &lt;/span&gt;&lt;span style={{color:C.text,fontWeight:700,fontSize:16}}&gt;{lastResult.qty}&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{lastResult.status==='sold'&amp;&amp;&lt;div style={{display:'flex',gap:12,alignItems:'flex-start'}}&gt;&lt;span style={{fontSize:26}}&gt;</span><span class="s10">💰</span><span class="s3">&lt;/span&gt;&lt;div style={{flex:1,minWidth:0}}&gt;&lt;div style={{fontWeight:700,fontSize:13,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}&gt;{lastResult.description}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:11}}&gt;{lastResult.brand}&lt;/div&gt;&lt;div style={{marginTop:6,display:'flex',gap:14,alignItems:'center'}}&gt;&lt;div style={{color:C.green,fontSize:22,fontWeight:700}}&gt;{fmt(lastResult.price)}&lt;/div&gt;&lt;div style={{color:PAY.find(p=&gt;p.id===lastResult.payMethod)&amp;&amp;PAY.find(p=&gt;p.id===lastResult.payMethod).color,fontSize:13,fontWeight:700}}&gt;{PAY.find(p=&gt;p.id===lastResult.payMethod)&amp;&amp;PAY.find(p=&gt;p.id===lastResult.payMethod).label}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:11}}&gt;Stock: {stock[lastResult.itemNum]||0}&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{lastResult.status==='nostock'&amp;&amp;&lt;div style={{display:'flex',gap:12,alignItems:'center'}}&gt;&lt;span style={{fontSize:26}}&gt;</span><span class="s10">📭</span><span class="s3">&lt;/span&gt;&lt;div&gt;&lt;div style={{color:C.orange,fontWeight:700,fontSize:13}}&gt;Sin stock — {lastResult.description}&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{lastResult.status==='miss'&amp;&amp;&lt;div style={{display:'flex',gap:12,alignItems:'center'}}&gt;&lt;span style={{fontSize:26}}&gt;</span><span class="s10">❌</span><span class="s3">&lt;/span&gt;&lt;div&gt;&lt;div style={{color:C.red,fontWeight:700,fontSize:13}}&gt;No en manifiesto&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:12}}&gt;#{lastResult.itemNum}&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>):(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;div style={{margin:'8px 12px 0'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{background:C.card,border:'1px dashed '+C.dim,borderRadius:12,padding:14,textAlign:'center',color:C.muted,fontSize:12,letterSpacing:1}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{loading?'Cargando datos...':appMode==='receiving'?'Escanea o ingresa un Item # para comenzar':'Escanea o ingresa un Item # para registrar venta'}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>if(page==='summary'){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const missing=activeManifest&amp;&amp;activeManifest.items?activeManifest.items.filter(i=&gt;!received[i.itemNum]):[];</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>return(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{minHeight:'100vh',background:C.bg,color:C.text,paddingBottom:40}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{background:C.panel,padding:'12px 16px',display:'flex',alignItems:'center',gap:10,borderBottom:'1px solid '+C.border}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;button onClick={()=&gt;setPage(appMode==='pos'?'pos':'recv')} style={{background:'none',border:'none',color:C.accent,cursor:'pointer',fontSize:22,padding:0}}&gt;</span><span class="s11">←</span><span class="s3">&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;span style={{fontWeight:700,letterSpacing:2,textTransform:'uppercase',fontSize:12}}&gt;Resumen · {activeManifest&amp;&amp;activeManifest.name}&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{appMode==='pos'&amp;&amp;(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{padding:'12px 12px 0'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.muted,fontSize:9,letterSpacing:2,textTransform:'uppercase',marginBottom:8}}&gt;VENTAS DEL DÍA&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8,marginBottom:8}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>{PAY.map(p=&gt;(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;div key={p.id} style={{background:C.card,borderRadius:10,padding:'12px 10px',border:'1px solid '+p.color+'22',textAlign:'center'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;div style={{color:p.color,fontSize:18,fontWeight:700}}&gt;{fmt(salesByPay[p.id])}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;div style={{color:C.muted,fontSize:10,marginTop:2}}&gt;{p.label}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;div style={{color:C.muted,fontSize:10}}&gt;{cntByPay[p.id]} uds&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>))}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{background:C.card,borderRadius:10,padding:'14px 16px',border:'1px solid '+C.green+'33',display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;div&gt;&lt;div style={{color:C.muted,fontSize:9,letterSpacing:2,textTransform:'uppercase'}}&gt;TOTAL DEL DÍA&lt;/div&gt;&lt;div style={{color:C.green,fontSize:30,fontWeight:700}}&gt;{fmt(totalSales)}&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;div style={{textAlign:'right'}}&gt;&lt;div style={{color:C.muted,fontSize:9,letterSpacing:2,textTransform:'uppercase'}}&gt;VENDIDAS&lt;/div&gt;&lt;div style={{color:C.text,fontSize:26,fontWeight:700}}&gt;{salesLog.length} uds&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>{salesLog.length&gt;0&amp;&amp;salesLog.map((t,i)=&gt;{const pm=t.pay_method||t.payMethod;const pay=PAY.find(p=&gt;p.id===pm);return(&lt;div key={i} style={{background:C.card,borderRadius:10,padding:'10px 14px',marginBottom:6,display:'flex',gap:10,alignItems:'center',border:'1px solid '+C.border}}&gt;&lt;div style={{width:6,height:36,borderRadius:3,background:pay&amp;&amp;pay.color,flexShrink:0}}/&gt;&lt;div style={{flex:1,minWidth:0}}&gt;&lt;div style={{fontSize:12,fontWeight:600,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}&gt;{t.description}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:10}}&gt;#{t.item_num||t.itemNum} · {t.sale_time||t.time}&lt;/div&gt;&lt;/div&gt;&lt;div style={{textAlign:'right',flexShrink:0}}&gt;&lt;div style={{color:pay&amp;&amp;pay.color,fontWeight:700,fontSize:14}}&gt;{fmt(t.price)}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:10}}&gt;{pay&amp;&amp;pay.label}&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;);})}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>)}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{padding:'12px 12px 0'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{color:C.muted,fontSize:9,letterSpacing:2,textTransform:'uppercase',marginBottom:8,marginTop:8}}&gt;INVENTARIO RECIBIDO&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>{[{l:'Recibidas',v:totalRcv,c:C.green},{l:'Esperadas',v:totalExp,c:C.text},{l:'% Completado',v:pct+'%',c:C.accent},{l:'Sin Recibir',v:missing.length+' items',c:missing.length&gt;0?C.red:C.green}].map(s=&gt;(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;div key={s.l} style={{background:C.card,borderRadius:10,padding:'12px 10px',border:'1px solid '+C.border}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;div style={{color:s.c,fontSize:20,fontWeight:700}}&gt;{s.v}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;div style={{color:C.muted,fontSize:10,letterSpacing:1,textTransform:'uppercase',marginTop:2}}&gt;{s.l}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>))}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>const hdr_recv=(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;div style={{background:C.panel,padding:'10px 14px',display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center',borderBottom:'1px solid '+C.border}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div&gt;&lt;button onClick={goHome} style={{background:'none',border:'none',color:C.muted,fontSize:11,cursor:'pointer',letterSpacing:1,textTransform:'uppercase',padding:0,marginBottom:2}}&gt;</span><span class="s11">←</span><span class="s3"> Inicio&lt;/button&gt;&lt;div style={{color:C.green,fontSize:22,fontWeight:700,lineHeight:1.1}}&gt;{totalRcv}&lt;span style={{color:C.muted,fontSize:13}}&gt;/{totalExp}&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{width:52,height:52,borderRadius:'50%',border:'3px solid '+(pct===100?C.green:C.accent),display:'flex',alignItems:'center',justifyContent:'center'}}&gt;&lt;span style={{color:pct===100?C.green:C.accent,fontSize:14,fontWeight:700}}&gt;{pct}%&lt;/span&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{textAlign:'right',display:'flex',flexDirection:'column',gap:4,alignItems:'flex-end'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;button onClick={()=&gt;setPage('summary')} style={{background:C.purple+'22',border:'1px solid '+C.purple,borderRadius:6,padding:'4px 10px',color:C.purple,fontSize:10,fontWeight:700,cursor:'pointer',letterSpacing:1,textTransform:'uppercase'}}&gt;Resumen&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;button onClick={goPos} style={{background:C.green+'22',border:'1px solid '+C.green,borderRadius:6,padding:'4px 10px',color:C.green,fontSize:10,fontWeight:700,cursor:'pointer',letterSpacing:1,textTransform:'uppercase'}}&gt;</span><span class="s10">🏪</span><span class="s3"> Ir a Venta </span><span class="s11">→</span><span class="s3">&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>if(page==='recv'){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const bg=flash==='ok'?'#041208':flash==='miss'?'#120408':C.bg;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>return(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{minHeight:'100vh',background:bg,transition:'background .15s',color:C.text,display:'flex',flexDirection:'column'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{UpcDialog}{hdr_recv}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{margin:'8px 12px 0',background:'#071a0f',border:'1px solid '+C.green+'33',borderRadius:8,padding:'6px 12px',display:'flex',alignItems:'center',gap:8}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;span style={{width:8,height:8,borderRadius:'50%',background:C.green,display:'inline-block'}}/&gt;&lt;span style={{color:C.green,fontSize:11,fontWeight:700,letterSpacing:2,textTransform:'uppercase',flex:1}}&gt;RECEPCIÓN&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;span style={{color:C.muted,fontSize:10,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'60%'}}&gt;{activeManifest&amp;&amp;activeManifest.name}&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{ResultCard}{ScannerUI}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{flex:1,overflow:'auto',margin:'8px 12px 12px'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>{Object.entries(received).length&gt;0&amp;&amp;&lt;div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.muted,fontSize:9,letterSpacing:2,textTransform:'uppercase',marginBottom:6}}&gt;RECIBIDOS&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>{Object.entries(received).map(([itemNum,qty])=&gt;{</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>const item=mMap[itemNum];if(!item)return null;const ok=qty&gt;=item.qty;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>return(&lt;div key={itemNum} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderBottom:'1px solid '+C.dim}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;div style={{width:32,height:32,borderRadius:7,background:ok?'#0a2010':'#2b1e00',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:ok?C.green:C.yellow,fontSize:13,flexShrink:0}}&gt;{qty}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;div style={{flex:1,minWidth:0}}&gt;&lt;div style={{fontSize:12,fontWeight:600,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}&gt;{item.description}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:10}}&gt;{item.brand} · #{itemNum}&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">                </span>&lt;div style={{color:C.muted,fontSize:11,flexShrink:0}}&gt;/{item.qty}&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">              </span>&lt;/div&gt;);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>})}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>if(page==='pos'){</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>const bg=flash==='ok'?'#041208':flash==='miss'?'#120408':C.bg;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>return(</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;div style={{minHeight:'100vh',background:bg,transition:'background .15s',color:C.text,display:'flex',flexDirection:'column'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{UpcDialog}{SaleDialog}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{background:C.panel,padding:'10px 14px',display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center',borderBottom:'1px solid '+C.border}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div&gt;&lt;button onClick={goHome} style={{background:'none',border:'none',color:C.muted,fontSize:11,cursor:'pointer',letterSpacing:1,textTransform:'uppercase',padding:0,marginBottom:2}}&gt;</span><span class="s11">←</span><span class="s3"> Inicio&lt;/button&gt;&lt;div style={{color:C.green,fontSize:22,fontWeight:700,lineHeight:1.1}}&gt;{fmt(totalSales)}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:11}}&gt;{salesLog.length} vendidas&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{background:C.card,borderRadius:10,padding:'8px 12px',border:'1px solid '+C.border,textAlign:'center'}}&gt;&lt;div style={{color:C.muted,fontSize:9,textTransform:'uppercase',letterSpacing:1}}&gt;Stock&lt;/div&gt;&lt;div style={{color:C.accent,fontSize:22,fontWeight:700}}&gt;{totalStockLeft}&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;div style={{textAlign:'right',display:'flex',flexDirection:'column',gap:4,alignItems:'flex-end'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;button onClick={()=&gt;{stopCam();setPage('summary');}} style={{background:C.purple+'22',border:'1px solid '+C.purple,borderRadius:6,padding:'4px 10px',color:C.purple,fontSize:10,fontWeight:700,cursor:'pointer',letterSpacing:1,textTransform:'uppercase'}}&gt;Resumen&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;button onClick={goRecv} style={{background:C.accent+'22',border:'1px solid '+C.accent,borderRadius:6,padding:'4px 10px',color:C.accent,fontSize:10,fontWeight:700,cursor:'pointer',letterSpacing:1,textTransform:'uppercase'}}&gt;</span><span class="s11">←</span><span class="s3"> Recepción&lt;/button&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{margin:'8px 12px 0',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>{PAY.map(p=&gt;(&lt;div key={p.id} style={{background:C.card,borderRadius:8,padding:'8px',border:'1px solid '+p.color+'22',textAlign:'center'}}&gt;&lt;div style={{color:p.color,fontSize:14,fontWeight:700}}&gt;{fmt(salesByPay[p.id])}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:9,letterSpacing:1,textTransform:'uppercase',marginTop:1}}&gt;{p.emoji} {p.id}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:9}}&gt;{cntByPay[p.id]} uds&lt;/div&gt;&lt;/div&gt;))}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{margin:'6px 12px 0',background:'#05101a',border:'1px solid '+C.accent+'33',borderRadius:8,padding:'5px 12px',display:'flex',alignItems:'center',gap:8}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;span style={{width:8,height:8,borderRadius:'50%',background:C.accent,display:'inline-block'}}/&gt;&lt;span style={{color:C.accent,fontSize:11,fontWeight:700,letterSpacing:2,textTransform:'uppercase',flex:1}}&gt;VENTA&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;span style={{color:C.muted,fontSize:10,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'60%'}}&gt;{activeManifest&amp;&amp;activeManifest.name}&lt;/span&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>{ResultCard}{ScannerUI}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div style={{flex:1,overflow:'auto',margin:'8px 12px 12px'}}&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>{salesLog.length&gt;0&amp;&amp;&lt;div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div style={{color:C.muted,fontSize:9,letterSpacing:2,textTransform:'uppercase',marginBottom:6}}&gt;VENTAS ({salesLog.length})&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">            </span>{salesLog.map((t,i)=&gt;{const pm=t.pay_method||t.payMethod;const pay=PAY.find(p=&gt;p.id===pm);return(&lt;div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'8px 0',borderBottom:'1px solid '+C.dim}}&gt;&lt;div style={{width:32,height:32,borderRadius:7,background:pay?pay.color+'18':'#333',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,flexShrink:0}}&gt;{pay&amp;&amp;pay.emoji}&lt;/div&gt;&lt;div style={{flex:1,minWidth:0}}&gt;&lt;div style={{fontSize:12,fontWeight:600,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}&gt;{t.description}&lt;/div&gt;&lt;div style={{color:C.muted,fontSize:10}}&gt;#{t.item_num||t.itemNum} · {t.sale_time||t.time}&lt;/div&gt;&lt;/div&gt;&lt;div style={{textAlign:'right',flexShrink:0}}&gt;&lt;div style={{color:pay&amp;&amp;pay.color,fontWeight:700,fontSize:14}}&gt;{fmt(t.price)}&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;);})}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">}</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p3"><span class="s3"> </span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">ReactDOM.createRoot(document.getElementById('root')).render(&lt;App/&gt;);</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;/script&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;/body&gt;</span></p>
<p class="p2"><span class="s6"></span><br></p>
<p class="p7"><span class="s3">&lt;/html&gt;`</span><span class="s2">;</span></p>
</body>
</html>
