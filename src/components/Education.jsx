import useScrollAnimation from '../hooks/useScrollAnimation';
import './Education.css';

export default function Education() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section container" id="education" ref={sectionRef}>
      <div className="animate-on-scroll">
        <span className="section-label">Education</span>
        <h2 className="section-title">Education & Certifications</h2>
      </div>

      <div className="education-grid stagger-children" style={{ marginTop: '2.5rem' }}>
        <div className="education-card card animate-on-scroll">
          <div className="education-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
            </svg>
          </div>
          <h3>Bachelor's Degree</h3>
          <span className="education-institution">Computer Science & Engineering</span>
          <span className="education-period">Graduation Year — 2022</span>
          <p className="education-details">
            Focused on data structures, algorithms, database management systems, and object-oriented programming with Java.
          </p>
        </div>

        <div className="education-card card animate-on-scroll">
          <div className="education-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h3>Professional Training</h3>
          <span className="education-institution">Infosys — Internal Training</span>
          <span className="education-period">2022</span>
          <p className="education-details">
            Completed Infosys foundation training covering Java, Spring Boot, SQL, and enterprise application development practices.
          </p>
        </div>
      </div>
    </section>
  );
}
