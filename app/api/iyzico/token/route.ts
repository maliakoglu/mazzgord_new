import { type NextRequest, NextResponse } from "next/server"
import { createPayment, generateUniqueConversationId } from "@/lib/iyzico"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { cartItems, userInfo, totalAmount } = body

    if (!cartItems || !userInfo || !totalAmount) {
      return NextResponse.json({ error: "Gerekli bilgiler eksik" }, { status: 400 })
    }

    // Benzersiz bir conversationId oluştur
    const conversationId = generateUniqueConversationId()
    console.log("Oluşturulan conversationId:", conversationId)

    // Ürün bilgilerini hazırla
    const basketItems = cartItems.map((item: any, index: number) => ({
      id: `item_${index}`,
      name: item.title,
      category1: "Sanat",
      itemType: "PHYSICAL",
      price: item.price.toString(),
    }))

    // Kullanıcı bilgilerini ayır
    const nameParts = userInfo.name.split(" ")
    const firstName = nameParts[0] || "İsim"
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Soyisim"

    // Ödeme bilgilerini hazırla
    const paymentData = {
      locale: "tr",
      conversationId,
      price: totalAmount.toString(),
      paidPrice: totalAmount.toString(),
      currency: "TRY",
      installment: "1",
      basketId: `basket_${Date.now()}`,
      paymentChannel: "WEB",
      paymentGroup: "PRODUCT",
      callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/iyzico/callback`,
      paymentCard: userInfo.paymentCard,
      buyer: {
        id: `buyer_${Date.now()}`,
        name: firstName,
        surname: lastName,
        gsmNumber: userInfo.phone,
        email: userInfo.email,
        identityNumber: "11111111111", // Sandbox için sabit değer
        registrationAddress: userInfo.address,
        ip: request.headers.get("x-forwarded-for") || "127.0.0.1",
        city: "Istanbul",
        country: "Turkey",
      },
      shippingAddress: {
        contactName: userInfo.name,
        city: "Istanbul",
        country: "Turkey",
        address: userInfo.address,
      },
      billingAddress: {
        contactName: userInfo.name,
        city: "Istanbul",
        country: "Turkey",
        address: userInfo.address,
      },
      basketItems,
      // Üye İşyeri Numarası eklendi
      merchantId: "100947379",
    }

    // Ödeme başlat
    const paymentResult = await createPayment(paymentData)

    // Ödeme başlatma sonucunu kontrol et
    if (paymentResult.status === "success") {
      console.log("Ödeme başarıyla başlatıldı, 3D Secure formuna yönlendiriliyor")

      // 3D Secure HTML içeriğini döndür
      return NextResponse.json({
        status: "success",
        threeDSHtmlContent: paymentResult.threeDSHtmlContent,
        conversationId: conversationId, // Benzersiz conversationId'yi döndür
      })
    } else {
      // Hata durumunda
      console.error("Ödeme başlatma hatası:", paymentResult.errorCode, paymentResult.errorMessage)

      return NextResponse.json(
        {
          status: "error",
          errorCode: paymentResult.errorCode,
          errorMessage: paymentResult.errorMessage,
        },
        { status: 400 },
      )
    }
  } catch (error: any) {
    console.error("Ödeme token hatası:", error)
    return NextResponse.json({ error: error.message || "Ödeme işlemi başlatılamadı" }, { status: 500 })
  }
}
