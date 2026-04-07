import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import BookingCalendar from '@/components/BookingCalendar'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous — Cours particuliers de mathématiques',
  description:
    'Réservez un rendez-vous avec Monsieur Nedjar, professeur agrégé de mathématiques. Premier appel de découverte gratuit. Cours à Paris, proche banlieue ou en visioconférence.',
  alternates: { canonical: `${siteUrl}/prendre-rendez-vous` },
  keywords: ['rendez-vous cours maths Paris', 'réserver cours particulier maths', 'professeur maths Paris contact'],
}

export default function PrendreRendezVous() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy" style={{ paddingTop: '120px' }}>
          <div className="container-max px-6 md:px-12 lg:px-24 py-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg">📅</span>
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">Rendez-vous</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
              Prendre
              <br />
              <span className="text-gold">rendez-vous.</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed text-white/65">
              Premier appel de découverte gratuit — 15 minutes pour échanger
              sur les besoins de votre enfant, sans engagement.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <div className="bg-cream rounded-2xl p-6 text-center">
                <span className="text-2xl mb-2 block">📞</span>
                <p className="font-semibold text-navy text-sm mb-1">Téléphone</p>
                <p className="text-sm text-muted">06 XX XX XX XX</p>
                <p className="text-xs text-gold mt-1">(numéro pro à venir)</p>
              </div>
              <div className="bg-cream rounded-2xl p-6 text-center">
                <span className="text-2xl mb-2 block">📧</span>
                <p className="font-semibold text-navy text-sm mb-1">Email</p>
                <a href="mailto:nedjar.objectif.reussite@gmail.com" className="text-xs text-navy hover:text-navy/70 transition-colors break-all">
                  nedjar.objectif.reussite@gmail.com
                </a>
              </div>
              <div className="bg-cream rounded-2xl p-6 text-center">
                <span className="text-2xl mb-2 block">⏱️</span>
                <p className="font-semibold text-navy text-sm mb-1">Réponse</p>
                <p className="text-sm text-muted">Sous 24 heures</p>
              </div>
              <div className="bg-cream rounded-2xl p-6 text-center">
                <span className="text-2xl mb-2 block">🕐</span>
                <p className="font-semibold text-navy text-sm mb-1">Disponibilité</p>
                <p className="text-xs text-muted">Lun–Sam : 8h–20h</p>
                <p className="text-xs text-muted">Dim : sur demande</p>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 mb-12 flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">🎁</span>
              <div>
                <p className="font-bold text-navy text-sm mb-1">Premier appel de découverte gratuit</p>
                <p className="text-xs text-muted leading-relaxed">
                  15 minutes pour faire connaissance, comprendre les besoins de votre enfant et
                  vous expliquer comment je peux l&apos;accompagner. Sans engagement, sans frais.
                  C&apos;est la meilleure façon de savoir si mon approche vous convient.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-12 mb-6">
              <h2 className="font-display text-3xl text-navy font-bold mb-2 text-center">Réservation en ligne</h2>
              <p className="text-sm text-muted text-center mb-8">
                Sélectionnez votre créneau et recevez une confirmation automatique par email.
              </p>
            </div>

            <BookingCalendar />
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
