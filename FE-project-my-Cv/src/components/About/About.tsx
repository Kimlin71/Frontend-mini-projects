import SectionTitle from '../SectionTitle/SectionTitle'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <SectionTitle>About Me</SectionTitle>
      <p className="about-text">
        I combine 20+ years of experience leading large-scale transformation
        initiatives, technical delivery, and executive stakeholder engagement
        with hands-on work in Applied AI, Agentic Systems, and software
        development. I design and build AI-powered solutions, multi-agent
        systems, and orchestration frameworks that help organizations move from
        experimentation to measurable business value. My background in
        organizational psychology, coaching, and leadership development gives
        me a unique perspective on how human behavior influences technology
        adoption and business results.
      </p>
      <p className="about-text">
        I am currently completing a 9-month frontend development training
        programme, deepening my practical skills in HTML, CSS, TypeScript, and
        React as part of my Applied AI &amp; Agentic Systems work.
      </p>
    </section>
  )
}
