import SectionTitle from '../SectionTitle/SectionTitle'
import './Skills.css'

const skills = [
  { category: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { category: 'Frameworks', items: ['React', 'Vue', 'Node.js'] },
  { category: 'Tools', items: ['Git', 'Vite', 'Figma', 'VS Code'] },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="skills-groups">
        {skills.map(({ category, items }) => (
          <div key={category} className="skills-group">
            <h3 className="skills-category">{category}</h3>
            <ul className="skills-list">
              {items.map((skill) => (
                <li key={skill} className="skills-tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
