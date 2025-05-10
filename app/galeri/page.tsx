"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { toast } from "@/components/ui/use-toast"

// Ürün verileri
const products = [
  {
    id: "1",
    title: "Doğa Manzarası",
    description: "Yağlı boya doğa manzarası",
    price: 10, // Fiyatı 10 TL olarak güncelledim
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    title: "Soyut Kompozisyon",
    description: "Modern soyut kompozisyon",
    price: 750,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    title: "Portre Çalışması",
    description: "Detaylı portre çalışması",
    price: 850,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "4",
    title: "Şehir Manzarası",
    description: "Gece şehir manzarası",
    price: 950,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "5",
    title: "Deniz Manzarası",
    description: "Sakin deniz manzarası",
    price: 650,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "6",
    title: "Natürmort",
    description: "Klasik natürmort çalışması",
    price: 550,
    imageUrl: "/placeholder.svg?height=300&width=400",
  },
]

export default function GaleriPage() {
  const { addToCart } = useCart()
  const [loading, setLoading] = useState<string | null>(null)

  const handleAddToCart = (product: any) => {
    setLoading(product.id)

    // Sepete eklemeden önce kısa bir gecikme ekleyelim (UI için)
    setTimeout(() => {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
      })

      toast({
        title: "Ürün sepete eklendi",
        description: `${product.title} sepetinize eklendi.`,
      })

      setLoading(null)
    }, 500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Sanat Galerisi</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
                  <p className="text-lg font-bold mt-2">{product.price.toLocaleString("tr-TR")} ₺</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" onClick={() => handleAddToCart(product)} disabled={loading === product.id}>
                    {loading === product.id ? "Ekleniyor..." : "Sepete Ekle"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
