(function () {
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.site-nav');
  btn.addEventListener('click', function () {
    var open = btn.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      btn.classList.remove('is-open');
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
