import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const TYPES_LABELS: Record<string, string> = {
  'decouverte': 'Appel de découverte gratuit (15 min)',
  'appel': 'Appel téléphonique',
  'domicile-prof': 'Cours au domicile du professeur',
  'domicile-eleve': "Cours au domicile de l'élève",
  'visio': 'Visioconférence',
}

function formatDateFr(dateStr: string) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()

  const { typeSeance, date, heure, nom, prenom, email, telephone, niveau, message } = body

  if (!typeSeance || !date || !heure || !nom || !prenom || !email || !telephone) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  const dateFr = formatDateFr(date)
  const typeLabel = TYPES_LABELS[typeSeance] ?? typeSeance

  const row = (label: string, value: string) =>
    value
      ? `<div style="margin-bottom:18px">
           <div style="font-family:system-ui,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#999;margin-bottom:4px">${label}</div>
           <div style="font-size:15px;color:#1A1A2E;border-left:2px solid #C9A84C;padding-left:12px">${value}</div>
         </div>`
      : ''

  const { error: sendError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'Réservation <onboarding@resend.dev>',
    to: [process.env.CONTACT_TO_EMAIL ?? 'nedjar.objectif.reussite@gmail.com'],
    replyTo: email,
    subject: `📅 Nouveau RDV — ${prenom} ${nom} · ${dateFr} à ${heure} · ${typeLabel}`,
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head><meta charset="UTF-8"/><style>*{box-sizing:border-box}</style></head>
      <body style="font-family:Georgia,serif;background:#F9F7F2;margin:0;padding:0">
        <div style="max-width:600px;margin:40px auto;background:#fff;border-top:3px solid #C9A84C">

          <div style="background:#123A63;padding:32px 40px">
            <p style="color:#C9A84C;font-family:system-ui,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;margin:0 0 8px">Nouvelle demande de rendez-vous</p>
            <h1 style="color:#fff;font-size:22px;margin:0;font-weight:normal">${prenom} ${nom}</h1>
          </div>

          <div style="padding:40px">
            <div style="background:#123A63;color:#fff;border-radius:12px;padding:20px 24px;margin-bottom:28px;font-family:system-ui,sans-serif">
              <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#C9A84C;margin-bottom:8px">Rendez-vous demandé</div>
              <div style="font-size:18px;font-weight:bold;margin-bottom:4px">${dateFr}</div>
              <div style="font-size:24px;font-weight:bold;color:#C9A84C">${heure}</div>
              <div style="margin-top:8px;font-size:13px;opacity:0.8">${typeLabel}</div>
            </div>

            ${row('Type de séance', typeLabel)}
            ${row('Niveau', niveau || 'Non précisé')}
            ${row('Téléphone', telephone)}
            ${row('Email', email)}
            ${message ? `<div style="margin-bottom:18px">
              <div style="font-family:system-ui,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:0.15em;color:#999;margin-bottom:8px">Message</div>
              <div style="background:#F9F7F2;padding:16px 20px;font-size:14px;color:#1A1A2E;line-height:1.7;border-left:2px solid #C9A84C">${message.replace(/\n/g, '<br/>')}</div>
            </div>` : ''}
          </div>

          <div style="padding:20px 40px;border-top:1px solid #EDE9E0;font-family:system-ui,sans-serif;font-size:11px;color:#bbb;text-align:center">
            Nedjar Objectif Réussite — Répondre directement pour contacter ${prenom}
          </div>
        </div>
      </body>
      </html>
    `,
  })

  if (sendError) {
    console.error('Resend booking error:', sendError)
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 })
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Nedjar Objectif Réussite <onboarding@resend.dev>',
      to: [email],
      subject: `Confirmation de votre rendez-vous — ${dateFr} à ${heure}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="UTF-8"/></head>
        <body style="font-family:system-ui,sans-serif;background:#F9F7F2;margin:0;padding:0">
          <div style="max-width:600px;margin:40px auto;background:#fff;border-top:3px solid #C9A84C;border-radius:8px;overflow:hidden">
            <div style="background:#123A63;padding:32px 40px;text-align:center">
              <h1 style="color:#fff;font-size:20px;margin:0">Votre rendez-vous est enregistré</h1>
            </div>
            <div style="padding:40px">
              <p style="font-size:15px;color:#1A1A2E;margin-bottom:20px">Bonjour ${prenom},</p>
              <p style="font-size:14px;color:#666;line-height:1.6;margin-bottom:20px">
                Votre demande de rendez-vous a bien été reçue. Monsieur Nedjar vous confirmera
                le créneau sous 24 heures.
              </p>
              <div style="background:#F0F4FA;border-radius:12px;padding:20px;margin-bottom:20px">
                <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.15em;color:#999;margin:0 0 8px">Récapitulatif</p>
                <p style="font-size:16px;font-weight:bold;color:#123A63;margin:0 0 4px">${dateFr} à ${heure}</p>
                <p style="font-size:14px;color:#666;margin:0">${typeLabel}</p>
              </div>
              <p style="font-size:13px;color:#999;line-height:1.6">
                Un rappel vous sera envoyé avant le rendez-vous.<br/>
                Pour toute question : nedjar.objectif.reussite@gmail.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
  } catch (e) {
    console.error('Confirmation email error:', e)
  }

  return NextResponse.json({ success: true })
}
