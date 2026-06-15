import './Hero.css';

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-content">
        <span className="hero-greeting">
          <span>☕</span> Hello, World!
        </span>

        <h1 className="hero-title">
          <span className="gradient-text">
            I'm Vasanth.
          </span>
        </h1>

        <p className="hero-role">Java Backend Developer · Spring Boot · Microservices</p>

        <p className="hero-description">
          I build robust backend systems, optimize SQL-heavy workflows, and craft scalable
          microservices. 3.7 years of shipping production code at enterprise scale.
        </p>

        <div className="hero-actions" aria-label="Primary actions">
          <a
            className="btn btn-primary"
            href="/assets/Vasanth__Modepalli__Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-resume-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <a
            className="btn btn-secondary"
            href="mailto:vasanthmodepalli@gmail.com?subject=Java%20Backend%20Developer%20Opportunity"
            id="hero-contact-btn"
          >
            Let's Connect
          </a>
        </div>
      </div>

      <aside className="profile-card card" aria-label="Profile summary">
        <div className="profile-card-header">
          <span className="profile-card-dot" />
          <span className="profile-card-status">Open to opportunities</span>
        </div>
        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-label">Experience</span>
            <span className="profile-stat-value">3.7 Years</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-label">Current Role</span>
            <span className="profile-stat-value">Senior Systems Engineer, Infosys</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-label">Location</span>
            <span className="profile-stat-value">Bangalore, India</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-label">Core Stack</span>
            <span className="profile-stat-value">Java · Spring Boot · Oracle SQL · Python · React</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
