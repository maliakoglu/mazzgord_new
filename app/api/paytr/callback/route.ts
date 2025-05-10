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
    const formData = await request.formData()

    // Form verilerini bir nesneye dönüştür
    const params: Record<string, string> = {}
    for (const [key, value] of formData.entries()) {
      params[key] = value.toString()
    }

    // PayTR callback'ini doğrula
    const isValid = paytr.verifyCallback(params)

    if (isValid) {
      // Ödeme başarılı ise
      if (params.status === "success") {
        // Siparişi veritabanına kaydet, stok güncelle vs.
        console.log("Ödeme başarılı:", params)
        return new NextResponse("OK")
      } else {
        // Ödeme başarısız ise
        console.log("Ödeme başarısız:", params)
        return new NextResponse("OK")
      }
    } else {
      // Hash doğrulaması başarısız
      console.error("Hash doğrulaması başarısız")
      return new NextResponse("HASH_FAILED", { status: 400 })
    }
  } catch (error: any) {
    console.error("PayTR callback hatası:", error)
    return new NextResponse("ERROR", { status: 500 })
  }
}
