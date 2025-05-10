// NOT: PayTR entegrasyonu geçici olarak askıya alınmıştır.
// Aktif edildiğinde bu yorum satırını kaldırın.
import { type NextRequest, NextResponse } from "next/server"

// PayTR yapılandırması
const paytrConfig = {
  merchantId: process.env.PAYTR_MERCHANT_ID || "",
  merchantKey: process.env.PAYTR_MERCHANT_KEY || "",
  merchantSalt: process.env.PAYTR_MERCHANT_SALT || "",
  testMode: process.env.PAYTR_TEST_MODE === "true",
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ error: "Ödeme sistemi geçici olarak devre dışı bırakılmıştır." }, { status: 503 })
}
