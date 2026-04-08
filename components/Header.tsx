'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { href: '/mon-experience', label: 'Parcours' },
  { href: '/#services', label: 'Nos cours' },
  { href: '/ressources', label: 'Ressources' },
  { href: '/suivi', label: 'Suivi élève' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-white dark:bg-gray-900/90 dark:backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-max px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Maths Connections"
              width={40}
              height={40}
              className="rounded-lg transition-transform duration-300 group-hover:scale-110"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <div className="hidden sm:block">
            <span className={`font-semibold text-sm leading-tight block transition-colors ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}>
              Maths Connections
            </span>
            <span className={`text-[10px] leading-tight block transition-colors ${scrolled ? 'text-muted dark:text-gray-400' : 'text-white/50'}`}>
              Apprendre à réussir
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                scrolled ? 'text-charcoal/70 hover:text-navy dark:text-gray-300 dark:hover:text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'border-gray-200 dark:border-gray-700 text-navy dark:text-gold hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'border-white/20 text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
            <span className="text-xs font-medium">{theme === 'dark' ? 'Clair' : 'Sombre'}</span>
          </button>
          <Link
            href="/prendre-rendez-vous"
            className={`inline-flex items-center gap-2 font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-navy text-white hover:bg-navy-dark shadow-md hover:shadow-lg dark:bg-gold dark:text-navy dark:hover:bg-gold-light'
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            Prendre rendez-vous
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            className={`p-2 rounded-full transition-all duration-300 ${
              scrolled ? 'text-navy dark:text-gold' : 'text-white/70'
            }`}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`p-2 transition-colors ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-white dark:bg-gray-900 px-6 py-6 flex flex-col gap-4 border-t border-gray-100 dark:border-gray-800 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-charcoal/70 text-sm font-medium hover:text-navy transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/prendre-rendez-vous"
            onClick={() => setMenuOpen(false)}
            className="mt-2 btn-primary text-sm text-center justify-center"
          >
            Prendre rendez-vous
          </Link>
        </div>
      )}
    </header>
  )
}
