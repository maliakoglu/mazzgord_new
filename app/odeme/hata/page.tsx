"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { XCircle } from "lucide-react"
import { Header } from "@/components/header" // Removed .tsx extension
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function OdemeHataPage() {
  const searchParams = useSearchParams()
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    // URL'den hata mesajını al
    const error = searchParams.get("error")
    setErrorMessage(error || "Ödeme işlemi sırasında bir hata oluştu")
  }, [searchParams])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md mx-auto px-6 py-12 text-center">
          <div className="mb-6 flex justify-center">
            <XCircle className="h-24 w-24 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Ödeme Başarısız</h1>
          <p className="text-muted-foreground mb-8">{errorMessage}</p>
          <div className="space-y-4">
            <Link href="/sepet">
              <Button className="w-full mb-2">Sepete Geri Dön</Button>
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
