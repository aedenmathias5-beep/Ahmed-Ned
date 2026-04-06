'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function IdentityBlock() {
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

  return (
    <section className="section-padding section-gradient-light relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-surface" />
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gold via-gold-light to-gold" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl -translate-y-10 translate-x-10" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0 relative">
                  <div className="absolute -inset-3 border border-gold/15 rounded-2xl animate-pulse" style={{ animationDuration: '4s' }} />
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-navy/5 to-navy/10 border-2 border-navy/10 flex items-center justify-center overflow-hidden relative">
                    <Image src="/logo.png" alt="Monsieur Nedjar" width={120} height={120} className="rounded-xl" style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <p className="text-[10px] text-muted text-center mt-2 italic">Photo à venir</p>
                </div>

                <div className="text-center md:text-left flex-1">
                  <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">Votre professeur</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2">Monsieur Nedjar</h2>
                  <p className="text-lg text-navy font-medium mb-3">Professeur Agrégé de Mathématiques</p>
                  <p className="text-muted leading-relaxed">
                    Enseignant dans deux établissements parisiens — 7<sup>ème</sup> et 8<sup>ème</sup> arrondissement.
                    Une double expérience terrain qui nourrit chaque cours particulier.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-5">
                    {['🎓 Agrégé', '🏫 En activité', '📋 Examinateur', '💙 Inclusif'].map((tag, i) => (
                      <span
                        key={tag}
                        className={`text-xs bg-white px-4 py-2 rounded-full text-navy font-medium border border-gray-100 shadow-sm card-premium transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${0.5 + i * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
