import { createMollieClient } from '@mollie/api-client'
import { NextRequest, NextResponse } from 'next/server'

const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! })

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData()
    const paymentId = body.get('id') as string

    if (!paymentId) {
      return NextResponse.json({ error: 'ID manquant' }, { status: 400 })
    }

    const payment = await mollie.payments.get(paymentId)

    if (payment.status === 'paid') {
      console.log('✅ Paiement confirmé :', payment.id, payment.description)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Erreur webhook Mollie:', error)
    return NextResponse.json({ error: 'Erreur webhook' }, { status: 500 })
  }
}
