'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const testimonials = [
  {
    name: 'Mère d\'un élève de 3ème',
    location: 'Paris',
    text: "Mon fils a retrouvé confiance en lui en 3 mois. Les résultats sont au-delà de nos espérances.",
    highlight: true,
  },
  {
    name: 'Sophie M.',
    location: 'Paris 16e',
    level: 'Terminale',
    text: "Mon fils était en grande difficulté en Terminale. Grâce à M. Nedjar, il a décroché 16/20 au baccalauréat. Une pédagogie claire, des méthodes efficaces.",
  },
  {
    name: 'Karim T.',
    location: 'Strasbourg',
    level: 'Première',
    text: "Ma fille a retrouvé confiance en elle en quelques séances seulement. M. Nedjar sait exactement où se situent les blocages.",
  },
  {
    name: 'Marie-Hélène D.',
    location: 'Paris 8e',
    level: 'Troisième',
    text: "Mention Très Bien au Brevet grâce aux stages de préparation. Le travail méthodologique fait vraiment la différence.",
  },
  {
    name: 'Laurent F.',
    location: 'Paris 7e',
    level: 'Terminale Maths Expert',
    text: "Mon fils a intégré une classe prépa scientifique. La rigueur et la profondeur du suivi sont incomparables.",
  },
  {
    name: 'Nathalie B.',
    location: 'Strasbourg',
    level: 'Cinquième',
    text: "Passage en Quatrième sans difficulté, avec de vraies bases solides. M. Nedjar est patient, rigoureux, et sait adapter son discours.",
  },
  {
    name: 'Patrick V.',
    location: 'Paris 16e',
    level: 'Terminale',
    text: "Ma fille a gagné 4 points en mathématiques en moins de deux mois. Le travail sur les annales a été déterminant.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
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

  const cards = testimonials.slice(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [cards.length])

  const featured = testimonials[0]

  return (
    <section id="testimonials" className="section-padding section-gradient-cream relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coral/20 to-transparent" />
      <div className="absolute inset-0 math-pattern pointer-events-none" />

      <div className="container-max relative z-10">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-gradient-to-r from-gold to-coral rounded-full" />
              <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Témoignages</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-navy font-bold leading-tight">
              Ce que disent
              <br />
              <span className="text-gradient">les familles.</span>
            </h2>
          </div>
          <Link href="/temoignages" className="text-navy font-semibold text-sm hover:text-coral transition-colors group flex items-center gap-2">
            Voir tous les avis
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className={`bg-gradient-to-br from-navy via-navy-light to-navy rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute top-0 right-0 w-60 h-60 bg-coral/8 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal/8 rounded-full blur-[40px]" />
          <div className="absolute top-6 right-8 font-display text-8xl text-gradient opacity-10 select-none">&ldquo;</div>

          <div className="relative z-10">
            <p className="font-display text-2xl md:text-3xl text-white font-medium leading-relaxed mb-6 max-w-3xl italic">
              &ldquo;{featured.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-coral to-gold rounded-full" />
              <div>
                <p className="text-white font-semibold text-sm">— {featured.name}</p>
                <p className="text-white/50 text-xs">{featured.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden mb-6">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * (100 / Math.min(cards.length, 3))}%)` }}
          >
            {cards.map((t, i) => (
              <div key={t.name} className="flex-shrink-0 w-full md:w-1/3 px-2">
                <div className="bg-white dark:bg-gray-900 p-7 rounded-2xl flex flex-col gap-4 border border-gray-100 dark:border-gray-800 card-artistic h-full">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1 text-charcoal/75 dark:text-gray-300 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-navy dark:text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-xs mt-0.5 text-muted dark:text-gray-400">
                      {t.location}{t.level ? ` · ${t.level}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                current === i ? 'bg-gradient-to-r from-coral to-gold w-8' : 'bg-navy/15 dark:bg-gray-600 w-2.5'
              }`}
              aria-label={`Témoignage ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
