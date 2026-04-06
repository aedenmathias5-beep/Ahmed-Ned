import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()

  const {
    prenom,
    nom,
    email,
    telephone,
    niveau,
    typebesoin,
    matiere,
    ville,
    modalite,
    disponibilites,
    message,
  } = body

  if (!prenom || !nom || !email || !telephone) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  const niveauLabel: Record<string, string> = {
    sixieme: '6ème',
    cinquieme: '5ème',
    quatrieme: '4ème',
    troisieme: '3ème',
    seconde: '2nde',
    premiere: '1ère',
    terminale: 'Terminale',
  }

  const typeLabel: Record<string, string> = {
    regulier: 'Cours régulier',
    stage: 'Stage vacances',
    brevet: 'Préparation Brevet',
    bac: 'Préparation Bac',
  }

  const disponibilitesList: string[] = Array.isArray(disponibilites) ? disponibilites : []

  const disponibilitesLabels: Record<string, string> = {
    matin: 'Matin',
    apremidi: 'Après-midi',
    soir: 'Soir',
    weekend: 'Week-end',
  }

  const dispoText =
    disponibilitesList.length > 0
      ? disponibilitesList.map((d) => disponibilitesLabels[d] ?? d).join(', ')
      : 'Non précisé'

  const row = (label: string, value: string) =>
    value
      ? `<div style="margin-bottom:18px">
           <div style="font-family:system-ui,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#999;margin-bottom:4px">${label}</div>
           <div style="font-size:15px;color:#1A1A2E;border-left:2px solid #C9A84C;padding-left:12px">${value}</div>
         </div>`
      : ''

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'Contact <onboarding@resend.dev>',
    to: [process.env.CONTACT_TO_EMAIL ?? 'nedjar.objectif.reussite@gmail.com'],
    replyTo: email,
    subject: `Demande RDV — ${prenom} ${nom} · ${niveauLabel[niveau] ?? niveau ?? '?'} · ${typeLabel[typebesoin] ?? typebesoin ?? '?'}`,
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head><meta charset="UTF-8"/><style>*{box-sizing:border-box}</style></head>
      <body style="font-family:Georgia,serif;background:#F9F7F2;margin:0;padding:0">
        <div style="max-width:600px;margin:40px auto;background:#fff;border-top:3px solid #C9A84C">

          <div style="background:#0B1F3A;padding:32px 40px">
            <p style="color:#C9A84C;font-family:system-ui,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 8px">Nouvelle demande de rendez-vous</p>
            <h1 style="color:#fff;font-size:22px;margin:0;font-weight:normal">${prenom} ${nom}</h1>
          </div>

          <div style="padding:40px">

            <div style="background:#F9F7F2;border-left:3px solid #C9A84C;padding:16px 20px;margin-bottom:28px;font-family:system-ui,sans-serif;font-size:13px;color:#0B1F3A;display:flex;gap:24px;flex-wrap:wrap">
              <div><span style="color:#999;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;display:block;margin-bottom:2px">Niveau</span><strong>${niveauLabel[niveau] ?? niveau ?? '—'}</strong></div>
              <div><span style="color:#999;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;display:block;margin-bottom:2px">Besoin</span><strong>${typeLabel[typebesoin] ?? typebesoin ?? '—'}</strong></div>
              <div><span style="color:#999;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;display:block;margin-bottom:2px">Ville</span><strong>${ville ?? '—'}</strong></div>
            </div>

            ${row('Matière principale', matiere)}
            ${row('Modalité', modalite)}
            ${row('Disponibilités', dispoText)}
            ${row('Téléphone', telephone)}
            ${row('Email', email)}
            ${message ? `<div style="margin-bottom:18px">
              <div style="font-family:system-ui,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#999;margin-bottom:8px">Message</div>
              <div style="background:#F9F7F2;padding:16px 20px;font-size:14px;color:#1A1A2E;line-height:1.7;border-left:2px solid #C9A84C">${message.replace(/\n/g, '<br/>')}</div>
            </div>` : ''}

          </div>

          <div style="padding:20px 40px;border-top:1px solid #EDE9E0;font-family:system-ui,sans-serif;font-size:11px;color:#bbb;text-align:center">
            ahmed-nedjar.fr — Répondre directement à cet email pour contacter ${prenom}
          </div>
        </div>
      </body>
      </html>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: "Erreur lors de l'envoi. Veuillez réessayer." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
