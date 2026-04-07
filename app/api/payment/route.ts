import { createMollieClient } from '@mollie/api-client'
import { NextRequest, NextResponse } from 'next/server'

const mollie = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! })

export async function POST(req: NextRequest) {
  try {
    const { amount, description } = await req.json()

    if (!amount || !description) {
      return NextResponse.json({ error: 'Paramètres manquants' }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://monpetitgenie.io'

    const payment = await mollie.payments.create({
      amount: { currency: 'EUR', value: amount },
      description,
      redirectUrl: `${baseUrl}/merci`,
      webhookUrl: `${baseUrl}/api/webhook`,
      method: ['creditcard', 'applepay', 'googlepay'],
    })

    return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() })
  } catch (error) {
    console.error('Erreur Mollie payment:', error)
    return NextResponse.json({ error: 'Erreur lors de la création du paiement' }, { status: 500 })
  }
}
