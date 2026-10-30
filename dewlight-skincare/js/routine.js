(function () {
  var form = document.getElementById('quiz'), res = document.getElementById('result'), tab = 'am', plan = null;
  function best(cat, slot, skin, concern, used) {
    var c = SK_PRODUCTS.filter(function (p) {
      if (p.cat !== cat || used.indexOf(p.id) > -1) return false;
      if (p.slot !== 'both' && p.slot !== slot) return false;
      if (skin === 'sensitive' && p.skin.indexOf('sensitive') < 0 && p.skin.indexOf('all') < 0) return false;
      return true;
    }).map(function (p) { return { p: p, s: (p.skin.indexOf(skin) > -1 || p.skin.indexOf('all') > -1 ? 2 : 0) + (p.concerns.indexOf(concern) > -1 ? 3 : 0) }; }).sort(function (a, b) { return b.s - a.s; });
    return c.length ? c[0].p : null;
  }
  function build(skin, concern, steps) {
    function seq(slot) {
      var used = [], list = [];
      function add(cat) { var p = best(cat, slot, skin, concern, used); if (p) { used.push(p.id); list.push(p); } }
      add('cleanser');
      if (slot === 'am') { if (steps >= 4) add('serum'); if (steps >= 5) add('eye'); add('cream'); add('sunscreen'); }
      else { add('serum'); if (steps >= 4) add('eye'); add('cream'); if (steps >= 5) add('body'); }
      return list;
    }
    return { am: seq('am'), pm: seq('pm') };
  }
  function why(p, concern) { return p.concerns.indexOf(concern) > -1 ? 'Targets ' + SK_CONCERNS.filter(function (c) { return c.id === concern; })[0].name.toLowerCase() + '. ' + p.short : p.short; }
  function show() {
    var list = plan[tab], concern = form.concern.value;
    document.getElementById('rl').innerHTML = list.map(function (p, i) {
      return '<div class="rrow"><span class="n">' + (i + 1) + '</span><img src="' + SK.img(p) + '" alt=""><div><h3><a href="product.html?id=' + p.id + '">' + SK.esc(p.name) + '</a></h3><p>' + SK.esc(why(p, concern)) + '</p><p><b>' + SK.naira(p.price) + '</b></p></div><button class="add" type="button" data-add="' + p.id + '">Add to bag</button></div>';
    }).join('');
    document.querySelectorAll('.rtabs button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-t') === tab); });
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var skin = form.skin.value, concern = form.concern.value, steps = +form.steps.value;
    if (!skin || !concern || !steps) { document.getElementById('qerr').textContent = 'Please answer all three questions.'; return; }
    document.getElementById('qerr').textContent = '';
    plan = build(skin, concern, steps); tab = 'am';
    var all = []; ['am', 'pm'].forEach(function (s) { plan[s].forEach(function (p) { if (all.indexOf(p) < 0) all.push(p); }); });
    var total = all.reduce(function (t, p) { return t + p.price; }, 0);
    res.hidden = false;
    res.innerHTML = '<h2>Your routine</h2><p style="color:var(--muted);margin-top:.6rem">' + all.length + ' products, ' + SK.naira(total) + ' for the full set.</p>' +
      '<div class="rtabs"><button type="button" data-t="am" aria-pressed="true">Morning</button><button type="button" data-t="pm" aria-pressed="false">Evening</button></div><div class="rlist" id="rl"></div>' +
      '<div class="row"><button class="btn btn--clay" type="button" id="addall">Add full routine to bag</button><a class="btn btn--wa" id="rwa" href="#" target="_blank" rel="noopener">Ask us about this routine</a></div>' +
      '<p class="note" style="margin-top:1.2rem;font-size:.9rem;color:var(--muted)">A starting point, not medical advice. Introduce new products one at a time and patch test first.</p>';
    show();
    document.getElementById('addall').onclick = function () { all.forEach(function (p) { SK.add(p.id, 1); }); SK.openBag(); };
    document.getElementById('rwa').href = SK.wa('Hello Dewlight, my skin is ' + skin + ' and I want to improve ' + concern + '. The routine finder suggested: ' + all.map(function (p) { return p.name; }).join(', ') + '. Is this right for me?');
    res.querySelectorAll('.rtabs button').forEach(function (b) { b.onclick = function () { tab = b.getAttribute('data-t'); show(); }; });
    res.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
