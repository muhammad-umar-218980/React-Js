import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-titles">
          <h1>Muhammad Umar</h1>
          <p className="subtitle">CSIT @ NEDUET</p>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header