import { Link } from 'react-router-dom'

const formations = [
  {
    id: 1,
    titre: 'Développeur Web Full-Stack',
    duree: '12 mois',
    niveau: 'Bac+2 (Titre RNCP Niveau 5)',
    description:
      'Maîtrisez les technologies front-end et back-end pour créer des applications web complètes. HTML, CSS, JavaScript, React, Node.js, bases de données et déploiement.',
    modules: ['HTML / CSS / JavaScript', 'React & Vue.js', 'Node.js & Express', 'SQL & NoSQL', 'Git & DevOps', 'Projet professionnel'],
    color: 'indigo',
  },
  {
    id: 2,
    titre: 'Développeur Mobile',
    duree: '10 mois',
    niveau: 'Bac+2 (Titre RNCP Niveau 5)',
    description:
      'Concevez et développez des applications mobiles natives et cross-platform pour iOS et Android avec les technologies les plus demandées du marché.',
    modules: ['Swift & Kotlin', 'React Native', 'Flutter & Dart', 'API REST & GraphQL', 'UI/UX Mobile', 'Publication sur les stores'],
    color: 'emerald',
  },
  {
    id: 3,
    titre: 'Architecte Logiciel & DevOps',
    duree: '18 mois',
    niveau: 'Bac+3/4 (Titre RNCP Niveau 6)',
    description:
      "Approfondissez vos compétences en architecture logicielle, infrastructure cloud et automatisation. Devenez un expert capable de concevoir des systèmes scalables et résilients.",
    modules: ['Architecture microservices', 'Docker & Kubernetes', 'CI/CD Pipelines', 'AWS / Azure / GCP', 'Monitoring & Sécurité', 'Gestion de projet Agile'],
    color: 'amber',
  },
  {
    id: 4,
    titre: 'Data & Intelligence Artificielle',
    duree: '14 mois',
    niveau: 'Bac+3/4 (Titre RNCP Niveau 6)',
    description:
      "Plongez dans le monde de la data science et de l'intelligence artificielle. Apprenez à collecter, analyser et exploiter les données pour créer des modèles prédictifs.",
    modules: ['Python & R', 'Machine Learning', 'Deep Learning', 'Big Data (Spark, Hadoop)', 'Visualisation de données', 'Éthique de l\'IA'],
    color: 'rose',
  },
]

const colorMap = {
  indigo: {
    badge: 'bg-indigo-900 text-indigo-300',
    border: 'hover:border-indigo-500',
    dot: 'bg-indigo-400',
    btn: 'bg-indigo-600 hover:bg-indigo-700',
  },
  emerald: {
    badge: 'bg-emerald-900 text-emerald-300',
    border: 'hover:border-emerald-500',
    dot: 'bg-emerald-400',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
  },
  amber: {
    badge: 'bg-amber-900 text-amber-300',
    border: 'hover:border-amber-500',
    dot: 'bg-amber-400',
    btn: 'bg-amber-600 hover:bg-amber-700',
  },
  rose: {
    badge: 'bg-rose-900 text-rose-300',
    border: 'hover:border-rose-500',
    dot: 'bg-rose-400',
    btn: 'bg-rose-600 hover:bg-rose-700',
  },
}

export default function Formations() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nos <span className="text-indigo-400">Formations</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Des parcours complets, du débutant au confirmé, pour vous accompagner
            vers les métiers les plus recherchés du numérique.
          </p>
        </div>
      </section>

      {/* Formations list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {formations.map((formation) => {
            const colors = colorMap[formation.color]
            return (
              <div
                key={formation.id}
                className={`bg-gray-900 rounded-xl border border-gray-800 ${colors.border} transition-colors overflow-hidden`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {formation.titre}
                      </h2>
                      <div className="flex flex-wrap gap-3">
                        <span className={`text-sm px-3 py-1 rounded-full ${colors.badge}`}>
                          {formation.duree}
                        </span>
                        <span className={`text-sm px-3 py-1 rounded-full ${colors.badge}`}>
                          {formation.niveau}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className={`${colors.btn} text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 text-center whitespace-nowrap`}
                    >
                      Candidater
                    </Link>
                  </div>

                  <p className="text-gray-400 mb-8 text-base leading-relaxed">
                    {formation.description}
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Modules principaux</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {formation.modules.map((mod, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full ${colors.dot} flex-shrink-0`}></span>
                          <span className="text-gray-300 text-sm">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vous ne savez pas quelle formation choisir ?
          </h2>
          <p className="text-gray-400 mb-8">
            Nos conseillers pédagogiques sont là pour vous orienter vers le parcours
            le plus adapté à votre profil et à vos objectifs professionnels.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  )
}
