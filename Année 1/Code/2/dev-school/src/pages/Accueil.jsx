import { Link } from 'react-router-dom'

export default function Accueil() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Devenez <span className="text-indigo-400">développeur</span> avec DevSchool
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              Une école moderne dédiée aux métiers du numérique. Apprenez à coder,
              concevez des applications et lancez votre carrière dans la tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/formations"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Découvrir nos formations
              </Link>
              <Link
                to="/contact"
                className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi DevSchool */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Pourquoi choisir <span className="text-indigo-400">DevSchool</span> ?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Nous combinons pédagogie innovante, projets concrets et accompagnement
            individualisé pour vous garantir une insertion professionnelle réussie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-indigo-500 transition-colors">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Apprentissage par la pratique</h3>
              <p className="text-gray-400">
                80% de nos cours sont basés sur des projets réels. Vous apprenez en
                construisant des applications concrètes dès la première semaine.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-indigo-500 transition-colors">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Formateurs experts</h3>
              <p className="text-gray-400">
                Nos intervenants sont des professionnels en activité dans les
                meilleures entreprises tech de France et d'Europe.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-indigo-500 transition-colors">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">95% d'insertion pro</h3>
              <p className="text-gray-400">
                Grâce à notre réseau de partenaires et notre accompagnement carrière,
                95% de nos diplômés trouvent un emploi dans les 3 mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold">500+</p>
              <p className="mt-2 text-indigo-200">Étudiants formés</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold">95%</p>
              <p className="mt-2 text-indigo-200">Taux d'insertion</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold">50+</p>
              <p className="mt-2 text-indigo-200">Entreprises partenaires</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold">4.8/5</p>
              <p className="mt-2 text-indigo-200">Satisfaction étudiants</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre carrière dans le développement ?
          </h2>
          <p className="text-gray-400 mb-8">
            Rejoignez DevSchool et transformez votre passion pour la technologie en
            une carrière épanouissante. Les inscriptions pour la prochaine session
            sont ouvertes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Candidater maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}
