import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mathjard.replit.app'

export const metadata: Metadata = {
  title: 'Témoignages — Avis des familles',
  description:
    'Découvrez les témoignages des familles accompagnées par Ahmed Nedjar, professeur agrégé de mathématiques à Paris et Strasbourg.',
  alternates: { canonical: `${siteUrl}/temoignages` },
}

const testimonials = [
  {
    emoji: '🎉',
    name: 'Sophie M.',
    location: 'Paris 16e',
    level: 'Terminale',
    text: "Mon fils était en grande difficulté en Terminale. Grâce à M. Nedjar, il a décroché 16/20 au baccalauréat. Une pédagogie claire, des méthodes efficaces. Je recommande sans la moindre hésitation.",
  },
  {
    emoji: '⭐',
    name: 'Karim T.',
    location: 'Strasbourg',
    level: 'Première',
    text: "Pédagogie claire, disponibilité exemplaire. Ma fille a retrouvé confiance en elle en quelques séances seulement. M. Nedjar sait exactement où se situent les blocages.",
  },
  {
    emoji: '🏆',
    name: 'Marie-Hélène D.',
    location: 'Paris 8e',
    level: 'Troisième',
    text: "Notre fils a obtenu la mention Très Bien au Brevet grâce aux stages de préparation. Le travail méthodologique fait la différence — il sait maintenant comment aborder un problème.",
  },
  {
    emoji: '🚀',
    name: 'Laurent F.',
    location: 'Paris 7e',
    level: 'Terminale Maths Expert',
    text: "Exceptionnel. Mon fils a intégré une classe prépa scientifique. M. Nedjar connaît parfaitement les attendus des grandes classes — la rigueur et la profondeur du suivi sont incomparables.",
  },
  {
    emoji: '✅',
    name: 'Nathalie B.',
    location: 'Strasbourg',
    level: 'Cinquième',
    text: "Passage en Quatrième sans difficulté, avec de vraies bases solides. M. Nedjar est patient, rigoureux, et sait adapter son discours à chaque élève. Très professionnel.",
  },
  {
    emoji: '📈',
    name: 'Patrick V.',
    location: 'Paris 16e',
    level: 'Terminale',
    text: "Ma fille a gagné 4 points en mathématiques en moins de deux mois. Le travail sur les annales et la gestion du stress avant les épreuves a été déterminant.",
  },
  {
    emoji: '💪',
    name: 'Isabelle R.',
    location: 'Paris 7e',
    level: 'Troisième',
    text: "Un suivi remarquable. M. Nedjar a su redonner confiance à notre fille qui appréhendait le Brevet. Elle a obtenu 95/100 en mathématiques. Un grand merci.",
  },
  {
    emoji: '🌟',
    name: 'David L.',
    location: 'Strasbourg',
    level: 'Terminale Maths Expert',
    text: "La rigueur et l'exigence de M. Nedjar ont permis à mon fils de viser les meilleures préparations. Un accompagnement d'exception.",
  },
]

export default function Temoignages() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy" style={{ paddingTop: '120px' }}>
          <div className="container-max px-6 md:px-12 lg:px-24 py-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg">💬</span>
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">Témoignages</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
              Ce que disent
              <br />
              <span className="text-gold">les familles.</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed text-white/65">
              Plus de 200 élèves accompagnés. Voici quelques retours de parents.
            </p>
            <div className="mt-6 flex items-center gap-2 text-white/50 text-sm">
              <span>⭐</span>
              <span>Note moyenne : 4,93/5</span>
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream">
          <div className="container-max">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white p-7 rounded-2xl flex flex-col gap-4 border border-gray-100 shadow-sm">
                  <span className="text-2xl">{t.emoji}</span>
                  <p className="text-sm leading-relaxed flex-1 italic text-charcoal/75">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-navy font-semibold text-sm">{t.name}</p>
                    <p className="text-xs mt-0.5 text-muted">{t.location} · {t.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy">
          <div className="container-max text-center">
            <h2 className="text-4xl text-white mb-4 font-bold">
              Rejoignez les familles satisfaites.
            </h2>
            <p className="mb-8 text-white/55">
              Premier échange offert · Réponse sous 24h · Sans engagement.
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
