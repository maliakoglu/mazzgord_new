"use client"

import Link from "next/link"
import { XCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function OdemeBasarisizPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md mx-auto px-6 py-12 text-center">
          <div className="mb-6 flex justify-center">
            <XCircle className="h-24 w-24 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Ödeme Başarısız</h1>
          <p className="text-muted-foreground mb-8">
            Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyiniz veya farklı bir ödeme yöntemi kullanınız.
          </p>
          <div className="space-y-4">
            <Link href="/sepet">
              <Button className="w-full">Sepete Geri Dön</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
