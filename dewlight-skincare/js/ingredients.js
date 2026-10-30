(function () {
  var map = {};
  SK_PRODUCTS.forEach(function (p) { p.ingredients.forEach(function (i) { var k = i[0].replace(/ \(.*\)| \d+%/g, ''); (map[k] = map[k] || { d: i[1], p: [] }).p.push(p); }); });
  document.getElementById('iglist').innerHTML = Object.keys(map).sort().map(function (k) {
    return '<div class="ig"><h3>' + SK.esc(k) + '</h3><p>' + SK.esc(map[k].d) + '.</p><p class="in">Found in: ' + map[k].p.map(function (p) { return '<a class="link" href="product.html?id=' + p.id + '">' + SK.esc(p.name) + '</a>'; }).join(' ') + '</p></div>';
  }).join('');
})();
