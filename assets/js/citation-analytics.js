(function () {
  'use strict';
  if (window.academicCitationAnalyticsInstalled) return;
  window.academicCitationAnalyticsInstalled = true;

  // GA4 enhanced measurement handles page views, outbound links and PPTX files.
  // Only the two unsupported citation formats need an additional event.
  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || (event.button !== undefined && event.button !== 0)) return;
    if (!event.target || typeof event.target.closest !== 'function') return;
    var link = event.target.closest('a[href]');
    if (!link || typeof window.gtag !== 'function') return;
    var url;
    try {
      url = new URL(link.getAttribute('href'), document.baseURI);
    } catch (error) {
      return;
    }
    if (url.origin !== window.location.origin) return;
    var match = url.pathname.match(/^\/assets\/citations\/([^/]+)\.(bib|ris)$/i);
    if (!match) return;
    window.gtag('event', 'citation_download', {
      file_extension: match[2].toLowerCase(),
      file_name: match[1] + '.' + match[2],
      link_url: url.origin + url.pathname
    });
  });
}());
