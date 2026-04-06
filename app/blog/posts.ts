export type Post = {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
}

export const posts: Post[] = [
  {
    slug: 'revision-maths-baccalaureat',
    title: 'Comment réviser les mathématiques pour le baccalauréat',
    description:
      'Méthode complète pour préparer l\'épreuve de mathématiques au baccalauréat : organisation, annales, gestion du stress et conseils d\'un professeur agrégé.',
    date: '2026-03-10',
    readTime: '6 min',
    category: 'Baccalauréat',
  },
  {
    slug: 'reussir-brevet-mathematiques',
    title: 'Méthode pour réussir son brevet des collèges en mathématiques',
    description:
      'Tout ce qu\'il faut savoir pour préparer l\'épreuve de mathématiques du brevet des collèges : programme, stratégie de révision, pièges à éviter.',
    date: '2026-02-20',
    readTime: '5 min',
    category: 'Brevet',
  },
  {
    slug: 'terminale-maths-expert',
    title: 'Terminale Maths Expert : programme, conseils et débouchés',
    description:
      'Présentation complète de l\'option Maths Expert en Terminale : contenu du programme, différences avec les maths standard, conseils pour réussir et débouchés.',
    date: '2026-01-15',
    readTime: '7 min',
    category: 'Terminale',
  },
]
