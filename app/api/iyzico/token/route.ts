import { type NextRequest, NextResponse } from "next/server"
import { Iyzico } from "@/lib/iyzico"
import { v4 as uuidv4 } from "uuid"

// iyzico yapılandırması
const iyzicoConfig = {
  apiKey: process.env.IYZICO_API_KEY || "",
  secretKey: process.env.IYZICO_SECRET_KEY || "",
  baseUrl: "https://sandbox-api.iyzipay.com", // Sandbox ortamı için
  merchantId: process.env.IYZICO_MERCHANT_ID || "",
}

// iyzico istemcisi oluştur
const iyzico = new Iyzico(iyzicoConfig)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { cartItems, userInfo, totalAmount } = body

    // Gerekli alanları kontrol et
    if (!cartItems || !userInfo || !totalAmount) {
      return NextResponse.json(
        { error: "Eksik bilgi: sepet öğeleri, kullanıcı bilgileri ve toplam tutar gereklidir" },
        { status: 400 },
      )
    }

    // Kart bilgilerini kontrol et
    if (!userInfo.paymentCard) {
      return NextResponse.json({ error: "Kart bilgileri eksik" }, { status: 400 })
    }

    const conversationId = uuidv4()
    const basketId = `basket_${Date.now()}`

    // Kart bilgileri istemci tarafında girilecek ve bu endpointe gönderilecek
    const paymentRequest = {
      locale: "tr",
      conversationId: conversationId,
      price: totalAmount.toString(),
      paidPrice: totalAmount.toString(),
      currency: "TRY",
      installment: "1",
      basketId: basketId,
      paymentChannel: "WEB",
      paymentGroup: "PRODUCT",
      callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/iyzico/callback`,

      // Kart bilgileri burada olacak (istemci tarafından gönderilecek)
      paymentCard: userInfo.paymentCard,

      buyer: {
        id: `user_${Date.now()}`,
        name: userInfo.name.split(" ")[0] || "Test",
        surname: userInfo.name.split(" ").slice(1).join(" ") || "User",
        gsmNumber: userInfo.phone || "+905555555555",
        email: userInfo.email || "test@example.com",
        identityNumber: "74300864791",
        registrationAddress: userInfo.address || "Test Address",
        ip: request.headers.get("x-forwarded-for") || "127.0.0.1",
        city: "Istanbul",
        country: "Turkey",
      },

      shippingAddress: {
        contactName: userInfo.name || "Test User",
        city: "Istanbul",
        country: "Turkey",
        address: userInfo.address || "Test Address",
      },

      billingAddress: {
        contactName: userInfo.name || "Test User",
        city: "Istanbul",
        country: "Turkey",
        address: userInfo.address || "Test Address",
      },

      basketItems: cartItems.map((item: any) => ({
        id: item.id.toString(),
        name: item.name,
        category1: "Sanat",
        itemType: "PHYSICAL",
        price: (item.price * item.quantity).toString(),
      })),
    }

    console.log("iyzico payment request:", JSON.stringify(paymentRequest, null, 2))

    try {
      // 3D Secure ile ödeme başlat
      const result = await iyzico.create3DSecurePayment(paymentRequest)
      console.log("iyzico payment result:", JSON.stringify(result, null, 2))

      if (result.status === "success") {
        return NextResponse.json(result)
      } else {
        return NextResponse.json(
          { error: result.errorMessage || "Ödeme başlatılamadı", details: result },
          { status: 400 },
        )
      }
    } catch (error: any) {
      console.error("iyzico API error:", error)
      return NextResponse.json({ error: `iyzico API hatası: ${error.message}`, details: error }, { status: 500 })
    }
  } catch (error: any) {
    console.error("iyzico ödeme hatası:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
