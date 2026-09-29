// PROTOTYPE — Variant A: Leaf Mark
// Two-column: white sidebar with bold teal left border; Century Gothic name as centrepiece
import './VariantA.css'

const experiences = [
  { id: 1, role: 'Founder — Applied AI & Systems Architect', company: 'Emvex Inc.', period: '2024 – Present', description: 'Building an AI-powered healthcare platform combining biosensor data, agentic systems, and real-time decision support. Authored a US provisional patent covering the architecture and AI-assisted intervention model. Established research collaboration with Lund University and secured investor engagement.' },
  { id: 2, role: 'Founder — Applied AI Consultant', company: 'EQIT Innovations Sweden AB', period: '2024 – Present', description: 'Helping organisations bridge the gap between emerging AI capabilities, business outcomes, and successful adoption. Advise leaders on AI strategy, design workshops, and deliver keynote presentations combining technology, behavioural science, and systems thinking.' },
  { id: 3, role: 'Release Train Engineer — Delivery & Platform Transformation', company: 'Handelsbanken', period: '2022 – 2026', description: 'Led coordinated delivery for a business-critical banking platform. Co-led delivery across 15 teams and approximately 185 professionals. Owned planning, dependency management, risk, budgets, quality gates, and stakeholder alignment.' },
  { id: 4, role: 'Executive Coach', company: 'BetterUp', period: '2024 – 2026', description: 'Coached senior leaders on leadership effectiveness, strategic thinking, and organisational impact in high-growth and complex environments.' },
  { id: 5, role: 'Transformation Consultant', company: 'Tetra Pak', period: '2023 – 2024', description: 'Improved delivery structures and decision-making within a complex cyber-physical product environment. Introduced Power BI-based progress metrics and redesigned planning practices.' },
  { id: 6, role: 'Founder — Leadership & Organisational Effectiveness', company: 'WeLearnIT', period: '2016 – 2024', description: 'Supported organisations, leaders, and teams navigating change. Clients included IKEA, Tetra Pak, H&M, Volvo Cars, King, and Hästens Beds.' },
  { id: 7, role: 'Transformation Consultant — Leadership & Organisational Development', company: 'H&M Group', period: '2021 – 2022', description: 'Built leadership, learning, and coaching capability supporting Business Tech at enterprise scale across 300+ teams.' },
  { id: 8, role: 'Director of IT & Customer Solutions', company: 'inriver', period: '2015 – 2016', description: 'Led customer-facing technical delivery, cloud operations, and service organisations supporting enterprise software implementations at global scale.' },
  { id: 9, role: 'Software & Web Developer', company: 'Thorn Lighting', period: '1999 – 2006', description: 'Developed Nordic web platforms, CMS solutions, and internal business applications using ASP, JavaScript, and SQL.' },
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
  'ACC — International Coaching Federation',
  'SPC 4, SAFe Program Consultant',
  'PSM I, Professional Scrum Master',
  'EQ-i 2.0 and EQ 360',
  'Licensed Management 3.0 Facilitator',
  'NLP Practitioner',
]

export default function VariantA() {
  return (
    <div className="va-root">
      <aside className="va-sidebar">
        {/* Leaf motif: two overlapping SVG arcs echoing the WeLearnIT lotus */}
        <svg className="va-leaf" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 44 C10 44 4 30 4 18 C14 18 24 24 24 44Z" fill="#3ba2a4" opacity="0.85"/>
          <path d="M24 44 C38 44 44 30 44 18 C34 18 24 24 24 44Z" fill="#7eccc7" opacity="0.7"/>
          <path d="M24 44 C24 28 18 18 8 10 C16 10 24 18 24 44Z" fill="#3ba2a4" opacity="0.4"/>
        </svg>

        <h1 className="va-name">Kim<br />Lindberg</h1>
        <p className="va-title">Applied AI &amp; Agentic Systems Consultant</p>
        <p className="va-location">Landskrona, Sweden</p>

        <section className="va-sidebar-section">
          <h2 className="va-sidebar-heading">Contact</h2>
          <ul className="va-contact">
            <li><span className="va-contact-label">Email</span><a href="mailto:kim@eqit.ai">kim@eqit.ai</a></li>
            <li><span className="va-contact-label">Phone</span><a href="tel:+46705678099">+46 70 567 80 99</a></li>
            <li><span className="va-contact-label">LinkedIn</span><a href="https://www.linkedin.com/in/kim-lindberg-eq4success" target="_blank" rel="noreferrer">kim-lindberg-eq4success</a></li>
          </ul>
        </section>

        <section className="va-sidebar-section">
          <h2 className="va-sidebar-heading">Skills</h2>
          {skills.map(({ category, items }) => (
            <div key={category} className="va-skill-group">
              <h3 className="va-skill-category">{category}</h3>
              <div className="va-skill-tags">
                {items.map((s) => <span key={s} className="va-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </section>

        <section className="va-sidebar-section">
          <h2 className="va-sidebar-heading">Certifications</h2>
          <ul className="va-cert-list">
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>
      </aside>

      <main className="va-main">
        <section className="va-section">
          <h2 className="va-section-heading">Profile</h2>
          <p className="va-body">
            Twenty years of leading large-scale transformation — from banking platforms
            to AI-powered healthcare — grounded in organisational psychology and
            executive coaching. I design and build agentic AI systems that move
            organisations from experimentation to measurable results.
          </p>
        </section>

        <section className="va-section">
          <h2 className="va-section-heading">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="va-exp-item">
              <div className="va-exp-header">
                <div>
                  <h3 className="va-exp-role">{exp.role}</h3>
                  <p className="va-exp-company">{exp.company}</p>
                </div>
                <span className="va-exp-period">{exp.period}</span>
              </div>
              <p className="va-body">{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="va-section">
          <h2 className="va-section-heading">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="va-edu-item">
              <div className="va-exp-header">
                <div>
                  <h3 className="va-exp-role">{edu.degree}</h3>
                  <p className="va-exp-company">{edu.school}</p>
                </div>
                <span className="va-exp-period">{edu.period}</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
