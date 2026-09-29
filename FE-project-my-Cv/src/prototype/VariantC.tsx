// PROTOTYPE — Variant C: Grey Ruled
// Three-zone layout: narrow teal accent strip | main content | right-margin metadata
// Periods and companies live in a right gutter — the one bold structural move
import './VariantC.css'

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
  { name: 'Associated Certified Coach (ACC)', issuer: 'ICF', year: '2016' },
  { name: 'SPC 4, SAFe Program Consultant', issuer: 'Scaled Agile', year: '2018' },
  { name: 'PSM I, Professional Scrum Master', issuer: 'Scrum.org', year: '2016' },
  { name: 'EQ-i 2.0 and EQ 360', issuer: 'MHS Inc.', year: '2019' },
  { name: 'Licensed Management 3.0 Facilitator', issuer: 'Management 3.0', year: '2016' },
  { name: 'NLP Practitioner', issuer: 'NFNLP', year: '2012' },
]

export default function VariantC() {
  return (
    <div className="vc-root">
      {/* Narrow teal accent strip */}
      <div className="vc-accent-strip" aria-hidden="true" />

      <div className="vc-body">
        {/* Header row: name left, contact right — no avatar, no separate header band */}
        <header className="vc-header">
          <div className="vc-header-name-block">
            <h1 className="vc-name">Kim Lindberg</h1>
            <p className="vc-title">Applied AI &amp; Agentic Systems Consultant</p>
          </div>
          {/* Right margin: location + contact */}
          <div className="vc-header-meta">
            <p className="vc-meta-location">Landskrona, Sweden</p>
            <a href="mailto:kim@eqit.ai" className="vc-meta-link">kim@eqit.ai</a>
            <a href="tel:+46705678099" className="vc-meta-link">+46 70 567 80 99</a>
            <a href="https://www.linkedin.com/in/kim-lindberg-eq4success" target="_blank" rel="noreferrer" className="vc-meta-link">LinkedIn</a>
          </div>
        </header>

        <div className="vc-ruled-line" />

        {/* Profile */}
        <div className="vc-row">
          <div className="vc-row-content">
            <p className="vc-body-text">
              Twenty years of leading large-scale transformation — from banking platforms
              to AI-powered healthcare — grounded in organisational psychology and
              executive coaching. I design and build agentic AI systems that move
              organisations from experimentation to measurable results.
            </p>
          </div>
          <div className="vc-row-margin" />
        </div>

        <div className="vc-ruled-line" />

        {/* Experience */}
        <div className="vc-section-row">
          <h2 className="vc-section-label">Experience</h2>
          <div className="vc-section-content">
            {experiences.map((exp) => (
              <div key={exp.id} className="vc-exp-item">
                <div className="vc-exp-main">
                  <h3 className="vc-exp-role">{exp.role}</h3>
                  <p className="vc-body-text">{exp.description}</p>
                </div>
                {/* The bold move: company + period live in the right margin */}
                <div className="vc-exp-margin">
                  <span className="vc-exp-company">{exp.company}</span>
                  <span className="vc-exp-period">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vc-ruled-line" />

        {/* Skills */}
        <div className="vc-section-row">
          <h2 className="vc-section-label">Skills</h2>
          <div className="vc-section-content">
            {skills.map(({ category, items }) => (
              <div key={category} className="vc-skill-group">
                <span className="vc-skill-cat">{category}</span>
                <div className="vc-skill-tags">
                  {items.map((s) => <span key={s} className="vc-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vc-ruled-line" />

        {/* Education + Certifications */}
        <div className="vc-section-row">
          <h2 className="vc-section-label">Education</h2>
          <div className="vc-section-content">
            {education.map((edu) => (
              <div key={edu.id} className="vc-exp-item">
                <div className="vc-exp-main">
                  <h3 className="vc-exp-role">{edu.degree}</h3>
                  <p className="vc-body-text" style={{ fontStyle: 'italic' }}>{edu.school}</p>
                </div>
                <div className="vc-exp-margin">
                  <span className="vc-exp-period">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vc-ruled-line" />

        <div className="vc-section-row">
          <h2 className="vc-section-label">Certifications</h2>
          <div className="vc-section-content vc-cert-grid">
            {certifications.map((c) => (
              <div key={c.name} className="vc-cert-item">
                <span className="vc-cert-name">{c.name}</span>
                <span className="vc-cert-meta">{c.issuer}, {c.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
