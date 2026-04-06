'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function refuse() {
    localStorage.setItem('cookie-consent', 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl">🍪</span>
        <div>
          <p className="font-bold text-navy text-sm mb-1">Gestion des cookies</p>
          <p className="text-xs text-muted leading-relaxed">
            Nous utilisons des cookies pour assurer le bon fonctionnement du site.
            Aucune donnée partagée à des fins publicitaires.
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={accept}
          className="flex-1 py-2.5 text-xs font-semibold bg-navy text-white rounded-full hover:bg-navy-dark transition-colors">
          Accepter
        </button>
        <button onClick={refuse}
          className="flex-1 py-2.5 text-xs font-semibold bg-surface text-navy rounded-full hover:bg-gray-200 transition-colors">
          Refuser
        </button>
      </div>
    </div>
  )
}
