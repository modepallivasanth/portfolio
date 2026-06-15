import { useState, useEffect } from 'react';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Impact', href: '#impact' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Close mobile menu on scroll
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Active section tracking
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="header">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Vasanth M — home">
          <span className="brand-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
            </svg>
          </span>
          <span>Vasanth M</span>
        </a>

        {/* Mobile overlay */}
        <div
          className={`nav-overlay${menuOpen ? ' is-visible' : ''}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Toggle button */}
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>

        {/* Nav links */}
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="nav-links">
          {menuOpen && (
            <button
              className="nav-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="18" height="18">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}

          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              className={`nav-link${activeSection === item.href ? ' active' : ''}`}
              href={item.href}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}

          <a
            className="nav-resume-btn"
            href="/assets/Vasanth__Modepalli__Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
