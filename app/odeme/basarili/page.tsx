"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Header } from "@/components/header" // Removed .tsx extension
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function OdemeBasariliPage() {
  const router = useRouter()
  const { clearCart } = useCart()

  useEffect(() => {
    // Ödeme başarılı olduğunda sepeti temizle
    clearCart()

    // Sipariş bilgilerini localStorage'a kaydet (basit bir sipariş takibi için)
    const orderDate = new Date().toISOString()
    const orderId = `ORD-${Date.now()}`

    // Mevcut siparişleri al
    const existingOrders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders") || "[]") : []

    // Yeni siparişi ekle
    const newOrder = {
      id: orderId,
      date: orderDate,
      status: "Ödeme Alındı",
      amount: localStorage.getItem("lastOrderAmount") || "0",
    }

    existingOrders.push(newOrder)

    // Siparişleri kaydet
    localStorage.setItem("orders", JSON.stringify(existingOrders))
  }, [clearCart])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md mx-auto px-6 py-12 text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Ödeme Başarılı</h1>
          <p className="text-muted-foreground mb-8">
            Siparişiniz başarıyla alındı. Siparişinizle ilgili detaylar e-posta adresinize gönderilecektir.
          </p>
          <div className="space-y-4">
            <Link href="/siparislerim">
              <Button className="w-full mb-2">Siparişlerimi Görüntüle</Button>
            </Link>
            <Link href="/galeri">
              <Button variant="outline" className="w-full">
                Alışverişe Devam Et
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
