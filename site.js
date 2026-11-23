/* Shared: Menu toggle for the header below 64em. No other behaviour. */
(function () {
  var b = document.querySelector('button.menu-toggle');
  var n = document.getElementById('site-nav');
  if (!b || !n) return;
  function set(open) {
    n.classList.toggle('is-open', open);
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  b.addEventListener('click', function () { set(!n.classList.contains('is-open')); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && n.classList.contains('is-open')) { set(false); b.focus(); }
  });
})();
