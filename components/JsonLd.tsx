const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://monpetitgenie.io'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${siteUrl}/#organization`,
      name: 'Maths Connections — Apprendre à réussir',
      description:
        'Cours particuliers de mathématiques du collège à la Terminale Maths Expert. Professeur agrégé en activité, à Paris (7e, 8e, 16e) et Strasbourg.',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      priceRange: '€€',
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '7 place Émile Landrin',
          addressLocality: 'Paris',
          postalCode: '75020',
          addressRegion: 'Île-de-France',
          addressCountry: 'FR',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Strasbourg',
          postalCode: '67000',
          addressRegion: 'Bas-Rhin',
          addressCountry: 'FR',
        },
      ],
      areaServed: [
        { '@type': 'City', name: 'Paris' },
        { '@type': 'City', name: 'Strasbourg' },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.93',
        bestRating: '5',
        ratingCount: '200',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de cours particuliers',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Cours particuliers de mathématiques',
            description: 'Cours individuels du collège au lycée (Terminale Maths Expert).',
            areaServed: 'Paris, Strasbourg',
          },
          {
            '@type': 'Offer',
            name: 'Stages intensifs pendant les vacances',
            description: 'Stages de remise à niveau ou approfondissement pendant les vacances scolaires.',
            areaServed: 'Paris',
          },
          {
            '@type': 'Offer',
            name: 'Préparation Brevet et Baccalauréat',
            description: 'Préparation intensive aux examens. Maths Expert.',
            areaServed: 'Paris, Strasbourg',
          },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Ahmed Nedjar',
      jobTitle: 'Professeur Agrégé de Mathématiques',
      worksFor: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Maths Connections',
      inLanguage: 'fr-FR',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
