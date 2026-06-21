/* ============================================================
   Dark / light theme toggle.
   The initial theme is set by a tiny inline script in <head> (to avoid
   a flash). This file just wires up the toggle button(s).
   ============================================================ */
(function () {
  function current() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }
  function apply(theme) {
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem('theme', theme); } catch (e) {}
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
      b.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    });
  }
  function toggle() { apply(current() === 'light' ? 'dark' : 'light'); }

  document.querySelectorAll('.theme-toggle').forEach(function (b) {
    b.addEventListener('click', toggle);
  });
  // reflect initial state on the button label
  apply(current());
})();
