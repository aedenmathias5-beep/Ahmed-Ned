const badges = [
  { text: 'Premier échange offert' },
  { text: 'Sans engagement' },
  { text: 'Réponse sous 24h' },
  { text: 'Contact direct, aucune commission' },
]

const credentials = [
  {
    emoji: '🎓',
    title: 'Agrégé de Mathématiques',
    desc: "Le plus haut niveau de qualification de l'enseignement français — concours national",
  },
  {
    emoji: '🏫',
    title: 'Enseignant en activité',
    desc: 'Professeur dans le secondaire — connaissance quotidienne des programmes officiels',
  },
  {
    emoji: '🏠',
    title: 'Cours à domicile',
    desc: "Paris 7e, 8e, 16e & Strasbourg — chez l'élève, chez le professeur, ou en ligne",
  },
  {
    emoji: '🤝',
    title: 'Contact direct',
    desc: 'Aucune plateforme, aucune commission — relation directe entre famille et professeur',
  },
]

export default function TrustBadges() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container-max">
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {badges.map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-sm text-charcoal/70">
              <span className="text-green-500 text-lg">✓</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((c) => (
            <div key={c.title} className="text-center">
              <div className="text-4xl mb-4">{c.emoji}</div>
              <p className="font-semibold text-navy text-sm mb-2">{c.title}</p>
              <p className="text-xs leading-relaxed text-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
