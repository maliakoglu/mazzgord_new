"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PaymentForm } from "@/components/payment/payment-form"

export default function OdemePage() {
  const { cartItems } = useCart()
  const [loading, setLoading] = useState(false)

  // Sepet toplamını hesapla
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Sepet boşsa ana sayfaya yönlendir
  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sepetiniz Boş</h1>
            <p className="mb-4">Ödeme yapmak için sepetinize ürün ekleyin.</p>
            <a href="/galeri" className="text-primary hover:underline">
              Galeriye Dön
            </a>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Ödeme</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Ödeme Bilgileri</CardTitle>
                  <CardDescription>Lütfen ödeme bilgilerinizi girin</CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentForm
                    cartItems={cartItems}
                    totalAmount={totalAmount}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Sipariş Özeti</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">Adet: {item.quantity}</p>
                        </div>
                        <p className="font-medium">{(item.price * item.quantity).toLocaleString("tr-TR")} ₺</p>
                      </div>
                    ))}

                    <Separator />

                    <div className="flex justify-between font-bold">
                      <p>Toplam</p>
                      <p>{totalAmount.toLocaleString("tr-TR")} ₺</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* 3D Secure form için container */}
      <div id="iyzico-3d-container" style={{ display: "none" }}></div>

      <Footer />
    </div>
  )
}
