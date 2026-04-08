'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-bg bg-coral top-10 left-10 w-[500px] h-[500px]" style={{ animationDelay: '0s' }} />
        <div className="blob-bg bg-teal bottom-10 right-10 w-[600px] h-[600px]" style={{ animationDelay: '2s' }} />
        <div className="blob-bg bg-gold top-1/2 left-1/3 w-[400px] h-[400px]" style={{ animationDelay: '4s' }} />

        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="math-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="white" />
              <line x1="0" y1="40" x2="80" y2="40" stroke="white" strokeWidth="0.3" strokeDasharray="4 4" />
              <line x1="40" y1="0" x2="40" y2="80" stroke="white" strokeWidth="0.3" strokeDasharray="4 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#math-grid)" />
        </svg>

        <svg className="absolute top-[15%] right-[10%] w-40 h-40 text-coral/10 animate-spin-slow" viewBox="0 0 100 100" fill="none">
          <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M50 20 L80 50 L50 80 L20 50 Z" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <svg className="absolute bottom-[20%] left-[8%] w-32 h-32 text-teal/10 animate-float-slow" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.3" />
        </svg>

        <svg className="absolute top-[60%] right-[20%] w-24 h-24 text-gold/10 animate-float" viewBox="0 0 100 100" fill="none">
          <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" stroke="currentColor" strokeWidth="1" />
        </svg>

        {[
          { top: '12%', left: '6%', delay: '0s', size: 6, color: 'bg-coral/30' },
          { top: '22%', left: '88%', delay: '1s', size: 4, color: 'bg-teal/30' },
          { top: '55%', left: '15%', delay: '2s', size: 5, color: 'bg-gold/30' },
          { top: '75%', left: '92%', delay: '0.5s', size: 4, color: 'bg-coral/20' },
          { top: '35%', left: '4%', delay: '3s', size: 7, color: 'bg-teal/20' },
          { top: '85%', left: '70%', delay: '1.5s', size: 5, color: 'bg-gold/25' },
        ].map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${p.color} animate-particle`}
            style={{
              top: p.top, left: p.left,
              width: p.size, height: p.size,
              animationDelay: p.delay,
              animationDuration: `${5 + i * 0.7}s`,
            }}
          />
        ))}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] border border-white/[0.03] rounded-full animate-spin-slow" />
        </div>

        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" style={{ height: '120px' }}>
          <path d="M0,60 C240,100 480,20 720,70 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" fill="url(#wave-gradient)" fillOpacity="0.08" />
          <path d="M0,90 C360,60 720,110 1080,70 C1260,50 1380,90 1440,85 L1440,120 L0,120 Z" fill="white" fillOpacity="0.04" />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="50%" stopColor="#E5A849" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-max px-6 md:px-12 lg:px-24 py-16 md:py-24 w-full relative z-10 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`relative inline-block mb-10 transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="absolute inset-0 -m-4 rounded-full animate-glow" />

            <div className="relative">
              <div className="absolute -inset-6 rounded-full animate-spin-slow" style={{ border: '2px solid transparent', borderImage: 'linear-gradient(135deg, #FF6B35, #E5A849, #0D9488) 1' , borderRadius: '9999px' }}>
                <div className="w-full h-full rounded-full" style={{ border: '2px solid transparent', background: 'linear-gradient(135deg, rgba(255,107,53,0.2), rgba(229,168,73,0.2), rgba(13,148,136,0.2))', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
              </div>

              <div className="absolute -inset-6">
                {[0, 72, 144, 216, 288].map((deg) => (
                  <div key={deg} className="absolute top-1/2 left-1/2" style={{ transform: `rotate(${deg}deg)` }}>
                    <div
                      className="w-2.5 h-2.5 rounded-full animate-particle"
                      style={{
                        transform: 'translateX(55px)',
                        animationDelay: `${deg / 72 * 0.5}s`,
                        background: deg < 144 ? '#FF6B35' : deg < 288 ? '#E5A849' : '#0D9488',
                        opacity: 0.6,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float p-1">
                <Image
                  src="/logo.png"
                  alt="Maths Connections"
                  width={120}
                  height={120}
                  className="rounded-full"
                  priority
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 glass rounded-full">
              <span className="text-coral text-sm animate-pulse">&#9670;</span>
              <span className="text-white/80 text-xs tracking-[0.25em] font-semibold uppercase">
                Nedjar Objectif Réussite
              </span>
              <span className="text-teal-light text-sm animate-pulse">&#9670;</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-8">
              L&apos;avenir de nos enfants
              <br />
              passe par les{' '}
              <span className="text-gradient relative">
                mathématiques.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 C75 2, 150 12, 298 4" stroke="url(#artistic-grad)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="artistic-grad" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
                      <stop offset="30%" stopColor="#FF6B35" />
                      <stop offset="60%" stopColor="#E5A849" />
                      <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto text-white/50">
              Parce que chaque enfant mérite un accompagnement
              à la hauteur de son potentiel.
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="/prendre-rendez-vous" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-coral to-gold text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-400 hover:shadow-[0_8px_40px_rgba(255,107,53,0.4)] hover:-translate-y-1">
              Prendre rendez-vous
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#mission" className="inline-flex items-center gap-2 glass text-white/80 font-medium px-8 py-4 rounded-full text-base transition-all duration-300 hover:bg-white/15 hover:-translate-y-1">
              Découvrir notre approche
            </a>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { value: 'Agrégé', label: 'Plus haut concours national', icon: '🎓', accent: 'from-coral/20 to-coral/5' },
              { value: '200+', label: 'Élèves accompagnés', icon: '👨‍🎓', accent: 'from-gold/20 to-gold/5' },
              { value: 'Primaire→Tle', label: 'Maths Expert inclus', icon: '📐', accent: 'from-teal/20 to-teal/5' },
              { value: 'Inclusif', label: 'TDAH · Dys · TSA · HPI', icon: '♾️', accent: 'from-coral/20 to-gold/5' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`glass rounded-2xl p-5 text-center card-premium group cursor-default bg-gradient-to-br ${stat.accent}`}
                style={{ animationDelay: `${1.2 + i * 0.15}s` }}
              >
                <span className="text-2xl block mb-2 group-hover:scale-125 transition-transform duration-500">{stat.icon}</span>
                <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[11px] text-white/40 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
