import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? 'text-indigo-400 font-semibold'
        : 'text-gray-300 hover:text-indigo-400'
    }`

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-400">&lt;/&gt;</span>
            <span className="text-xl font-bold text-white">DevSchool</span>
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkClass}>
              Accueil
            </NavLink>
            <NavLink to="/formations" className={linkClass}>
              Formations
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              <div className="block py-2">Accueil</div>
            </NavLink>
            <NavLink to="/formations" className={linkClass} onClick={() => setIsOpen(false)}>
              <div className="block py-2">Formations</div>
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
              <div className="block py-2">Contact</div>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}
