import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function IadePolitikasiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">İade Politikası</h1>
          <p className="text-muted-foreground mb-8">
            Mazzgord.com üzerinden satın alınan ürünlerin iade ve değişim koşulları hakkında bilgiler
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">İade Koşulları</h2>
              <p className="mb-4">
                Mazzgord.com olarak müşteri memnuniyetini ön planda tutmaktayız. Ancak sanat eserleri ve özel üretim
                ürünler olması sebebiyle iade politikamız aşağıdaki şekilde belirlenmiştir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Orijinal Tablolar:</strong> Satın aldığınız orijinal tablolar, teslim tarihinden itibaren 3
                  gün içerisinde, ürünün orijinal ambalajında ve hiçbir hasar görmemiş olması şartıyla iade edilebilir.
                </li>
                <li>
                  <strong>Kanvas Baskılar:</strong> Özel olarak sizin için üretilen kanvas baskılar, kişiselleştirilmiş
                  ürün kapsamında değerlendirildiğinden, üründe herhangi bir üretim hatası olmadığı sürece iade kabul
                  edilmemektedir.
                </li>
                <li>
                  <strong>Hasarlı Ürünler:</strong> Teslim aldığınız üründe herhangi bir hasar veya üretim hatası tespit
                  ederseniz, ürünü teslim aldığınız tarihten itibaren 24 saat içerisinde müşteri hizmetlerimize
                  bildirmeniz gerekmektedir. Bu durumda ürün değişimi veya iadesi yapılacaktır.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">İade Süreci</h2>
              <p className="mb-4">İade talebinizi iletmek için aşağıdaki adımları izleyebilirsiniz:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  İade talebinizi info@mazzgord.com adresine e-posta göndererek veya iletişim formumuz üzerinden
                  iletebilirsiniz.
                </li>
                <li>
                  E-postanızda sipariş numaranızı, iade gerekçenizi ve varsa ürün ile ilgili fotoğrafları paylaşmanız,
                  sürecin hızlanmasına yardımcı olacaktır.
                </li>
                <li>
                  İade talebiniz onaylandıktan sonra, ürünü orijinal ambalajında ve tüm aksesuarlarıyla birlikte
                  tarafımıza göndermeniz gerekmektedir.
                </li>
                <li>
                  İade edilen ürün tarafımıza ulaştıktan ve kontrolleri yapıldıktan sonra, ödeme iadesi en geç 14 iş
                  günü içerisinde gerçekleştirilecektir.
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">İade Kargo Ücreti</h2>
              <p className="mb-4">
                Üründe herhangi bir üretim hatası veya hasar olması durumunda, iade kargo ücreti tarafımızca
                karşılanacaktır. Bu durumda, müşteri hizmetlerimizle iletişime geçerek anlaşmalı kargo firması bilgisini
                almanız gerekmektedir.
              </p>
              <p>Müşteri kaynaklı iade taleplerinde ise kargo ücreti müşteri tarafından karşılanacaktır.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Değişim</h2>
              <p className="mb-4">
                Satın aldığınız ürünü farklı bir ürünle değiştirmek isterseniz, teslim tarihinden itibaren 3 gün
                içerisinde müşteri hizmetlerimizle iletişime geçmeniz gerekmektedir. Değişim talepleriniz, stok durumuna
                göre değerlendirilecektir.
              </p>
              <p>
                Değişim işlemlerinde, ürünlerin fiyat farkları hesaplanarak, gerekli ödeme işlemleri
                gerçekleştirilecektir.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">İptal</h2>
              <p className="mb-4">
                Siparişinizi, ürün kargoya verilmeden önce iptal edebilirsiniz. İptal talebinizi info@mazzgord.com
                adresine e-posta göndererek veya müşteri hizmetlerimizle iletişime geçerek iletebilirsiniz.
              </p>
              <p>Sipariş iptal edildiğinde, ödeme iadesi en geç 14 iş günü içerisinde gerçekleştirilecektir.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">Yasal Haklar</h2>
              <p>
                Bu iade politikası, tüketicinin yasal haklarını etkilemez. 6502 sayılı Tüketicinin Korunması Hakkında
                Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamındaki haklarınız saklıdır.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
