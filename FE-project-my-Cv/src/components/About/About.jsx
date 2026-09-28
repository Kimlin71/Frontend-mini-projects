import SectionTitle from '../SectionTitle/SectionTitle'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <SectionTitle>About Me</SectionTitle>
      <p className="about-text">
        A passionate frontend developer with experience building responsive and
        accessible web applications. I enjoy turning complex problems into clean,
        intuitive user interfaces. Replace this text with your own summary.
      </p>
    </section>
  )
}
