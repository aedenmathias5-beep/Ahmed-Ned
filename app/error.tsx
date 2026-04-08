'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Maths Connections"
              width={40}
              height={40}
              className="rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className="hidden sm:block">
              <span className="font-semibold text-sm leading-tight block" style={{ color: '#123A63' }}>
                Maths Connections
              </span>
              <span className="text-[10px] leading-tight block text-gray-400">
                Apprendre à réussir
              </span>
            </div>
          </Link>
        </div>
      </header>

      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 pt-20">
        <div className="text-center px-4">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#123A63' }}>Une erreur est survenue</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Nous nous excusons pour ce désagrément.</p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all"
            style={{ backgroundColor: '#123A63', color: '#fff' }}
          >
            Réessayer
          </button>
        </div>
      </main>

      <footer className="py-8 text-center" style={{ backgroundColor: '#123A63' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Image
              src="/logo.png"
              alt="Maths Connections"
              width={24}
              height={24}
              className="rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className="text-white font-semibold text-sm">Maths Connections</span>
          </div>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Maths Connections — Tous droits réservés
          </p>
        </div>
      </footer>
    </>
  )
}
