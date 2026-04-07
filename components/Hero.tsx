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
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[100px]" />

        {[
          { top: '15%', left: '8%', delay: '0s', size: 4 },
          { top: '25%', left: '85%', delay: '1s', size: 3 },
          { top: '60%', left: '12%', delay: '2s', size: 5 },
          { top: '70%', left: '90%', delay: '0.5s', size: 3 },
          { top: '40%', left: '5%', delay: '3s', size: 4 },
          { top: '80%', left: '75%', delay: '1.5s', size: 6 },
          { top: '10%', left: '60%', delay: '2.5s', size: 3 },
          { top: '50%', left: '95%', delay: '4s', size: 4 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold/20 animate-particle"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[700px] h-[700px] border border-white/[0.02] rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        </div>

        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" style={{ height: '120px' }}>
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z" fill="white" fillOpacity="0.05"/>
          <path d="M0,100 C480,60 960,120 1440,90 L1440,120 L0,120 Z" fill="white" fillOpacity="0.03"/>
        </svg>
      </div>

      <div className="container-max px-6 md:px-12 lg:px-24 py-16 md:py-24 w-full relative z-10 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`relative inline-block mb-10 transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="absolute inset-0 -m-4 rounded-full animate-glow" />

            <div className="relative">
              <div className="absolute -inset-6 border-2 border-gold/20 rounded-full animate-spin-slow" />
              <div className="absolute -inset-10 border border-gold/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

              <div className="absolute -inset-6">
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div key={deg} className="absolute top-1/2 left-1/2" style={{ transform: `rotate(${deg}deg)` }}>
                    <div className="w-2 h-2 rounded-full bg-gold/40 animate-particle" style={{ transform: 'translateX(55px)', animationDelay: `${deg / 60 * 0.5}s` }} />
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
              <span className="text-gold text-sm animate-pulse">✦</span>
              <span className="text-white/80 text-xs tracking-[0.25em] font-semibold uppercase">
                Nedjar Objectif Réussite
              </span>
              <span className="text-gold text-sm animate-pulse">✦</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-8">
              L&apos;avenir de nos enfants
              <br />
              passe par les{' '}
              <span className="text-gradient relative">
                mathématiques.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 C75 2, 150 12, 298 4" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gold-grad" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
                      <stop offset="30%" stopColor="#C9A84C" />
                      <stop offset="70%" stopColor="#e6c968" />
                      <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
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
            <a href="/prendre-rendez-vous" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-navy font-bold px-8 py-4 rounded-full text-base transition-all duration-400 hover:shadow-[0_8px_40px_rgba(201,168,76,0.4)] hover:-translate-y-1">
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
              { value: 'Agrégé', label: 'Plus haut concours national', icon: '🎓' },
              { value: '200+', label: 'Élèves accompagnés', icon: '👨‍🎓' },
              { value: 'Primaire→Tle', label: 'Maths Expert inclus', icon: '📐' },
              { value: 'Inclusif', label: 'TDAH · Dys · TSA · HPI', icon: '♾️' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 text-center card-premium group cursor-default"
                style={{ animationDelay: `${1.2 + i * 0.15}s` }}
              >
                <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">{stat.icon}</span>
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
