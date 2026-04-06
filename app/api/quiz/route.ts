import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { prenom, email, niveau, score, total } = await req.json()

  if (!prenom || !email) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  const pct = Math.round((score / total) * 100)
  let verdict = 'Excellent'
  let conseil = "Votre enfant maîtrise bien les fondamentaux. Un accompagnement ciblé pourrait le/la pousser vers l'excellence."
  let couleur = '#22c55e'

  if (pct < 40) {
    verdict = 'Accompagnement urgent recommandé'
    conseil = "Des lacunes importantes ont été identifiées. Un accompagnement régulier et structuré est vivement recommandé pour éviter un décrochage."
    couleur = '#ef4444'
  } else if (pct < 60) {
    verdict = 'À renforcer'
    conseil = "Certaines bases ne sont pas solidement acquises. Un suivi hebdomadaire permettrait de combler ces lacunes rapidement."
    couleur = '#f59e0b'
  } else if (pct < 80) {
    verdict = 'Correct — peut mieux faire'
    conseil = "De bonnes bases avec quelques points à consolider. Un accompagnement ciblé ferait une vraie différence pour viser la mention."
    couleur = '#3b82f6'
  }

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'Nedjar Objectif Réussite <onboarding@resend.dev>',
    to: [process.env.CONTACT_TO_EMAIL ?? 'nedjar.objectif.reussite@gmail.com'],
    subject: `📊 Quiz de niveau — ${prenom} (${niveau}) — ${score}/${total}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:500px;margin:40px auto;background:#fff;border-top:3px solid #C9A84C;padding:30px">
        <h2 style="color:#123A63">Nouveau quiz de niveau</h2>
        <p><strong>${prenom}</strong> — Niveau ${niveau}</p>
        <p>Score : <strong>${score}/${total}</strong> (${pct}%)</p>
        <p>Verdict : <span style="color:${couleur};font-weight:bold">${verdict}</span></p>
        <p>Email parent : <a href="mailto:${email}">${email}</a></p>
      </div>
    `,
  })

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'Nedjar Objectif Réussite <onboarding@resend.dev>',
      to: [email],
      subject: `Diagnostic mathématiques de ${prenom} — ${verdict}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:40px auto;background:#fff;border-top:3px solid #C9A84C;border-radius:8px;overflow:hidden">
          <div style="background:#123A63;padding:30px 40px;text-align:center">
            <h1 style="color:#fff;font-size:20px;margin:0">Diagnostic mathématiques</h1>
            <p style="color:#C9A84C;margin:8px 0 0;font-size:14px">Nedjar Objectif Réussite</p>
          </div>
          <div style="padding:40px">
            <p style="font-size:15px;color:#333">Bonjour,</p>
            <p style="font-size:14px;color:#666;line-height:1.6">Voici le résultat du quiz de niveau de <strong>${prenom}</strong> en classe de <strong>${niveau}</strong> :</p>
            <div style="background:#F0F4FA;border-radius:12px;padding:24px;text-align:center;margin:20px 0">
              <p style="font-size:36px;font-weight:900;color:#123A63;margin:0">${score} / ${total}</p>
              <p style="font-size:16px;font-weight:bold;color:${couleur};margin:8px 0 0">${verdict}</p>
            </div>
            <div style="background:#FBF4E9;border-left:3px solid #C9A84C;padding:16px 20px;margin:20px 0;border-radius:0 8px 8px 0">
              <p style="font-size:14px;color:#333;line-height:1.6;margin:0"><strong>Notre recommandation :</strong> ${conseil}</p>
            </div>
            <p style="font-size:14px;color:#666;line-height:1.6">Monsieur Nedjar, Professeur Agrégé de Mathématiques, peut accompagner ${prenom} avec un programme personnalisé.</p>
            <div style="text-align:center;margin:24px 0">
              <a href="https://mathjard.replit.app/prendre-rendez-vous" style="background:#123A63;color:#fff;padding:14px 28px;border-radius:30px;text-decoration:none;font-size:14px;font-weight:bold;display:inline-block">Prendre rendez-vous →</a>
            </div>
            <p style="font-size:12px;color:#999;text-align:center">Premier appel de découverte gratuit — 15 minutes, sans engagement.</p>
          </div>
        </div>
      `,
    })
  } catch (e) {
    console.error('Quiz email error:', e)
  }

  return NextResponse.json({ success: true })
}
