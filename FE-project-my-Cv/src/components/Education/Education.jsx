import SectionTitle from '../SectionTitle/SectionTitle'
import './Education.css'

const education = [
  {
    id: 1,
    degree: 'B.Sc. Computer Science',
    school: 'University Name',
    period: '2017 – 2021',
  },
]

export default function Education() {
  return (
    <section className="education" id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              <div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
              </div>
              <span className="education-period">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
