import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  title: 'Mon Parcours & Mon Approche — Monsieur Nedjar',
  description:
    'Découvrez le parcours et la philosophie pédagogique de Monsieur Nedjar, Professeur Agrégé de Mathématiques. Enseignant dans deux établissements parisiens (7e et 8e arr.).',
  alternates: { canonical: `${siteUrl}/mon-experience` },
  keywords: ['professeur agrégé maths Paris', 'parcours enseignant mathématiques', 'philosophie pédagogique maths'],
}

const philosophie = [
  {
    emoji: '🧩',
    titre: 'Comprendre avant de résoudre',
    desc: "Je ne donne jamais la réponse en premier. Mon rôle est de guider l'élève vers sa propre compréhension — c'est la seule manière de construire des acquis durables.",
  },
  {
    emoji: '💙',
    titre: "L'élève au centre",
    desc: "Chaque enfant a son propre rythme, ses propres blocages, ses propres forces. Mon approche s'adapte à l'élève, jamais l'inverse.",
  },
  {
    emoji: '📈',
    titre: 'La régularité plutôt que le sprint',
    desc: "Les progrès durables viennent d'un travail régulier et structuré. C'est pourquoi je privilégie un accompagnement sur la durée.",
  },
  {
    emoji: '🤝',
    titre: 'Le triangle élève-parent-professeur',
    desc: "La réussite passe par une communication transparente. Les parents sont informés, impliqués, et rassurés à chaque étape.",
  },
]

const parcours = [
  {
    periode: "Aujourd'hui",
    titre: 'Professeur dans deux établissements parisiens',
    lieu: '7ème et 8ème arrondissement de Paris',
    desc: "Enseignant en activité au quotidien. Cette double expérience me permet de connaître tous les profils d'élèves, tous les programmes, et toutes les attentes des établissements d'excellence parisiens.",
  },
  {
    periode: 'Agrégation',
    titre: 'Agrégé de Mathématiques',
    lieu: 'Concours national',
    desc: "Le plus haut concours de recrutement de l'enseignement français. Une préparation exigeante qui m'a forgé une rigueur mathématique et une capacité d'explication à tous les niveaux.",
  },
  {
    periode: 'Examens',
    titre: 'Examinateur et correcteur officiel',
    lieu: 'Brevet & Baccalauréat',
    desc: "J'ai corrigé des centaines de copies. Je connais les pièges, les attendus, les critères exacts de notation. Chaque élève que j'accompagne en bénéficie directement.",
  },
  {
    periode: 'Vocation',
    titre: "Pourquoi j'ai choisi d'enseigner",
    lieu: 'Conviction personnelle',
    desc: "Les mathématiques ne sont pas une fin en soi — elles sont un outil pour structurer la pensée, développer la logique, et ouvrir des portes. J'enseigne parce que je crois profondément que chaque élève peut réussir avec le bon accompagnement.",
  },
]

const profils = [
  { label: 'TDAH', desc: 'Trouble du déficit de l\'attention' },
  { label: 'TSA', desc: 'Trouble du spectre autistique' },
  { label: 'Dyslexie / Dyspraxie / Dyscalculie', desc: 'Troubles des apprentissages' },
  { label: 'HPI', desc: 'Haut potentiel intellectuel' },
]

export default function MonExperience() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy" style={{ paddingTop: '120px' }}>
          <div className="container-max px-6 md:px-12 lg:px-24 py-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg">🎓</span>
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">Parcours & Approche</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
              Mon parcours.
              <br />
              <span className="text-gold">Mon approche.</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed text-white/65">
              Professeur Agrégé de Mathématiques, enseignant dans deux établissements
              parisiens. Voici mon histoire, ma vision et ce qui guide chaque séance.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <div className="bg-cream rounded-3xl p-10 border-l-4 border-gold text-center sticky top-28">
                  <div className="w-36 h-36 mx-auto rounded-2xl bg-navy/5 border-2 border-navy/10 flex items-center justify-center overflow-hidden mb-6">
                    <Image src="/logo.png" alt="Monsieur Nedjar" width={100} height={100} className="rounded-xl" style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <p className="text-2xl font-bold text-navy mb-2">Monsieur Nedjar</p>
                  <p className="text-lg text-navy font-medium mb-2">Professeur Agrégé de Mathématiques</p>
                  <p className="text-sm text-muted mb-4">
                    Enseignant dans deux établissements parisiens
                    <br />7<sup>ème</sup> et 8<sup>ème</sup> arrondissement
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['🎓 Agrégé', '🏫 En activité', '📋 Examinateur', '♾️ Inclusif'].map((tag) => (
                      <span key={tag} className="text-xs bg-white px-3 py-1.5 rounded-full text-navy font-medium border border-gray-100">{tag}</span>
                    ))}
                  </div>
                  <p className="text-[10px] text-muted mt-4 italic">Photo professionnelle à venir</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl text-navy font-bold mb-8">Mon parcours</h2>
                <div className="space-y-8">
                  {parcours.map((p) => (
                    <div key={p.titre} className="relative pl-8 border-l-2 border-gold/30">
                      <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-gold" />
                      <p className="text-gold text-xs tracking-widest uppercase font-semibold mb-1">{p.periode}</p>
                      <h3 className="font-bold text-navy text-lg mb-1">{p.titre}</h3>
                      <p className="text-xs text-muted mb-2">{p.lieu}</p>
                      <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">💡</span>
                <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Philosophie</span>
              </div>
              <h2 className="font-display text-4xl text-navy font-bold mb-10">Ma philosophie pédagogique.</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {philosophie.map((p) => (
                  <div key={p.titre} className="bg-surface rounded-2xl p-7 border border-gray-100">
                    <span className="text-3xl mb-4 block">{p.emoji}</span>
                    <h3 className="font-bold text-navy mb-2 text-lg">{p.titre}</h3>
                    <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="font-display text-3xl text-navy font-bold mb-6">Tous les profils sont les bienvenus.</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {profils.map((p) => (
                  <div key={p.label} className="bg-cream rounded-xl p-5 flex items-center gap-4">
                    <div className="w-2 h-10 rounded-full bg-gold flex-shrink-0" />
                    <div>
                      <p className="font-bold text-navy text-sm">{p.label}</p>
                      <p className="text-xs text-muted">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg">💌</span>
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Message aux parents</span>
              </div>
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic max-w-3xl">
                &ldquo;En tant que parent moi-même, je comprends vos inquiétudes. Confier son enfant
                à un professeur particulier, c&apos;est un acte de confiance. Je m&apos;engage à être
                à la hauteur de cette confiance — par ma rigueur, ma bienveillance, et ma transparence
                totale sur les progrès de votre enfant.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gold rounded-full" />
                <div>
                  <p className="text-white font-semibold text-sm">— Monsieur Nedjar</p>
                  <p className="text-white/40 text-xs">Professeur Agrégé de Mathématiques</p>
                </div>
              </div>
              <div className="mt-8">
                <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light">
                  Prendre rendez-vous →
                </a>
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
