'use client'

export default function Navbar({ activePage, setActivePage }) {
  const navItems = ['about', 'resume', 'projects', 'blog', 'contact']

  const getDisplayName = (item) => {
    if (item === 'projects') return 'Projects'
    return item.charAt(0).toUpperCase() + item.slice(1)
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map(item => (
          <li className="navbar-item" key={item}>
            <button
              className={`navbar-link ${activePage === item ? 'active' : ''}`}
              onClick={() => setActivePage(item)}
            >
              {getDisplayName(item)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
