import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ahmed-nedjar.fr'

export const metadata: Metadata = {
  title: 'Terminale Maths Expert : programme, conseils et débouchés',
  description:
    'Tout ce qu\'il faut savoir sur l\'option Maths Expert en Terminale : contenu du programme, différences avec les maths standard, conseils pour réussir et débouchés.',
  alternates: { canonical: `${siteUrl}/blog/terminale-maths-expert` },
}

export default function Article3() {
  return (
    <>
      <Header />
      <main>
        <article>
          <header className="section-padding" style={{ backgroundColor: '#0B1F3A', paddingTop: '140px', paddingBottom: '80px' }}>
            <div className="container-max max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Link href="/blog" className="text-gold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
                  ← Blog
                </Link>
                <span style={{ color: 'rgba(249,247,242,0.3)' }}>·</span>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(249,247,242,0.4)' }}>Terminale · 7 min</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
                Terminale Maths Expert : programme, conseils et débouchés
              </h1>
              <p className="text-lg" style={{ color: 'rgba(249,247,242,0.55)' }}>
                Tout ce qu&apos;un élève — et ses parents — doivent savoir avant de choisir cette option.
              </p>
            </div>
          </header>

          <div className="section-padding bg-cream">
            <div className="container-max max-w-3xl" style={{ color: 'rgba(26,26,46,0.75)', lineHeight: '1.85' }}>

              <h2 className="font-serif text-3xl text-navy mb-4 mt-0">Qu&apos;est-ce que Maths Expert ?</h2>
              <p className="mb-6">
                L&apos;option Maths Expert (officiellement &laquo;&nbsp;Mathématiques complémentaires&nbsp;&raquo; ne doit
                pas être confondue avec la simple option &laquo;&nbsp;Mathématiques complémentaires&nbsp;&raquo;).
                Maths Expert est une option spécifique destinée aux élèves de Terminale qui souhaitent approfondir
                les mathématiques au-delà du programme standard. Elle s&apos;adresse aux élèves qui envisagent une
                classe préparatoire aux grandes écoles (CPGE) ou une filière scientifique exigeante.
              </p>

              <h2 className="font-serif text-3xl text-navy mb-4">Le programme de Maths Expert</h2>
              <p className="mb-4">
                Le programme va nettement plus loin que les maths de Terminale standard. Il couvre notamment :
              </p>
              <ul className="mb-6 space-y-2 list-none pl-0">
                {[
                  'Arithmétique : PGCD, algorithme d\'Euclide, congruences, théorème de Bézout',
                  'Algèbre linéaire : matrices, systèmes d\'équations, déterminants',
                  'Géométrie : transformations du plan, produit scalaire avancé',
                  'Compléments d\'analyse : développements limités, suites récurrentes',
                  'Dénombrement et probabilités avancées',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 mt-1">
                      <circle cx="10" cy="10" r="9" stroke="#C9A84C" strokeWidth="1.5" />
                      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-3xl text-navy mb-4">Pourquoi choisir Maths Expert ?</h2>
              <p className="mb-4">
                Le principal avantage est le signal fort envoyé aux jurys d&apos;admission des classes prépa et
                des écoles d&apos;ingénieurs. Dans un dossier Parcoursup, un élève avec Maths Expert et une bonne
                note se distingue immédiatement des autres candidats.
              </p>
              <p className="mb-6">
                L&apos;option apporte également une vraie avance pour les premières années de prépa : les élèves
                qui arrivent en MPSI ou PCSI avec Maths Expert ont déjà vu une partie du programme, ce qui leur
                donne un avantage précieux dans les premières semaines.
              </p>

              <h2 className="font-serif text-3xl text-navy mb-4">Les débouchés après Maths Expert</h2>
              <p className="mb-6">
                L&apos;option Maths Expert est un signal d&apos;orientation vers les filières scientifiques et
                quantitatives : classes prépa (MPSI, PCSI, MP2I), licences de mathématiques et physique,
                écoles d&apos;ingénieurs post-bac, doubles licences scientifiques. Elle n&apos;est pas réservée
                aux futurs ingénieurs — les élèves en école de commerce qui souhaitent valoriser un profil
                analytique choisissent également cette option.
              </p>

              <h2 className="font-serif text-3xl text-navy mb-4">Nos conseils pour réussir</h2>
              <p className="mb-6">
                Maths Expert demande un investissement supplémentaire significatif. La charge de travail est
                élevée car le programme standard de Terminale et l&apos;option se déroulent en parallèle.
                Les élèves qui réussissent sont ceux qui travaillent régulièrement tout au long de l&apos;année
                — pas ceux qui rattrapent en fin de trimestre. Un accompagnement personnalisé, notamment
                sur les chapitres d&apos;arithmétique et d&apos;algèbre linéaire, fait souvent la différence.
              </p>

              <div className="mt-12 p-8 bg-white border border-cream-dark">
                <p className="font-serif text-xl text-navy mb-3">
                  Votre enfant est en Terminale Maths Expert ?
                </p>
                <p className="text-sm mb-5" style={{ color: 'rgba(26,26,46,0.6)' }}>
                  Je propose un suivi spécifique Maths Expert à Paris et Strasbourg — maîtrise du programme
                  avancé, préparation à l&apos;épreuve et orientation vers les grandes classes.
                </p>
                <a href="/#contact" className="btn-primary">Prendre contact</a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
