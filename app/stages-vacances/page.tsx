import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  title: 'Stage Intensif de Mathématiques pendant les Vacances — Paris',
  description:
    'Stages intensifs de mathématiques pendant les vacances scolaires. Remise à niveau ou approfondissement. Professeur agrégé.',
  alternates: { canonical: `${siteUrl}/stages-vacances` },
}

const periodes = [
  { label: 'Toussaint', desc: 'Combler les lacunes du 1er trimestre avant les premiers bilans' },
  { label: 'Noël', desc: 'Consolider avant les examens blancs et le 2e trimestre' },
  { label: 'Pâques', desc: 'Sprint final avant le Brevet ou le Baccalauréat' },
  { label: 'Été', desc: "Préparation à l'entrée dans la classe supérieure ou la prépa" },
]

export default function StagesVacances() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy" style={{ paddingTop: '120px' }}>
          <div className="container-max px-6 md:px-12 lg:px-24 py-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg">⚡</span>
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">Vacances scolaires</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
              Stages intensifs
              <br />
              <span className="text-gold">de mathématiques.</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed mb-10 text-white/65">
              Format intensif sur plusieurs jours consécutifs — remise à niveau ou
              approfondissement, encadré par un professeur agrégé en activité.
            </p>
            <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light">
              Réserver un stage
            </a>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl text-navy font-bold mb-8">Toutes les vacances</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {periodes.map((p) => (
                <div key={p.label} className="bg-cream p-7 rounded-2xl flex gap-5 items-start">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0 rounded-xl border border-gold/20">
                    <span className="text-gold font-bold text-sm">{p.label.slice(0, 2)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-navy mb-2">{p.label}</h3>
                    <p className="text-sm leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl text-navy font-bold mb-6">
              Pourquoi un stage intensif ?
            </h2>
            <div className="max-w-3xl text-muted leading-relaxed space-y-4">
              <p>
                Les vacances scolaires sont une opportunité unique : le temps est disponible,
                la pression immédiate est moindre, et la concentration est maximale.
              </p>
              <p>
                Le format multi-jours consécutifs est plus efficace que des séances espacées :
                l&apos;élève entre en profondeur dans les notions et consolide immédiatement.
              </p>
              <p>
                Chaque stage est conçu sur mesure en fonction du niveau et des objectifs de
                l&apos;élève.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy">
          <div className="container-max text-center">
            <h2 className="text-4xl text-white mb-4 font-bold">
              Inscriptions ouvertes pour les prochaines vacances.
            </h2>
            <p className="mb-8 text-white/55">
              Stage intensif de mathématiques — places limitées.
            </p>
            <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light">
              Réserver une place
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
