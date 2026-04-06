'use client'

import { useState, useEffect, useRef } from 'react'

export default function LocationBlock() {
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

  const locations = [
    {
      emoji: '📍',
      title: 'Paris — 7ème & 8ème arrondissement',
      desc: 'Cours au cabinet ou au domicile du professeur',
    },
    {
      emoji: '🗺️',
      title: 'Paris & proche banlieue',
      desc: "Déplacement au domicile de l'élève",
    },
    {
      emoji: '🇫🇷',
      title: 'Toute la France en visioconférence',
      desc: 'Lyon, Bordeaux, Strasbourg, Marseille…',
    },
    {
      emoji: '💻',
      title: 'Séances en ligne performantes',
      desc: 'Tableau blanc interactif, partage d\'écran, outils numériques partagés — aussi efficaces qu\'en présentiel',
    },
  ]

  return (
    <section className="section-padding section-gradient-light relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-lg">📍</span>
            <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Localisation</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl text-navy mb-10 font-bold leading-tight transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Où que vous soyez,
            <br />
            <span className="text-gradient">nous sommes là.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {locations.map((loc, i) => (
              <div
                key={loc.title}
                className={`bg-white rounded-2xl p-6 flex items-start gap-4 border border-gray-100 card-premium transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-surface to-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{loc.emoji}</span>
                </div>
                <div>
                  <p className="font-bold text-navy mb-1">{loc.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
