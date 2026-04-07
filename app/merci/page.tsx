import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Paiement confirmé — Maths Connections',
  description: 'Votre paiement a bien été reçu. M. Nedjar vous contactera sous 24h.',
  robots: { index: false, follow: false },
}

export default function MerciPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-24">
        <div className="max-w-lg">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="font-display text-4xl text-navy font-bold mb-4">
            Paiement confirmé !
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Merci pour votre règlement. M. Nedjar vous contactera sous 24h pour confirmer
            le créneau et les modalités de la séance.
          </p>
          <div className="bg-cream rounded-2xl p-6 mb-8 text-sm text-muted">
            <p>Une confirmation vous sera envoyée par email.</p>
            <p className="mt-1">En cas de question : <a href="mailto:nedjar.objectif.reussite@gmail.com" className="text-navy font-medium hover:underline">nedjar.objectif.reussite@gmail.com</a></p>
          </div>
          <Link href="/" className="btn-primary bg-navy text-white hover:bg-navy/90">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
