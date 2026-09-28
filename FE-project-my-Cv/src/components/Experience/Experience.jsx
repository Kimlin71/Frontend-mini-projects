import SectionTitle from '../SectionTitle/SectionTitle'
import './Experience.css'

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Company Name',
    period: '2023 – Present',
    description: 'Describe your responsibilities and achievements here.',
  },
  {
    id: 2,
    role: 'Junior Developer',
    company: 'Previous Company',
    period: '2021 – 2023',
    description: 'Describe your responsibilities and achievements here.',
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
