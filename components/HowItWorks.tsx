'use client'

import { useState, useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    emoji: '📞',
    title: 'Vous nous contactez',
    description:
      "Un échange téléphonique gratuit pour comprendre le profil de votre enfant, ses difficultés, ses objectifs et le contexte scolaire.",
    detail: 'Sans engagement · Sous 24h',
  },
  {
    number: '02',
    emoji: '📝',
    title: 'On définit un programme',
    description:
      "En fonction de l'évaluation initiale, je définis un plan de travail personnalisé — rythme, objectifs, méthode — adapté au profil de l'élève.",
    detail: 'Sur mesure · Ajustable',
  },
  {
    number: '03',
    emoji: '🚀',
    title: 'On commence',
    description:
      "Premier cours, premiers résultats. Les séances suivantes sont planifiées directement avec la famille, aux horaires qui conviennent.",
    detail: 'Flexible · Contact direct',
  },
]

export default function HowItWorks() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding section-gradient-light dark:bg-gray-950 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="mb-16">
          <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-lg">⚙️</span>
            <span className="text-navy dark:text-gold text-xs tracking-[0.3em] uppercase font-semibold">Comment ça marche</span>
          </div>
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display text-4xl md:text-5xl text-navy dark:text-white leading-tight font-bold">
              Démarrer en
              <br />
              <span className="text-gradient">3 étapes simples.</span>
            </h2>
            <p className="text-sm md:text-base md:text-right max-w-xs text-muted">
              Premier échange offert.
              <br />
              Sans engagement.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 card-premium border border-gray-50 dark:border-gray-800 shadow-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.2 + i * 0.2}s` }}
            >
              <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-navy to-gold rounded-b-full" />
              <div className="flex items-center gap-4 mb-6 mt-2">
                <span className="text-xs font-black text-transparent bg-gradient-to-r from-navy/20 to-gold/30 bg-clip-text uppercase">{step.number}</span>
                <span className="text-3xl">{step.emoji}</span>
              </div>
              <h3 className="font-bold text-xl text-navy dark:text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted dark:text-gray-400 mb-4">{step.description}</p>
              <span className="text-xs tracking-widest uppercase font-semibold text-gradient">
                {step.detail}
              </span>
            </div>
          ))}
        </div>

        <div className={`mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="/prendre-rendez-vous" className="btn-primary">
            Démarrer maintenant
          </a>
          <p className="text-sm text-muted">
            Premier échange offert · Réponse sous 24h · Aucun engagement
          </p>
        </div>
      </div>
    </section>
  )
}
