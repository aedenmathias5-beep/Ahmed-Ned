import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="font-display text-6xl text-navy font-bold mb-4">404</h1>
        <h2 className="text-2xl text-charcoal font-semibold mb-4">Page introuvable</h2>
        <p className="text-muted mb-8">La page que vous recherchez n&apos;existe pas.</p>
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
