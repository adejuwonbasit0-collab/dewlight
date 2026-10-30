(function () {
  var form = document.getElementById('f'), out = document.getElementById('results'), S = { cat: '', concern: '', skin: '', sort: '' };
  SK_CATS.forEach(function (c) { form.cat.insertAdjacentHTML('beforeend', '<option value="' + c.id + '">' + c.name + '</option>'); });
  SK_CONCERNS.forEach(function (c) { form.concern.insertAdjacentHTML('beforeend', '<option value="' + c.id + '">' + c.name + '</option>'); });
  Object.keys(S).forEach(function (k) { S[k] = SK.q(k); form[k].value = S[k]; });
  var skinNames = { dry: 'Dry', oily: 'Oily', combo: 'Combination', normal: 'Normal', sensitive: 'Sensitive' };
  function render() {
    var list = SK_PRODUCTS.filter(function (p) {
      return (!S.cat || p.cat === S.cat) && (!S.concern || p.concerns.indexOf(S.concern) > -1) && (!S.skin || p.skin.indexOf(S.skin) > -1 || p.skin.indexOf('all') > -1);
    });
    if (S.sort === 'low') list.sort(function (a, b) { return a.price - b.price; }); if (S.sort === 'high') list.sort(function (a, b) { return b.price - a.price; });
    document.getElementById('count').textContent = list.length;
    document.getElementById('st').textContent = S.cat ? SK.cat(S.cat).name : 'Shop skincare';
    var chips = [];
    if (S.cat) chips.push(['cat', SK.cat(S.cat).name]); if (S.concern) chips.push(['concern', SK_CONCERNS.filter(function (c) { return c.id === S.concern; })[0].name]); if (S.skin) chips.push(['skin', skinNames[S.skin] + ' skin']);
    document.getElementById('chips').innerHTML = chips.map(function (c) { return '<span class="chip">' + c[1] + '<button type="button" data-clear="' + c[0] + '" aria-label="Remove ' + c[1] + '">&times;</button></span>'; }).join('');
    out.innerHTML = list.length ? list.map(SK.card).join('') : '<p style="grid-column:1/-1">Nothing matches those filters. Try removing one, or <a class="link" data-wa="Hello Dewlight, I need help choosing skincare." href="#">ask us on WhatsApp</a>.</p>';
    document.querySelectorAll('#results [data-wa]').forEach(function (a) { a.href = SK.wa(a.getAttribute('data-wa')); a.target = '_blank'; });
    var q = new URLSearchParams(); Object.keys(S).forEach(function (k) { if (S[k]) q.set(k, S[k]); }); history.replaceState(null, '', location.pathname + (q.toString() ? '?' + q : ''));
  }
  form.addEventListener('change', function () { Object.keys(S).forEach(function (k) { S[k] = form[k].value; }); render(); });
  document.getElementById('chips').addEventListener('click', function (e) { var b = e.target.closest('[data-clear]'); if (!b) return; var k = b.getAttribute('data-clear'); S[k] = ''; form[k].value = ''; render(); });
  render();
})();
