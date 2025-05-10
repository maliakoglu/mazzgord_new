import { type NextRequest, NextResponse } from "next/server"
import { PayTR } from "@/lib/paytr"

// PayTR yapılandırması
const paytrConfig = {
  merchantId: process.env.PAYTR_MERCHANT_ID || "",
  merchantKey: process.env.PAYTR_MERCHANT_KEY || "",
  merchantSalt: process.env.PAYTR_MERCHANT_SALT || "",
  testMode: true,
}

// PayTR istemcisi oluştur
const paytr = new PayTR(paytrConfig)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, cartItems, userEmail, totalAmount } = body

    // Kullanıcı IP'sini al
    const userIp = request.headers.get("x-forwarded-for") || "127.0.0.1"

    // PayTR için sipariş verisini hazırla
    const orderData = {
      orderId: orderId,
      totalAmount: Math.round(totalAmount * 100), // Kuruş cinsinden (1 TL = 100 kuruş)
      basketItems: cartItems.map((item: any) => ({
        name: item.name,
        price: Math.round(item.price * item.quantity * 100),
        quantity: item.quantity,
      })),
      currency: "TL",
      userIp: userIp,
      userEmail: userEmail,
      merchantOkUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/odeme/basarili`,
      merchantFailUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/odeme/basarisiz`,
      debugMode: true,
    }

    // PayTR token'ı oluştur
    const token = await paytr.createPaymentToken(orderData)

    return NextResponse.json({ token })
  } catch (error: any) {
    console.error("PayTR token hatası:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
