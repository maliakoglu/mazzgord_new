"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (items.length === 0) {
      alert("Sepetiniz boş!")
      return
    }

    try {
      setLoading(true)

      // Sipariş ID oluştur
      const orderId = `ORD${Date.now()}`

      // PayTR token'ı al
      const response = await fetch("/api/paytr/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          cartItems: items,
          userEmail: formData.email,
          totalAmount: genelToplam,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Ödeme işlemi başlatılamadı")
      }

      // PayTR iframe'ini oluştur
      const iframe = document.createElement("iframe")
      iframe.src = `https://www.paytr.com/odeme/guvenli/${data.token}`
      iframe.id = "paytriframe"
      iframe.frameBorder = "0"
      iframe.width = "100%"
      iframe.height = "100%"
      iframe.style.display = "block"

      // Mevcut iframe varsa kaldır
      const existingIframe = document.getElementById("paytr-iframe-container")
      if (existingIframe) {
        existingIframe.innerHTML = ""
        existingIframe.appendChild(iframe)
      } else {
        // Yeni container oluştur
        const container = document.createElement("div")
        container.id = "paytr-iframe-container"
        container.style.position = "fixed"
        container.style.top = "0"
        container.style.left = "0"
        container.style.width = "100%"
        container.style.height = "100%"
        container.style.zIndex = "9999"
        container.style.backgroundColor = "rgba(0,0,0,0.5)"
        container.appendChild(iframe)
        document.body.appendChild(container)
      }

      // PayTR iframe mesajlarını dinle
      window.addEventListener("message", (e) => {
        if (e.origin.indexOf("paytr.com") !== -1) {
          if (e.data === "close_iframe") {
            const container = document.getElementById("paytr-iframe-container")
            if (container) {
              document.body.removeChild(container)
            }
          }
        }
      })
    } catch (error) {
      console.error("Ödeme hatası:", error)
      alert("Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setLoading(false)
    }
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
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <Button type="submit" className="w-full" disabled={loading || items.length === 0}>
                  {loading ? "İşleniyor..." : "Ödeme Yap"}
                </Button>
              </form>
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
                  <h3 className="font-medium mb-2">Ödeme Seçenekleri</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="border rounded p-2 w-16 h-10 flex items-center justify-center bg-white">
                      <span className="text-xs font-medium">Visa</span>
                    </div>
                    <div className="border rounded p-2 w-16 h-10 flex items-center justify-center bg-white">
                      <span className="text-xs font-medium">MasterCard</span>
                    </div>
                    <div className="border rounded p-2 w-16 h-10 flex items-center justify-center bg-white">
                      <span className="text-xs font-medium">Havale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
