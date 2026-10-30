(function () {
  var app = document.getElementById('app'), p = SK.get(SK.q('id'));
  if (!p) { app.innerHTML = '<div style="padding:5rem 0"><h1 style="font-size:3rem">We could not find that product</h1><p style="margin:1rem 0 1.6rem;color:var(--muted)">It may have been renamed or retired.</p><a class="btn" href="shop.html">Shop all products</a></div>'; document.title = 'Product not found | Dewlight'; return; }
  document.title = p.name + ' | Dewlight';
  var md = document.querySelector('meta[name=description]'); if (md) md.content = p.short;
  var qty = 1;
  var tags = p.concerns.map(function (c) { var n = SK_CONCERNS.filter(function (x) { return x.id === c; })[0].name; return '<a href="shop.html?concern=' + c + '">' + n + '</a>'; }).join('');
  var slot = { am: 'Morning', pm: 'Evening', both: 'Morning and evening' }[p.slot];
  var rel = SK_PRODUCTS.filter(function (x) { return x.id !== p.id && x.cat !== p.cat && x.concerns.some(function (c) { return p.concerns.indexOf(c) > -1; }); }).slice(0, 4);
  var msg = 'Hello Dewlight, I would like to order ' + p.name + ' (' + SK.naira(p.price) + '). My name:\nDelivery address:';
  app.innerHTML =
    '<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="shop.html">Shop</a><span>/</span><a href="shop.html?cat=' + p.cat + '">' + SK.esc(SK.cat(p.cat).name) + '</a></nav>' +
    '<div class="pdp"><div class="pdp-img" style="--tint:' + p.look.tint + '"><img src="' + SK.img(p) + '" alt="' + SK.esc(p.name) + '" width="800" height="900"></div><div>' +
    '<span class="eyebrow" style="display:block;margin-top:1.4rem">' + SK.esc(SK.cat(p.cat).name) + (p.tag ? ' \u00B7 ' + p.tag : '') + '</span><h1>' + SK.esc(p.name) + '</h1>' +
    '<p class="price">' + SK.naira(p.price) + '<small>' + p.size + '</small></p><p class="lead">' + SK.esc(p.short) + '</p><div class="tags">' + tags + '</div>' +
    '<div class="buy"><div class="qty"><button type="button" id="m" aria-label="Decrease">\u2212</button><b id="q">1</b><button type="button" id="pl" aria-label="Increase">+</button></div><button class="btn btn--clay" type="button" id="add">Add to bag</button></div>' +
    '<div class="buy" style="margin-top:.8rem"><a class="btn btn--wa" data-wa="' + SK.esc(msg) + '" href="#">Order on WhatsApp</a></div>' +
    '<section class="blk"><h2>About this product</h2>' + p.desc.map(function (d) { return '<p>' + SK.esc(d) + '</p>'; }).join('') + '</section>' +
    '<section class="blk"><h2>Benefits</h2><ul class="dots-list">' + p.benefits.map(function (b) { return '<li>' + SK.esc(b) + '</li>'; }).join('') + '</ul></section>' +
    '<section class="blk"><details class="acc" open><summary>Key ingredients</summary><dl>' + p.ingredients.map(function (i) { return '<div><dt>' + SK.esc(i[0]) + '</dt><dd>' + SK.esc(i[1]) + '</dd></div>'; }).join('') + '</dl></details>' +
    '<details class="acc"><summary>How to use</summary><dl><div><dd>' + SK.esc(p.how) + '</dd></div><div><dt>When</dt><dd>' + slot + '</dd></div></dl></details>' +
    '<details class="acc"><summary>Delivery and returns</summary><dl><div><dd>We deliver across Nigeria. Time and fee are confirmed on WhatsApp before you pay. If something arrives damaged, message us and we will make it right.</dd></div></dl></details></section>' +
    '<p class="note">Cosmetic product. Patch test before first use. Not intended to diagnose or treat any condition.</p></div></div>' +
    (rel.length ? '<section style="padding-bottom:5rem"><div class="sec-head"><h2>Pairs well with</h2></div><div class="grid">' + rel.map(SK.card).join('') + '</div></section>' : '');
  var q = document.getElementById('q');
  document.getElementById('m').onclick = function () { qty = Math.max(1, qty - 1); q.textContent = qty; };
  document.getElementById('pl').onclick = function () { qty = Math.min(20, qty + 1); q.textContent = qty; };
  document.getElementById('add').onclick = function () { SK.add(p.id, qty); };
  document.querySelectorAll('[data-wa]').forEach(function (a) { a.href = SK.wa(a.getAttribute('data-wa')); a.target = '_blank'; a.rel = 'noopener'; });
})();
