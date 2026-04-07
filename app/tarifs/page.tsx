import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import PaiementButtons from '@/components/PaiementButtons'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  title: 'Tarifs — Cours particuliers de mathématiques à Paris & Strasbourg',
  description:
    'Tarifs des cours particuliers de mathématiques avec un professeur agrégé à Paris et Strasbourg. Devis personnalisé.',
  alternates: { canonical: `${siteUrl}/tarifs` },
}

const formules = [
  {
    label: 'Cours régulier',
    freq: '1 à 2 séances / semaine',
    desc: "Suivi continu tout au long de l'année scolaire. Programme personnalisé, bilan régulier pour les parents.",
    tags: ['Collège', 'Lycée', 'Terminale Maths Expert'],
  },
  {
    label: 'Stage vacances',
    freq: 'Format intensif multi-jours',
    desc: 'Remise à niveau ou approfondissement en continu sur plusieurs jours consécutifs pendant les vacances.',
    tags: ['Toussaint', 'Noël', 'Pâques', 'Été'],
  },
  {
    label: 'Préparation examens',
    freq: "Sprint avant l'épreuve",
    desc: "Ciblé Brevet ou Baccalauréat. Entraînement sur annales, méthodologie et gestion du stress.",
    tags: ['Brevet 3e', 'Bac Terminale', 'Maths Expert'],
  },
]

export default function Tarifs() {
  return (
    <>
      <Header />
      <main>
        <section className="section-padding bg-white" style={{ paddingTop: '140px' }}>
          <div className="container-max">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg">💶</span>
              <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Tarifs</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-navy mb-4 leading-tight font-bold">
              Tarifs sur devis
              <br />
              <span className="text-gold">personnalisé.</span>
            </h1>
            <p className="text-lg max-w-2xl mb-16 text-muted">
              Chaque situation est différente — niveau, fréquence, localisation, objectifs.
              Je préfère vous proposer un tarif adapté plutôt qu&apos;une grille standardisée.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {formules.map((f) => (
                <div key={f.label} className="bg-cream p-8 rounded-2xl">
                  <p className="text-gold text-xs tracking-widest uppercase mb-2 font-medium">{f.freq}</p>
                  <h2 className="font-bold text-2xl text-navy mb-4">{f.label}</h2>
                  <p className="text-sm leading-relaxed mb-6 text-muted">{f.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span key={t} className="text-xs bg-white px-3 py-1 rounded-full text-muted font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg">💳</span>
                <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Paiement en ligne</span>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-2">Réglez directement en ligne</h2>
              <p className="text-muted text-sm mb-8">Paiement sécurisé par carte bancaire, Apple Pay ou Google Pay.</p>
              <PaiementButtons />
            </div>

            <div className="bg-navy p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <p className="text-2xl text-white mb-2 font-bold">Obtenez votre devis en 24h.</p>
                <p className="text-sm text-white/55">
                  Premier échange téléphonique offert — tarif personnalisé sans engagement.
                </p>
              </div>
              <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light flex-shrink-0">
                Demander un devis
              </a>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { title: 'Pas de frais cachés', desc: "Le tarif convenu est le tarif final — aucune commission, aucun frais d'inscription." },
                { title: 'Paiement direct', desc: 'Règlement directement au professeur, selon les modalités convenues.' },
                { title: 'Crédit d\'impôt', desc: "Les cours à domicile donnent droit au crédit d'impôt de 50% (sous conditions)." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 bg-gold/30 rounded-full" />
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">{item.title}</p>
                    <p className="text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
