import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: ['Java 8/17', 'SQL', 'PL/SQL', 'Python'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Spring MVC', 'REST APIs', 'Microservices', 'Hibernate', 'Spring Data JPA'],
  },
  {
    title: 'Databases',
    skills: ['Oracle Database', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Postman', 'Maven', 'IntelliJ IDEA', 'Docker', 'Linux', 'Cron Jobs'],
  },
  {
    title: 'Concepts',
    skills: ['Backend Automation', 'Data Reconciliation', 'API Integration', 'SQL Optimization', 'RCA', 'JSON Processing'],
  },
];

export default function Skills() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section container" id="skills" ref={sectionRef}>
      <div className="animate-on-scroll">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with daily.
        </p>
      </div>

      <div className="skills-container animate-on-scroll" style={{ marginTop: '2.5rem' }}>
        <div className="skills-editor">
          <div className="skills-tab-bar">
            <div className="skills-tab-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="skills-tab active">Skills.java</span>
          </div>

          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-title">
                  <span className="keyword">const</span>
                  {group.title}
                  <span className="bracket">= [</span>
                </div>
                <div className="skill-chips">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      "{skill}"
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
