/* Dewlight shared helpers: formatting, product cards, bag (cart), header */
(function () {
  var B = window.SK_BRAND, SK = (window.SK = {});
  var nf = new Intl.NumberFormat('en-NG');
  SK.naira = function (n) { return '\u20A6' + nf.format(n); };
  SK.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  SK.get = function (id) { return SK_PRODUCTS.filter(function (p) { return p.id === id; })[0] || null; };
  SK.q = function (n) { return new URLSearchParams(location.search).get(n) || ''; };
  SK.cat = function (id) { return SK_CATS.filter(function (c) { return c.id === id; })[0] || { name: id }; };
  SK.img = function (p) { return 'assets/products/' + p.id + '.webp'; };
  SK.wa = function (text) { return 'https://wa.me/' + B.whatsapp + (text ? '?text=' + encodeURIComponent(text) : ''); };

  var chev = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';
  SK.chev = chev;

  /* ---------- product card ---------- */
  SK.card = function (p) {
    var href = 'product.html?id=' + p.id;
    return '<article class="pcard"><a class="pimg" href="' + href + '" tabindex="-1" aria-hidden="true" style="--tint:' + p.look.tint + '"><img src="' + SK.img(p) + '" alt="' + SK.esc(p.name) + '" loading="lazy" width="800" height="900">' + (p.tag ? '<span class="ptag">' + p.tag + '</span>' : '') + '</a>' +
      '<div class="pbody"><span class="pcat">' + SK.esc(SK.cat(p.cat).name) + ' \u00B7 ' + p.size + '</span><h3 class="pname"><a href="' + href + '">' + SK.esc(p.name) + '</a></h3><p class="pshort">' + SK.esc(p.short) + '</p>' +
      '<div class="pfoot"><span class="pprice">' + SK.naira(p.price) + '</span><button class="add" type="button" data-add="' + p.id + '" aria-label="Add ' + SK.esc(p.name) + ' to bag">Add to bag</button></div></div></article>';
  };

  /* ---------- bag ---------- */
  var KEY = 'dl-bag';
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
  function save(b) { try { localStorage.setItem(KEY, JSON.stringify(b)); } catch (e) {} }
  SK.bag = load;
  SK.count = function () { var b = load(), n = 0; for (var k in b) n += b[k]; return n; };
  SK.total = function () { var b = load(), t = 0; for (var k in b) { var p = SK.get(k); if (p) t += p.price * b[k]; } return t; };
  SK.add = function (id, qty) {
    var b = load(); b[id] = Math.min(20, (b[id] || 0) + (qty || 1)); save(b); paint(); toast((SK.get(id) || {}).name + ' added to your bag');
  };
  function setQty(id, q) { var b = load(); if (q <= 0) delete b[id]; else b[id] = Math.min(20, q); save(b); paint(); }
  function toast(msg) {
    var t = document.getElementById('toast'); if (!t) return; t.textContent = msg; t.classList.add('on');
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('on'); }, 2200);
    var live = document.getElementById('live'); if (live) live.textContent = msg;
  }
  SK.toast = toast;
  SK.openBag = function () { document.body.classList.add('bag-open'); var d = document.getElementById('drawer'); d.setAttribute('aria-hidden', 'false'); d.querySelector('.d-close').focus(); };
  SK.closeBag = function () { document.body.classList.remove('bag-open'); document.getElementById('drawer').setAttribute('aria-hidden', 'true'); };

  function paint() {
    var n = SK.count();
    document.querySelectorAll('[data-bag-count]').forEach(function (e) { e.textContent = n; });
    var body = document.getElementById('d-body'), foot = document.getElementById('d-foot'); if (!body) return;
    var b = load(), ids = Object.keys(b).filter(function (k) { return SK.get(k); });
    if (!ids.length) { body.innerHTML = '<div class="d-empty"><p>Your bag is empty.</p><p style="margin-top:1rem"><a class="btn btn--ghost btn--sm" href="shop.html">Shop skincare</a></p></div>'; foot.hidden = true; return; }
    foot.hidden = false;
    body.innerHTML = ids.map(function (id) {
      var p = SK.get(id), q = b[id];
      return '<div class="line"><img src="' + SK.img(p) + '" alt=""><div><h3>' + SK.esc(p.name) + '</h3><small>' + p.size + '</small>' +
        '<div class="qty"><button type="button" data-q="' + id + '" data-d="-1" aria-label="Decrease quantity">\u2212</button><b>' + q + '</b><button type="button" data-q="' + id + '" data-d="1" aria-label="Increase quantity">+</button></div></div>' +
        '<div style="text-align:right"><div class="lp">' + SK.naira(p.price * q) + '</div><button class="rm" type="button" data-rm="' + id + '">Remove</button></div></div>';
    }).join('');
    document.getElementById('d-total').textContent = SK.naira(SK.total());
    document.getElementById('d-order').href = SK.wa(orderText());
  }
  function orderText() {
    var b = load(), lines = Object.keys(b).filter(function (k) { return SK.get(k); }).map(function (k) { var p = SK.get(k); return b[k] + ' x ' + p.name + ' (' + SK.naira(p.price * b[k]) + ')'; });
    return 'Hello ' + B.name + ', I would like to order:\n' + lines.join('\n') + '\nTotal: ' + SK.naira(SK.total()) + '\n\nMy name:\nDelivery address:';
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-add]'); if (a) { SK.add(a.getAttribute('data-add'), 1); return; }
    var q = e.target.closest('[data-q]'); if (q) { var id = q.getAttribute('data-q'); setQty(id, (load()[id] || 0) + (+q.getAttribute('data-d'))); return; }
    var r = e.target.closest('[data-rm]'); if (r) { setQty(r.getAttribute('data-rm'), 0); return; }
    if (e.target.closest('[data-open-bag]')) { SK.openBag(); return; }
    if (e.target.closest('.d-close') || e.target.classList.contains('scrim')) SK.closeBag();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { SK.closeBag(); if (document.body.classList.contains('menu-open')) document.body.classList.remove('menu-open'); }
  });

  /* ---------- header ---------- */
  function header() {
    var h = document.querySelector('.site-header'), hero = document.getElementById('hero'), btn = h.querySelector('.menu-btn');
    function on() { var past = hero ? hero.getBoundingClientRect().bottom < h.offsetHeight + 4 || scrollY > 40 : true; h.classList.toggle('is-solid', past || document.body.classList.contains('menu-open')); }
    on(); addEventListener('scroll', on, { passive: true });
    btn.addEventListener('click', function () { var o = document.body.classList.toggle('menu-open'); btn.setAttribute('aria-expanded', o); on(); });
    h.querySelector('.nav').addEventListener('click', function (e) { if (e.target.closest('a')) { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); } });
  }
  document.addEventListener('DOMContentLoaded', function () {
    header(); paint();
    document.querySelectorAll('[data-wa]').forEach(function (a) { a.href = SK.wa(a.getAttribute('data-wa')); a.target = '_blank'; a.rel = 'noopener'; });
    var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  });
  window.addEventListener('storage', paint);
})();
