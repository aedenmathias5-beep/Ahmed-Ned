'use client'

import { useState, useEffect, useRef } from 'react'

export default function MissionBlock() {
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

  const services = [
    { emoji: '📚', label: 'Cours particuliers de mathématiques' },
    { emoji: '📝', label: 'Aide aux devoirs' },
    { emoji: '📖', label: 'Apprentissage des leçons' },
    { emoji: '🧠', label: 'Assimilation des compétences' },
    { emoji: '📄', label: "Mise en situation d'examen réelle" },
  ]

  return (
    <section id="mission" className="section-padding section-gradient-light relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="text-lg">🎯</span>
            <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Notre Mission</span>
          </div>

          <h2 className={`font-display text-4xl md:text-5xl text-navy mb-8 font-bold leading-tight transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Un accompagnement pensé
            <br />
            <span className="text-gradient">sur la durée.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
            {services.map((s, i) => (
              <div
                key={s.label}
                className={`bg-white rounded-2xl p-5 text-center card-premium border border-gray-50 shadow-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <span className="text-2xl block mb-2">{s.emoji}</span>
                <p className="text-xs font-medium text-navy leading-tight">{s.label}</p>
              </div>
            ))}
          </div>

          <div className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-[#f5eddd]" />
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-gold-light" />
            <div className="relative p-8 md:p-10">
              <p className="text-lg md:text-xl text-navy leading-relaxed font-medium mb-4">
                Notre force : un accompagnement pensé sur la durée — à l&apos;année,
                voire sur l&apos;ensemble de la scolarité.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-muted">
                {[
                  "Aide à l'orientation scolaire",
                  'Soutien moral et motivationnel',
                  'Relation de confiance avec les parents',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-500 text-xs">✓</span>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
