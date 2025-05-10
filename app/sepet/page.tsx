import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function SepetPage() {
  // Örnek sepet verileri
  const sepetUrunleri = [
    {
      id: 1,
      isim: "Doğa Manzarası",
      teknik: "Tuval üzerine akrilik",
      boyut: "50x70cm",
      fiyat: 2500,
      adet: 1,
      image: "/images/tablolar/doga.webp",
    },
    {
      id: 3,
      isim: "Deniz Manzarası",
      teknik: "Tuval üzerine akrilik",
      boyut: "70x100cm",
      fiyat: 4500,
      adet: 1,
      image: "/images/tablolar/deniz.webp",
    },
    {
      id: 5,
      isim: "Tepeler",
      teknik: "Tuval üzerine yağlı boya",
      boyut: "60x90cm",
      fiyat: 4200,
      adet: 1,
      image: "/images/tablolar/tepe.webp",
    },
  ]

  // Toplam fiyat hesaplama
  const toplam = sepetUrunleri.reduce((acc, urun) => acc + urun.fiyat * urun.adet, 0)
  const kargo = 150
  const genelToplam = toplam + kargo

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Alışveriş Sepeti</h1>
          <p className="text-muted-foreground mb-8">
            Sepetinizdeki ürünleri inceleyebilir ve satın alma işlemine devam edebilirsiniz.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {sepetUrunleri.length > 0 ? (
                <div className="space-y-6">
                  {sepetUrunleri.map((urun) => (
                    <div key={urun.id} className="flex flex-col sm:flex-row gap-4 border-b pb-6">
                      <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={urun.image || "/placeholder.svg"} alt={urun.isim} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-medium text-lg">{urun.isim}</h3>
                            <p className="text-sm text-muted-foreground">
                              {urun.teknik}, {urun.boyut}
                            </p>
                          </div>
                          <div className="mt-2 sm:mt-0 text-right">
                            <p className="font-semibold">{urun.fiyat.toLocaleString("tr-TR")} ₺</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border rounded-md">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center flex items-center justify-center">{urun.adet}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Ürünü kaldır</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-xl font-semibold mb-2">Sepetiniz Boş</h2>
                  <p className="text-muted-foreground mb-6">Sepetinizde henüz ürün bulunmamaktadır.</p>
                  <Link href="/galeri">
                    <Button>Alışverişe Başla</Button>
                  </Link>
                </div>
              )}
            </div>

            <div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ara Toplam</span>
                    <span>{toplam.toLocaleString("tr-TR")} ₺</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kargo</span>
                    <span>{kargo.toLocaleString("tr-TR")} ₺</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Genel Toplam</span>
                    <span>{genelToplam.toLocaleString("tr-TR")} ₺</span>
                  </div>
                </div>

                <Button className="w-full mt-6">Ödemeye Geç</Button>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">İndirim Kuponu</h3>
                  <div className="flex gap-2">
                    <Input placeholder="Kupon kodu" />
                    <Button variant="outline">Uygula</Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Ödeme Seçenekleri</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="border rounded p-2 w-16 h-10 flex items-center justify-center bg-white">
                    <span className="text-xs font-medium">Visa</span>
                  </div>
                  <div className="border rounded p-2 w-16 h-10 flex items-center justify-center bg-white">
                    <span className="text-xs font-medium">MasterCard</span>
                  </div>
                  <div className="border rounded p-2 w-16 h-10 flex items-center justify-center bg-white">
                    <span className="text-xs font-medium">Havale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
