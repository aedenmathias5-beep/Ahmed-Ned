'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h2 className="font-display text-3xl text-navy font-bold mb-4">Une erreur est survenue</h2>
        <p className="text-muted mb-6">Nous nous excusons pour ce désagrément.</p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
