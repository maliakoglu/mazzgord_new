// iyzico entegrasyonu için yardımcı fonksiyonlar
import crypto from "crypto"

interface IyzicoConfig {
  apiKey: string
  secretKey: string
  baseUrl: string
  merchantId: string
}

interface IyzicoPaymentRequest {
  locale?: string
  conversationId: string
  price: string
  paidPrice: string
  currency: string
  installment: string
  basketId: string
  paymentChannel: string
  paymentGroup: string
  paymentCard: {
    cardHolderName: string
    cardNumber: string
    expireMonth: string
    expireYear: string
    cvc: string
    registerCard: number
  }
  buyer: {
    id: string
    name: string
    surname: string
    gsmNumber: string
    email: string
    identityNumber: string
    registrationAddress: string
    ip: string
    city: string
    country: string
  }
  shippingAddress: {
    contactName: string
    city: string
    country: string
    address: string
  }
  billingAddress: {
    contactName: string
    city: string
    country: string
    address: string
  }
  basketItems: Array<{
    id: string
    name: string
    category1: string
    itemType: string
    price: string
  }>
}

export class Iyzico {
  private config: IyzicoConfig

  constructor(config: IyzicoConfig) {
    this.config = config
  }

  /**
   * iyzico API isteği için gereken authentication ve imza bilgilerini oluşturur
   */
  private generateAuthorizationHeader(uri: string, body: string | null = null, method = "POST") {
    // Random string için daha güvenilir bir yöntem kullan
    const randomString = crypto.randomBytes(8).toString("hex")
    const timestamp = Math.floor(Date.now() / 1000).toString()

    // İmza oluştur
    const hashStr = `${this.config.apiKey}${randomString}${timestamp}${this.config.secretKey}`
    const hash = crypto.createHash("sha1").update(hashStr).digest("base64")

    // Authorization parametreleri
    const authorizationParams = {
      apiKey: this.config.apiKey,
      randomKey: randomString,
      signature: hash,
      timestamp: timestamp,
    }

    return {
      authorization: Buffer.from(JSON.stringify(authorizationParams)).toString("base64"),
      randomString: randomString,
      timestamp: timestamp,
    }
  }

  /**
   * iyzico ödeme formu için token oluşturur
   */
  async createPayment(paymentRequest: IyzicoPaymentRequest): Promise<any> {
    const uri = `${this.config.baseUrl}/payment/auth`
    const body = JSON.stringify(paymentRequest)
    const headers = this.generateAuthorizationHeader(uri, body)

    try {
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: headers.authorization,
        },
        body: body,
      })

      if (!response.ok) {
        throw new Error(`iyzico API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("iyzico payment creation failed:", error)
      throw error
    }
  }

  /**
   * iyzico 3D ödeme formu için token oluşturur
   */
  async create3DSecurePayment(paymentRequest: IyzicoPaymentRequest): Promise<any> {
    const uri = `${this.config.baseUrl}/payment/3dsecure/initialize`
    const body = JSON.stringify({
      ...paymentRequest,
      callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/iyzico/callback`,
    })
    const headers = this.generateAuthorizationHeader(uri, body)

    try {
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: headers.authorization,
        },
        body: body,
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error("iyzico API error response:", errorText)
        throw new Error(`iyzico API error: ${response.status} - ${errorText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("iyzico 3D payment creation failed:", error)
      throw error
    }
  }

  /**
   * 3D ödeme sonucunu doğrula
   */
  async complete3DSecurePayment(paymentId: string, conversationId: string): Promise<any> {
    const uri = `${this.config.baseUrl}/payment/3dsecure/auth`
    const body = JSON.stringify({
      locale: "tr",
      conversationId: conversationId,
      paymentId: paymentId,
    })
    const headers = this.generateAuthorizationHeader(uri, body)

    try {
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: headers.authorization,
        },
        body: body,
      })

      if (!response.ok) {
        throw new Error(`iyzico API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("iyzico 3D payment completion failed:", error)
      throw error
    }
  }
}
