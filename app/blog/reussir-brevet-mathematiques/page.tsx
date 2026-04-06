import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ahmed-nedjar.fr'

export const metadata: Metadata = {
  title: 'Méthode pour réussir son brevet des collèges en mathématiques',
  description:
    'Programme, stratégie de révision et conseils pratiques pour réussir l\'épreuve de mathématiques au brevet des collèges — par un professeur agrégé.',
  alternates: { canonical: `${siteUrl}/blog/reussir-brevet-mathematiques` },
}

export default function Article2() {
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
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(249,247,242,0.4)' }}>Brevet · 5 min</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
                Méthode pour réussir son brevet des collèges en mathématiques
              </h1>
              <p className="text-lg" style={{ color: 'rgba(249,247,242,0.55)' }}>
                Ce que les correcteurs attendent — et ce que les élèves négligent souvent.
              </p>
            </div>
          </header>

          <div className="section-padding bg-cream">
            <div className="container-max max-w-3xl" style={{ color: 'rgba(26,26,46,0.75)', lineHeight: '1.85' }}>

              <h2 className="font-serif text-3xl text-navy mb-4 mt-0">Ce que couvre l&apos;épreuve</h2>
              <p className="mb-6">
                L&apos;épreuve de mathématiques du brevet dure 2 heures et couvre l&apos;ensemble du programme du
                collège, avec une emphase sur les chapitres de 4ème et 3ème. Elle comporte généralement trois
                parties : des exercices de calcul et de raisonnement, un problème de géométrie, et un exercice
                de statistiques ou probabilités.
              </p>

              <h2 className="font-serif text-3xl text-navy mb-4">Les chapitres à maîtriser absolument</h2>
              <ul className="mb-6 space-y-3 list-none pl-0">
                {[
                  'Calcul littéral et équations du 1er degré',
                  'Fonctions linéaires et affines, proportionnalité',
                  'Géométrie : théorème de Pythagore, Thalès, trigonométrie',
                  'Statistiques et probabilités : moyenne, médiane, diagrammes',
                  'Puissances, racines carrées, notation scientifique',
                  'Géométrie dans l\'espace : volumes et développés',
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

              <h2 className="font-serif text-3xl text-navy mb-4">La stratégie de révision efficace</h2>
              <p className="mb-4">
                Contrairement au baccalauréat, le brevet est accessible à condition d&apos;avoir des bases solides
                dans chaque chapitre. Les élèves qui échouent ne manquent généralement pas de talent — ils
                manquent de méthode et d&apos;entraînement sur sujets complets.
              </p>
              <p className="mb-6">
                Plan recommandé pour 6 semaines de préparation : 2 semaines de révision des bases chapitre par
                chapitre, 2 semaines d&apos;entraînement sur des exercices type brevet, 2 semaines de sujets
                complets en conditions réelles avec correction rigoureuse.
              </p>

              <h2 className="font-serif text-3xl text-navy mb-4">Les erreurs les plus fréquentes</h2>
              <p className="mb-4">
                Après des années de correction d&apos;épreuves, les mêmes erreurs reviennent systématiquement :
                confondre Pythagore et Thalès, oublier les unités dans les calculs de volume, ne pas justifier
                les étapes de raisonnement en géométrie, et mal lire les consignes (notamment sur les exercices
                à QCM ou à réponse courte).
              </p>
              <p className="mb-6">
                Sur la forme, les correcteurs attendent des réponses encadrées, une présentation lisible et
                des justifications complètes — même pour les résultats qui semblent évidents.
              </p>

              <div className="mt-12 p-8 bg-white border border-cream-dark">
                <p className="font-serif text-xl text-navy mb-3">
                  Votre enfant prépare le brevet des collèges ?
                </p>
                <p className="text-sm mb-5" style={{ color: 'rgba(26,26,46,0.6)' }}>
                  Je propose des préparations intensives au brevet à Paris et Strasbourg — révision ciblée,
                  entraînement sur annales et travail méthodologique.
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
