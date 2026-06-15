const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const nav = document.querySelector('.nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('is-open');
  });

  // Close menu on scroll
  document.addEventListener('scroll', () => {
    if (navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }, { passive: true });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && !nav.contains(e.target)) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
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

// Scroll Animation Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fade-in-up 0.8s ease forwards';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply observer to cards and sections
document.querySelectorAll('.card, .section-heading, .skills-table > div').forEach(el => {
  el.style.opacity = '0'; // initially hidden
  observer.observe(el);
});