import { createMollieClient, PaymentMethod } from '@mollie/api-client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.MOLLIE_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Configuration de paiement manquante' }, { status: 503 })
    }

    const mollie = createMollieClient({ apiKey })

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
      method: [PaymentMethod.creditcard, PaymentMethod.applepay],
    }) as unknown as Record<string, unknown> & { getCheckoutUrl?: () => string | null; _links?: { checkout?: { href?: string } } }

    const checkoutUrl =
      typeof payment.getCheckoutUrl === 'function'
        ? payment.getCheckoutUrl()
        : (payment._links?.checkout?.href ?? null)

    return NextResponse.json({ checkoutUrl })
  } catch (error) {
    console.error('Erreur Mollie payment:', error)
    return NextResponse.json({ error: 'Erreur lors de la création du paiement' }, { status: 500 })
  }
}
