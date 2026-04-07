import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { href: '/mon-experience', label: 'Parcours & Approche' },
    { href: '/#services', label: 'Nos cours' },
    { href: '/ressources', label: 'Ressources' },
    { href: '/suivi', label: 'Suivi de progression' },
    { href: '/tarifs', label: 'Tarifs' },
    { href: '/prendre-rendez-vous', label: 'Contact' },
  ]

  const pages = [
    { href: '/cours-particuliers', label: 'Cours particuliers' },
    { href: '/stages-vacances', label: 'Stages vacances' },
    { href: '/preparation-examens', label: 'Prépa examens' },
    { href: '/blog', label: 'Blog' },
  ]

  const infos = [
    { emoji: '📧', label: 'Email', value: 'nedjar.objectif.reussite@gmail.com' },
    { emoji: '📍', label: 'Cabinet', value: '7 place Émile Landrin, 75020 Paris' },
    { emoji: '💻', label: 'Visioconférence', value: 'Disponible partout en France' },
    { emoji: '⏱️', label: 'Délai de réponse', value: 'Sous 24 heures garanties' },
    { emoji: '💸', label: 'Crédit d\'impôt', value: '50% appliqué automatiquement' },
    { emoji: '💙', label: 'Tous profils', value: 'TDAH · Dys · TSA bienvenus' },
  ]

  return (
    <footer className="bg-navy">
      <div className="section-padding">
        <div className="container-max">
          <div className="mb-16">
            <h3 className="text-white text-lg font-bold mb-6">Informations pratiques</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {infos.map((info) => (
                <div key={info.label} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-xl">{info.emoji}</span>
                  <div>
                    <p className="text-white/50 text-xs font-medium mb-1">{info.label}</p>
                    <p className="text-white text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <Image src="/logo.png" alt="Maths Connections" width={32} height={32} className="rounded-lg" style={{ width: 'auto', height: 'auto' }} />
                <div>
                  <p className="text-white font-semibold text-sm">Maths Connections</p>
                  <p className="text-white/35 text-[10px]">Apprendre à réussir</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-white/25 mb-4">
                Paris 7<sup>e</sup>, 8<sup>e</sup>, 16<sup>e</sup><br />
                Strasbourg · En ligne
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/35">🔒 Confidentialité</span>
                <span className="text-xs text-white/35">·</span>
                <span className="text-xs text-white/35">⭐ 4,93/5</span>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase mb-4 font-semibold text-white/40">
                Navigation
              </p>
              <nav className="flex flex-col gap-3">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-xs hover:text-white transition-colors text-white/35"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase mb-4 font-semibold text-white/40">
                Services
              </p>
              <nav className="flex flex-col gap-3">
                {pages.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="text-xs hover:text-white transition-colors text-white/35"
                  >
                    {p.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase mb-4 font-semibold text-white/40">
                Contact
              </p>
              <div className="space-y-3 text-xs text-white/35">
                <p>Réponse sous 24h</p>
                <p>Premier échange offert</p>
                <p>Sans engagement</p>
                <Link
                  href="/prendre-rendez-vous"
                  className="inline-block mt-2 px-5 py-2 text-xs tracking-widest uppercase font-semibold hover:opacity-80 transition-opacity border border-gold/40 text-gold rounded-full"
                >
                  Prendre contact
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs text-white/20">
              © {year} Maths Connections — Tous droits réservés
            </p>
            <p className="text-xs text-white/20">
              Mentions légales · Politique de confidentialité
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
