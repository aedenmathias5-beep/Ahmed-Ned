import Image from 'next/image'
import Link from 'next/link'

const credentials = [
  {
    emoji: '🎓',
    label: 'Agrégé de Mathématiques',
    desc: "Concours national — le plus haut niveau de qualification de l'enseignement français.",
  },
  {
    emoji: '🏫',
    label: 'Enseignant en activité',
    desc: 'Collège et lycée — connaissance quotidienne des profils élèves et des attendus officiels.',
  },
  {
    emoji: '📋',
    label: 'Examinateur et correcteur',
    desc: 'Brevet et Baccalauréat — maîtrise parfaite des critères de correction officiels.',
  },
  {
    emoji: '🎯',
    label: 'Pédagogie personnalisée',
    desc: "Chaque élève est unique. L'accompagnement est adapté aux lacunes, au rythme et aux objectifs.",
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-cream rounded-2xl p-10 border-l-4 border-gold">
              <div className="flex justify-center mb-6">
                <Image src="/logo.png" alt="Maths Connections" width={80} height={80} className="rounded-xl" style={{ width: 'auto', height: 'auto' }} />
              </div>
              <div className="text-center space-y-2">
                <p className="text-2xl font-bold text-navy">Monsieur Nedjar</p>
                <p className="text-lg text-navy font-medium">Professeur Agrégé de Mathématiques</p>
                <p className="text-sm text-muted leading-relaxed">
                  Professeur dans deux établissements parisiens — 7<sup>ème</sup> et 8<sup>ème</sup> arrondissement
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg">👤</span>
              <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">
                À propos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl text-navy mb-6 leading-tight font-bold">
              Une méthode fondée
              <br />
              sur le terrain.
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Professeur agrégé de mathématiques, j&apos;enseigne dans le secondaire et travaille
              chaque jour avec des élèves aux profils variés. Cette réalité de terrain me permet de
              proposer un accompagnement véritablement adapté — pas un cours standardisé, mais une
              prise en charge sur mesure.
            </p>

            <div className="space-y-5 mb-8">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{cred.emoji}</span>
                  <div>
                    <p className="text-navy font-semibold text-sm">{cred.label}</p>
                    <p className="text-xs leading-relaxed mt-0.5 text-muted">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/a-propos" className="text-navy font-semibold text-sm hover:text-navy/70 transition-colors">
              En savoir plus →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
