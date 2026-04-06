'use client'

import { useState } from 'react'

const NIVEAUX: Record<string, { label: string; questions: { q: string; options: string[]; correct: number }[] }> = {
  '6eme': {
    label: '6ème',
    questions: [
      { q: 'Combien font 3/4 + 1/4 ?', options: ['1', '4/8', '3/4', '2'], correct: 0 },
      { q: 'Quel est le périmètre d\'un carré de côté 5 cm ?', options: ['10 cm', '25 cm', '20 cm', '15 cm'], correct: 2 },
      { q: '45 × 12 = ?', options: ['540', '480', '560', '440'], correct: 0 },
      { q: 'Quelle fraction est égale à 0,5 ?', options: ['1/3', '2/5', '1/2', '3/4'], correct: 2 },
      { q: 'Un rectangle a une longueur de 8 cm et une largeur de 3 cm. Quelle est son aire ?', options: ['11 cm²', '22 cm²', '24 cm²', '24 cm²'], correct: 2 },
    ],
  },
  '3eme': {
    label: '3ème (Brevet)',
    questions: [
      { q: 'Résoudre : 2x + 5 = 17', options: ['x = 6', 'x = 7', 'x = 5', 'x = 8'], correct: 0 },
      { q: 'Dans un triangle rectangle, si a = 3 et b = 4, combien vaut l\'hypoténuse c ?', options: ['6', '5', '7', '√7'], correct: 1 },
      { q: 'Développer (x + 3)²', options: ['x² + 9', 'x² + 3x + 9', 'x² + 6x + 9', '2x + 6'], correct: 2 },
      { q: 'Quelle est la probabilité d\'obtenir un 6 en lançant un dé ?', options: ['1/2', '1/3', '1/6', '1/4'], correct: 2 },
      { q: 'Si f(x) = 3x - 2, combien vaut f(4) ?', options: ['14', '10', '12', '8'], correct: 1 },
    ],
  },
  terminale: {
    label: 'Terminale',
    questions: [
      { q: 'Quelle est la dérivée de f(x) = x³ + 2x ?', options: ['3x² + 2', 'x² + 2', '3x + 2', '3x²'], correct: 0 },
      { q: 'lim(x→+∞) (2x² + 1)/(x² - 3) = ?', options: ['0', '1', '2', '+∞'], correct: 2 },
      { q: 'La fonction exponentielle vérifie :', options: ['e⁰ = 0', 'e¹ = 0', "e' = e", 'ln(e) = 0'], correct: 2 },
      { q: 'Si P(A) = 0,3 et P(B) = 0,5 et A et B indépendants, P(A∩B) = ?', options: ['0,8', '0,15', '0,2', '0,35'], correct: 1 },
      { q: '∫₀¹ 2x dx = ?', options: ['2', '1', '0', '1/2'], correct: 1 },
    ],
  },
}

export default function QuizNiveau() {
  const [step, setStep] = useState<'select' | 'quiz' | 'result' | 'sent'>('select')
  const [niveau, setNiveau] = useState('')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)

  const questions = NIVEAUX[niveau]?.questions ?? []
  const score = answers.filter((a, i) => a === questions[i]?.correct).length

  const handleAnswer = (idx: number) => {
    const newAnswers = [...answers, idx]
    setAnswers(newAnswers)
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1)
    } else {
      setStep('result')
    }
  }

  const [error, setError] = useState('')

  const handleSend = async () => {
    if (!prenom || !email) return
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prenom, email, niveau: NIVEAUX[niveau]?.label, score, total: questions.length }),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setStep('sent')
    } catch {
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.")
    } finally {
      setSending(false)
    }
  }

  const getVerdict = () => {
    const pct = (score / questions.length) * 100
    if (pct >= 80) return { label: 'Excellent', color: 'text-green-600', bg: 'bg-green-50', msg: 'Votre enfant maîtrise bien les bases. Un accompagnement ciblé permettrait de viser l\'excellence.' }
    if (pct >= 60) return { label: 'Correct', color: 'text-blue-600', bg: 'bg-blue-50', msg: 'De bonnes bases avec quelques points à consolider. Un suivi régulier ferait une vraie différence.' }
    if (pct >= 40) return { label: 'À renforcer', color: 'text-amber-600', bg: 'bg-amber-50', msg: 'Des lacunes identifiées qui nécessitent un accompagnement structuré pour éviter qu\'elles ne s\'aggravent.' }
    return { label: 'Urgent', color: 'text-red-600', bg: 'bg-red-50', msg: 'Des difficultés importantes. Un accompagnement rapide et régulier est fortement recommandé.' }
  }

  if (step === 'select') {
    return (
      <div>
        <h3 className="text-xl font-bold text-navy mb-2 text-center">Choisissez le niveau de votre enfant</h3>
        <p className="text-sm text-muted text-center mb-6">5 questions rapides pour évaluer le niveau en mathématiques</p>
        <div className="grid md:grid-cols-3 gap-4 max-w-xl mx-auto">
          {Object.entries(NIVEAUX).map(([key, val]) => (
            <button
              key={key}
              onClick={() => { setNiveau(key); setStep('quiz'); setCurrentQ(0); setAnswers([]) }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-navy/30 hover:shadow-md transition-all"
            >
              <p className="font-bold text-navy text-lg">{val.label}</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (step === 'quiz') {
    const q = questions[currentQ]
    return (
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs text-muted">Question {currentQ + 1} / {questions.length}</span>
          <span className="text-xs font-semibold text-navy">{NIVEAUX[niveau]?.label}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
          <div className="bg-navy rounded-full h-2 transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
        </div>
        <h3 className="text-lg font-bold text-navy mb-6">{q.q}</h3>
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-navy/30 hover:bg-surface transition-all text-sm font-medium text-navy"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (step === 'result') {
    const verdict = getVerdict()
    return (
      <div className="max-w-xl mx-auto text-center">
        <div className={`${verdict.bg} rounded-2xl p-8 mb-6`}>
          <p className="text-4xl font-black text-navy mb-2">{score} / {questions.length}</p>
          <p className={`text-lg font-bold ${verdict.color} mb-3`}>{verdict.label}</p>
          <p className="text-sm text-muted leading-relaxed">{verdict.msg}</p>
        </div>

        <div className="bg-cream rounded-2xl p-6 mb-6 text-left">
          <p className="text-sm font-semibold text-navy mb-4">Recevez un diagnostic personnalisé par email :</p>
          <div className="space-y-3">
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Prénom de l'élève"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy outline-none text-sm"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email du parent"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy outline-none text-sm"
            />
            <button
              onClick={handleSend}
              disabled={!prenom || !email || sending}
              className="w-full btn-primary text-sm disabled:opacity-40"
            >
              {sending ? 'Envoi…' : 'Recevoir mon diagnostic gratuit →'}
            </button>
            {error && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
          </div>
        </div>

        <a href="/prendre-rendez-vous" className="text-navy font-semibold text-sm hover:text-navy/70 transition-colors">
          Ou prendre rendez-vous directement →
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto text-center">
      <span className="text-5xl mb-4 block">✅</span>
      <h3 className="text-2xl font-bold text-navy mb-3">Diagnostic envoyé !</h3>
      <p className="text-muted mb-6">
        Vous recevrez un email avec une analyse détaillée et des recommandations
        personnalisées dans les prochaines minutes.
      </p>
      <a href="/prendre-rendez-vous" className="btn-primary text-sm">
        Prendre rendez-vous →
      </a>
    </div>
  )
}
