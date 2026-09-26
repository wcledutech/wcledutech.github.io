(function () {
  'use strict';

  var hub = document.querySelector('.research-highlights-page');
  if (!hub) return;

  var input = hub.querySelector('#research-search');
  var clear = hub.querySelector('#research-search-clear');
  var status = hub.querySelector('#research-count');
  var empty = hub.querySelector('#research-empty');
  var cards = Array.prototype.slice.call(hub.querySelectorAll('.research-card'));
  var sections = Array.prototype.slice.call(hub.querySelectorAll('.research-topic'));

  function filterStudies() {
    var query = input.value.toLowerCase().trim();
    var count = 0;

    cards.forEach(function (card) {
      card.hidden = card.textContent.toLowerCase().indexOf(query) === -1;
      if (!card.hidden) count++;
    });
    sections.forEach(function (section) {
      section.hidden = !Array.prototype.some.call(section.querySelectorAll('.research-card'), function (card) {
        return !card.hidden;
      });
    });

    clear.hidden = input.value.length === 0;
    empty.hidden = count !== 0;
    status.textContent = count + ' selected ' + (count === 1 ? 'study' : 'studies');
  }

  input.addEventListener('input', filterStudies);
  clear.addEventListener('click', function () {
    input.value = '';
    filterStudies();
    input.focus();
  });
  filterStudies();
})();
