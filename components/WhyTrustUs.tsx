'use client'

import { useState, useEffect, useRef } from 'react'

export default function WhyTrustUs() {
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

  const reasons = [
    {
      emoji: '🎓',
      title: 'Professeur Agrégé',
      desc: "Le plus haut niveau de qualification de l'enseignement français. Une garantie de maîtrise et de rigueur pédagogique.",
    },
    {
      emoji: '🏫',
      title: 'Enseignant en activité',
      desc: "Pas un étudiant, pas un retraité : un professeur qui enseigne chaque jour et connaît les programmes actuels sur le bout des doigts.",
    },
    {
      emoji: '🤝',
      title: 'Relation directe',
      desc: "Aucune plateforme, aucune commission, aucun intermédiaire. Vous échangez directement avec le professeur de votre enfant.",
    },
    {
      emoji: '📈',
      title: 'Résultats prouvés',
      desc: "200+ élèves accompagnés avec succès. Des résultats mesurables et une progression constatée par les familles.",
    },
  ]

  return (
    <section className="section-padding section-gradient-cream relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px]" />

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-lg">⭐</span>
            <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Confiance</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl text-navy mb-10 font-bold leading-tight transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Pourquoi nous
            <br />
            <span className="text-gradient">faire confiance ?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`bg-white rounded-2xl p-7 border border-gray-100 card-premium flex items-start gap-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-surface to-cream rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-3xl">{r.emoji}</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">{r.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
