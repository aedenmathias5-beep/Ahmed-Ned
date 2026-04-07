import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  title: 'Cours Particuliers de Mathématiques — Professeur Agrégé',
  description:
    'Cours particuliers de mathématiques à Paris (7e, 8e, 16e) et Strasbourg avec un professeur agrégé en activité. Du primaire à la Terminale Maths Expert. Contact direct.',
  alternates: { canonical: `${siteUrl}/cours-particuliers` },
}

const niveaux = [
  { label: 'Primaire (CP → CM2)', desc: 'Apprentissage des fondamentaux, méthode de travail, préparation au collège' },
  { label: '6ème — 5ème — 4ème', desc: 'Remise à niveau, consolidation des bases, méthode de travail' },
  { label: '3ème', desc: 'Préparation au Brevet des collèges, entraînement sur sujets officiels' },
  { label: '2nde — 1ère', desc: 'Adaptation au lycée, approfondissement, préparation aux épreuves' },
  { label: 'Terminale — Maths Expert', desc: 'Préparation intensive au Bac, Maths Expert, orientation prépa' },
]

export default function CoursParticuliers() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy" style={{ paddingTop: '120px' }}>
          <div className="container-max px-6 md:px-12 lg:px-24 py-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg">📚</span>
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">Cours particuliers</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
              Cours particuliers
              <br />
              <span className="text-gold">de mathématiques.</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed mb-10 text-white/65">
              Professeur agrégé en activité, je propose des cours particuliers à domicile
              à Paris (7e, 8e, 16e), Strasbourg et en ligne. Du primaire à la Terminale Maths Expert.
            </p>
            <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light">
              Prendre rendez-vous
            </a>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl text-navy font-bold mb-8">Tous les niveaux</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {niveaux.map((n) => (
                <div key={n.label} className="bg-cream p-7 rounded-2xl">
                  <h3 className="font-bold text-xl text-navy mb-2">{n.label}</h3>
                  <p className="text-sm leading-relaxed text-muted">{n.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl text-navy font-bold mb-6">
              Pourquoi choisir un professeur agrégé ?
            </h2>
            <div className="max-w-3xl text-muted leading-relaxed space-y-4">
              <p>
                L&apos;agrégation de mathématiques est le concours national le plus exigeant de l&apos;enseignement
                français. Professeur agrégé en activité, je connais les programmes officiels, les exigences
                des correcteurs et les méthodes qui produisent des résultats mesurables.
              </p>
              <p>
                Contrairement aux plateformes de mise en relation, les cours sont assurés directement par
                moi — pas par un étudiant ou un vacataire. Le contact est direct avec la famille dès le
                premier appel, sans commission ni intermédiaire.
              </p>
              <p>
                Les séances se déroulent à votre domicile (Paris 7e, 8e, 16e), à Strasbourg, chez le
                professeur ou en ligne — selon votre convenance.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy">
          <div className="container-max text-center">
            <h2 className="text-4xl text-white mb-4 font-bold">
              Réservez un premier échange — offert et sans engagement.
            </h2>
            <p className="mb-8 text-white/55">
              Cours particuliers de mathématiques — Paris, Strasbourg et en ligne.
            </p>
            <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light">
              Prendre rendez-vous
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
