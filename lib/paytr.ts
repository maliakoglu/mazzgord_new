// PayTR entegrasyonu için yardımcı fonksiyonlar
import crypto from "crypto"

interface PayTRConfig {
  merchantId: string
  merchantKey: string
  merchantSalt: string
  testMode: boolean
}

interface PayTROrderData {
  orderId: string
  totalAmount: number // Kuruş cinsinden (örn: 100.50 TL için 10050)
  basketItems: Array<{
    name: string
    price: number // Kuruş cinsinden
    quantity: number
  }>
  currency: "TL" | "USD" | "EUR" | "GBP"
  userIp: string
  userEmail: string
  userPhone?: string
  userName?: string
  userAddress?: string
  merchantOkUrl: string
  merchantFailUrl: string
  paymentGroup?: string
  lang?: "tr" | "en"
  timeoutLimit?: number
  debugMode?: boolean
}

export class PayTR {
  private config: PayTRConfig

  constructor(config: PayTRConfig) {
    this.config = config
  }

  /**
   * PayTR ödeme formu için token oluşturur
   */
  async createPaymentToken(orderData: PayTROrderData): Promise<string> {
    // Sepet içeriğini JSON formatına dönüştür
    const basketJson = JSON.stringify(
      orderData.basketItems.map((item) => ({
        name: item.name,
        price: item.price.toString(),
        quantity: item.quantity.toString(),
      })),
    )

    // Hash oluşturmak için gerekli parametreler
    const hashStr = `${this.config.merchantId}${orderData.userIp}${orderData.orderId}${orderData.userEmail}${orderData.totalAmount}${basketJson}${orderData.currency}${this.config.testMode ? "1" : "0"}`

    // HMAC ile hash oluştur
    const paytrHash = this.createHash(hashStr)

    // PayTR API'sine gönderilecek parametreler
    const params = new URLSearchParams()
    params.append("merchant_id", this.config.merchantId)
    params.append("user_ip", orderData.userIp)
    params.append("merchant_oid", orderData.orderId)
    params.append("email", orderData.userEmail)
    params.append("payment_amount", orderData.totalAmount.toString())
    params.append("paytr_token", paytrHash)
    params.append("user_basket", basketJson)
    params.append("debug_on", orderData.debugMode ? "1" : "0")
    params.append("no_installment", "0")
    params.append("max_installment", "0")
    params.append("currency", orderData.currency)
    params.append("test_mode", this.config.testMode ? "1" : "0")
    params.append("merchant_ok_url", orderData.merchantOkUrl)
    params.append("merchant_fail_url", orderData.merchantFailUrl)

    // Opsiyonel parametreler
    if (orderData.userPhone) params.append("user_phone", orderData.userPhone)
    if (orderData.userName) params.append("user_name", orderData.userName)
    if (orderData.userAddress) params.append("user_address", orderData.userAddress)
    if (orderData.paymentGroup) params.append("payment_group", orderData.paymentGroup)
    if (orderData.lang) params.append("lang", orderData.lang)
    if (orderData.timeoutLimit) params.append("timeout_limit", orderData.timeoutLimit.toString())

    try {
      // PayTR API'sine istek gönder
      const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
        method: "POST",
        body: params,
      })

      if (!response.ok) {
        throw new Error(`PayTR API error: ${response.status}`)
      }

      const data = await response.json()

      if (data.status === "success") {
        return data.token
      } else {
        throw new Error(`PayTR token error: ${data.reason}`)
      }
    } catch (error) {
      console.error("PayTR token creation failed:", error)
      throw error
    }
  }

  /**
   * PayTR callback'inden gelen verileri doğrular
   */
  verifyCallback(params: Record<string, string>): boolean {
    const { merchant_oid, status, total_amount, hash } = params

    // Hash doğrulama
    const hashStr = `${merchant_oid}${this.config.merchantSalt}${status}${total_amount}`
    const calculatedHash = this.createHash(hashStr)

    return calculatedHash === hash
  }

  /**
   * HMAC ile hash oluşturur
   */
  private createHash(data: string): string {
    return crypto
      .createHmac("sha256", this.config.merchantKey + this.config.merchantSalt)
      .update(data)
      .digest("base64")
  }
}
