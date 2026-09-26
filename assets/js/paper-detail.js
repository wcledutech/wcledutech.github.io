(function () {
  'use strict';

  var root = document.querySelector('.paper-detail');
  if (!root) return;
  var links = Array.from(root.querySelectorAll('.paper-toc a'));
  var targets = links.map(function (link) { return document.getElementById(link.hash.slice(1)); });

  // Retain native fragment history and the stylesheet's sticky-header offset.
  root.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) { event.stopImmediatePropagation(); }, true);
  });

  var scheduled = false;
  function updateCurrentSection() {
    var current = 0;
    targets.forEach(function (target, index) {
      if (target && target.getBoundingClientRect().top <= 160) current = index;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      var linked = links.findIndex(function (link) { return link.hash === window.location.hash; });
      var linkedTop = linked >= 0 && targets[linked] ? targets[linked].getBoundingClientRect().top : -1;
      current = linkedTop >= 0 && linkedTop < window.innerHeight ? linked : links.length - 1;
    }
    links.forEach(function (link, index) {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateCurrentSection);
  }
  window.addEventListener('scroll', scheduleUpdate, {passive: true});
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  updateCurrentSection();
}());
