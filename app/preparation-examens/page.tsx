import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  title: 'Préparation Brevet et Baccalauréat de Mathématiques — Professeur Agrégé',
  description:
    'Préparation au Brevet et Baccalauréat de mathématiques avec un professeur agrégé. Entraînement sur sujets officiels, méthodologie, Maths Expert.',
  alternates: { canonical: `${siteUrl}/preparation-examens` },
}

const examens = [
  {
    label: 'Brevet des collèges',
    niveau: '3ème',
    points: [
      'Entraînement sur les annales officielles des 5 dernières années',
      'Méthodologie de rédaction attendue par les correcteurs',
      "Gestion du temps et stratégie d'épreuve",
      'Révision ciblée des chapitres les plus représentés',
    ],
  },
  {
    label: 'Baccalauréat de Mathématiques',
    niveau: 'Terminale',
    points: [
      'Traitement de sujets complets en conditions réelles',
      'Focus sur les parties Analyse, Probabilités, Algèbre',
      'Maîtrise des attendus de présentation et de rigueur',
      'Stratégie de notation : maximiser les points',
    ],
  },
  {
    label: 'Terminale Maths Expert',
    niveau: 'Option Maths Expert',
    points: [
      "Programme spécifique (compléments d'algèbre, arithmétique, géométrie)",
      "Préparation à l'épreuve écrite et au coefficient majoré",
      "Orientation vers les classes prépa et écoles d'ingénieurs",
      'Entraînement intensif sur les exercices de haut niveau',
    ],
  },
]

export default function PreparationExamens() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy" style={{ paddingTop: '120px' }}>
          <div className="container-max px-6 md:px-12 lg:px-24 py-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg">🎯</span>
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">Brevet · Baccalauréat · Maths Expert</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
              Préparation aux examens
              <br />
              <span className="text-gold">de mathématiques.</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed mb-10 text-white/65">
              Professeur agrégé et enseignant en activité, je connais les attendus officiels,
              les exigences des correcteurs et les méthodes qui font la différence le jour J.
            </p>
            <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light">
              Préparer l&apos;examen
            </a>
          </div>
        </section>

        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container-max">
            <h2 className="text-3xl text-navy dark:text-white font-bold mb-8">Programme de préparation</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {examens.map((e) => (
                <div key={e.label} className="bg-cream dark:bg-gray-900 p-8 rounded-2xl">
                  <p className="text-gold text-xs tracking-widest uppercase mb-2 font-medium">{e.niveau}</p>
                  <h3 className="font-bold text-xl text-navy dark:text-white mb-5">{e.label}</h3>
                  <ul className="space-y-3">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-muted dark:text-gray-400">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy">
          <div className="container-max text-center">
            <h2 className="text-4xl text-white mb-4 font-bold">
              La préparation commence maintenant.
            </h2>
            <p className="mb-8 text-white/55">
              Brevet des collèges · Baccalauréat · Maths Expert.
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
