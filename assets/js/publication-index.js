(function () {
  'use strict';

  var root = document.getElementById('publication-index');
  if (!root) return;

  var form = document.getElementById('publication-filters');
  var search = document.getElementById('publication-search');
  var year = document.getElementById('publication-year');
  var type = document.getElementById('publication-type');
  var order = document.getElementById('publication-order');
  var results = document.getElementById('publication-results');
  var count = document.getElementById('publication-count');
  var reset = document.getElementById('publication-reset');
  var empty = document.getElementById('publication-empty');
  var groups = Array.prototype.slice.call(root.querySelectorAll('.index-year-group'));

  function normalize(value) {
    return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  }

  var entries = Array.prototype.slice.call(root.querySelectorAll('.index-entry')).map(function (element) {
    var searchable = element.cloneNode(true);
    var metric = searchable.querySelector('.index-entry-jif');
    if (metric) metric.remove();
    return {
      element: element,
      year: element.dataset.year,
      type: element.dataset.type,
      text: normalize(searchable.textContent + ' ' + element.dataset.year + ' ' + element.dataset.type)
    };
  });

  function validOption(select, value) {
    return Array.prototype.some.call(select.options, function (option) { return option.value === value; });
  }

  function restoreFilters() {
    var params = new URLSearchParams(window.location.search);
    search.value = params.get('q') || '';
    year.value = validOption(year, params.get('year')) ? params.get('year') : '';
    type.value = validOption(type, params.get('type')) ? params.get('type') : '';
    order.value = params.get('order') === 'oldest' ? 'oldest' : 'newest';
  }

  function saveFilters() {
    var url = new URL(window.location.href);
    var values = { q: search.value.trim(), year: year.value, type: type.value, order: order.value === 'oldest' ? 'oldest' : '' };
    Object.keys(values).forEach(function (key) {
      if (values[key]) url.searchParams.set(key, values[key]);
      else url.searchParams.delete(key);
    });
    if (url.href !== window.location.href) window.history.replaceState(null, '', url.href);
  }

  function render(save) {
    var query = normalize(search.value);
    var terms = query ? query.split(/\s+/) : [];
    var visible = 0;
    var yearCounts = {};

    entries.forEach(function (entry) {
      var matches = (!year.value || entry.year === year.value)
        && (!type.value || entry.type === type.value)
        && terms.every(function (term) { return entry.text.indexOf(term) !== -1; });
      entry.element.hidden = !matches;
      entry.element.classList.toggle('is-first-visible', matches && !yearCounts[entry.year]);
      if (matches) {
        visible++;
        yearCounts[entry.year] = (yearCounts[entry.year] || 0) + 1;
      }
    });

    groups.sort(function (a, b) {
      return order.value === 'oldest' ? Number(a.dataset.year) - Number(b.dataset.year) : Number(b.dataset.year) - Number(a.dataset.year);
    }).forEach(function (group) {
      var number = yearCounts[group.dataset.year] || 0;
      group.hidden = number === 0;
      group.querySelector('.index-year-count').textContent = number + (number === 1 ? ' record' : ' records');
      results.appendChild(group);
    });

    count.textContent = visible === entries.length ? entries.length + ' records' : visible + ' of ' + entries.length + ' records';
    empty.hidden = visible !== 0;
    reset.hidden = !(search.value || year.value || type.value || order.value !== 'newest');
    if (save) saveFilters();
  }

  form.addEventListener('submit', function (event) { event.preventDefault(); render(true); });
  search.addEventListener('input', function () { render(true); });
  [year, type, order].forEach(function (control) { control.addEventListener('change', function () { render(true); }); });
  form.addEventListener('reset', function (event) {
    event.preventDefault();
    search.value = '';
    year.value = '';
    type.value = '';
    order.value = 'newest';
    render(true);
    search.focus();
  });
  window.addEventListener('popstate', function () { restoreFilters(); render(false); });

  restoreFilters();
  render(false);
  form.hidden = false;
  document.getElementById('publication-order-control').hidden = false;
})();
