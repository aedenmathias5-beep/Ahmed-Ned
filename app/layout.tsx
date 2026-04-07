import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Maths Connections — Professeur Agrégé de Mathématiques | Cours Particuliers Paris & Strasbourg',
    template: '%s | Maths Connections',
  },
  description:
    'Cours particuliers de mathématiques à Paris (7e, 8e, 16e) et Strasbourg avec un professeur agrégé en activité. Du collège à la Terminale Maths Expert. Stages vacances, préparation Brevet et Bac. Contact direct, sans intermédiaire.',
  keywords: [
    'cours particuliers mathématiques Paris',
    'professeur de maths Paris',
    'cours particuliers maths 75',
    'cours particuliers maths Paris 7',
    'cours particuliers maths Paris 8',
    'cours particuliers maths Paris 16',
    'professeur agrégé maths Paris',
    'soutien scolaire Paris domicile',
    'soutien scolaire TDAH Paris',
    'cours maths TDAH',
    'cours maths HPI Paris',
    'cours particuliers Strasbourg mathématiques',
    'préparation bac maths Paris',
    'préparation brevet Paris',
    'stage maths vacances Paris',
    'maths connections',
  ],
  authors: [{ name: 'Ahmed Nedjar' }],
  creator: 'Ahmed Nedjar',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Maths Connections — Apprendre à réussir',
    title: 'Cours Particuliers de Mathématiques — Professeur Agrégé | Paris & Strasbourg',
    description:
      'Professeur agrégé de mathématiques en activité. Cours à domicile à Paris (7e, 8e, 16e) et Strasbourg. Du collège à la Terminale Maths Expert.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maths Connections — Cours particuliers de mathématiques Paris & Strasbourg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cours Particuliers de Mathématiques — Professeur Agrégé | Paris & Strasbourg',
    description:
      'Professeur agrégé de mathématiques en activité. Cours à domicile à Paris et Strasbourg. Du collège à la Terminale Maths Expert.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#123A63',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white dark:bg-gray-950 text-charcoal dark:text-gray-100 antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
