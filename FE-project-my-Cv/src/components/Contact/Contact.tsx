import SectionTitle from '../SectionTitle/SectionTitle'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <SectionTitle>Contact</SectionTitle>
      <ul className="contact-list">
        <li><span className="contact-label">Email</span><a href="mailto:kim@eqit.ai">kim@eqit.ai</a></li>
        <li><span className="contact-label">Phone</span><a href="tel:+46705678099">+46 70 567 80 99</a></li>
        <li><span className="contact-label">LinkedIn</span><a href="https://www.linkedin.com/in/kim-lindberg-eq4success" target="_blank" rel="noreferrer">linkedin.com/in/kim-lindberg-eq4success</a></li>
        <li><span className="contact-label">Location</span><span>Landskrona, Sweden</span></li>
      </ul>
    </section>
  )
}
