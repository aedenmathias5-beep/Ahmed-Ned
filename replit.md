# Maths Connections — Site Web Professionnel

Site web professionnel pour Ahmed Nedjar (Maths Connections — Apprendre à réussir), Professeur Agrégé de Mathématiques, proposant des cours particuliers à Paris et Strasbourg.

## Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Couleurs** : navy `#123A63`, gold `#C9A84C`, cream `#FBF4E9`, bg white
- **Polices** : Inter (body), Playfair Display (titres — `font-display`)
- **Emails** : Resend API
- **Port** : 5000

## Structure

```
app/
  page.tsx                     # Page d'accueil
  layout.tsx                   # Layout global + SEO + Playfair Display
  error.tsx                    # Error page with Header/Footer
  not-found.tsx                # 404 page with Header/Footer
  global-error.tsx             # Global error boundary
  globals.css                  # Styles globaux
  api/contact/route.ts         # API envoi d'email (Resend)
  api/booking/route.ts         # API réservation (email prof + confirmation parent)
  api/quiz/route.ts            # API quiz de niveau (diagnostic + notification)
  mon-experience/page.tsx      # Page Parcours & Approche (storytelling)
  ressources/page.tsx          # Page Ressources + Quiz de niveau intégré
  prendre-rendez-vous/page.tsx # Page prise de RDV (appel découverte gratuit)
  suivi/page.tsx               # Espace privé Suivi de progression (code d'accès)
  a-propos/page.tsx            # Page À propos
  temoignages/page.tsx         # Page témoignages
  cours-particuliers/page.tsx  # Page cours particuliers
  preparation-examens/page.tsx # Page prépa examens
  stages-vacances/page.tsx     # Page stages vacances
  tarifs/page.tsx              # Page tarifs
  blog/                        # Blog (3 articles)
  sitemap.ts                   # Sitemap XML
  robots.ts                    # robots.txt
components/
  Header.tsx                   # Navigation (Parcours, Nos cours, Ressources, Suivi élève, FAQ)
  Hero.tsx                     # Section hero animée
  BookingCalendar.tsx          # Calendrier de réservation (4 types dont découverte gratuite)
  QuizNiveau.tsx               # Quiz de niveau interactif (3 niveaux, 5 questions)
  WhatsAppButton.tsx           # Bouton flottant de contact
  IdentityBlock.tsx            # Bloc identité professeur
  MissionBlock.tsx             # Bloc mission
  InclusifBlock.tsx            # Bloc profils inclusifs (TDAH, TSA, Dys, HPI)
  LocationBlock.tsx            # Bloc zones géographiques
  WhyTrustUs.tsx               # Bloc confiance (4 cartes)
  Services.tsx                 # 3 offres (cartes cliquables)
  HowItWorks.tsx               # 3 étapes
  Commitment.tsx               # 5 engagements
  Testimonials.tsx             # Témoignages carousel
  FAQ.tsx                      # 18 questions en 5 catégories
  ComingSoon.tsx               # Bannière "prochainement"
  Contact.tsx                  # Formulaire multi-étapes
  Footer.tsx                   # Pied de page + infos pratiques
  SeasonalBanner.tsx           # Bannière promotionnelle
  JsonLd.tsx                   # Schema.org
  CookieConsent.tsx            # Consentement cookies
aedenmathias/
  ahmed                        # Fichier de suivi des modifications (OBLIGATOIRE)
```

## Notes importantes

- **Suivi obligatoire** : Toutes les modifications doivent être consignées dans `aedenmathias/ahmed`
- **Cache** : Si crash avec chunk 404, faire `rm -rf .next` puis restart workflow
- **SEO** : Mots-clés cibles : "professeur de maths Paris", "cours particuliers maths 75", "soutien scolaire TDAH Paris"
- **Email** : Resend API → nedjar.objectif.reussite@gmail.com
- **Suivi de progression** : Mode demo accessible avec le code "demo"
