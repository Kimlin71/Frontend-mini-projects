import SectionTitle from '../SectionTitle/SectionTitle'
import './Skills.css'

const skills = [
  { category: 'Languages & Markup', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', 'YAML'] },
  { category: 'Frameworks & Runtimes', items: ['React', 'Node.js'] },
  { category: 'AI & Agentic', items: ['Applied AI', 'Agentic AI Development'] },
  { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Jira'] },
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
