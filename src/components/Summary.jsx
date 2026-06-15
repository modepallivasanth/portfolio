import useScrollAnimation from '../hooks/useScrollAnimation';
import './Summary.css';

export default function Summary() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="summary-section container" ref={sectionRef}>
      <div className="summary-card card animate-on-scroll">
        <p className="summary-text">
          <strong>Java Backend Developer</strong> with 3.5 years of experience building and maintaining 
          enterprise-scale backend systems for India's Income Tax portal. Proficient in <strong>Spring Boot</strong>,{' '}
          <strong>REST APIs</strong>, <strong>Oracle SQL</strong>, and <strong>Python automation</strong>. 
          I specialize in backend module development, production debugging, data reconciliation utilities, 
          and microservice template configuration.
        </p>
        <p className="summary-looking">
          Looking for Java Backend Developer, Spring Boot Engineer, and Backend Software Engineer roles
          where I can contribute to high-impact systems.
        </p>
      </div>
    </section>
  );
}
