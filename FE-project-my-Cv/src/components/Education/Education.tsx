import SectionTitle from '../SectionTitle/SectionTitle'
import './Education.css'

const education = [
  {
    id: 1,
    degree: 'Frontend Development Training Programme',
    school: 'Applied AI & Agentic Systems Curriculum',
    period: '2025 – Present',
  },
  {
    id: 2,
    degree: "Master's degree, Information Technology",
    school: 'Malmö University',
    period: '1999',
  },
  {
    id: 3,
    degree: 'Generative AI for Educators',
    school: 'Vanderbilt University',
    period: '2023',
  },
  {
    id: 4,
    degree: 'Advanced Leadership and Coaching',
    school: 'Coachwalk Academy',
    period: '2019 – 2020',
  },
  {
    id: 5,
    degree: 'Simply ADHD',
    school: 'ADD Coach Academy (ADDCA)',
    period: '2020',
  },
]

const certifications = [
  { name: 'Associated Certified Coach (ACC)', issuer: 'International Coaching Federation', year: '2016' },
  { name: 'SPC 4, SAFe Program Consultant', issuer: 'Scaled Agile, Inc.', year: '2018' },
  { name: 'PSM I, Professional Scrum Master', issuer: 'Scrum.org', year: '2016' },
  { name: 'EQ-i 2.0 and EQ 360', issuer: 'Multi-Health Systems Inc.', year: '2019' },
  { name: 'LAB Profile – Advanced Business Influence', issuer: 'LAB Profile', year: '2018' },
  { name: 'Facilitator Integration', issuer: 'Six Seconds, The Emotional Intelligence Network', year: '2022' },
  { name: 'Design Sprint Masterclass', issuer: 'AJ&Smart', year: '2022' },
  { name: 'Prosci ADKAR', issuer: 'Dataföreningen i Sverige', year: '2017' },
  { name: 'Non Violent Communication', issuer: 'Friare Liv AB', year: '2024' },
  { name: 'Interview & Interrogation', issuer: 'Applied Behavior Research', year: '2024' },
  { name: 'Licensed Management 3.0 Facilitator', issuer: 'Management 3.0', year: '2016' },
  { name: 'NLP Practitioner', issuer: 'NFNLP', year: '2012' },
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
      <SectionTitle>Certifications</SectionTitle>
      <div className="education-list">
        {certifications.map((cert) => (
          <div key={cert.name} className="education-item">
            <div className="education-header">
              <div>
                <h3 className="education-degree">{cert.name}</h3>
                <p className="education-school">{cert.issuer}</p>
              </div>
              <span className="education-period">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
