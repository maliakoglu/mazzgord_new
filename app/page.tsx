"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart, User, Search, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageModal } from "@/components/image-modal"

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

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

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menüyü aç</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Mazzgord</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
              <Link href="/" className="font-medium transition-colors hover:text-primary">
                Ana Sayfa
              </Link>
              <Link href="/galeri" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Galeri
              </Link>
              <Link href="/hakkimda" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Hakkımda
              </Link>
              <Link
                href="/koleksiyonlar"
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Koleksiyonlar
              </Link>
              <Link href="/iletisim" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                İletişim
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex relative w-40 lg:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Ara..." className="w-full pl-8 rounded-full bg-muted" />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Hesap</span>
            </Button>
            <Link href="/sepet">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Sepet</span>
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

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
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Galeriyi Keşfet
                </Button>
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
                        <span className="font-semibold">10 ₺</span>
                        <Button size="sm" variant="ghost">
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
              {categories.map((category) => (
                <div key={category.name} className="relative h-40 rounded-lg overflow-hidden group">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover cursor-pointer"
                    onClick={() => setSelectedImage({ src: category.image, alt: category.name })}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-medium text-lg">{category.name}</h3>
                  </div>
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
                  src="/images/sanatci.webp"
                  alt="Sanatçı"
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => setSelectedImage({ src: "/images/sanatci.webp", alt: "Sanatçı" })}
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

        {/* Testimonials */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Müşteri Yorumları</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"Satın aldığım tablo beklentilerimi aştı."</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Müşteri {item}</p>
                      <p className="text-sm text-muted-foreground">Sanat Koleksiyoncusu</p>
                    </div>
                  </div>
                </div>
              ))}
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
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Mazzgord</h3>
              <p className="text-sm text-muted-foreground">
                Özgün sanat eserleri ile yaşam alanlarınıza değer katıyorum.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Hızlı Bağlantılar</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/galeri" className="text-muted-foreground hover:text-foreground">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimda" className="text-muted-foreground hover:text-foreground">
                    Hakkımda
                  </Link>
                </li>
                <li>
                  <Link href="/koleksiyonlar" className="text-muted-foreground hover:text-foreground">
                    Koleksiyonlar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Bilgiler</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/satis-kosullari" className="text-muted-foreground hover:text-foreground">
                    Satış Koşulları
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-muted-foreground hover:text-foreground">
                    İletişim
                  </Link>
                </li>
                <li>
                  <Link href="/kargo-teslimat" className="text-muted-foreground hover:text-foreground">
                    Kargo ve Teslimat
                  </Link>
                </li>
                <li>
                  <Link href="/iade-politikasi" className="text-muted-foreground hover:text-foreground">
                    İade Politikası
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">İletişim</h3>
              <address className="not-italic text-sm text-muted-foreground">
                <p>... Sokak No: 1, Daire: 1</p>
                <p>Pamukkale, Denizli</p>
                <p className="mt-2">info@mazzgord.com</p>
                <p>+1 (631) 316 8030</p>
              </address>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mazzgord. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Pinterest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>

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
