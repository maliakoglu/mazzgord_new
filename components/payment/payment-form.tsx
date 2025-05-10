"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import type { CartItem } from "@/context/cart-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PaymentFormProps {
  cartItems: CartItem[]
  totalAmount: number
  loading: boolean
  setLoading: (loading: boolean) => void
}

export function PaymentForm({ cartItems, totalAmount, loading, setLoading }: PaymentFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  // Kullanıcı bilgileri
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  // Kart bilgileri
  const [cardData, setCardData] = useState({
    cardHolderName: "",
    cardNumber: "",
    expireMonth: "",
    expireYear: "",
    cvc: "",
  })

  // 3D Secure container'ını oluştur
  useEffect(() => {
    // Eğer container yoksa oluştur
    if (!document.getElementById("iyzico-3d-container")) {
      const container = document.createElement("div")
      container.id = "iyzico-3d-container"
      container.style.display = "none"
      document.body.appendChild(container)
    }

    return () => {
      // Component unmount olduğunda container'ı temizle
      const container = document.getElementById("iyzico-3d-container")
      if (container) {
        container.innerHTML = ""
        container.style.display = "none"
      }
    }
  }, [])

  // Kullanıcı bilgileri değişikliği
  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo((prev) => ({ ...prev, [name]: value }))
  }

  // Kart bilgileri değişikliği
  const handleCardDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  // Form gönderimi
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Kullanıcı bilgilerini kontrol et
    if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.address) {
      setError("Lütfen tüm kişisel bilgileri doldurun.")
      return
    }

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

    try {
      setLoading(true)
      setError(null)

      // Sipariş tutarını localStorage'a kaydet
      localStorage.setItem("lastOrderAmount", totalAmount.toString())

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
        console.log("ConversationId:", data.conversationId)

        // 3D Secure formunu göster
        const container = document.getElementById("iyzico-3d-container")
        if (container) {
          // İçeriği temizle ve HTML'i ayarla
          container.innerHTML = ""
          container.innerHTML = data.threeDSHtmlContent

          // Container'ı görünür yap
          container.style.position = "fixed"
          container.style.top = "0"
          container.style.left = "0"
          container.style.width = "100%"
          container.style.height = "100%"
          container.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
          container.style.zIndex = "9999"
          container.style.display = "flex"
          container.style.alignItems = "center"
          container.style.justifyContent = "center"

          // Form içeriğini bir div içine al
          const formWrapper = document.createElement("div")
          formWrapper.style.backgroundColor = "white"
          formWrapper.style.padding = "20px"
          formWrapper.style.borderRadius = "8px"
          formWrapper.style.maxWidth = "90%"
          formWrapper.style.maxHeight = "90%"
          formWrapper.style.overflow = "auto"

          // Form elementini bul ve wrapper'a taşı
          const form = container.querySelector("form")
          if (form) {
            formWrapper.appendChild(form)
            container.innerHTML = ""
            container.appendChild(formWrapper)

            // Formu otomatik submit et
            setTimeout(() => {
              try {
                form.submit()
              } catch (error) {
                console.error("Form submit hatası:", error)
                setError("3D Secure formu gönderilemedi")
                container.style.display = "none"
                setLoading(false)
              }
            }, 500)
          } else {
            console.error("3D Secure formu bulunamadı")
            setError("3D Secure formu yüklenemedi")
            container.style.display = "none"
            setLoading(false)
          }
        } else {
          console.error("iyzico-3d-container elementi bulunamadı")
          setError("3D Secure formu için gerekli element bulunamadı")
          setLoading(false)
        }
      } else {
        console.error("3D Secure formu alınamadı:", data)
        setError("Ödeme başlatılamadı: " + (data.errorMessage || "Bilinmeyen hata"))
        setLoading(false)
      }
    } catch (error: any) {
      console.error("Ödeme hatası:", error)
      setError(error.message || "Ödeme sırasında bir hata oluştu")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="personal">Kişisel Bilgiler</TabsTrigger>
          <TabsTrigger value="payment">Ödeme Bilgileri</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ad Soyad</Label>
            <Input
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleUserInfoChange}
              placeholder="Ad Soyad"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-posta Adresi</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={userInfo.email}
              onChange={handleUserInfoChange}
              placeholder="ornek@mail.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon Numarası</Label>
            <Input
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleUserInfoChange}
              placeholder="05XX XXX XX XX"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adres</Label>
            <Input
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleUserInfoChange}
              placeholder="Adres"
              required
            />
          </div>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="cardHolderName">Kart Sahibinin Adı Soyadı</Label>
            <Input
              id="cardHolderName"
              name="cardHolderName"
              value={cardData.cardHolderName}
              onChange={handleCardDataChange}
              placeholder="Kart Üzerindeki İsim"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber">Kart Numarası</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              value={cardData.cardNumber}
              onChange={handleCardDataChange}
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
                onChange={handleCardDataChange}
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
                onChange={handleCardDataChange}
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
                onChange={handleCardDataChange}
                placeholder="XXX"
                maxLength={3}
                required
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm text-yellow-800">
        <p className="font-medium">Test Kartı Bilgileri:</p>
        <p>Kart No: 5528790000000008</p>
        <p>Son Kullanma: 12/30</p>
        <p>CVC: 123</p>
        <p>3D Secure Şifre: 123456</p>
        <p className="mt-2 font-medium">Üye İşyeri Numarası: 100947379</p>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "İşleniyor..." : `${totalAmount.toLocaleString("tr-TR")} ₺ Öde`}
      </Button>
    </form>
  )
}
