(function () {
  var f = document.getElementById('cform');
  function err(n, m) { f.querySelector('[data-err=' + n + ']').textContent = m || ''; if (m) f[n].setAttribute('aria-invalid', 'true'); else f[n].removeAttribute('aria-invalid'); }
  f.addEventListener('submit', function (e) {
    e.preventDefault(); var name = f.name.value.trim(), phone = f.phone.value.replace(/\D/g, '');
    err('name', name ? '' : 'Enter your name so we know who to ask for.'); err('phone', phone.length >= 7 ? '' : 'Enter a phone number we can call back.');
    if (!name) { f.name.focus(); return; } if (phone.length < 7) { f.phone.focus(); return; }
    var t = 'Hello Dewlight, my name is ' + name + '. I need help with: ' + f.topic.value + '.' + (f.msg.value.trim() ? '\n' + f.msg.value.trim() : '') + '\nMy number: ' + f.phone.value.trim();
    var url = SK.wa(t); document.getElementById('done-link').href = url; document.getElementById('done').hidden = false; window.open(url, '_blank', 'noopener');
  });
})();
