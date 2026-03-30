import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-indigo-400">&lt;/&gt;</span>
              <span className="text-xl font-bold text-white">DevSchool</span>
            </div>
            <p className="text-sm">
              Former les développeurs de demain avec des programmes innovants et
              un accompagnement personnalisé.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="hover:text-indigo-400 transition-colors">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/formations" className="hover:text-indigo-400 transition-colors">
                  Formations
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>12 Rue de la Programmation, 75001 Paris</li>
              <li>contact@devschool.fr</li>
              <li>01 23 45 67 89</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DevSchool. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
