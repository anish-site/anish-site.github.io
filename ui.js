/* ============================================================
   Shared UI pieces used by every page (load after data.js):
     UI.state({...})  -> HTML for a loading / empty / error screen
     UI.skeleton(n)   -> HTML for n placeholder cards while loading
     Mobile menu      -> hamburger + dropdown, built from data.js
   ============================================================ */
(function (global) {
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  var ICON = {
    empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
    error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    missing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M8.5 11h5"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path class="mb-1" d="M4 7h16"/><path class="mb-2" d="M4 12h16"/><path class="mb-3" d="M4 17h16"/></svg>'
  };

  // kind: 'empty' | 'error' | 'missing'. `action` is trusted HTML (a button or link).
  function state(o) {
    var role = o.kind === 'error' ? 'alert' : 'status';
    return '<div class="state state-' + o.kind + '" role="' + role + '">' +
      '<span class="state-ico">' + (ICON[o.kind] || ICON.empty) + '</span>' +
      '<h2 class="state-title">' + esc(o.title) + '</h2>' +
      (o.text ? '<p class="state-text">' + esc(o.text) + '</p>' : '') +
      (o.action ? '<div class="state-actions">' + o.action + '</div>' : '') +
      '</div>';
  }

  function skeleton(n, label) {
    var card = '<div class="c-card skeleton" aria-hidden="true">' +
      '<span class="sk sk-title"></span><span class="sk sk-meta"></span>' +
      '<span class="sk sk-line"></span><span class="sk sk-line"></span><span class="sk sk-line sk-short"></span></div>';
    return '<p class="sr-only">' + esc(label || 'Loading…') + '</p>' +
      '<div class="cards">' + new Array(n + 1).join(card) + '</div>';
  }

  // Put a button into its busy state (disabled + label) or back again.
  function busy(btn, on, label) {
    if (!btn) return;
    if (on) {
      btn.dataset.label = btn.textContent;
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      btn.textContent = label || 'Working…';
    } else {
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      if (btn.dataset.label) btn.textContent = btn.dataset.label;
    }
  }

  global.UI = { state: state, skeleton: skeleton, busy: busy, esc: esc };

  // ---------------- Mobile menu ----------------
  function initMenu() {
    var bar = document.querySelector('.topbar');
    var cta = bar && bar.querySelector('.topbar-cta');
    if (!cta || typeof PORTFOLIO === 'undefined') return;

    var params = new URLSearchParams(location.search);
    var page = location.pathname.split('/').pop() || 'index.html';
    var current = page === 'post.html' ? 'blog' : (page === 'detail.html' ? (params.get('s') || PORTFOLIO.order[0]) : 'home');

    var links = '<a class="m-link" href="index.html"' + (current === 'home' ? ' aria-current="page"' : '') + '>Home</a>' +
      PORTFOLIO.order.map(function (k) {
        var s = PORTFOLIO.sections[k];
        return '<a class="m-link" href="detail.html?s=' + k + '"' + (current === k ? ' aria-current="page"' : '') + '>' +
          '<span class="m-ico">' + s.icon + '</span>' + esc(s.label) + '</a>';
      }).join('');

    // Social links move from the topbar into the menu on small screens.
    var social = Array.prototype.map.call(cta.querySelectorAll('.icon-btn'), function (a) {
      return '<a class="m-social-link" href="' + esc(a.getAttribute('href')) + '"' +
        (a.target ? ' target="_blank" rel="noopener"' : '') + '>' +
        a.innerHTML + '<span>' + esc(a.getAttribute('aria-label') || '') + '</span></a>';
    }).join('');

    var panel = document.createElement('nav');
    panel.className = 'm-menu';
    panel.id = 'm-menu';
    panel.setAttribute('aria-label', 'Site');
    panel.innerHTML = '<div class="wrap m-menu-inner">' + links + '<div class="m-social">' + social + '</div></div>';
    bar.appendChild(panel);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'menu-btn';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'm-menu');
    btn.innerHTML = ICON.menu;
    cta.appendChild(btn);

    function set(open) {
      panel.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    btn.addEventListener('click', function () { set(!panel.classList.contains('open')); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('click', function (e) {
      if (panel.classList.contains('open') && !bar.contains(e.target)) set(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) { set(false); btn.focus(); }
    });
    var desktop = global.matchMedia ? global.matchMedia('(min-width: 721px)') : null;
    if (desktop) {
      var close = function (mq) { if (mq.matches) set(false); };
      desktop.addEventListener ? desktop.addEventListener('change', close) : desktop.addListener(close);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMenu);
  else initMenu();
})(window);
