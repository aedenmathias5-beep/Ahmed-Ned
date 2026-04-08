import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  title: 'À propos — Ahmed Nedjar, Professeur Agrégé de Mathématiques',
  description:
    'Découvrez le parcours d\'Ahmed Nedjar, professeur agrégé de mathématiques en activité. Cours particuliers à Paris et Strasbourg, du collège à la Terminale Maths Expert.',
  alternates: { canonical: `${siteUrl}/a-propos` },
}

const parcours = [
  {
    emoji: '🎓',
    title: 'Agrégation de Mathématiques',
    desc: 'Le plus haut concours national de l\'enseignement français — une garantie de maîtrise absolue de la discipline.',
  },
  {
    emoji: '🏫',
    title: 'Enseignant dans le secondaire',
    desc: 'Collège et lycée en activité — je travaille chaque jour avec des élèves aux profils variés, de la 6e à la Terminale Maths Expert.',
  },
  {
    emoji: '📋',
    title: 'Examinateur et correcteur',
    desc: 'Brevet des collèges et Baccalauréat — je connais les critères de correction officiels et les attendus des jurys.',
  },
  {
    emoji: '🎯',
    title: 'Pédagogie sur mesure',
    desc: 'Chaque élève est unique. Mon accompagnement s\'adapte aux lacunes, au rythme et aux objectifs de chacun.',
  },
  {
    emoji: '💙',
    title: 'Profils spécifiques bienvenus',
    desc: 'TDAH, troubles Dys, TSA — j\'accompagne tous les profils avec patience, bienveillance et confidentialité.',
  },
]

export default function APropos() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-navy" style={{ paddingTop: '120px' }}>
          <div className="container-max px-6 md:px-12 lg:px-24 py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-lg">👤</span>
                <span className="text-gold text-xs tracking-[0.35em] uppercase font-semibold">À propos</span>
              </div>
              <h1 className="text-5xl md:text-6xl text-white leading-tight mb-6 font-bold">
                Ahmed Nedjar,
                <br />
                <span className="text-gold">Professeur Agrégé.</span>
              </h1>
              <p className="text-lg max-w-2xl leading-relaxed mb-10 text-white/65">
                Professeur agrégé de mathématiques, enseignant dans le secondaire, je propose
                un accompagnement sur mesure du collège à la Terminale Maths Expert — à Paris,
                Strasbourg et en ligne.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="bg-cream dark:bg-gray-900 rounded-2xl p-10 border-l-4 border-gold mb-8">
                  <div className="flex justify-center mb-6">
                    <Image src="/logo.png" alt="Maths Connections" width={80} height={80} className="rounded-xl" style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <blockquote className="text-xl text-navy dark:text-white leading-relaxed text-center font-medium italic">
                    &ldquo;Je connais les programmes, les examinateurs, et ce qu&apos;on attend
                    réellement de vos enfants le jour J.&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center gap-3 mt-6">
                    <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AN</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy dark:text-white text-sm">Ahmed Nedjar</p>
                      <p className="text-xs text-muted dark:text-gray-400">Professeur Agrégé</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl text-navy dark:text-white font-bold mb-6">Mon parcours</h2>
                <p className="text-muted dark:text-gray-400 leading-relaxed mb-10">
                  Professeur agrégé de mathématiques, j&apos;enseigne dans le secondaire et
                  travaille chaque jour avec des élèves aux profils variés. Cette réalité de
                  terrain me permet de proposer un accompagnement véritablement adapté — pas un
                  cours standardisé, mais une prise en charge sur mesure fondée sur une lecture
                  précise des lacunes et des potentiels.
                </p>

                <div className="space-y-6">
                  {parcours.map((p) => (
                    <div key={p.title} className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                      <div>
                        <p className="text-navy dark:text-white font-semibold text-sm">{p.title}</p>
                        <p className="text-xs leading-relaxed mt-1 text-muted dark:text-gray-400">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy">
          <div className="container-max text-center">
            <h2 className="text-4xl text-white mb-4 font-bold">
              Réservez un premier échange — offert et sans engagement.
            </h2>
            <p className="mb-8 text-white/55">
              Cours particuliers de mathématiques à Paris 7e, 8e, 16e et Strasbourg.
            </p>
            <a href="/prendre-rendez-vous" className="btn-primary bg-gold !text-navy hover:bg-gold-light">
              Prendre rendez-vous
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
