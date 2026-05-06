const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('is-open');
  });
}

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = 'Copied';
      setTimeout(() => button.textContent = 'Copy Email', 1500);
    } catch {
      button.textContent = 'Copy failed';
      setTimeout(() => button.textContent = 'Copy Email', 1500);
    }
  });
});