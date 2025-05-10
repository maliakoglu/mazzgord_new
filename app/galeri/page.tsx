"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageModal } from "@/components/image-modal"

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  // Örnek tablo verileri
  const tablolar = [
    {
      id: 1,
      isim: "Doğa Manzarası",
      teknik: "Tuval üzerine akrilik",
      boyut: "50x70cm",
      fiyat: 2500,
      image: "/images/tablolar/doga.webp",
    },
    {
      id: 2,
      isim: "Tarihi Yerler",
      teknik: "Tuval üzerine yağlı boya",
      boyut: "60x80cm",
      fiyat: 3200,
      image: "/images/tablolar/tarihi-yerler.webp",
    },
    {
      id: 3,
      isim: "Deniz Manzarası",
      teknik: "Tuval üzerine akrilik",
      boyut: "70x100cm",
      fiyat: 4500,
      image: "/images/tablolar/deniz.webp",
    },
    {
      id: 4,
      isim: "Dağ Manzarası",
      teknik: "Tuval üzerine karışık teknik",
      boyut: "80x80cm",
      fiyat: 3800,
      image: "/images/tablolar/dag.webp",
    },
    {
      id: 5,
      isim: "Tepeler",
      teknik: "Tuval üzerine yağlı boya",
      boyut: "60x90cm",
      fiyat: 4200,
      image: "/images/tablolar/tepe.webp",
    },
    {
      id: 6,
      isim: "Gökyüzü",
      teknik: "Tuval üzerine akrilik",
      boyut: "50x60cm",
      fiyat: 2800,
      image: "/images/tablolar/gokyuzu.webp",
    },
    {
      id: 7,
      isim: "Sonsuzluk",
      teknik: "Tuval üzerine karışık teknik",
      boyut: "100x120cm",
      fiyat: 6500,
      image: "/images/tablolar/doga.webp",
    },
    {
      id: 8,
      isim: "Gün Batımı",
      teknik: "Tuval üzerine yağlı boya",
      boyut: "40x60cm",
      fiyat: 2200,
      image: "/images/tablolar/gokyuzu.webp",
    },
    {
      id: 9,
      isim: "Geometrik Soyut",
      teknik: "Tuval üzerine akrilik",
      boyut: "70x70cm",
      fiyat: 3500,
      image: "/images/tablolar/tarihi-yerler.webp",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Galeri</h1>
          <p className="text-muted-foreground mb-8">
            Tüm eserlerimi keşfedin ve yaşam alanlarınız için size en uygun tabloyu seçin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tablolar.map((tablo) => (
              <div key={tablo.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <Image
                    src={tablo.image || "/placeholder.svg"}
                    alt={tablo.isim}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage({ src: tablo.image, alt: tablo.isim })}
                  />
                </div>
                <h3 className="font-medium text-lg">{tablo.isim}</h3>
                <p className="text-sm text-muted-foreground">
                  {tablo.teknik}, {tablo.boyut}
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-semibold">{tablo.fiyat.toLocaleString("tr-TR")} ₺</span>
                  <Button size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Sepete Ekle
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Tam ekran görüntüleme modalı */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </div>
  )
}
