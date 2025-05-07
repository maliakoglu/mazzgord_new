"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { CartItem } from "@/context/cart-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface PayTRFormProps {
  userInfo: {
    email: string
    name: string
    phone: string
    address: string
  }
  cartItems: CartItem[]
  totalAmount: number
  loading: boolean
  setLoading: (loading: boolean) => void
}

export function PayTRForm({ userInfo, cartItems, totalAmount, loading, setLoading }: PayTRFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Kişisel bilgileri kontrol et
    if (!userInfo.email || !userInfo.name || !userInfo.phone || !userInfo.address) {
      setError("Lütfen tüm kişisel bilgileri doldurun.")
      return
    }

    try {
      setLoading(true)
      setError(null)

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
          cartItems,
          userEmail: userInfo.email,
          totalAmount,
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

      // PayTR iframe container'ını al
      const container = document.getElementById("paytr-iframe-container")
      if (container) {
        // Mevcut içeriği temizle
        container.innerHTML = ""
        // container'ı görünür yap
        container.classList.remove("hidden")
        container.classList.add("fixed", "inset-0", "z-50", "bg-black/50", "flex", "items-center", "justify-center")
        // iframe'i ekle
        container.appendChild(iframe)
      }

      // PayTR iframe mesajlarını dinle
      window.addEventListener("message", (e) => {
        if (e.origin.indexOf("paytr.com") !== -1) {
          if (e.data === "close_iframe") {
            const container = document.getElementById("paytr-iframe-container")
            if (container) {
              container.classList.add("hidden")
              container.classList.remove(
                "fixed",
                "inset-0",
                "z-50",
                "bg-black/50",
                "flex",
                "items-center",
                "justify-center",
              )
              container.innerHTML = ""
            }
          }
        }
      })
    } catch (error: any) {
      console.error("Ödeme hatası:", error)
      setError(error.message || "Ödeme sırasında bir hata oluştu")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <p className="text-muted-foreground">
        PayTR ile ödeme yapmak için "Ödeme Yap" butonuna tıklayın. Güvenli ödeme sayfasına yönlendirileceksiniz.
      </p>

      <Button type="button" onClick={handleSubmit} className="w-full" disabled={loading}>
        {loading ? "İşleniyor..." : "Ödeme Yap"}
      </Button>
    </div>
  )
}
