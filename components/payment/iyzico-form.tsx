"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import type { CartItem } from "@/context/cart-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface IyzicoFormProps {
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

export function IyzicoForm({ userInfo, cartItems, totalAmount, loading, setLoading }: IyzicoFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [cardData, setCardData] = useState({
    cardHolderName: "",
    cardNumber: "",
    expireMonth: "",
    expireYear: "",
    cvc: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Kart numarası için format kontrolü
    if (name === "cardNumber") {
      // Sadece sayıları kabul et ve maksimum 16 karakter
      const formattedValue = value.replace(/\D/g, "").slice(0, 16)
      setCardData((prev) => ({ ...prev, [name]: formattedValue }))
    }
    // Son kullanma ayı için format kontrolü
    else if (name === "expireMonth") {
      // Sadece sayıları kabul et ve 1-12 arasında
      const formattedValue = value.replace(/\D/g, "").slice(0, 2)
      const numberValue = Number.parseInt(formattedValue, 10)
      if (!isNaN(numberValue) && numberValue >= 1 && numberValue <= 12) {
        setCardData((prev) => ({ ...prev, [name]: formattedValue }))
      } else if (formattedValue === "" || formattedValue === "0") {
        setCardData((prev) => ({ ...prev, [name]: formattedValue }))
      }
    }
    // Son kullanma yılı için format kontrolü
    else if (name === "expireYear") {
      // Sadece sayıları kabul et ve maksimum 2 karakter
      const formattedValue = value.replace(/\D/g, "").slice(0, 2)
      setCardData((prev) => ({ ...prev, [name]: formattedValue }))
    }
    // CVC için format kontrolü
    else if (name === "cvc") {
      // Sadece sayıları kabul et ve maksimum 3 karakter
      const formattedValue = value.replace(/\D/g, "").slice(0, 3)
      setCardData((prev) => ({ ...prev, [name]: formattedValue }))
    } else {
      setCardData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Kart bilgilerini kontrol et
    if (
      !cardData.cardHolderName ||
      !cardData.cardNumber ||
      !cardData.expireMonth ||
      !cardData.expireYear ||
      !cardData.cvc
    ) {
      setError("Lütfen tüm kart bilgilerini doldurun.")
      return
    }

    // Kişisel bilgileri kontrol et
    if (!userInfo.email || !userInfo.name || !userInfo.phone || !userInfo.address) {
      setError("Lütfen tüm kişisel bilgileri doldurun.")
      return
    }

    try {
      setLoading(true)
      setError(null)

      console.log("Ödeme başlatılıyor...")

      // iyzico ödeme başlatma isteği
      const response = await fetch("/api/iyzico/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          userInfo: {
            ...userInfo,
            paymentCard: {
              cardHolderName: cardData.cardHolderName,
              cardNumber: cardData.cardNumber,
              expireMonth: cardData.expireMonth,
              expireYear: cardData.expireYear,
              cvc: cardData.cvc,
              registerCard: 0,
            },
          },
          totalAmount,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error("Ödeme API hatası:", data)
        throw new Error(data.error || "Ödeme işlemi başlatılamadı")
      }

      console.log("Ödeme API yanıtı:", data)

      // 3D Secure formu için
      if (data.status === "success" && data.threeDSHtmlContent) {
        console.log("3D Secure formu gösteriliyor...")
        // 3D Secure HTML içeriğini göster
        const container = document.createElement("div")
        container.innerHTML = data.threeDSHtmlContent
        document.body.appendChild(container)

        // İlk form elementini bul ve otomatik submit et
        const form = container.querySelector("form")
        if (form) {
          console.log("3D Secure formu submit ediliyor...")
          form.submit()
        } else {
          console.error("3D Secure formu bulunamadı")
          setError("3D Secure formu yüklenemedi")
        }
      } else {
        console.error("3D Secure formu alınamadı:", data)
        setError("Ödeme başlatılamadı: " + (data.errorMessage || "Bilinmeyen hata"))
      }
    } catch (error: any) {
      console.error("Ödeme hatası:", error)
      setError(error.message || "Ödeme sırasında bir hata oluştu")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="cardHolderName">Kart Sahibinin Adı Soyadı</Label>
        <Input
          id="cardHolderName"
          name="cardHolderName"
          value={cardData.cardHolderName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardNumber">Kart Numarası</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          value={cardData.cardNumber}
          onChange={handleInputChange}
          placeholder="XXXX XXXX XXXX XXXX"
          maxLength={16}
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expireMonth">Son Kullanma Ay</Label>
          <Input
            id="expireMonth"
            name="expireMonth"
            value={cardData.expireMonth}
            onChange={handleInputChange}
            placeholder="MM"
            maxLength={2}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expireYear">Son Kullanma Yıl</Label>
          <Input
            id="expireYear"
            name="expireYear"
            value={cardData.expireYear}
            onChange={handleInputChange}
            placeholder="YY"
            maxLength={2}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cvc">CVC</Label>
          <Input
            id="cvc"
            name="cvc"
            value={cardData.cvc}
            onChange={handleInputChange}
            placeholder="XXX"
            maxLength={3}
            required
          />
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm text-yellow-800">
        <p className="font-medium">Test Kartı Bilgileri:</p>
        <p>Kart No: 5528790000000008</p>
        <p>Son Kullanma: 12/30</p>
        <p>CVC: 123</p>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "İşleniyor..." : "Ödeme Yap"}
      </Button>
    </form>
  )
}
