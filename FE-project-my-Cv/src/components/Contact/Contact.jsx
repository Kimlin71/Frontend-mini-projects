import SectionTitle from '../SectionTitle/SectionTitle'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ul className="contact-list">
        <li><span className="contact-label">Email</span><a href="mailto:you@example.com">you@example.com</a></li>
        <li><span className="contact-label">LinkedIn</span><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a></li>
        <li><span className="contact-label">GitHub</span><a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a></li>
      </ul>
    </section>
  )
}
