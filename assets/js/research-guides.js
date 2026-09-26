(function () {
  'use strict';

  var links = Array.from(document.querySelectorAll('.guide-toc a'));
  var targets = links.map(function (link) {
    return document.getElementById(link.hash.slice(1));
  });
  if (!links.length) return;

  // Preserve native anchors, browser history and keyboard navigation.
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.stopImmediatePropagation();
    }, true);
  });

  var scheduled = false;
  function updateCurrentSection() {
    var current = 0;
    targets.forEach(function (target, index) {
      if (target && target.getBoundingClientRect().top <= 160) current = index;
    });
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
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  updateCurrentSection();
}());
