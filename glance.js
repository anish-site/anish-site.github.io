/* ============================================================
   Full-screen "glance" overlay.
   Hovering any element with [data-glance="<sectionKey>"] shows a large,
   readable preview that fills the screen.

   Behaviour (intentional):
   - The overlay never captures the pointer (pointer-events: none), so the
     element underneath stays hoverable and clickable (click = open detail).
   - Once a glance opens it LOCKS to that section — drifting the cursor over
     other (now hidden) tiles does NOT switch or follow it.
   - After a short grace period it closes on your next deliberate mouse move,
     so it appears, holds still while you read, then dismisses when you move.
   - Disabled on touch / no-hover devices.
   ============================================================ */
(function (global) {
  if (typeof PORTFOLIO === 'undefined') return;
  if (global.matchMedia && global.matchMedia('(hover: none)').matches) return;

  var S = PORTFOLIO.sections;

  var overlay = document.createElement('div');
  overlay.className = 'glance-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<div class="glance-card" id="glance-card"></div>';
  document.body.appendChild(overlay);
  var card = document.getElementById('glance-card');

  var openKey = null;        // section currently shown (lock)
  var anchorX = 0, anchorY = 0;
  var graceUntil = 0;        // moves before this time only re-anchor (swallow entry motion)
  var moveHandler = null;
  var GRACE_MS = 300;
  var CLOSE_DIST = 30;       // px the pointer must move (after grace) to dismiss

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

  function open(key, x, y, keyboard) {
    if (openKey) return;             // locked while open — do not switch/follow
    openKey = key;
    render(key);
    overlay.classList.add('show');
    if (keyboard) return;            // keyboard: stay until blur, no move-to-close
    anchorX = x; anchorY = y;
    graceUntil = Date.now() + GRACE_MS;
    moveHandler = function (e) {
      if (Date.now() < graceUntil) { anchorX = e.clientX; anchorY = e.clientY; return; }
      var dx = e.clientX - anchorX, dy = e.clientY - anchorY;
      if (dx * dx + dy * dy >= CLOSE_DIST * CLOSE_DIST) close();
    };
    document.addEventListener('mousemove', moveHandler, { passive: true });
  }

  function close() {
    if (!openKey) return;
    openKey = null;
    overlay.classList.remove('show');
    if (moveHandler) { document.removeEventListener('mousemove', moveHandler); moveHandler = null; }
  }

  document.querySelectorAll('[data-glance]').forEach(function (el) {
    var key = el.getAttribute('data-glance');
    el.addEventListener('mouseenter', function (e) { open(key, e.clientX, e.clientY, false); });
    el.addEventListener('focus', function () { open(key, 0, 0, true); });
    el.addEventListener('blur', close);
  });

  // Clicking anywhere (e.g. opening a tile) dismisses the glance too.
  document.addEventListener('click', close, true);
})(window);
