/* ============================================================
   Full-screen "glance" overlay.
   Hovering any element with a [data-glance="<sectionKey>"] attribute
   shows a large, readable preview that fills the screen. The overlay
   never captures the pointer (pointer-events: none), so the element
   underneath stays hoverable and clickable (click = open detail page).
   Disabled on touch devices.
   ============================================================ */
(function () {
  if (typeof PORTFOLIO === 'undefined') return;
  // Skip on touch / no-hover devices
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

  var S = PORTFOLIO.sections;

  var overlay = document.createElement('div');
  overlay.className = 'glance-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<div class="glance-card" id="glance-card"></div>';
  document.body.appendChild(overlay);
  var card = document.getElementById('glance-card');
  var hideTimer = null;

  function render(key) {
    var s = S[key];
    if (!s) return;
    var g = s.glance || {};
    var hl = (g.highlights || []).map(function (h) {
      return '<div class="g-hl"><div class="g-hl-h">' + h.h + '</div><div class="g-hl-t">' + h.t + '</div></div>';
    }).join('');
    card.innerHTML =
      '<div class="g-head">' +
        '<div class="g-ico">' + s.icon + '</div>' +
        '<div><div class="g-label">' + s.label + '</div>' +
        '<div class="g-tagline">' + s.tagline + '</div></div>' +
      '</div>' +
      (g.summary ? '<p class="g-summary">' + g.summary + '</p>' : '') +
      '<div class="g-grid">' + hl + '</div>' +
      '<div class="g-foot">Click to open the full ' + s.label + ' page →</div>';
  }

  function show(key) {
    clearTimeout(hideTimer);
    render(key);
    overlay.classList.add('show');
  }
  function hide() {
    hideTimer = setTimeout(function () { overlay.classList.remove('show'); }, 90);
  }

  document.querySelectorAll('[data-glance]').forEach(function (el) {
    var key = el.getAttribute('data-glance');
    el.addEventListener('mouseenter', function () { show(key); });
    el.addEventListener('mouseleave', hide);
    el.addEventListener('focus', function () { show(key); });
    el.addEventListener('blur', hide);
  });
})();
