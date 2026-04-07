'use client'

import { useState } from 'react'

const offres = [
  {
    label: '🎓 Séance individuelle',
    subtitle: '1h de cours particulier',
    amount: '60.00',
    description: 'Cours particulier 1h — Mathématiques',
  },
  {
    label: '⚡ Stage vacances',
    subtitle: 'Journée intensive',
    amount: '150.00',
    description: 'Stage intensif vacances scolaires — Mathématiques',
  },
  {
    label: '🎯 Préparation examen',
    subtitle: 'Session Brevet / Bac',
    amount: '120.00',
    description: 'Préparation examen Brevet / Baccalauréat — Mathématiques',
  },
]

export default function PaiementButtons() {
  const [loading, setLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const payer = async (amount: string, description: string) => {
    setLoading(amount)
    setError(null)
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, description }),
      })
      const data = await res.json()
      if (!res.ok || !data.checkoutUrl) {
        throw new Error(data.error ?? 'Erreur inconnue')
      }
      window.location.href = data.checkoutUrl
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
      setLoading(null)
    }
  }

  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-4 mb-4">
        {offres.map((o) => (
          <button
            key={o.amount}
            onClick={() => payer(o.amount, o.description)}
            disabled={loading !== null}
            className="group relative bg-white border border-gray-100 rounded-2xl p-6 text-left hover:border-gold/50 hover:shadow-lg transition-all duration-300 card-premium disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-gold to-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
            <p className="text-base font-bold text-navy mb-1">{o.label}</p>
            <p className="text-xs text-muted mb-3">{o.subtitle}</p>
            <p className="text-2xl font-bold text-gold">{o.amount.replace('.00', '')}€</p>
            <p className="mt-4 text-xs font-semibold text-navy/60 group-hover:text-navy transition-colors">
              {loading === o.amount ? 'Redirection...' : 'Payer en ligne →'}
            </p>
          </button>
        ))}
      </div>
      {error && (
        <p className="text-red-500 text-sm text-center mt-2">{error}</p>
      )}
      <p className="text-xs text-muted text-center mt-3">
        Paiement sécurisé par Mollie · CB, Apple Pay, Google Pay
      </p>
    </div>
  )
}
