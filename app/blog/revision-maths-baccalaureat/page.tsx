import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ahmed-nedjar.fr'

export const metadata: Metadata = {
  title: 'Comment réviser les mathématiques pour le baccalauréat',
  description:
    'Méthode complète pour préparer l\'épreuve de maths au bac : organisation du travail, utilisation des annales, points clés par chapitre et conseils d\'un professeur agrégé.',
  alternates: { canonical: `${siteUrl}/blog/revision-maths-baccalaureat` },
}

export default function Article1() {
  return (
    <>
      <Header />
      <main>
        <article>
          <header className="section-padding" style={{ backgroundColor: '#0B1F3A', paddingTop: '140px', paddingBottom: '80px' }}>
            <div className="container-max max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Link href="/blog" className="text-gold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
                  ← Blog
                </Link>
                <span style={{ color: 'rgba(249,247,242,0.3)' }}>·</span>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(249,247,242,0.4)' }}>Baccalauréat · 6 min</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
                Comment réviser les mathématiques pour le baccalauréat
              </h1>
              <p className="text-lg" style={{ color: 'rgba(249,247,242,0.55)' }}>
                Conseils d&apos;un professeur agrégé en activité — méthode, organisation et priorités.
              </p>
            </div>
          </header>

          <div className="section-padding bg-cream">
            <div className="container-max max-w-3xl prose-content" style={{ color: 'rgba(26,26,46,0.75)', lineHeight: '1.85', fontSize: '1rem' }}>

              <h2 className="font-serif text-3xl text-navy mb-4 mt-0">1. Commencer par un bilan honnête</h2>
              <p className="mb-6">
                La première erreur des élèves est de réviser dans l&apos;ordre du programme — du début à la fin du manuel.
                C&apos;est inefficace. Avant de commencer, identifiez les chapitres où vous avez perdu des points
                en contrôle, ceux que vous n&apos;avez jamais vraiment compris, et ceux que vous maîtrisez déjà.
                Le temps de révision est limité : concentrez-le là où le gain est maximal.
              </p>

              <h2 className="font-serif text-3xl text-navy mb-4">2. Les annales sont votre principal outil</h2>
              <p className="mb-4">
                L&apos;épreuve de mathématiques du baccalauréat suit des codes précis : des types d&apos;exercices
                récurrents, des formulations caractéristiques, des attendus de rédaction bien définis. Ces codes
                ne s&apos;apprennent pas dans le cours — ils s&apos;apprennent dans les sujets.
              </p>
              <p className="mb-6">
                Objectif minimum : traiter 6 à 8 sujets complets en conditions réelles avant l&apos;épreuve.
                Commencez par des sujets de sessions précédentes (plus accessibles), puis montez en difficulté.
                Chaque sujet traité doit être corrigé rigoureusement, erreur par erreur.
              </p>

              <h2 className="font-serif text-3xl text-navy mb-4">3. Les chapitres incontournables</h2>
              <p className="mb-4">
                Certains chapitres sont systématiquement représentés dans les sujets de bac. En Terminale voie
                générale, portez une attention particulière à :
              </p>
              <ul className="mb-6 space-y-2 list-none pl-0">
                {[
                  'Analyse : suites, fonctions, dérivation, intégration',
                  'Probabilités et statistiques : variables aléatoires, loi normale',
                  'Algèbre : nombres complexes, géométrie dans l\'espace',
                  'Pour Maths Expert : arithmétique, matrices, compléments d\'algèbre',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 mt-1">
                      <circle cx="10" cy="10" r="9" stroke="#C9A84C" strokeWidth="1.5" />
                      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-3xl text-navy mb-4">4. Maîtriser la rédaction</h2>
              <p className="mb-6">
                En mathématiques, la rédaction compte. Un résultat juste sans justification correcte peut perdre
                la moitié des points. Les correcteurs attendent des transitions logiques claires, l&apos;emploi du
                vocabulaire précis (soit, posons, on déduit…) et une présentation structurée. S&apos;entraîner
                à rédiger proprement dès les premières révisions est essentiel.
              </p>

              <h2 className="font-serif text-3xl text-navy mb-4">5. Gérer le temps le jour J</h2>
              <p className="mb-6">
                L&apos;épreuve dure 4 heures. Une stratégie courante et efficace : lire rapidement l&apos;ensemble
                du sujet, commencer par ce qu&apos;on maîtrise le mieux pour sécuriser des points, puis aborder
                les parties plus difficiles. Ne jamais bloquer plus de 10 minutes sur une question — passer à la
                suivante et y revenir.
              </p>

              <div className="mt-12 p-8 bg-white border border-cream-dark">
                <p className="font-serif text-xl text-navy mb-3">
                  Vous préparez le baccalauréat de mathématiques ?
                </p>
                <p className="text-sm mb-5" style={{ color: 'rgba(26,26,46,0.6)' }}>
                  Je propose un accompagnement sur mesure pour les élèves de Terminale à Paris et Strasbourg —
                  entraînement sur annales, méthodologie et révision ciblée.
                </p>
                <a href="/#contact" className="btn-primary">Prendre contact</a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
