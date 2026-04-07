import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 pt-20">
        <div className="text-center px-4">
          <h1 className="font-display text-6xl text-navy dark:text-white font-bold mb-4">404</h1>
          <h2 className="text-2xl text-charcoal dark:text-gray-200 font-semibold mb-4">Page introuvable</h2>
          <p className="text-muted dark:text-gray-400 mb-8">La page que vous recherchez n&apos;existe pas.</p>
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
