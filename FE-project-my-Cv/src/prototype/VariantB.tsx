// PROTOTYPE — Variant B: Teal Immersion
// Single column, full-width deep teal header bleeds edge-to-edge, white content body
import './VariantB.css'

const experiences = [
  { id: 1, role: 'Founder — Applied AI & Systems Architect', company: 'Emvex Inc.', period: '2024 – Present', description: 'Building an AI-powered healthcare platform combining biosensor data, agentic systems, and real-time decision support. Authored a US provisional patent covering the architecture and AI-assisted intervention model. Established research collaboration with Lund University and secured investor engagement.' },
  { id: 2, role: 'Founder — Applied AI Consultant', company: 'EQIT Innovations Sweden AB', period: '2024 – Present', description: 'Helping organisations bridge the gap between emerging AI capabilities, business outcomes, and successful adoption. Advise leaders on AI strategy, design workshops, and deliver keynote presentations combining technology, behavioural science, and systems thinking.' },
  { id: 3, role: 'Release Train Engineer — Delivery & Platform Transformation', company: 'Handelsbanken', period: '2022 – 2026', description: 'Led coordinated delivery for a business-critical banking platform. Co-led delivery across 15 teams and approximately 185 professionals. Owned planning, dependency management, risk, budgets, and quality gates.' },
  { id: 4, role: 'Executive Coach', company: 'BetterUp', period: '2024 – 2026', description: 'Coached senior leaders on leadership effectiveness, strategic thinking, and organisational impact in high-growth and complex environments.' },
  { id: 5, role: 'Transformation Consultant', company: 'Tetra Pak', period: '2023 – 2024', description: 'Improved delivery structures and decision-making within a complex cyber-physical product environment. Introduced Power BI-based progress metrics and redesigned planning practices.' },
  { id: 6, role: 'Founder — Leadership & Organisational Effectiveness', company: 'WeLearnIT', period: '2016 – 2024', description: 'Supported organisations, leaders, and teams navigating change. Clients included IKEA, Tetra Pak, H&M, Volvo Cars, King, and Hästens Beds.' },
  { id: 7, role: 'Transformation Consultant — L&OD', company: 'H&M Group', period: '2021 – 2022', description: 'Built leadership, learning, and coaching capability supporting Business Tech at enterprise scale across 300+ teams.' },
  { id: 8, role: 'Director of IT & Customer Solutions', company: 'inriver', period: '2015 – 2016', description: 'Led customer-facing technical delivery, cloud operations, and service organisations supporting enterprise software at global scale.' },
  { id: 9, role: 'Software & Web Developer', company: 'Thorn Lighting', period: '1999 – 2006', description: 'Developed Nordic web platforms, CMS solutions, and internal applications using ASP, JavaScript, and SQL.' },
]

const skills = [
  { category: 'Languages & Markup', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', 'YAML'] },
  { category: 'Frameworks', items: ['React', 'Node.js'] },
  { category: 'AI & Agentic', items: ['Applied AI', 'Agentic AI Development'] },
  { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Jira'] },
]

const education = [
  { id: 1, degree: 'Frontend Development Training Programme', school: 'Applied AI & Agentic Systems Curriculum', period: '2025 – Present' },
  { id: 2, degree: "Master's degree, Information Technology", school: 'Malmö University', period: '1999' },
  { id: 3, degree: 'Generative AI for Educators', school: 'Vanderbilt University', period: '2023' },
  { id: 4, degree: 'Advanced Leadership and Coaching', school: 'Coachwalk Academy', period: '2019 – 2020' },
]

const certifications = [
  { name: 'Associated Certified Coach (ACC)', issuer: 'International Coaching Federation' },
  { name: 'SPC 4, SAFe Program Consultant', issuer: 'Scaled Agile, Inc.' },
  { name: 'PSM I, Professional Scrum Master', issuer: 'Scrum.org' },
  { name: 'EQ-i 2.0 and EQ 360', issuer: 'Multi-Health Systems Inc.' },
  { name: 'Licensed Management 3.0 Facilitator', issuer: 'Management 3.0' },
  { name: 'NLP Practitioner', issuer: 'NFNLP' },
]

export default function VariantB() {
  return (
    <div className="vb-root">
      {/* The one bold move: full-width teal header, name large in white Century Gothic */}
      <header className="vb-header">
        <div className="vb-header-inner">
          <div className="vb-header-main">
            <h1 className="vb-name">Kim Lindberg</h1>
            <p className="vb-title">Applied AI &amp; Agentic Systems Consultant</p>
          </div>
          <div className="vb-header-contact">
            <div className="vb-contact-item">
              <span className="vb-contact-label">Email</span>
              <a href="mailto:kim@eqit.ai">kim@eqit.ai</a>
            </div>
            <div className="vb-contact-item">
              <span className="vb-contact-label">Phone</span>
              <a href="tel:+46705678099">+46 70 567 80 99</a>
            </div>
            <div className="vb-contact-item">
              <span className="vb-contact-label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/kim-lindberg-eq4success" target="_blank" rel="noreferrer">kim-lindberg-eq4success</a>
            </div>
            <div className="vb-contact-item">
              <span className="vb-contact-label">Location</span>
              <span>Landskrona, Sweden</span>
            </div>
          </div>
        </div>
      </header>

      <main className="vb-main">
        <section className="vb-section">
          <h2 className="vb-section-heading">Profile</h2>
          <p className="vb-body">
            Twenty years of leading large-scale transformation — from banking platforms
            to AI-powered healthcare — grounded in organisational psychology and
            executive coaching. I design and build agentic AI systems that move
            organisations from experimentation to measurable results.
          </p>
        </section>

        <section className="vb-section">
          <h2 className="vb-section-heading">Skills</h2>
          <div className="vb-skills-grid">
            {skills.map(({ category, items }) => (
              <div key={category} className="vb-skill-group">
                <h3 className="vb-skill-label">{category}</h3>
                <div className="vb-pills">
                  {items.map((s) => <span key={s} className="vb-pill">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="vb-section">
          <h2 className="vb-section-heading">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="vb-exp-item">
              <div className="vb-exp-meta">
                <div>
                  <h3 className="vb-exp-role">{exp.role}</h3>
                  <p className="vb-exp-company">{exp.company}</p>
                </div>
                <span className="vb-exp-period">{exp.period}</span>
              </div>
              <p className="vb-body vb-exp-desc">{exp.description}</p>
            </div>
          ))}
        </section>

        <div className="vb-two-col">
          <section className="vb-section">
            <h2 className="vb-section-heading">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="vb-edu-item">
                <h3 className="vb-exp-role">{edu.degree}</h3>
                <p className="vb-exp-company">{edu.school}</p>
                <p className="vb-exp-period vb-edu-period">{edu.period}</p>
              </div>
            ))}
          </section>

          <section className="vb-section">
            <h2 className="vb-section-heading">Certifications</h2>
            {certifications.map((c) => (
              <div key={c.name} className="vb-cert-item">
                <p className="vb-cert-name">{c.name}</p>
                <p className="vb-cert-issuer">{c.issuer}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}
