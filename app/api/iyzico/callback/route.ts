import { type NextRequest, NextResponse } from "next/server"
import { Iyzico } from "@/lib/iyzico"

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
    const formData = await request.formData()

    // iyzico'dan gelen parametreleri al
    const paymentId = formData.get("paymentId") as string
    const conversationId = formData.get("conversationId") as string
    const mdStatus = formData.get("mdStatus") as string

    // mdStatus değeri 1 ise 3D doğrulama başarılı
    if (mdStatus === "1") {
      // 3D ödemeyi tamamla
      const result = await iyzico.complete3DSecurePayment(paymentId, conversationId)

      if (result.status === "success") {
        // Ödeme başarılı - başarılı sayfasına yönlendir
        return NextResponse.redirect(new URL("/odeme/basarili", request.url))
      } else {
        // Ödeme başarısız - hata sayfasına yönlendir
        return NextResponse.redirect(new URL("/odeme/basarisiz", request.url))
      }
    } else {
      // 3D doğrulama başarısız - hata sayfasına yönlendir
      return NextResponse.redirect(new URL("/odeme/basarisiz", request.url))
    }
  } catch (error: any) {
    console.error("iyzico callback hatası:", error)
    return NextResponse.redirect(new URL("/odeme/basarisiz", request.url))
  }
}
