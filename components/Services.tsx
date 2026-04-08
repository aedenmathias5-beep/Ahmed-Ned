'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    emoji: '🌱',
    title: 'Suivi des tout-petits',
    subtitle: '3–6 ans · Maternelle',
    description:
      "Apprentissage des fondamentaux (lecture, écriture, calcul) avant l'entrée en primaire pour un meilleur niveau.",
    tags: ['Maternelle', 'Éveil cognitif', 'Préparation CP'],
    href: '/prendre-rendez-vous',
    accent: 'from-teal/10 to-teal/5',
    hoverBorder: 'hover:border-teal/30',
  },
  {
    emoji: '📚',
    title: 'Cours particuliers',
    subtitle: 'Primaire à Terminale Maths Expert',
    description:
      "Suivi individualisé, adapté au profil et aux objectifs de chaque élève. Au domicile ou en ligne, aux horaires fixés directement avec la famille.",
    tags: ['À domicile', 'Flexible', 'Personnalisé'],
    href: '/cours-particuliers',
    accent: 'from-coral/10 to-coral/5',
    hoverBorder: 'hover:border-coral/30',
  },
  {
    emoji: '⚡',
    title: 'Stages intensifs',
    subtitle: 'Vacances scolaires',
    description:
      "Stages de remise à niveau ou d'approfondissement pendant les vacances. Format intensif sur plusieurs jours consécutifs pour un maximum d'efficacité.",
    tags: ['Intensif', 'Toussaint · Noël · Pâques', 'Multi-jours'],
    href: '/stages-vacances',
    accent: 'from-gold/10 to-gold/5',
    hoverBorder: 'hover:border-gold/30',
  },
  {
    emoji: '🎯',
    title: 'Préparation examens',
    subtitle: 'Brevet · Baccalauréat',
    description:
      "Entraînement sur sujets officiels, méthodologie, gestion du stress. Focus Maths Expert. Connaissance précise des attendus des correcteurs.",
    tags: ['Brevet', 'Baccalauréat', 'Méthodologie'],
    href: '/preparation-examens',
    accent: 'from-coral/10 to-teal/5',
    hoverBorder: 'hover:border-coral/30',
  },
]

export default function Services() {
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

  return (
    <section id="services" className="section-padding section-gradient-cream dark:bg-gray-950 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="absolute inset-0 math-pattern pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="mb-16">
          <div className={`flex items-center gap-3 mb-5 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="w-8 h-[2px] bg-gradient-to-r from-coral to-gold rounded-full" />
            <span className="text-navy dark:text-coral text-xs tracking-[0.3em] uppercase font-semibold">Nos services</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl text-navy dark:text-white mb-5 font-bold transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Une offre complète,
            <br />
            un seul interlocuteur.
          </h2>
          <p className={`text-muted dark:text-gray-400 text-lg max-w-xl leading-relaxed transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            Du suivi régulier au stage intensif — chaque intervention est conçue pour produire des
            résultats mesurables.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className={`relative bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 card-artistic group block bg-gradient-to-br ${service.accent} dark:from-transparent dark:to-transparent ${service.hoverBorder} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
            >
              <div className="text-3xl mb-5 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">{service.emoji}</div>
              <h3 className="font-bold text-xl text-navy dark:text-white mb-1">{service.title}</h3>
              <p className="text-coral dark:text-coral-light text-xs tracking-widest uppercase mb-4 font-medium">{service.subtitle}</p>
              <p className="text-muted dark:text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-surface dark:bg-gray-800 px-3 py-1 rounded-full text-navy/60 dark:text-gray-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-navy via-navy-light to-navy p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute top-0 right-0 w-60 h-60 bg-coral/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal/10 rounded-full blur-[60px]" />
          <div className="flex-1 relative z-10">
            <p className="text-xl text-white mb-2 font-bold">Un professeur. Pas une plateforme.</p>
            <p className="text-sm leading-relaxed text-white/50">
              Aucun algorithme, aucune commission — une relation directe entre la famille
              et le professeur, dès le premier contact.
            </p>
          </div>
          <Link href="/prendre-rendez-vous" className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-coral to-gold text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:shadow-[0_8px_30px_rgba(255,107,53,0.4)] hover:-translate-y-1 flex-shrink-0">
            Prendre contact
          </Link>
        </div>
      </div>
    </section>
  )
}
