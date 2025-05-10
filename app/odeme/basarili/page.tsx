"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function OdemeBasariliPage() {
  const router = useRouter()
  const { clearCart } = useCart()

  useEffect(() => {
    // Ödeme başarılı olduğunda sepeti temizle
    clearCart()
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
            <Link href="/galeri">
              <Button className="w-full">Alışverişe Devam Et</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
