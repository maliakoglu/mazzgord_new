"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { PaymentLogos } from "@/components/payment-logos"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PayTRForm } from "@/components/payment/paytr-form"
import { IyzicoForm } from "@/components/payment/iyzico-form"

export default function OdemePage() {
  const { items, totalItems, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
  })
  const [paymentProvider, setPaymentProvider] = useState<"iyzico" | "paytr">("iyzico")

  // Kargo ücreti hesaplama
  const kargo = totalItems > 0 ? 150 : 0
  const genelToplam = totalPrice + kargo

  useEffect(() => {
    // Sepet boşsa ana sayfaya yönlendir
    if (items.length === 0) {
      router.push("/galeri")
    }
  }, [items, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Ödeme</h1>
          <p className="text-muted-foreground mb-8">
            Lütfen aşağıdaki bilgileri doldurun ve ödeme işlemine devam edin.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Kişisel Bilgiler</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta Adresi *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Teslimat Adresi</h2>

                  <div className="space-y-2">
                    <Label htmlFor="address">Adres *</Label>
                    <Input id="address" name="address" required value={formData.address} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>

                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Adet: {item.quantity}</p>
                        </div>
                        <p className="font-semibold">{(item.price * item.quantity).toLocaleString("tr-TR")} ₺</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Ödeme Yöntemi</h2>

                  <Tabs
                    defaultValue="iyzico"
                    onValueChange={(value) => setPaymentProvider(value as "iyzico" | "paytr")}
                  >
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="iyzico">iyzico</TabsTrigger>
                      <TabsTrigger value="paytr">PayTR</TabsTrigger>
                    </TabsList>
                    <TabsContent value="iyzico">
                      <IyzicoForm
                        userInfo={formData}
                        cartItems={items}
                        totalAmount={genelToplam}
                        loading={loading}
                        setLoading={setLoading}
                      />
                    </TabsContent>
                    <TabsContent value="paytr">
                      <PayTRForm
                        userInfo={formData}
                        cartItems={items}
                        totalAmount={genelToplam}
                        loading={loading}
                        setLoading={setLoading}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-muted/30 rounded-lg p-6 sticky top-20">
                <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ara Toplam</span>
                    <span>{totalPrice.toLocaleString("tr-TR")} ₺</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kargo</span>
                    <span>{kargo.toLocaleString("tr-TR")} ₺</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Genel Toplam</span>
                    <span>{genelToplam.toLocaleString("tr-TR")} ₺</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-4">Ödeme Seçenekleri</h3>
                  <PaymentLogos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* PayTR için iframe container */}
      <div id="paytr-iframe-container" className="hidden"></div>

      {/* iyzico için gerekli script */}
      <Script
        id="iyzico-checkout-form"
        src="https://sandbox-static.iyzipay.com/checkoutform/v2/bundle.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
