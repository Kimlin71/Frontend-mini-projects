import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-avatar">YN</div>
        <div className="header-info">
          <h1 className="header-name">Your Name</h1>
          <p className="header-title">Frontend Developer</p>
          <p className="header-location">City, Country</p>
        </div>
      </div>
    </header>
  )
}
