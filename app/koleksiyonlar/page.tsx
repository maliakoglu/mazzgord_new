"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ImageModal } from "@/components/image-modal"

export default function KoleksiyonlarPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  // Koleksiyon verilerini güncelle
  const koleksiyonlar = [
    {
      id: 1,
      isim: "Doğa Serisi",
      aciklama:
        "Doğanın muhteşem renklerinden ve dokularından ilham alan bu koleksiyon, izleyiciyi doğal dünyanın güzellikleri üzerine düşünmeye davet ediyor.",
      resimSayisi: 8,
      image: "/images/koleksiyonlar/doga-serisi.jpg",
      ornekler: [
        "/images/koleksiyonlar/doga-serisi.jpg",
        "/images/tablolar/tepe.webp",
        "/images/tablolar/dag.webp",
        "/images/tablolar/gokyuzu.webp",
      ],
    },
    {
      id: 2,
      isim: "Soyut Duygular",
      aciklama:
        "İnsan duygularını soyut formlar ve canlı renklerle ifade eden bu seri, izleyicinin kendi duygusal deneyimlerini keşfetmesini sağlıyor.",
      resimSayisi: 12,
      image: "/images/koleksiyonlar/soyut-duygular.jpg",
      ornekler: [
        "/images/koleksiyonlar/soyut-duygular1.jpg",
        "/images/koleksiyonlar/soyut-duygular2.jpg",
        "/images/koleksiyonlar/soyut-duygular3.jpg",
        "/images/koleksiyonlar/soyut-duygular.jpg",
      ],
    },
    {
      id: 3,
      isim: "Şehir Manzaraları",
      aciklama:
        "Modern şehir yaşamının dinamizmini ve karmaşasını yansıtan bu koleksiyon, kentsel mekanların ritmini ve enerjisini tuval üzerine taşıyor.",
      resimSayisi: 6,
      image: "/images/koleksiyonlar/sehir-manzaralari.jpg",
      ornekler: [
        "/images/koleksiyonlar/şehir-manzaralari1.jpg",
        "/images/koleksiyonlar/şehir-manzaralari2.jpg",
        "/images/koleksiyonlar/şehir-manzaralari3.jpg",
        "/images/koleksiyonlar/sehir-manzaralari.jpg",
      ],
    },
    {
      id: 4,
      isim: "Minimalist Kompozisyonlar",
      aciklama:
        "Sadeliğin gücünü vurgulayan bu seri, minimal formlar ve renk paletleri kullanarak derinlikli anlatımlar sunuyor.",
      resimSayisi: 9,
      image: "/images/koleksiyonlar/minimalist-kompozisyonlar.jpg",
      ornekler: [
        "/images/koleksiyonlar/minimalist-kompozisyonlar1.jpg",
        "/images/koleksiyonlar/minimalist-kompozisyonlar2.jpg",
        "/images/koleksiyonlar/minimalist-kompozisyonlar3.jpg",
        "/images/koleksiyonlar/minimalist-kompozisyonlar4.jpg",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Koleksiyonlar</h1>
          <p className="text-muted-foreground mb-8">
            Farklı temalar ve tekniklerle oluşturduğum özel koleksiyonlarımı keşfedin.
          </p>

          <div className="space-y-12">
            {koleksiyonlar.map((koleksiyon) => (
              <div
                key={koleksiyon.id}
                className="group"
                id={
                  koleksiyon.id === 1
                    ? "doga-serisi"
                    : koleksiyon.id === 2
                      ? "soyut-duygular"
                      : koleksiyon.id === 3
                        ? "sehir-manzaralari"
                        : "minimalist-kompozisyonlar"
                }
              >
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={koleksiyon.image || "/placeholder.svg"}
                      alt={koleksiyon.isim}
                      fill
                      className="object-cover cursor-pointer"
                      onClick={() => setSelectedImage({ src: koleksiyon.image, alt: koleksiyon.isim })}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{koleksiyon.isim}</h2>
                    <p className="text-muted-foreground mb-4">{koleksiyon.aciklama}</p>
                    <p className="text-sm mb-4">{koleksiyon.resimSayisi} eser</p>
                    <Button>Koleksiyonu Görüntüle</Button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {koleksiyon.ornekler.map((ornek, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={ornek || "/placeholder.svg"}
                        alt={`${koleksiyon.isim} örnek ${index + 1}`}
                        fill
                        className="object-cover cursor-pointer"
                        onClick={() => setSelectedImage({ src: ornek, alt: `${koleksiyon.isim} örnek ${index + 1}` })}
                      />
                    </div>
                  ))}
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
