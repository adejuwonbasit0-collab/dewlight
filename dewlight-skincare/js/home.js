(function () {
  var creams = SK_PRODUCTS.filter(function (p) { return p.look.bg; });
  var copy = document.getElementById('hero-copy'), dots = document.getElementById('hero-dots');
  if (copy) {
    copy.innerHTML = creams.map(function (p, i) {
      var h = i === 0 ? 'h1' : 'h2';
      return '<div class="chap' + (i === 0 ? ' is-on' : '') + '" style="--accent:' + p.look.ink + '"><span class="eyebrow">' + SK.esc(SK.cat(p.cat).name) + ' \u00B7 ' + p.size + '</span>' +
        '<' + h + '>' + SK.esc(p.hero) + '</' + h + '><p>' + SK.esc(p.name) + '. ' + SK.esc(p.short) + '</p>' +
        '<div class="row"><span class="price">' + SK.naira(p.price) + '</span><a class="btn btn--clay" href="product.html?id=' + p.id + '">View details</a><button class="btn btn--ghost" type="button" data-add="' + p.id + '">Add to bag</button></div></div>';
    }).join('');
    dots.innerHTML = creams.map(function (p, i) { return '<button type="button" aria-current="' + (i === 0) + '">' + SK.esc(p.look.name) + '</button>'; }).join('');
  }
  var cn = document.getElementById('concerns');
  if (cn) cn.innerHTML = SK_CONCERNS.map(function (c) {
    var n = SK_PRODUCTS.filter(function (p) { return p.concerns.indexOf(c.id) > -1; }).length;
    return '<a class="concern" href="shop.html?concern=' + c.id + '"><div><h3>' + c.name + '</h3><span>' + n + ' products</span></div>' + SK.chev + '</a>';
  }).join('');
  var f = document.getElementById('featured');
  if (f) f.innerHTML = ['hydra-dew-cream', 'glow-c-cream', 'daily-shield-spf50', 'niacinamide-clarity-serum', 'night-peptide-cream', 'barrier-calm-cream', 'dark-spot-serum', 'soft-gel-cleanser'].map(function (id) { return SK.card(SK.get(id)); }).join('');
})();
