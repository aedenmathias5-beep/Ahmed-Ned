'use client'

import { useState, useMemo } from 'react'

const JOURS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
const MOIS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
]

const CRENEAUX = [
  '08:00', '09:00', '10:00', '11:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
]

const TYPES_SEANCE = [
  { id: 'decouverte', label: 'Appel de découverte gratuit', emoji: '🎁', desc: '15 min — gratuit, sans engagement', gratuit: true },
  { id: 'domicile-eleve', label: "Cours au domicile de l'élève", emoji: '📍', desc: 'Paris et proche banlieue' },
  { id: 'domicile-prof', label: 'Cours au domicile du professeur', emoji: '🏠', desc: 'Paris — 7e / 8e arrondissement' },
  { id: 'visio', label: 'Visioconférence', emoji: '💻', desc: 'Partout en France' },
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

export default function BookingCalendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [step, setStep] = useState(1)
  const [typeSeance, setTypeSeance] = useState('')
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [niveau, setNiveau] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const daysInMonth = useMemo(() => getDaysInMonth(currentYear, currentMonth), [currentYear, currentMonth])
  const firstDay = useMemo(() => getFirstDayOfMonth(currentYear, currentMonth), [currentYear, currentMonth])

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const isDatePast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return date < todayStart
  }

  const isSunday = (day: number) => {
    return new Date(currentYear, currentMonth, day).getDay() === 0
  }

  const handleDateClick = (day: number) => {
    if (isDatePast(day) || isSunday(day)) return
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    setSelectedDate(dateStr)
    setSelectedTime('')
  }

  const formatSelectedDate = () => {
    if (!selectedDate) return ''
    const [y, m, d] = selectedDate.split('-').map(Number)
    const date = new Date(y, m - 1, d)
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  }

  const handleSubmit = async () => {
    if (!nom || !prenom || !email || !telephone) {
      setError('Veuillez remplir tous les champs obligatoires.')
      return
    }
    setSending(true)
    setError('')

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          typeSeance,
          date: selectedDate,
          heure: selectedTime,
          nom,
          prenom,
          email,
          telephone,
          niveau,
          message,
        }),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setSent(true)
    } catch {
      setError("Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par email.")
    } finally {
      setSending(false)
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-charcoal dark:text-gray-100 focus:border-navy dark:focus:border-gold focus:ring-1 focus:ring-navy/20 dark:focus:ring-gold/20 outline-none text-sm transition-colors'

  if (sent) {
    return (
      <div className="bg-cream dark:bg-gray-900 rounded-2xl p-10 text-center max-w-xl mx-auto">
        <span className="text-5xl mb-4 block">✅</span>
        <h3 className="text-2xl font-bold text-navy dark:text-white mb-3">Rendez-vous demandé !</h3>
        <p className="text-muted dark:text-gray-400 mb-2">
          Votre demande de rendez-vous a bien été envoyée.
        </p>
        <p className="text-sm text-muted dark:text-gray-400 mb-6">
          {TYPES_SEANCE.find((t) => t.id === typeSeance)?.label} — {formatSelectedDate()} à {selectedTime}
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 text-left mb-6">
          <p className="text-sm text-navy dark:text-white font-semibold mb-2">Prochaines étapes :</p>
          <ul className="space-y-2 text-sm text-muted dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              Vous recevrez une confirmation par email sous quelques minutes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              Monsieur Nedjar confirmera le créneau sous 24h
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              Un rappel vous sera envoyé avant le rendez-vous
            </li>
          </ul>
        </div>
        <a href="/" className="btn-outline text-sm">
          Retour à l&apos;accueil
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-8 mb-10">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step === s ? 'bg-navy text-white' : step > s ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-muted dark:text-gray-400'
            }`}>
              {step > s ? '✓' : s}
            </div>
            <span className={`text-xs font-medium hidden md:block ${step === s ? 'text-navy dark:text-gold' : 'text-muted dark:text-gray-400'}`}>
              {s === 1 ? 'Type de séance' : s === 2 ? 'Date & heure' : s === 3 ? 'Vos infos' : 'Confirmation'}
            </span>
            {s < 4 && <div className="hidden md:block w-12 h-px bg-gray-200 dark:bg-gray-700" />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-xl font-bold text-navy dark:text-white mb-6 text-center">Quel type de séance souhaitez-vous ?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {TYPES_SEANCE.map((type) => (
              <button
                key={type.id}
                onClick={() => { setTypeSeance(type.id); setStep(2) }}
                className={`text-left p-6 rounded-2xl border-2 transition-all ${
                  typeSeance === type.id
                    ? 'border-navy dark:border-gold bg-surface dark:bg-gray-800'
                    : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-navy/30 dark:hover:border-gold/30 hover:shadow-md'
                }`}
              >
                <span className="text-3xl mb-3 block">{type.emoji}</span>
                <p className="font-bold text-navy dark:text-white mb-1">{type.label}</p>
                <p className="text-sm text-muted dark:text-gray-400">{type.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-bold text-navy dark:text-white mb-6 text-center">Choisissez une date et un créneau</h3>

          <div className="bg-cream dark:bg-gray-900 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <button onClick={goToPrevMonth} aria-label="Mois précédent" className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors text-navy dark:text-gold">
                ←
              </button>
              <h4 className="font-bold text-navy dark:text-white text-lg">
                {MOIS[currentMonth]} {currentYear}
              </h4>
              <button onClick={goToNextMonth} aria-label="Mois suivant" className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors text-navy dark:text-gold">
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {JOURS.map((j) => (
                <div key={j} className="text-center text-xs font-semibold text-muted dark:text-gray-400 py-2">{j}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                const past = isDatePast(day)
                const sunday = isSunday(day)
                const selected = selectedDate === dateStr
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={past || sunday}
                    aria-label={`${day} ${MOIS[currentMonth]} ${currentYear}`}
                    className={`p-2 text-sm rounded-lg transition-all ${
                      selected
                        ? 'bg-navy text-white font-bold'
                        : past || sunday
                        ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                        : 'hover:bg-white dark:hover:bg-gray-800 text-navy dark:text-gray-200 font-medium'
                    }`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>
          </div>

          {selectedDate && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-navy dark:text-white mb-3">
                Créneaux disponibles — {formatSelectedDate()}
              </p>
              <div className="grid grid-cols-5 gap-2">
                {CRENEAUX.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedTime(c)}
                    className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                      selectedTime === c
                        ? 'bg-navy text-white'
                        : 'bg-cream dark:bg-gray-900 hover:bg-surface dark:hover:bg-gray-800 text-navy dark:text-gray-200'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <button onClick={() => setStep(1)} className="btn-outline text-sm">
              ← Retour
            </button>
            <button
              onClick={() => selectedDate && selectedTime && setStep(3)}
              disabled={!selectedDate || !selectedTime}
              className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continuer →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-xl font-bold text-navy dark:text-white mb-6 text-center">Vos coordonnées</h3>

          <div className="bg-cream dark:bg-gray-900 rounded-2xl p-5 mb-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">{TYPES_SEANCE.find((t) => t.id === typeSeance)?.emoji}</span>
              <span className="text-navy dark:text-white font-medium">{TYPES_SEANCE.find((t) => t.id === typeSeance)?.label}</span>
            </div>
            <span className="text-muted dark:text-gray-500">·</span>
            <span className="text-navy dark:text-gray-300 font-medium">{formatSelectedDate()}</span>
            <span className="text-muted dark:text-gray-500">·</span>
            <span className="text-navy dark:text-gold font-bold">{selectedTime}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted dark:text-gray-400 font-medium mb-2 block">Prénom *</label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Marie"
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted dark:text-gray-400 font-medium mb-2 block">Nom *</label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Dupont"
                className={inputCls}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted dark:text-gray-400 font-medium mb-2 block">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@exemple.com"
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted dark:text-gray-400 font-medium mb-2 block">Téléphone *</label>
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="06 XX XX XX XX"
                className={inputCls}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs uppercase tracking-wider text-muted dark:text-gray-400 font-medium mb-2 block">Niveau de l&apos;élève</label>
            <select
              value={niveau}
              onChange={(e) => setNiveau(e.target.value)}
              className={inputCls}
            >
              <option value="">— Sélectionner</option>
              <option value="maternelle">Maternelle (3–6 ans)</option>
              <option value="cp">CP</option>
              <option value="ce1">CE1</option>
              <option value="ce2">CE2</option>
              <option value="cm1">CM1</option>
              <option value="cm2">CM2</option>
              <option value="6eme">6ème</option>
              <option value="5eme">5ème</option>
              <option value="4eme">4ème</option>
              <option value="3eme">3ème</option>
              <option value="2nde">2nde</option>
              <option value="1ere">1ère</option>
              <option value="terminale">Terminale</option>
              <option value="maths-expert">Terminale Maths Expert</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="text-xs uppercase tracking-wider text-muted dark:text-gray-400 font-medium mb-2 block">Message (optionnel)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Décrivez brièvement la situation ou vos attentes…"
              className={inputCls + ' resize-none'}
            />
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm p-4 rounded-xl mb-4">{error}</div>
          )}

          <div className="flex justify-between">
            <button onClick={() => setStep(2)} className="btn-outline text-sm">
              ← Retour
            </button>
            <button
              onClick={() => setStep(4)}
              disabled={!nom || !prenom || !email || !telephone}
              className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Vérifier →
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="text-xl font-bold text-navy dark:text-white mb-6 text-center">Confirmez votre rendez-vous</h3>

          <div className="bg-cream dark:bg-gray-900 rounded-2xl p-8 mb-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{TYPES_SEANCE.find((t) => t.id === typeSeance)?.emoji}</span>
              <div>
                <p className="text-navy dark:text-white font-bold">{TYPES_SEANCE.find((t) => t.id === typeSeance)?.label}</p>
                <p className="text-sm text-muted dark:text-gray-400">{TYPES_SEANCE.find((t) => t.id === typeSeance)?.desc}</p>
              </div>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted dark:text-gray-400 uppercase tracking-wider mb-1">Date</p>
                <p className="text-navy dark:text-white font-semibold">{formatSelectedDate()}</p>
              </div>
              <div>
                <p className="text-xs text-muted dark:text-gray-400 uppercase tracking-wider mb-1">Heure</p>
                <p className="text-navy dark:text-gold font-bold text-lg">{selectedTime}</p>
              </div>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted dark:text-gray-400 uppercase tracking-wider mb-1">Nom</p>
                <p className="text-navy dark:text-white font-semibold">{prenom} {nom}</p>
              </div>
              <div>
                <p className="text-xs text-muted dark:text-gray-400 uppercase tracking-wider mb-1">Contact</p>
                <p className="text-navy dark:text-gray-300 text-sm">{email}</p>
                <p className="text-navy dark:text-gray-300 text-sm">{telephone}</p>
              </div>
            </div>
            {niveau && (
              <>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div>
                  <p className="text-xs text-muted dark:text-gray-400 uppercase tracking-wider mb-1">Niveau</p>
                  <p className="text-navy dark:text-white font-semibold">{niveau}</p>
                </div>
              </>
            )}
            {message && (
              <>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div>
                  <p className="text-xs text-muted dark:text-gray-400 uppercase tracking-wider mb-1">Message</p>
                  <p className="text-sm text-muted dark:text-gray-400">{message}</p>
                </div>
              </>
            )}
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm p-4 rounded-xl mb-4">{error}</div>
          )}

          <div className="flex justify-between">
            <button onClick={() => setStep(3)} className="btn-outline text-sm">
              ← Modifier
            </button>
            <button
              onClick={handleSubmit}
              disabled={sending}
              className="btn-primary text-sm disabled:opacity-60"
            >
              {sending ? 'Envoi en cours…' : 'Confirmer le rendez-vous ✓'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
