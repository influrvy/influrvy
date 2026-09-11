(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const meta = document.querySelector('meta[name="theme-color"]');
  const storageKey = 'influrvy-theme';

  const setTheme = (theme) => {
    const isLight = theme === 'light';
    root.dataset.theme = theme;
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(isLight));
      toggle.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
      toggle.title = isLight ? 'Ativar modo escuro' : 'Ativar modo claro';
      const label = toggle.querySelector('.theme-toggle-label');
      if (label) label.textContent = isLight ? 'Modo escuro' : 'Modo claro';
    }
    if (meta) meta.content = isLight ? '#f7f6ff' : '#090a12';
  };

  let savedTheme = null;
  try { savedTheme = localStorage.getItem(storageKey); } catch (_) {}
  setTheme(savedTheme === 'light' ? 'light' : 'dark');

  toggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try { localStorage.setItem(storageKey, nextTheme); } catch (_) {}
  });
})();
