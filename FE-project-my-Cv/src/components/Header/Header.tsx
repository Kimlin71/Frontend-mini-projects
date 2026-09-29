import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* WeLearnIT lotus mark */}
        <svg className="header-leaf" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 44 C10 44 4 30 4 18 C14 18 24 24 24 44Z" fill="#3ba2a4" opacity="0.85"/>
          <path d="M24 44 C38 44 44 30 44 18 C34 18 24 24 24 44Z" fill="#7eccc7" opacity="0.7"/>
          <path d="M24 44 C24 28 18 18 8 10 C16 10 24 18 24 44Z" fill="#3ba2a4" opacity="0.4"/>
        </svg>
        <h1 className="header-name">Kim<br />Lindberg</h1>
        <p className="header-title">Applied AI &amp; Agentic Systems Consultant</p>
        <p className="header-location">Landskrona, Sweden</p>
      </div>
    </header>
  )
}
