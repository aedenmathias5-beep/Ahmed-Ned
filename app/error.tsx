'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 pt-20">
        <div className="text-center px-4">
          <h2 className="font-display text-3xl text-navy dark:text-white font-bold mb-4">Une erreur est survenue</h2>
          <p className="text-muted dark:text-gray-400 mb-6">Nous nous excusons pour ce désagrément.</p>
          <button
            onClick={reset}
            className="btn-primary"
          >
            Réessayer
          </button>
        </div>
      </main>
      <Footer />
    </>
  )
}
