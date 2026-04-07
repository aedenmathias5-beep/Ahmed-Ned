'use client'

import { useState, useEffect, useRef } from 'react'

type FAQCategory = {
  emoji: string
  label: string
  questions: { q: string; a: string }[]
}

const categories: FAQCategory[] = [
  {
    emoji: '📚',
    label: 'Généralités',
    questions: [
      {
        q: 'Quelles matières enseignez-vous ?',
        a: "Je suis spécialisé en mathématiques, du primaire (CP) à la Terminale Maths Expert. C'est ma matière d'expertise en tant que professeur agrégé.",
      },
      {
        q: 'Intervenez-vous dans toute l\'Île-de-France ?',
        a: "Je me déplace dans les 7e, 8e et 16e arrondissements de Paris. Pour les autres zones, les cours en visioconférence sont disponibles avec la même qualité pédagogique.",
      },
      {
        q: 'Puis-je avoir des cours en visioconférence ?',
        a: "Oui, les cours en ligne sont disponibles pour les élèves situés hors Paris et Strasbourg, ou pour plus de flexibilité. Le suivi personnalisé et la qualité pédagogique sont identiques au présentiel.",
      },
      {
        q: 'Pouvez-vous donner des cours en anglais ?',
        a: "Les cours sont dispensés en français. Cependant, je peux adapter certaines explications pour les élèves bilingues ou internationaux si nécessaire.",
      },
    ],
  },
  {
    emoji: '🗓️',
    label: 'Organisation',
    questions: [
      {
        q: 'Comment se passe le premier contact ?',
        a: "Un premier échange téléphonique gratuit permet de comprendre le profil de l'élève, ses difficultés et ses objectifs. Je propose ensuite un programme adapté. Il n'y a aucun engagement avant le premier cours.",
      },
      {
        q: 'Quelle fréquence de cours recommandez-vous ?',
        a: "Pour un suivi régulier en cours d'année, je recommande 1 à 2 séances par semaine. Pour les stages de vacances ou la préparation intensive aux examens, le rythme peut être plus soutenu.",
      },
      {
        q: 'Combien de temps dure une séance ?',
        a: "Les séances durent généralement 1h30 à 2h, selon le niveau et les objectifs de l'élève. La durée est définie lors du premier échange et peut être ajustée.",
      },
      {
        q: 'Quelle est la politique d\'annulation ?',
        a: "Toute annulation doit être communiquée au minimum 48 heures à l'avance. En dehors de ce délai, la séance est due. Cette règle garantit le sérieux et la régularité du suivi.",
      },
      {
        q: 'Vous déplacez-vous à domicile ?',
        a: "Oui, je me déplace dans les 7e, 8e et 16e arrondissements de Paris, ainsi qu'à Strasbourg. Les cours peuvent également avoir lieu à mon domicile ou en ligne.",
      },
    ],
  },
  {
    emoji: '💶',
    label: 'Tarifs',
    questions: [
      {
        q: 'Quels sont vos tarifs ?',
        a: "Les tarifs sont communiqués sur devis, en fonction du niveau de l'élève, de la fréquence des séances et de la localisation. Contactez-moi directement pour un devis personnalisé et sans engagement.",
      },
      {
        q: 'Bénéficie-t-on du crédit d\'impôt ?',
        a: "Oui, les cours à domicile donnent droit au crédit d'impôt de 50% pour les services à la personne (sous conditions). Le crédit est appliqué automatiquement.",
      },
      {
        q: 'Y a-t-il des frais d\'inscription ?',
        a: "Non, aucun frais d'inscription ni de commission. Le tarif convenu est le tarif final — paiement direct au professeur.",
      },
      {
        q: 'Quels modes de paiement acceptez-vous ?',
        a: "Le règlement se fait directement au professeur, par virement bancaire, chèque ou espèces, selon les modalités convenues avec la famille.",
      },
    ],
  },
  {
    emoji: '💙',
    label: 'Profils spécifiques',
    questions: [
      {
        q: 'Acceptez-vous les élèves TDAH ou Dys ?',
        a: "Oui, j'accompagne les élèves avec TDAH, troubles Dys et TSA. L'accompagnement est adapté au profil de chaque élève, avec patience et bienveillance. Les informations sont strictement confidentielles.",
      },
      {
        q: 'Quel est le niveau minimum requis ?',
        a: "Aucun niveau minimum n'est requis. J'accompagne les élèves du primaire (CP) à la Terminale Maths Expert, quelle que soit leur situation de départ — en grande difficulté ou en quête d'excellence.",
      },
      {
        q: 'Travaillez-vous avec des élèves en prépa ?',
        a: "Mon accompagnement couvre jusqu'à la Terminale Maths Expert. Pour les élèves de prépa, je peux conseiller des ressources adaptées lors du premier échange.",
      },
    ],
  },
  {
    emoji: '🚀',
    label: 'Projet & Avenir',
    questions: [
      {
        q: 'Proposez-vous un accompagnement en orientation ?',
        a: "Oui, je peux conseiller les élèves sur leur orientation post-bac, notamment vers les classes préparatoires scientifiques et les écoles d'ingénieurs, en fonction de leur profil et de leurs résultats.",
      },
      {
        q: 'Préparez-vous aux concours post-bac ?',
        a: "Mon accompagnement est centré sur le programme du secondaire (Brevet, Bac, Maths Expert). Pour les concours post-bac spécifiques, je peux orienter vers les bonnes ressources.",
      },
    ],
  },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const totalQuestions = categories.reduce((sum, cat) => sum + cat.questions.length, 0)

  return (
    <section id="faq" className="section-padding section-gradient-light dark:bg-gray-950 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="container-max relative z-10">
        <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-lg">❓</span>
            <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">FAQ</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy font-bold leading-tight">
            Vos questions
            <br />
            <span className="text-gradient">nos réponses.</span>
          </h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="space-y-2 mb-8">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => { setActiveCategory(i); setOpenQuestion(null) }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    activeCategory === i
                      ? 'bg-navy text-white'
                      : 'bg-surface dark:bg-gray-900 text-charcoal/70 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{cat.emoji} {cat.label}</span>
                  <span className={`text-xs ${activeCategory === i ? 'text-white/60' : 'text-muted'}`}>
                    {cat.questions.length} rép.
                  </span>
                </button>
              ))}
            </div>

            <div className="bg-surface dark:bg-gray-900 rounded-xl p-5 text-center card-premium">
              <p className="text-xs text-muted dark:text-gray-400 mb-1">Total</p>
              <p className="text-2xl font-bold text-navy dark:text-white">{totalQuestions} questions</p>
            </div>

            <div className="mt-6 bg-cream dark:bg-gray-900 rounded-xl p-5 card-premium">
              <p className="text-sm font-medium text-navy dark:text-white mb-1">Une question non listée ?</p>
              <p className="text-xs text-muted dark:text-gray-400 mb-3">
                Posez-la directement à M. Nedjar — il répond sous 24h.
              </p>
              <a href="/prendre-rendez-vous" className="text-navy font-semibold text-xs hover:text-navy/70 transition-colors">
                Poser ma question →
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl text-navy dark:text-white font-bold mb-2">
                {categories[activeCategory].emoji} {categories[activeCategory].label}
              </h2>
              <p className="text-sm text-muted">
                {categories[activeCategory].questions.length} questions fréquentes
              </p>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {categories[activeCategory].questions.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                  >
                    <span className={`font-medium text-base transition-colors ${
                      openQuestion === i ? 'text-navy dark:text-gold' : 'text-charcoal dark:text-gray-200 group-hover:text-navy dark:group-hover:text-gold'
                    }`}>
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 mt-1">
                      <svg
                        className={`w-5 h-5 text-navy/40 transition-transform duration-200 ${
                          openQuestion === i ? 'rotate-180' : ''
                        }`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {openQuestion === i && (
                    <p className="pb-5 text-sm leading-relaxed text-muted dark:text-gray-400">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
