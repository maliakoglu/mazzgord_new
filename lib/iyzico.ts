import crypto from "crypto"

// API bilgileri
const API_KEY = process.env.IYZICO_API_KEY || ""
const SECRET_KEY = process.env.IYZICO_SECRET_KEY || ""
const BASE_URL = "https://sandbox-api.iyzipay.com" // Sandbox URL
const MERCHANT_ID = "100947379" // Üye İşyeri Numarası

// Benzersiz bir conversationId oluştur
export function generateUniqueConversationId(): string {
  // Timestamp ve random string kombinasyonu ile benzersiz bir ID oluştur
  const timestamp = Date.now().toString()
  const randomString = crypto.randomBytes(8).toString("hex")
  return `conv_${timestamp}_${randomString}`
}

// API istekleri için hash oluştur
export function generateAuthorizationHeader(uri: string, body: string): string {
  try {
    // Random string oluştur (her istek için benzersiz olmalı)
    const randomString = crypto.randomBytes(16).toString("hex")

    // Hash için gerekli değerleri hazırla
    const hashStr = `${API_KEY}${randomString}${SECRET_KEY}${body}`

    // Hash oluştur
    const hash = crypto.createHash("sha1").update(hashStr).digest("base64")

    // Authorization header'ı oluştur
    return `IYZWS ${API_KEY}:${hash}`
  } catch (error) {
    console.error("Hash oluşturma hatası:", error)
    throw new Error("Authorization header oluşturulamadı")
  }
}

// Ödeme başlatma isteği
export async function createPayment(paymentData: any) {
  try {
    // Üye İşyeri Numarasını ekle (eğer paymentData içinde yoksa)
    if (!paymentData.merchantId) {
      paymentData.merchantId = MERCHANT_ID
    }

    console.log("Ödeme isteği gönderiliyor:", JSON.stringify(paymentData, null, 2))

    // JSON string'e çevir
    const body = JSON.stringify(paymentData)

    // API isteği gönder
    const response = await fetch(`${BASE_URL}/payment/3dsecure/initialize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: generateAuthorizationHeader("/payment/3dsecure/initialize", body),
      },
      body,
    })

    // Yanıtı JSON olarak parse et
    const result = await response.json()
    console.log("Ödeme API yanıtı:", JSON.stringify(result, null, 2))

    return result
  } catch (error) {
    console.error("Ödeme başlatma hatası:", error)
    throw new Error("Ödeme başlatılamadı")
  }
}

// 3D Secure sonrası ödeme tamamlama
export async function completePayment(paymentId: string, conversationId: string) {
  try {
    // Request body'sini hazırla
    const requestBody = {
      locale: "tr",
      conversationId,
      paymentId,
      merchantId: MERCHANT_ID, // Üye İşyeri Numarası eklendi
    }

    console.log("Ödeme tamamlama isteği gönderiliyor:", JSON.stringify(requestBody, null, 2))

    // JSON string'e çevir
    const body = JSON.stringify(requestBody)

    // API isteği gönder
    const response = await fetch(`${BASE_URL}/payment/3dsecure/complete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: generateAuthorizationHeader("/payment/3dsecure/complete", body),
      },
      body,
    })

    // Yanıtı JSON olarak parse et
    const result = await response.json()
    console.log("Ödeme tamamlama API yanıtı:", JSON.stringify(result, null, 2))

    return result
  } catch (error) {
    console.error("Ödeme tamamlama hatası:", error)
    throw new Error("Ödeme tamamlanamadı")
  }
}
