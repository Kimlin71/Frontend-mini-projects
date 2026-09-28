import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import './App.css'

export default function App() {
  return (
    <div className="cv-layout">
      <Header />
      <main className="cv-main">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
