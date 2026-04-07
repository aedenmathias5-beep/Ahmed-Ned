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
        <section className="section-padding bg-white dark:bg-gray-950" style={{ paddingTop: '140px' }}>
          <div className="container-max">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg">💶</span>
              <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Tarifs</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-navy dark:text-white mb-4 leading-tight font-bold">
              Tarifs sur devis
              <br />
              <span className="text-gold">personnalisé.</span>
            </h1>
            <p className="text-lg max-w-2xl mb-16 text-muted dark:text-gray-400">
              Chaque situation est différente — niveau, fréquence, localisation, objectifs.
              Je préfère vous proposer un tarif adapté plutôt qu&apos;une grille standardisée.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {formules.map((f) => (
                <div key={f.label} className="bg-cream dark:bg-gray-900 p-8 rounded-2xl">
                  <p className="text-gold text-xs tracking-widest uppercase mb-2 font-medium">{f.freq}</p>
                  <h2 className="font-bold text-2xl text-navy dark:text-white mb-4">{f.label}</h2>
                  <p className="text-sm leading-relaxed mb-6 text-muted dark:text-gray-400">{f.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span key={t} className="text-xs bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-muted dark:text-gray-300 font-medium">{t}</span>
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
              <h2 className="text-2xl font-bold text-navy dark:text-white mb-2">Réglez directement en ligne</h2>
              <p className="text-muted dark:text-gray-400 text-sm mb-8">Paiement sécurisé par carte bancaire, Apple Pay ou virement — via Mollie.</p>
              <PaiementButtons />

              <div className="mt-10 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 bg-gray-50/50 dark:bg-gray-900/50">
                <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-5 text-center">Moyens de paiement acceptés</p>
                <div className="flex flex-wrap items-center justify-center gap-4">

                  {/* Visa */}
                  <div className="flex items-center justify-center bg-white rounded-xl border border-gray-200 px-5 py-3 h-14 w-28 shadow-sm">
                    <svg viewBox="0 0 780 500" className="h-7 w-auto" aria-label="Visa">
                      <path d="M293.2 348.7l33.4-195.8h53.4l-33.5 195.8H293.2z" fill="#00579F"/>
                      <path d="M554.7 157.4c-10.6-3.9-27.2-8.1-47.9-8.1-52.8 0-90.1 26.5-90.4 64.5-.3 28.1 26.5 43.7 46.8 53.1 20.8 9.5 27.8 15.7 27.7 24.2-.1 13.1-16.6 19.1-32 19.1-21.4 0-32.8-3-50.4-10.3l-6.9-3.1-7.5 43.7c12.5 5.4 35.6 10.2 59.6 10.4 56.2 0 92.7-26.2 93.1-66.8.2-22.2-14-39.1-44.8-53-18.7-9-30.2-15-30.1-24.1 0-8.1 9.7-16.7 30.7-16.7 17.5-.3 30.2 3.5 40.1 7.5l4.8 2.3 7.2-42.7z" fill="#00579F"/>
                      <path d="M661.3 152.9h-41.3c-12.8 0-22.4 3.5-28 16.2l-79.4 179.5h56.1l11.2-29.3h68.6l6.5 29.4h49.6l-43.3-195.8zm-65.8 124.1c4.4-11.3 21.3-55.1 21.3-55.1s4.4-11.4 7.1-18.7l3.6 16.9s10.2 46.6 12.4 56.9h-44.4z" fill="#00579F"/>
                      <path d="M230.5 152.9l-52.3 133.6-5.6-27.2c-9.7-31.2-40-65-73.9-81.9l47.9 171.1 56.5-.1 84.1-195.5h-56.7z" fill="#00579F"/>
                      <path d="M131.6 152.9H46.1l-.7 3.9c66.5 16.1 110.5 54.9 128.8 101.6l-18.6-89.3c-3.2-12.4-12.6-15.8-24-16.2z" fill="#FAA61A"/>
                    </svg>
                  </div>

                  {/* Mastercard */}
                  <div className="flex items-center justify-center bg-white rounded-xl border border-gray-200 px-5 py-3 h-14 w-28 shadow-sm">
                    <svg viewBox="0 0 131.39 86.9" className="h-7 w-auto" aria-label="Mastercard">
                      <rect x="48.19" width="35" height="86.9" fill="#ff5f00"/>
                      <path d="M51.94,43.45a55.3,55.3,0,0,1,13.25-36.45,55.44,55.44,0,1,0,0,72.9A55.3,55.3,0,0,1,51.94,43.45Z" fill="#eb001b"/>
                      <path d="M131.39,43.45a55.44,55.44,0,0,1-89.7,43.45,55.44,55.44,0,0,0,0-86.9,55.44,55.44,0,0,1,89.7,43.45Z" fill="#f79e1b"/>
                    </svg>
                  </div>

                  {/* Apple Pay */}
                  <div className="flex items-center justify-center bg-black rounded-xl border border-gray-200 px-5 py-3 h-14 w-28 shadow-sm">
                    <svg viewBox="0 0 165.52 105.96" className="h-6 w-auto" aria-label="Apple Pay">
                      <path d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-2.501 1.811A9.78 9.78 0 0 0 1.3 5.586a10.4 10.4 0 0 0-.975 2.96C.143 9.575.083 10.625.055 11.667.018 12.155.01 12.643 0 13.13V92.83c.01.487.018.974.055 1.462.028 1.041.088 2.092.27 3.121a10.46 10.46 0 0 0 .975 2.96 9.897 9.897 0 0 0 1.822 2.497 9.824 9.824 0 0 0 2.501 1.817 10.7 10.7 0 0 0 2.958.974c1.026.185 2.074.246 3.113.274.477.013.953.02 1.43.022.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.43-.022 1.038-.028 2.086-.09 3.112-.274a10.7 10.7 0 0 0 2.958-.974 9.824 9.824 0 0 0 2.502-1.817 9.924 9.924 0 0 0 1.82-2.498c.46-.952.773-1.95.975-2.959.184-1.03.244-2.08.273-3.121.036-.488.043-.975.053-1.462.004-.565.004-1.13.004-1.699V14.827c0-.568 0-1.133-.004-1.698-.01-.487-.017-.974-.053-1.462-.029-1.042-.089-2.092-.273-3.12a10.4 10.4 0 0 0-.975-2.96 9.994 9.994 0 0 0-4.322-4.322 10.7 10.7 0 0 0-2.958-.975c-1.026-.183-2.074-.246-3.112-.274-.478-.013-.954-.018-1.43-.022C151.83 0 151.263 0 150.698 0z" fill="#000"/>
                      <path d="M150.698 3.532l1.672.003c.452.004.905.008 1.36.021.793.022 1.719.065 2.583.22a7.128 7.128 0 0 1 1.97.65 6.461 6.461 0 0 1 2.84 2.842 6.978 6.978 0 0 1 .65 1.97c.153.864.197 1.79.218 2.57.036.49.043.96.053 1.452.004.556.004 1.112.004 1.67V92.83c0 .558 0 1.114-.004 1.682-.01.484-.017.953-.053 1.443-.022.78-.065 1.707-.218 2.574a7.07 7.07 0 0 1-.65 1.968 6.514 6.514 0 0 1-1.196 1.647 6.442 6.442 0 0 1-1.644 1.195 7.15 7.15 0 0 1-1.97.647c-.855.153-1.776.199-2.585.22-.454.014-.907.018-1.36.022-.56.004-1.126.004-1.69.004H14.822c-.002 0-.004 0-.005-.004-.557 0-1.12 0-1.68-.004a35.28 35.28 0 0 1-1.361-.022c-.807-.02-1.728-.066-2.583-.22a7.076 7.076 0 0 1-1.97-.648 6.558 6.558 0 0 1-1.644-1.194 6.467 6.467 0 0 1-1.197-1.647 7.003 7.003 0 0 1-.648-1.968c-.153-.865-.197-1.792-.218-2.574-.035-.49-.043-.96-.052-1.442-.004-.568-.004-1.124-.004-1.682V13.13c0-.558 0-1.114.004-1.668.009-.492.017-.963.052-1.453.022-.78.065-1.706.219-2.572a7.028 7.028 0 0 1 .647-1.97 6.432 6.432 0 0 1 1.197-1.645 6.558 6.558 0 0 1 1.645-1.196 7.076 7.076 0 0 1 1.97-.649c.855-.153 1.776-.199 2.583-.219a60.8 60.8 0 0 1 1.36-.022l1.672-.003h135.875" fill="#fff"/>
                      <path d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.51-2.063.09-4.56 1.362-6.005 3.115-1.318 1.58-2.48 4.03-2.167 6.349 2.23.172 4.517-1.148 6.067-2.954M45.586 39.075c-3.346-.203-6.196 1.9-7.795 1.9-1.6 0-4.046-1.8-6.698-1.753-3.447.048-6.647 2.003-8.395 5.109-3.6 6.212-.944 15.422 2.548 20.484 1.7 2.48 3.747 5.218 6.444 5.123 2.55-.1 3.547-1.652 6.647-1.652 3.096 0 3.994 1.652 6.747 1.604 2.8-.048 4.548-2.481 6.247-4.964 1.952-2.826 2.751-5.556 2.8-5.702-.05-.05-5.398-2.1-5.447-8.26-.047-5.158 4.198-7.638 4.398-7.786-2.398-3.547-6.147-3.944-7.496-4.003M75.493 32.68c8.598 0 14.58 5.924 14.58 14.55 0 8.657-6.108 14.61-14.784 14.61h-9.499V76.27h-6.73V32.68h16.433zm-9.703 23.606h7.874c5.985 0 9.39-3.227 9.39-8.027 0-4.8-3.405-7.995-9.36-7.995h-7.904v16.022zM92.026 67.44c0-4.857 3.726-7.84 10.34-8.22l7.61-.452v-2.137c0-3.09-2.087-4.857-5.576-4.857-3.317 0-5.374 1.62-5.87 4.087h-6.154c.349-5.518 4.888-9.59 12.264-9.59 7.214 0 11.828 3.814 11.828 9.795v20.204h-6.23v-4.828h-.146c-1.824 3.23-5.811 5.25-9.943 5.25-6.18 0-10.123-3.84-10.123-9.252zm17.95-2.745v-2.18l-6.84.43c-3.432.234-5.374 1.736-5.374 4.146 0 2.468 2.03 4.058 5.113 4.058 4.003 0 7.1-2.76 7.1-6.454zM121.89 92.1c-1.27 0-2.484-.175-3.43-.467v-5.2c.82.204 1.64.32 2.52.32 2.61 0 4.112-1.134 5.05-4.015l.524-1.677-10.02-27.748h7.02l6.678 21.434h.148l6.678-21.434h6.815l-10.398 29.124c-2.376 6.712-5.054 9.213-11.585 9.213z" fill="#000"/>
                    </svg>
                  </div>

                  {/* Virement bancaire */}
                  <div className="flex items-center justify-center bg-white rounded-xl border border-gray-200 px-5 py-3 h-14 w-28 shadow-sm gap-2">
                    <svg className="h-6 w-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Virement">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                    </svg>
                    <span className="text-xs font-semibold text-navy leading-tight">Virement<br/>bancaire</span>
                  </div>

                  {/* Chèque */}
                  <div className="flex items-center justify-center bg-white rounded-xl border border-gray-200 px-5 py-3 h-14 w-28 shadow-sm gap-2">
                    <svg className="h-6 w-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Chèque">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <span className="text-xs font-semibold text-navy leading-tight">Chèque</span>
                  </div>

                  {/* Espèces */}
                  <div className="flex items-center justify-center bg-white rounded-xl border border-gray-200 px-5 py-3 h-14 w-28 shadow-sm gap-2">
                    <svg className="h-6 w-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Espèces">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span className="text-xs font-semibold text-navy leading-tight">Espèces</span>
                  </div>

                </div>
                <p className="text-xs text-muted text-center mt-4">Paiement en ligne sécurisé par <span className="font-semibold text-navy">Mollie</span> — transactions chiffrées SSL</p>
              </div>
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
                    <p className="font-semibold text-navy dark:text-white text-sm mb-1">{item.title}</p>
                    <p className="text-xs leading-relaxed text-muted dark:text-gray-400">{item.desc}</p>
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
