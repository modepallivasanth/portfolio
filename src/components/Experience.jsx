import useScrollAnimation from '../hooks/useScrollAnimation';
import './Experience.css';

const EXPERIENCES = [
  {
    role: 'Senior Systems Engineer',
    company: 'Infosys Ltd.',
    period: 'Jan 2024 — Present',
    location: 'Bangalore',
    achievements: [
      'Develop backend modules for India\'s Income Tax Portal — ITR verification, refund-related communication, and downstream data exchange.',
      'Build automation utilities for SQL-heavy reconciliation workflows, JSON payload generation, and interface-triggered feed processing.',
      'Investigate production issues across database records, API payloads, interface behavior, and backend application flow.',
      'Configure communication-service templates using DB-backed FreeMarker HTML templates and dynamic JSON payload mapping.',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Infosys Ltd.',
    period: 'Nov 2022 — Jan 2024',
    location: 'Bangalore',
    achievements: [
      'Maintained backend stability for critical income-tax portal modules during high-volume filing periods.',
      'Performed root cause analysis for transaction failures and backend data issues across Java service logic, database records, and external interface payloads.',
      'Supported REST API testing, payload validation, database verification, and production issue resolution using Postman, SQL, logs, and internal debugging workflows.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section container" id="experience" ref={sectionRef}>
      <div className="animate-on-scroll">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Backend development and production engineering at enterprise scale.
        </p>
      </div>

      <div className="experience-list stagger-children" style={{ marginTop: '2.5rem' }}>
        {EXPERIENCES.map((exp, i) => (
          <article className="experience-card card animate-on-scroll" key={i}>
            <div className="experience-header">
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-meta">
                <span>{exp.company}</span>
                <span className="separator">·</span>
                <span>{exp.period}</span>
                <span className="separator">·</span>
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="experience-achievements">
              {exp.achievements.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
