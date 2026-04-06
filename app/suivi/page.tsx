'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const DEMO_DATA = {
  prenom: 'Marie',
  niveau: 'Terminale',
  objectif: 'Obtenir 16+ au Baccalauréat',
  progression: [
    { date: '15/03', note: 8 },
    { date: '22/03', note: 10 },
    { date: '29/03', note: 11 },
    { date: '05/04', note: 13 },
  ],
  seances: [
    {
      date: '5 avril 2026',
      titre: 'Séance #12 — Analyse : Limites et continuité',
      resume: "Bonne progression sur le calcul de limites. Marie maîtrise maintenant les formes indéterminées classiques. Reste à consolider la continuité sur un intervalle.",
      objectifs: ['✅ Calculer les limites courantes', '✅ Lever les indéterminations', '🔄 Continuité et TVI'],
      devoirs: 'Exercices 14 à 18 p. 245 + Annale 2024 sujet 1 exercice 3',
    },
    {
      date: '29 mars 2026',
      titre: 'Séance #11 — Probabilités conditionnelles',
      resume: "Chapitre bien compris dans l'ensemble. Les arbres pondérés sont acquis. Formule de Bayes : besoin de davantage de pratique.",
      objectifs: ['✅ Arbres pondérés', '✅ Probabilités totales', '🔄 Formule de Bayes'],
      devoirs: 'Fiche probabilités n°3 + Révision formules',
    },
  ],
  recommandations: [
    'Revoir les exercices sur la continuité avant la prochaine séance',
    "S'entraîner sur 2 annales complètes ce week-end (en conditions réelles : 4h, sans aide)",
    'Consolider les formules de dérivation — fiche à relire chaque soir',
  ],
}

export default function SuiviPage() {
  const [code, setCode] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [isDemo, setIsDemo] = useState(false)

  const handleLogin = () => {
    if (code.toLowerCase() === 'demo') {
      setAuthenticated(true)
      setIsDemo(true)
    }
  }

  const data = DEMO_DATA
  const maxNote = 20
  const chartHeight = 200

  if (!authenticated) {
    return (
      <>
        <Header />
        <main>
          <section className="bg-navy" style={{ paddingTop: '120px' }}>
            <div className="container-max px-6 md:px-12 lg:px-24 py-20">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-lg">📊</span>
                <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">Espace privé</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
                Suivi de
                <br />
                <span className="text-gold">progression.</span>
              </h1>
              <p className="text-lg max-w-2xl leading-relaxed text-white/65">
                Espace privé par élève. Consultez les comptes-rendus de séance,
                suivez l&apos;évolution des notes et les recommandations de M. Nedjar.
              </p>
            </div>
          </section>

          <section className="section-padding bg-white">
            <div className="container-max">
              <div className="max-w-md mx-auto">
                <div className="bg-cream rounded-2xl p-8 text-center">
                  <span className="text-4xl mb-4 block">🔐</span>
                  <h2 className="text-xl font-bold text-navy mb-2">Accès sécurisé</h2>
                  <p className="text-sm text-muted mb-6">
                    Entrez le code d&apos;accès fourni par M. Nedjar lors de votre premier rendez-vous.
                  </p>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                    placeholder="Code d'accès élève"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy outline-none text-sm text-center mb-4"
                  />
                  <button onClick={handleLogin} className="w-full btn-primary text-sm">
                    Accéder à mon espace →
                  </button>
                  <p className="text-xs text-muted mt-4">
                    Tapez <strong>demo</strong> pour voir un exemple d&apos;espace élève.
                  </p>
                </div>

                <div className="mt-12 space-y-6">
                  <h3 className="font-display text-2xl text-navy font-bold text-center">
                    Ce que vous y trouverez
                  </h3>
                  {[
                    { emoji: '📝', title: 'Comptes-rendus de séance', desc: 'Résumé détaillé de chaque cours, rédigé par M. Nedjar' },
                    { emoji: '🎯', title: 'Objectifs fixés et atteints', desc: 'Suivi clair de la progression vers les objectifs définis' },
                    { emoji: '📈', title: 'Évolution des notes', desc: 'Graphique visuel de la progression au fil des séances' },
                    { emoji: '📋', title: 'Recommandations', desc: 'Conseils personnalisés pour travailler entre les séances' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                      <div>
                        <p className="font-semibold text-navy text-sm">{item.title}</p>
                        <p className="text-xs text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CookieConsent />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-white" style={{ paddingTop: '100px' }}>
          <div className="container-max px-6 md:px-12 py-10">
            {isDemo && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-center">
                <p className="text-sm text-amber-700 font-medium">
                  🔍 Mode démonstration — Cet espace est un exemple fictif pour illustrer le fonctionnement.
                </p>
              </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
              <div>
                <p className="text-gold text-xs tracking-widest uppercase font-semibold mb-1">Espace élève</p>
                <h1 className="text-3xl text-navy font-bold">{data.prenom}</h1>
                <p className="text-sm text-muted">{data.niveau} · Objectif : {data.objectif}</p>
              </div>
              <button onClick={() => { setAuthenticated(false); setCode('') }} className="btn-outline text-sm">
                Déconnexion
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-surface rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-navy">{data.seances.length}</p>
                <p className="text-xs text-muted">Séances réalisées</p>
              </div>
              <div className="bg-surface rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-green-600">+{data.progression[data.progression.length - 1].note - data.progression[0].note} pts</p>
                <p className="text-xs text-muted">Progression</p>
              </div>
              <div className="bg-surface rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-navy">{data.progression[data.progression.length - 1].note}/20</p>
                <p className="text-xs text-muted">Dernière note</p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-6 mb-10">
              <h2 className="font-bold text-navy mb-4">📈 Évolution des notes</h2>
              <div className="relative" style={{ height: chartHeight + 40 }}>
                <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-muted">
                  <span>20</span>
                  <span>15</span>
                  <span>10</span>
                  <span>5</span>
                  <span>0</span>
                </div>
                <div className="ml-10 h-full flex items-end gap-2 pb-8">
                  {data.progression.map((p, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-xs font-bold text-navy">{p.note}</span>
                      <div
                        className="w-full bg-navy rounded-t-lg transition-all"
                        style={{ height: `${(p.note / maxNote) * chartHeight}px` }}
                      />
                      <span className="text-[10px] text-muted">{p.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="font-bold text-navy text-xl mb-6">📝 Comptes-rendus de séance</h2>
            <div className="space-y-6 mb-10">
              {data.seances.map((s) => (
                <div key={s.date} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-navy">{s.titre}</h3>
                    <span className="text-xs text-muted">{s.date}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{s.resume}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-navy mb-2">Objectifs :</p>
                    <div className="flex flex-wrap gap-2">
                      {s.objectifs.map((o) => (
                        <span key={o} className="text-xs bg-surface px-3 py-1 rounded-full">{o}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-cream rounded-xl p-4">
                    <p className="text-xs font-semibold text-navy mb-1">📋 À faire pour la prochaine séance :</p>
                    <p className="text-sm text-muted">{s.devoirs}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy rounded-2xl p-8 mb-10">
              <h2 className="text-white font-bold text-lg mb-4">💡 Recommandations de M. Nedjar</h2>
              <div className="space-y-3">
                {data.recommandations.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5">→</span>
                    <p className="text-white/80 text-sm">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
