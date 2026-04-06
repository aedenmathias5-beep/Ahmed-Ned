import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import { posts } from './posts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mathjard.replit.app'

export const metadata: Metadata = {
  title: 'Blog — Conseils et méthodes en mathématiques',
  description:
    'Articles pédagogiques pour les élèves et leurs familles : comment réviser les maths pour le bac, réussir le brevet, comprendre Maths Expert.',
  alternates: { canonical: `${siteUrl}/blog` },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-padding bg-white" style={{ paddingTop: '140px' }}>
          <div className="container-max">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg">📝</span>
              <span className="text-navy text-xs tracking-[0.3em] uppercase font-semibold">Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-navy mb-4 leading-tight font-bold">
              Conseils &amp; méthodes.
            </h1>
            <p className="text-lg max-w-xl mb-16 text-muted">
              Articles rédigés par un professeur agrégé de mathématiques en activité.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-cream p-8 rounded-2xl group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs tracking-widest uppercase text-gold font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">·</span>
                      <span className="text-xs text-muted">{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-xl text-navy mb-3 group-hover:text-navy/70 transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6 text-muted">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                      <span className="text-xs text-muted">{formatDate(post.date)}</span>
                      <span className="text-xs text-navy font-semibold tracking-wider uppercase">Lire →</span>
                    </div>
                  </article>
                </Link>
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
