'use client'

import { useState } from 'react'

export default function SeasonalBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative z-[60] py-2.5 px-6 text-center bg-gold">
      <p className="text-navy text-xs tracking-wider font-medium">
        🎉 Stages de printemps — Places disponibles.{' '}
        <a href="/prendre-rendez-vous" className="underline underline-offset-2 font-semibold hover:opacity-75 transition-opacity">
          Réserver maintenant
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Fermer"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/60 hover:text-navy transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
