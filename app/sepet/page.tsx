"use client"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { CartItemComponent } from "@/components/cart-item"
import { PaymentLogos } from "@/components/payment-logos"

export default function SepetPage() {
  const { items, totalItems, totalPrice, clearCart } = useCart()

  // Kargo ücreti hesaplama
  const kargo = totalItems > 0 ? 150 : 0
  const genelToplam = totalPrice + kargo

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
              {items.length > 0 ? (
                <div className="space-y-6">
                  {items.map((item) => (
                    <CartItemComponent key={item.id} item={item} />
                  ))}

                  <div className="flex justify-end mt-4">
                    <Button variant="outline" className="text-destructive" onClick={clearCart}>
                      Sepeti Temizle
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg">
                  <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
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
                    <span>{totalPrice.toLocaleString("tr-TR")} ₺</span>
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

                <Link href="/odeme">
                  <Button className="w-full mt-6" disabled={items.length === 0}>
                    Ödemeye Geç
                  </Button>
                </Link>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">İndirim Kuponu</h3>
                  <div className="flex gap-2">
                    <Input placeholder="Kupon kodu" />
                    <Button variant="outline">Uygula</Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-4">Ödeme Seçenekleri</h3>
                <PaymentLogos />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
