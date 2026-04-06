'use client'

import { useState, useEffect, useRef } from 'react'

export default function InclusifBlock() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const profils = [
    { label: 'TDAH', desc: 'Trouble du déficit de l\'attention' },
    { label: 'TSA', desc: 'Trouble du spectre autistique' },
    { label: 'Dyslexie', desc: 'Difficulté de lecture' },
    { label: 'Dyspraxie', desc: 'Difficulté de coordination' },
    { label: 'Dyscalculie', desc: 'Difficulté en calcul' },
    { label: 'HPI', desc: 'Haut potentiel intellectuel' },
  ]

  return (
    <section className="section-padding section-gradient-light" ref={ref}>
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className={`gradient-navy rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute top-0 right-0 w-60 h-60 bg-gold/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/5 rounded-full blur-[60px]" />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[120px] md:text-[180px] leading-none opacity-5 select-none">
              ♾️
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">♾️</span>
                <span className="font-display text-3xl md:text-5xl font-black text-white tracking-wide uppercase">
                  INCLUSIF
                </span>
              </div>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                Nous accueillons et accompagnons <strong className="text-white">tous les élèves</strong>,
                y compris ceux à profils particuliers :
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {profils.map((p, i) => (
                  <div
                    key={p.label}
                    className={`glass rounded-xl p-4 card-premium transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <p className="text-white font-bold text-sm mb-0.5">{p.label}</p>
                    <p className="text-white/60 text-xs">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-6">
                <p className="text-white/70 text-sm md:text-base leading-relaxed italic">
                  &ldquo;Chaque enfant apprend différemment. Nous nous adaptons.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
