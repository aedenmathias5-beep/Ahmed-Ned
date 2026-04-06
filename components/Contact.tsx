'use client'

import { useState } from 'react'

type FormState = {
  prenom: string
  niveau: string
  matiere: string
  typebesoin: string
  profil: string[]
  ville: string
  modalite: string
  disponibilites: string[]
  nom: string
  email: string
  telephone: string
  message: string
}

const initial: FormState = {
  prenom: '',
  niveau: '',
  matiere: '',
  typebesoin: '',
  profil: [],
  ville: '',
  modalite: '',
  disponibilites: [],
  nom: '',
  email: '',
  telephone: '',
  message: '',
}

const PROFILS = [
  { id: 'tdah', label: '🎯 TDAH' },
  { id: 'dys', label: '📖 Trouble Dys' },
  { id: 'tsa', label: '🌟 TSA' },
  { id: 'autre', label: '💛 Autre difficulté' },
]

const DISPOS = [
  { id: 'matin', label: 'Matin' },
  { id: 'apremidi', label: 'Après-midi' },
  { id: 'soir', label: 'Soir' },
  { id: 'weekend', label: 'Week-end' },
]

export default function Contact() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormState>(initial)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function set(field: keyof FormState, value: string) {
    setForm((p) => ({ ...p, [field]: value }))
  }

  function toggleArray(field: 'profil' | 'disponibilites', id: string) {
    setForm((p) => ({
      ...p,
      [field]: (p[field] as string[]).includes(id)
        ? (p[field] as string[]).filter((d) => d !== id)
        : [...(p[field] as string[]), id],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Une erreur est survenue.')
      } else {
        setSuccess(true)
        setForm(initial)
      }
    } catch {
      setError("Impossible d'envoyer. Vérifiez votre connexion.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <section id="contact" className="section-padding bg-white">
        <div className="container-max max-w-2xl mx-auto text-center py-16">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-3">Demande envoyée !</h2>
          <p className="text-muted mb-6">
            Je vous recontacte dans les 24h pour organiser un premier échange.
          </p>
          <button onClick={() => { setSuccess(false); setStep(1) }}
            className="text-navy font-semibold text-sm hover:text-navy/70 transition-colors">
            Nouvelle demande →
          </button>
        </div>
      </section>
    )
  }

  const stepIndicator = (
    <div className="flex items-center justify-center gap-2 mb-10">
      {[
        { n: 1, label: "L'élève" },
        { n: 2, label: "L'organisation" },
        { n: 3, label: 'Vos coordonnées' },
      ].map((s) => (
        <div key={s.n} className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            step >= s.n ? 'bg-navy text-white' : 'bg-surface text-muted'
          }`}>
            {s.n}
          </div>
          <span className={`text-xs font-medium hidden sm:inline ${
            step >= s.n ? 'text-navy' : 'text-muted'
          }`}>
            {s.label}
          </span>
          {s.n < 3 && <div className="w-8 h-px bg-gray-200 mx-1" />}
        </div>
      ))}
    </div>
  )

  const inputCls = 'w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors'
  const labelCls = 'block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2'

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max max-w-2xl mx-auto">
        {stepIndicator}

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <div>
                <label className={labelCls}>Prénom de l&apos;élève <span className="text-red-400">*</span></label>
                <input type="text" required value={form.prenom}
                  onChange={(e) => set('prenom', e.target.value)}
                  className={inputCls} placeholder="Marie" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Niveau <span className="text-red-400">*</span></label>
                  <select required value={form.niveau} onChange={(e) => set('niveau', e.target.value)}
                    className={inputCls}>
                    <option value="">— Sélectionner</option>
                    <option value="sixieme">6ème</option>
                    <option value="cinquieme">5ème</option>
                    <option value="quatrieme">4ème</option>
                    <option value="troisieme">3ème</option>
                    <option value="seconde">2nde</option>
                    <option value="premiere">1ère</option>
                    <option value="terminale">Terminale</option>
                    <option value="terminale-expert">Terminale Maths Expert</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Matière principale</label>
                  <select value={form.matiere} onChange={(e) => set('matiere', e.target.value)}
                    className={inputCls}>
                    <option value="">— Sélectionner</option>
                    <option value="Mathématiques">Mathématiques</option>
                    <option value="Français">Français</option>
                    <option value="Physique-Chimie">Physique-Chimie</option>
                    <option value="Histoire-Géographie">Histoire-Géographie</option>
                    <option value="Langues">Langues</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls}>Type de besoin <span className="text-red-400">*</span></label>
                <select required value={form.typebesoin} onChange={(e) => set('typebesoin', e.target.value)}
                  className={inputCls}>
                  <option value="">— Sélectionner</option>
                  <option value="regulier">Cours régulier</option>
                  <option value="stage">Stage vacances</option>
                  <option value="brevet">Préparation Brevet</option>
                  <option value="bac">Préparation Bac</option>
                  <option value="soutien-adapte">Soutien adapté (TDAH / Dys / TSA)</option>
                  <option value="orientation">Accompagnement orientation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className={labelCls}>Profil particulier ? <span className="text-xs font-normal normal-case">(optionnel — strictement confidentiel)</span></label>
                <div className="grid grid-cols-2 gap-2">
                  {PROFILS.map((p) => {
                    const checked = form.profil.includes(p.id)
                    return (
                      <button key={p.id} type="button" onClick={() => toggleArray('profil', p.id)}
                        className={`py-3 px-4 text-sm rounded-xl transition-all text-left ${
                          checked ? 'bg-navy/5 border-navy/30 text-navy font-medium' : 'bg-surface border-transparent text-muted hover:bg-gray-100'
                        } border`}>
                        {p.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <button type="button" onClick={() => setStep(2)}
                className="w-full btn-primary justify-center">
                Étape suivante : l&apos;organisation →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Ville</label>
                  <select value={form.ville} onChange={(e) => set('ville', e.target.value)} className={inputCls}>
                    <option value="">— Sélectionner</option>
                    <option value="Paris">Paris</option>
                    <option value="Strasbourg">Strasbourg</option>
                    <option value="En ligne">En ligne</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Modalité</label>
                  <select value={form.modalite} onChange={(e) => set('modalite', e.target.value)} className={inputCls}>
                    <option value="">— Sélectionner</option>
                    <option value="À domicile">À mon domicile</option>
                    <option value="Chez le professeur">Chez le professeur</option>
                    <option value="En ligne">En ligne</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls}>Disponibilités souhaitées</label>
                <div className="grid grid-cols-4 gap-2">
                  {DISPOS.map((d) => {
                    const checked = form.disponibilites.includes(d.id)
                    return (
                      <button key={d.id} type="button" onClick={() => toggleArray('disponibilites', d.id)}
                        className={`py-3 text-xs tracking-wider rounded-xl transition-all font-medium ${
                          checked ? 'bg-navy text-white' : 'bg-surface text-muted hover:bg-gray-100'
                        }`}>
                        {d.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className={labelCls}>Message (facultatif)</label>
                <textarea rows={3} value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  className={inputCls + ' resize-none'}
                  placeholder="Précisez les difficultés, les objectifs, ou toute information utile…" />
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)}
                  className="flex-1 py-3 text-sm font-medium text-muted border border-gray-200 rounded-full hover:bg-surface transition-colors">
                  ← Retour
                </button>
                <button type="button" onClick={() => setStep(3)}
                  className="flex-1 btn-primary justify-center">
                  Étape suivante →
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Prénom du parent <span className="text-red-400">*</span></label>
                  <input type="text" required value={form.prenom}
                    onChange={(e) => set('prenom', e.target.value)}
                    className={inputCls} placeholder="Marie" />
                </div>
                <div>
                  <label className={labelCls}>Nom <span className="text-red-400">*</span></label>
                  <input type="text" required value={form.nom}
                    onChange={(e) => set('nom', e.target.value)}
                    className={inputCls} placeholder="Dupont" />
                </div>
              </div>

              <div>
                <label className={labelCls}>Email <span className="text-red-400">*</span></label>
                <input type="email" required value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className={inputCls} placeholder="marie@email.com" />
              </div>

              <div>
                <label className={labelCls}>Téléphone <span className="text-red-400">*</span></label>
                <input type="tel" required value={form.telephone}
                  onChange={(e) => set('telephone', e.target.value)}
                  className={inputCls} placeholder="+33 6 00 00 00 00" />
              </div>

              {error && (
                <p className="text-xs py-3 px-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
                  {error}
                </p>
              )}

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)}
                  className="flex-1 py-3 text-sm font-medium text-muted border border-gray-200 rounded-full hover:bg-surface transition-colors">
                  ← Retour
                </button>
                <button type="submit" disabled={loading}
                  className="flex-1 btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
                </button>
              </div>

              <p className="text-center text-xs text-muted">
                Réponse sous 24h · Aucun engagement · Contact direct
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
