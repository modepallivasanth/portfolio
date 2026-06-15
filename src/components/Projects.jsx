import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Scalable URL Shortener Service',
    description:
      'RESTful URL shortener backend built with Java 17 and Spring Boot 3. Features Base62 alias generation, Redis caching, URL analytics tracking, DTO validation, centralized exception handling, and a fully Dockerized setup.',
    tech: ['Java 17', 'Spring Boot 3', 'Redis', 'Docker', 'MySQL'],
    github: 'https://github.com/modepallivasanth/url-shortener',
  },
  {
    title: 'Flash Sale Engine',
    description:
      'High-concurrency backend system designed to handle flash sale events with inventory management, order processing, and race-condition prevention using distributed locks and optimistic concurrency.',
    tech: ['Java', 'Spring Boot', 'Redis', 'Docker Compose', 'Maven'],
    github: 'https://github.com/modepallivasanth/flash-sale-engine',
  },
];

export default function Projects() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section container" id="projects" ref={sectionRef}>
      <div className="animate-on-scroll">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Personal projects demonstrating backend engineering skills.
        </p>
      </div>

      <div className="projects-grid stagger-children" style={{ marginTop: '2.5rem' }}>
        {PROJECTS.map((project, i) => (
          <article className="project-card card animate-on-scroll" key={i}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-sidebar">
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="project-tech-chip" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    className="project-link"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
