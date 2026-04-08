import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import QuizNiveau from '@/components/QuizNiveau'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  title: 'Ressources Pédagogiques — Annales, Fiches, Exercices, Quiz de Niveau',
  description:
    'Bibliothèque de ressources pédagogiques : annales d\'examens, corrigés types, fiches de révision, exercices classés par niveau. Quiz de niveau gratuit en ligne.',
  alternates: { canonical: `${siteUrl}/ressources` },
  keywords: ['annales brevet maths', 'annales bac maths', 'fiches révision maths', 'quiz maths gratuit', 'exercices maths niveau'],
}

const categories = [
  {
    emoji: '📄',
    titre: "Annales d'examens",
    desc: "Sujets officiels du Brevet et du Baccalauréat de mathématiques des dernières années. Entraînez-vous dans les conditions réelles.",
    niveaux: ['Brevet 3ème', 'Bac Terminale', 'Maths Expert'],
    statut: 'Bientôt disponible',
  },
  {
    emoji: '✅',
    titre: 'Corrigés types détaillés',
    desc: "Corrigés commentés pas à pas, rédigés selon les exigences des correcteurs. La méthodologie qui rapporte des points.",
    niveaux: ['Brevet', 'Baccalauréat', 'Contrôles'],
    statut: 'Bientôt disponible',
  },
  {
    emoji: '📝',
    titre: 'Fiches de révision',
    desc: "Fiches synthétiques par notion et par niveau : l'essentiel du cours, les formules clés, les pièges à éviter.",
    niveaux: ['6ème → 3ème', '2nde → Terminale', 'Maths Expert'],
    statut: 'Bientôt disponible',
  },
  {
    emoji: '🧮',
    titre: 'Exercices classés',
    desc: "Banque d'exercices organisés par compétence et par difficulté. Progressez étape par étape.",
    niveaux: ['Calcul', 'Géométrie', 'Algèbre', 'Probabilités'],
    statut: 'Bientôt disponible',
  },
  {
    emoji: '🎥',
    titre: 'Mini-vidéos explicatives',
    desc: "Courtes vidéos enregistrées par Monsieur Nedjar sur les notions clés et les méthodes de résolution.",
    niveaux: ['Collège', 'Lycée'],
    statut: 'Évolution future',
  },
]

const niveaux = [
  { label: 'Collège', classes: ['6ème', '5ème', '4ème', '3ème'], icon: '📘' },
  { label: 'Lycée', classes: ['2nde', '1ère Spé Maths', 'Terminale', 'Maths Expert'], icon: '📗' },
  { label: 'Examens', classes: ['Brevet des collèges', 'Baccalauréat', 'Maths Expert'], icon: '📕' },
]

export default function Ressources() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy" style={{ paddingTop: '120px' }}>
          <div className="container-max px-6 md:px-12 lg:px-24 py-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-lg">📚</span>
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">Bibliothèque</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
              Ressources
              <br />
              <span className="text-gold">pédagogiques.</span>
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed text-white/65">
              Annales, corrigés, fiches de révision et exercices — des ressources conçues
              par un professeur agrégé. Et un quiz de niveau gratuit pour évaluer votre enfant.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container-max">
            <div className="bg-gradient-to-br from-navy via-navy to-[#1a4f7a] rounded-3xl p-8 md:p-12 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🧪</span>
                <div>
                  <h2 className="text-2xl text-white font-bold">Quiz de niveau gratuit</h2>
                  <p className="text-white/60 text-sm">5 questions · 2 minutes · Diagnostic personnalisé par email</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
                <QuizNiveau />
              </div>
            </div>

            <h2 className="font-display text-3xl text-navy dark:text-white font-bold mb-8">Nos ressources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {categories.map((cat) => (
                <div key={cat.titre} className="bg-cream dark:bg-gray-900 p-7 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-5 right-5">
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      cat.statut === 'Évolution future' ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400' : 'bg-gold/10 text-gold'
                    }`}>
                      {cat.statut}
                    </span>
                  </div>
                  <span className="text-4xl mb-4 block">{cat.emoji}</span>
                  <h3 className="font-bold text-lg text-navy dark:text-white mb-2">{cat.titre}</h3>
                  <p className="text-sm text-muted dark:text-gray-400 leading-relaxed mb-5">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.niveaux.map((n) => (
                      <span key={n} className="text-xs bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-muted dark:text-gray-300 font-medium">{n}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-display text-3xl text-navy dark:text-white font-bold mb-8">Par niveau</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {niveaux.map((niv) => (
                <div key={niv.label} className="border border-gray-100 dark:border-gray-800 rounded-2xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{niv.icon}</span>
                    <h3 className="font-bold text-lg text-navy dark:text-white">{niv.label}</h3>
                  </div>
                  <div className="space-y-2">
                    {niv.classes.map((c) => (
                      <div key={c} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-sm text-muted dark:text-gray-400">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <p className="text-2xl text-white mb-2 font-bold">Les ressources arrivent bientôt.</p>
                <p className="text-sm text-white/55">
                  En attendant, chaque élève reçoit des supports personnalisés
                  adaptés à son niveau et ses objectifs.
                </p>
              </div>
              <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light flex-shrink-0">
                Me contacter
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
