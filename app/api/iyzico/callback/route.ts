import { type NextRequest, NextResponse } from "next/server"
import { completePayment } from "@/lib/iyzico"

export async function POST(request: NextRequest) {
  try {
    // Form verilerini al
    const formData = await request.formData()
    const paymentId = formData.get("paymentId") as string
    const conversationId = formData.get("conversationId") as string
    const mdStatus = formData.get("mdStatus") as string

    console.log("Callback alındı:", { paymentId, conversationId, mdStatus })

    // mdStatus kontrolü
    if (mdStatus === "1") {
      // 3D doğrulama başarılı, ödemeyi tamamla
      const result = await completePayment(paymentId, conversationId)

      if (result.status === "success") {
        console.log("Ödeme başarıyla tamamlandı:", result)

        // Ödeme başarılı, başarılı sayfasına yönlendir
        return NextResponse.redirect(new URL("/odeme/basarili", request.url))
      } else {
        // Ödeme başarısız, hata sayfasına yönlendir
        console.error("Ödeme tamamlama hatası:", result)
        return NextResponse.redirect(
          new URL(
            "/odeme/hata?error=" + encodeURIComponent(result.errorMessage || "Ödeme işlemi tamamlanamadı"),
            request.url,
          ),
        )
      }
    } else {
      // 3D doğrulama başarısız
      console.error("3D doğrulama başarısız:", mdStatus)
      return NextResponse.redirect(
        new URL("/odeme/hata?error=" + encodeURIComponent("3D Secure doğrulaması başarısız"), request.url),
      )
    }
  } catch (error: any) {
    console.error("Callback hatası:", error)
    return NextResponse.redirect(
      new URL(
        "/odeme/hata?error=" + encodeURIComponent(error.message || "Ödeme işlemi sırasında bir hata oluştu"),
        request.url,
      ),
    )
  }
}
