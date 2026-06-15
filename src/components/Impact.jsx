import useScrollAnimation from '../hooks/useScrollAnimation';
import './Impact.css';

const IMPACTS = [
  {
    labels: ['Automation', 'Internal Utility'],
    title: 'ITR Verification Feed Reconciliation',
    description:
      'Built a utility to identify verified ITR submissions whose downstream verification feeds were missed, generate JSON payloads from Oracle records, and trigger feed submission through an existing interface.',
    metrics: [
      { label: 'Impact', value: 'Processed 4,000–5,000 records in under 5 minutes' },
      { label: 'Stack', value: 'Python, Oracle SQL, FastAPI, Postman flow replacement' },
    ],
  },
  {
    labels: ['Microservice', 'Templates'],
    title: 'Taxpayer Communication Templates',
    description:
      'Onboarded taxpayer notification templates in an existing communication microservice using DB-backed FreeMarker HTML templates, JSON payload mapping, and Zebra email service integration.',
    metrics: [
      { label: 'Impact', value: 'Configured 22 notification templates' },
      { label: 'Stack', value: 'FreeMarker, JSON payload mapping, database configuration' },
    ],
  },
];

export default function Impact() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section container" id="impact" ref={sectionRef}>
      <div className="animate-on-scroll">
        <span className="section-label">Impact</span>
        <h2 className="section-title">Work Highlights</h2>
        <p className="section-subtitle">
          Real backend problems solved at enterprise scale — summarized without exposing internal details.
        </p>
      </div>

      <div className="impact-grid stagger-children" style={{ marginTop: '2.5rem' }}>
        {IMPACTS.map((impact, i) => (
          <article className="impact-card card animate-on-scroll" key={i}>
            <div className="impact-labels">
              {impact.labels.map((label) => (
                <span className="impact-label" key={label}>{label}</span>
              ))}
            </div>
            <h3>{impact.title}</h3>
            <p>{impact.description}</p>
            <div className="impact-metrics">
              {impact.metrics.map((metric, j) => (
                <div className="impact-metric" key={j}>
                  <strong>{metric.label}:</strong>
                  <span>{metric.value}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
