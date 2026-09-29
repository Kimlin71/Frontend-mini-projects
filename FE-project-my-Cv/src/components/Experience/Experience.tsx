import SectionTitle from '../SectionTitle/SectionTitle'
import './Experience.css'

const experiences = [
  {
    id: 1,
    role: 'Founder | Applied AI & Systems Architect',
    company: 'Emvex Inc.',
    period: '2024 – Present',
    description:
      'Building an AI-powered healthcare platform combining biosensor data, agentic systems, and real-time decision support. Authored a US provisional patent covering the architecture and AI-assisted intervention model. Established research collaboration with Lund University and secured investor engagement.',
  },
  {
    id: 2,
    role: 'Founder | Applied AI Consultant',
    company: 'EQIT Innovations Sweden AB',
    period: '2024 – Present',
    description:
      'Helping organizations bridge the gap between emerging AI capabilities, business outcomes, and successful adoption. Advise leaders on AI strategy, design workshops, and deliver keynote presentations combining technology, behavioral science, and systems thinking.',
  },
  {
    id: 3,
    role: 'Release Train Engineer | Delivery & Platform Transformation',
    company: 'Handelsbanken',
    period: '2022 – 2026',
    description:
      'Led coordinated delivery for a business-critical banking platform. Co-led delivery across 15 teams and approximately 185 professionals. Owned planning, dependency management, risk, budgets, quality gates, and stakeholder alignment while supporting DevSecOps and CI/CD practices.',
  },
  {
    id: 4,
    role: 'Executive Coach',
    company: 'BetterUp',
    period: '2024 – 2026',
    description:
      'Coached senior leaders on leadership effectiveness, strategic thinking, and organizational impact in high-growth and complex environments. Applied evidence-based approaches focused on sustainable performance and development.',
  },
  {
    id: 5,
    role: 'Transformation Consultant',
    company: 'Tetra Pak',
    period: '2023 – 2024',
    description:
      'Improved delivery structures and decision-making within a complex cyber-physical product environment. Introduced Power BI-based progress metrics, redesigned planning practices, and facilitated collaboration among leadership, product, engineering, and operational stakeholders.',
  },
  {
    id: 6,
    role: 'Founder | Leadership & Organizational Effectiveness',
    company: 'WeLearnIT',
    period: '2016 – 2024',
    description:
      'Supported organizations, leaders, and teams navigating change and building high-performance environments. Clients included IKEA, Tetra Pak, H&M, Volvo Cars, King, and Hästens Beds. Delivered programs covering leadership development, resilience, psychological safety, and emotional intelligence.',
  },
  {
    id: 7,
    role: 'Transformation Consultant | Leadership & Organizational Development',
    company: 'H&M Group',
    period: '2021 – 2022',
    description:
      'Built leadership, learning, and coaching capability supporting Business Tech at enterprise scale. Mentored leaders and practitioners across a 300+ team environment and created a Coach Hub that expanded access to professional coaching.',
  },
  {
    id: 8,
    role: 'Director of IT & Customer Solutions',
    company: 'inriver',
    period: '2015 – 2016',
    description:
      'Led customer-facing technical delivery, cloud operations, and service organizations supporting enterprise software implementations at global scale. Managed Microsoft Azure SaaS operations, training academy, certification, and customer success programs.',
  },
  {
    id: 9,
    role: 'Software & Web Developer',
    company: 'Thorn Lighting',
    period: '1999 – 2006',
    description:
      'Developed Nordic web platforms, CMS solutions, and internal business applications using ASP, JavaScript, and SQL. Built the technical foundation of a career spanning web development, systems design, and digital product delivery.',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
