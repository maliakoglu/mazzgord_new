import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function KargoTeslimatPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Kargo ve Teslimat</h1>
          <p className="text-muted-foreground mb-8">
            Mazzgord.com üzerinden yapılan siparişlerin kargo ve teslimat süreçleri hakkında bilgiler
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Teslimat Süresi</h2>
              <p className="mb-4">
                Mazzgord.com'dan satın aldığınız ürünler, ödemenizin onaylanmasının ardından hazırlanmaya başlanır:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Kanvas baskılar: Sipariş onayından sonra 2-4 iş günü içinde hazırlanıp kargoya verilir.</li>
                <li>
                  Orijinal tablolar: Stokta mevcut ise 1 iş günü içinde, değilse en geç 3 iş günü içinde kargoya
                  verilir.
                </li>
                <li>Özel sipariş ürünler: Ürün detayında belirtilen süre içerisinde hazırlanıp kargoya verilir.</li>
              </ul>
              <p>
                Kargoya verilen ürünler, kargo firmasının yoğunluğuna bağlı olarak genellikle 1-3 iş günü içerisinde
                adresinize ulaştırılır. Teslimat süresi, bulunduğunuz bölgeye göre değişiklik gösterebilir.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Kargo Firmaları</h2>
              <p className="mb-4">
                Mazzgord.com olarak, ürünlerinizin güvenli ve hızlı bir şekilde elinize ulaşması için anlaşmalı
                olduğumuz kargo firmaları ile çalışmaktayız. Siparişleriniz, tercih ettiğimiz kargo firmaları
                aracılığıyla adresinize teslim edilir.
              </p>
              <p>
                Kargo firması seçimi, gönderimin yapılacağı bölge ve ürün özelliklerine göre tarafımızca belirlenir.
                Özel durumlarda, müşteri talebi doğrultusunda farklı kargo firmaları ile de çalışılabilir.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Kargo Ücreti</h2>
              <p className="mb-4">
                Mazzgord.com'da 1000 TL ve üzeri siparişlerde kargo ücretsizdir. 1000 TL altındaki siparişlerde ise
                kargo ücreti, ürünün boyutuna ve ağırlığına göre değişiklik gösterebilir ve sipariş esnasında sepet
                sayfasında belirtilir.
              </p>
              <p>
                Özel boyutlu ve ağır ürünlerde ek kargo ücreti alınabilir. Bu durumda, sipariş onayından önce tarafınıza
                bilgilendirme yapılacaktır.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Teslimat Adresi</h2>
              <p className="mb-4">
                Siparişiniz, sipariş formunda belirttiğiniz teslimat adresine gönderilir. Adres bilgilerinizin doğru ve
                eksiksiz olduğundan emin olunuz. Yanlış veya eksik adres bilgisi nedeniyle yaşanabilecek gecikmelerden
                Mazzgord.com sorumlu değildir.
              </p>
              <p>
                Sipariş verdikten sonra teslimat adresinizi değiştirmek isterseniz, siparişiniz kargoya verilmeden önce
                müşteri hizmetlerimizle iletişime geçmeniz gerekmektedir.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Teslimat Kontrolü</h2>
              <p className="mb-4">
                Ürününüz size ulaştığında, kargo görevlisi yanınızdayken paketi kontrol etmenizi öneririz. Pakette
                herhangi bir hasar veya sorun tespit ederseniz, kargo görevlisine tutanak tutturarak ürünü teslim
                almayınız ve durumu hemen müşteri hizmetlerimize bildiriniz.
              </p>
              <p>
                Paketi teslim aldıktan sonra, ürünü açtığınızda herhangi bir hasar veya sorun tespit ederseniz, 24 saat
                içerisinde müşteri hizmetlerimizle iletişime geçmeniz gerekmektedir. Ürün fotoğraflarını çekerek
                info@mazzgord.com adresine göndermeniz, sürecin hızlanmasına yardımcı olacaktır.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Kargo Takibi</h2>
              <p className="mb-4">
                Siparişiniz kargoya verildiğinde, size e-posta yoluyla bilgilendirme yapılır ve kargo takip numarası
                paylaşılır. Bu numara ile kargo firmasının web sitesi üzerinden gönderinizi takip edebilirsiniz.
              </p>
              <p>
                Kargo takibi ile ilgili herhangi bir sorun yaşarsanız, müşteri hizmetlerimizle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
