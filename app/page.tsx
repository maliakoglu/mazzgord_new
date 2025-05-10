"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageModal } from "@/components/image-modal"
import { useCart } from "@/context/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const featuredItems = [
    {
      id: 1,
      name: "Doğa Manzarası",
      technique: "Tuval üzerine akrilik",
      size: "50x70cm",
      price: 2500,
      image: "/images/tablolar/doga.webp",
    },
    {
      id: 2,
      name: "Tarihi Yerler",
      technique: "Tuval üzerine yağlı boya",
      size: "60x80cm",
      price: 3200,
      image: "/images/tablolar/tarihi-yerler.webp",
    },
    {
      id: 3,
      name: "Deniz Manzarası",
      technique: "Tuval üzerine akrilik",
      size: "70x100cm",
      price: 4500,
      image: "/images/tablolar/deniz.webp",
    },
    {
      id: 4,
      name: "Dağ Manzarası",
      technique: "Tuval üzerine karışık teknik",
      size: "80x80cm",
      price: 3800,
      image: "/images/tablolar/dag.webp",
    },
    {
      id: 5,
      name: "Tepeler",
      technique: "Tuval üzerine yağlı boya",
      size: "60x90cm",
      price: 4200,
      image: "/images/tablolar/tepe.webp",
    },
    {
      id: 6,
      name: "Gökyüzü",
      technique: "Tuval üzerine akrilik",
      size: "50x60cm",
      price: 2800,
      image: "/images/tablolar/gokyuzu.webp",
    },
  ]

  // Koleksiyon kategorilerini güncelle
  const categories = [
    { name: "Soyut", image: "/images/kategoriler/soyut.webp" },
    { name: "Manzara", image: "/images/kategoriler/manzara.webp" },
    { name: "Portre", image: "/images/kategoriler/portre.webp" },
    { name: "Modern", image: "/images/kategoriler/modern.webp" },
    { name: "İzlenimci", image: "/images/kategoriler/izlenimci.webp" },
    { name: "Natürmort", image: "/images/kategoriler/naturmort.webp" },
    { name: "Figüratif", image: "/images/kategoriler/figuratif.webp" },
    { name: "Karışık Teknik", image: "/images/kategoriler/karisik-teknik.webp" },
  ]

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      technique: item.technique,
      size: item.size,
      price: item.price,
      image: item.image,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[70vh] overflow-hidden">
            <Image
              src="/images/hero.webp"
              alt="Mazzgord Sanat Galerisi"
              fill
              priority
              className="object-cover cursor-pointer"
              onClick={() => setSelectedImage({ src: "/images/hero.webp", alt: "Mazzgord Sanat Galerisi" })}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-8 container mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Mazzgord Sanat Galerisi</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-md mb-6">
                Özgün ve etkileyici tablolarımla sanatın büyüleyici dünyasına hoş geldiniz. Her bir eser, duyguları ve
                hikayeleri tuval üzerinde hayata geçiriyor.
              </p>
              <Link href="/galeri">
                <div
                  className="relative group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse"></div>
                  <button
                    className={`relative px-8 py-4 bg-black text-white rounded-lg leading-none flex items-center divide-x divide-gray-600 ${
                      isHovered ? "scale-105" : ""
                    } transition-transform duration-300`}
                  >
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${isHovered ? "animate-bounce" : ""} transition-all duration-300`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="pr-6 text-lg font-semibold">Galeriyi Keşfet</span>
                    </span>
                    <span className="pl-6 text-yellow-400 group-hover:text-yellow-300 transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${isHovered ? "translate-x-2" : ""} transition-transform duration-300`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Öne Çıkan Eserler</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" id="prev-button" aria-label="Önceki slayt">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" id="next-button" aria-label="Sonraki slayt">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Scrollable Gallery */}
            <div className="relative">
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x scrollbar-hide">
                {featuredItems.map((item) => (
                  <div key={item.id} className="min-w-[280px] md:min-w-[320px] snap-start">
                    <div className="group relative h-[320px] w-full overflow-hidden rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedImage({ src: item.image, alt: item.name })}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-white/80">{item.technique}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.technique}, {item.size}
                      </p>
                      <div className="mt-1 flex justify-between items-center">
                        <span className="font-semibold">{item.price.toLocaleString("tr-TR")} ₺</span>
                        <Button size="sm" onClick={() => handleAddToCart(item)}>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Sepete Ekle
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Kategorilere Göre Keşfet</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "Soyut",
                  image: "/images/koleksiyonlar/soyut-duygular.jpg",
                  link: "/koleksiyonlar#soyut-duygular",
                },
                { name: "Manzara", image: "/images/koleksiyonlar/doga-serisi.jpg", link: "/koleksiyonlar#doga-serisi" },
                {
                  name: "Şehir",
                  image: "/images/koleksiyonlar/sehir-manzaralari.jpg",
                  link: "/koleksiyonlar#sehir-manzaralari",
                },
                {
                  name: "Minimalist",
                  image: "/images/koleksiyonlar/minimalist-kompozisyonlar.jpg",
                  link: "/koleksiyonlar#minimalist-kompozisyonlar",
                },
                {
                  name: "Renkli Soyut",
                  image: "/images/koleksiyonlar/soyut-duygular1.jpg",
                  link: "/koleksiyonlar#soyut-duygular",
                },
                {
                  name: "Kelebek",
                  image: "/images/koleksiyonlar/soyut-duygular3.jpg",
                  link: "/koleksiyonlar#soyut-duygular",
                },
                {
                  name: "İstanbul",
                  image: "/images/koleksiyonlar/şehir-manzaralari3.jpg",
                  link: "/koleksiyonlar#sehir-manzaralari",
                },
                {
                  name: "Liman Kenti",
                  image: "/images/koleksiyonlar/şehir-manzaralari2.jpg",
                  link: "/koleksiyonlar#sehir-manzaralari",
                },
              ].map((category) => (
                <div key={category.name} className="relative h-40 rounded-lg overflow-hidden group">
                  <Link href={category.link}>
                    <div className="relative w-full h-full">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white font-medium text-lg">{category.name}</h3>
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => setSelectedImage({ src: category.image, alt: category.name })}
                    className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Tam ekran görüntüle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Artist */}
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-6inyRDmRv1XeBIEf3AEWqxLJL3YtgG.jpeg"
                  alt="Mazzgord Logo"
                  fill
                  className="object-contain bg-black"
                  onClick={() =>
                    setSelectedImage({
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-6inyRDmRv1XeBIEf3AEWqxLJL3YtgG.jpeg",
                      alt: "Mazzgord Logo",
                    })
                  }
                />
              </div>
              <div>
                <span className="text-sm font-medium text-primary">Sanatçı Hakkında</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Mazzgord</h2>
                <p className="text-muted-foreground mb-6">
                  Mazzgord olarak, sanat yolculuğuma lise yıllarımda başladım. Eserlerimde doğanın güzelliklerini ve
                  duygularmı tuvalime yansıtmaya çalışıyorum. Her bir tablom, kişisel hikayelerden ve deneyimlerden
                  ilham alarak ortaya çıkıyor. Tablolarımda genellikle canlı renkler ve dinamik fırça darbeleri
                  kullanarak izleyicilere duygusal bir deneyim sunmayı amaçlıyorum.
                </p>
                <Link href="/hakkimda">
                  <Button variant="outline">Daha Fazla Bilgi</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Satın Alma Süreci</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Tabloyu Seçin</h3>
                <p className="text-muted-foreground">Galeriden beğendiğiniz tabloyu seçin ve sepete ekleyin.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">2. Ödeme Yapın</h3>
                <p className="text-muted-foreground">
                  Güvenli ödeme sistemimiz ile kredi kartı, havale veya EFT ile ödemenizi gerçekleştirin.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <path d="M12 20h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">3. Tablonuzu Alın</h3>
                <p className="text-muted-foreground">
                  Özel olarak paketlenen tablonuz 3-5 iş günü içinde adresinize teslim edilir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-8">
            <div className="bg-primary/5 rounded-xl p-6 md:p-10">
              <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Haberdar Olun</h2>
                <p className="text-muted-foreground mb-6">
                  Yeni tablolar, özel teklifler ve etkinliklerden haberdar olmak için bültenimize abone olun.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="E-posta adresiniz" className="rounded-full" />
                  <Button>Abone Ol</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
