/* Shared: menu toggle for the header below 64em, operator links from config.js, optional analytics (off by default). */
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

/* Config-driven operator links and privacy-friendly analytics (off unless configured in config.js). */
(function () {
  var c = window.URConfig || {};
  var map = c.operatorLinks || {};
  var ops = document.querySelectorAll('a[data-operator]');
  for (var i = 0; i < ops.length; i++) {
    var u = map[ops[i].getAttribute('data-operator')];
    if (u) ops[i].setAttribute('href', u);
  }
  if (c.analyticsId) {
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', 'https://' + c.analyticsId + '.goatcounter.com/count');
    document.head.appendChild(s);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="http"]');
    if (!a || a.hostname === location.hostname || !window.goatcounter || !window.goatcounter.count) return;
    window.goatcounter.count({ path: 'outbound/' + a.hostname, title: 'Outbound ' + a.hostname, event: true });
  });
})();
