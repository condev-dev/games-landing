(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  if (!header) return;

  var queued = false;

  var sync = function () {
    header.classList.toggle('is-stuck', window.scrollY > 8);
    queued = false;
  };

  sync();
  window.addEventListener('scroll', function () {
    if (!queued) {
      queued = true;
      window.requestAnimationFrame(sync);
    }
  }, { passive: true });
})();
