(function () {
  'use strict';

  // Keep native fragment navigation instead of the theme's fixed scroll offset.
  document.querySelectorAll('.zh-research a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.stopImmediatePropagation();
    }, true);
  });
}());
