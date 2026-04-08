'use client'

import { useState, useEffect, useRef } from 'react'

const commitments = [
  {
    emoji: '⏰',
    title: 'Ponctualité',
    desc: "Chaque séance commence à l'heure convenue. Le temps de votre enfant est précieux — je le respecte.",
  },
  {
    emoji: '🎯',
    title: 'Suivi personnalisé',
    desc: 'Le programme est construit pour chaque élève et réévalué régulièrement en fonction des progrès réalisés.',
  },
  {
    emoji: '📊',
    title: 'Bilan régulier',
    desc: 'Les parents reçoivent un retour régulier sur les progrès, les axes de travail et les résultats observés.',
  },
  {
    emoji: '📄',
    title: 'Supports fournis',
    desc: "Exercices, fiches méthode et annales préparés par le professeur — l'élève n'a rien à imprimer.",
  },
  {
    emoji: '🔄',
    title: 'Flexibilité',
    desc: "Horaires et rythme s'adaptent aux contraintes de la famille. Un imprévu ? On s'arrange directement.",
  },
]

export default function Commitment() {
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
    <section className="section-padding gradient-navy relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal/5 rounded-full blur-[60px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coral/20 to-transparent" />

      <div className="container-max relative z-10">
        <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-lg">🤝</span>
          <span className="text-coral text-xs tracking-[0.3em] uppercase font-semibold">Nos engagements</span>
        </div>
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight font-bold">
            Ce que vous pouvez
            <br />
            attendre de nous.
          </h2>
          <p className="text-sm max-w-xs md:text-right text-white/50">
            Des engagements concrets,
            <br />
            pas des promesses génériques.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {commitments.map((c, i) => (
            <div
              key={c.title}
              className={`glass rounded-2xl p-6 card-premium group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
            >
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform duration-300">{c.emoji}</span>
              <h3 className="font-bold text-lg text-white mb-3">{c.title}</h3>
              <p className="text-xs leading-relaxed text-white/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
