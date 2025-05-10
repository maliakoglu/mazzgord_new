import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SatisKosullariPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Satış Koşulları</h1>
          <p className="text-muted-foreground mb-8">
            Mazzgord.com üzerinden yapılan alışverişlerde geçerli olan satış koşulları ve mesafeli satış sözleşmesi
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">1. Taraflar</h2>
              <p className="mb-4">
                İşbu Mesafeli Satış Sözleşmesi (bundan sonra "Sözleşme" olarak anılacaktır), bir tarafta;
              </p>
              <p className="mb-4">
                <strong>Satıcı:</strong> Mazzgord Sanat Galerisi (bundan sonra "SATICI" olarak anılacaktır)
                <br />
                Adres: ... Sokak No: 1, Daire: 1, Pamukkale, Denizli
                <br />
                Telefon: +1 (631) 316 8030
                <br />
                E-posta: info@mazzgord.com
              </p>
              <p>
                ile diğer tarafta;
                <br />
                <strong>Alıcı:</strong> Mazzgord.com web sitesi üzerinden alışveriş yapan kişi (bundan sonra "ALICI"
                olarak anılacaktır) arasında aşağıdaki şartlar dahilinde akdedilmiştir.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">2. Sözleşmenin Konusu</h2>
              <p>
                İşbu Sözleşme'nin konusu, SATICI'nın, ALICI'ya satışını yaptığı, aşağıda nitelikleri ve satış fiyatı
                belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun
                ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin
                saptanmasıdır.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">3. Ürün Bilgileri</h2>
              <p className="mb-4">
                Ürünlere ilişkin temel özellikler, satış fiyatı ve ödeme bilgileri ile teslimata ilişkin koşullar, ALICI
                tarafından siparişin verildiği Mazzgord.com web sitesinde yer almaktadır.
              </p>
              <p>
                ALICI, satın almak istediği ürünün temel özelliklerini, satış fiyatını ve ödeme bilgilerini okuyup bilgi
                sahibi olduğunu ve elektronik ortamda satın almaya ilişkin tüm bilgilendirmeleri edindiğini kabul ve
                beyan eder.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">4. Sözleşmenin Kurulması</h2>
              <p className="mb-4">
                İşbu Sözleşme, ALICI'nın Mazzgord.com web sitesi üzerinden sipariş vermesi ve ödeme işlemini tamamlaması
                ile kurulmuş sayılır. Sözleşme'nin kurulduğu tarih, siparişin verildiği tarihtir.
              </p>
              <p>
                SATICI, siparişin alındığını ALICI'ya elektronik posta yoluyla bildirecektir. Sipariş onayı, ALICI'nın
                sipariş sırasında bildirdiği elektronik posta adresine gönderilecektir.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">5. Ödeme</h2>
              <p className="mb-4">
                ALICI, satın aldığı ürünün toplam bedelini, Mazzgord.com web sitesinde belirtilen ödeme yöntemlerinden
                birini seçerek ödeyebilir. Ödeme, sipariş sırasında gerçekleştirilir.
              </p>
              <p>
                Kredi kartı ile yapılan ödemelerde, ALICI'nın sipariş sırasında kullandığı kredi kartının yetkisiz
                kişilerce haksız ve hukuka aykırı olarak kullanılması halinde, ALICI'nın ilgili banka ve finans
                kuruluşlarına başvurarak chargeback (ödeme iadesi) talebinde bulunma hakkı saklıdır.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">6. Teslimat</h2>
              <p className="mb-4">
                Ürünler, ALICI'nın sipariş formunda belirttiği adrese, siparişin onaylanmasından sonra, ürün sayfasında
                belirtilen süre içerisinde teslim edilecektir. Teslimat süresi, ürünün stok durumuna ve kargo firmasının
                çalışma koşullarına göre değişiklik gösterebilir.
              </p>
              <p className="mb-4">
                SATICI, ürünlerin paketlenmesi ve gönderilmesi konusunda gereken özeni gösterecektir. Ancak, kargo
                firmasının neden olduğu gecikmelerden ve hasarlardan SATICI sorumlu tutulamaz.
              </p>
              <p>
                Teslimat ile ilgili detaylı bilgiler, web sitesindeki "Kargo ve Teslimat" sayfasında yer almaktadır.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">7. Cayma Hakkı</h2>
              <p className="mb-4">
                ALICI, hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin, ürünün
                kendisine veya gösterdiği adresteki kişi/kuruluşa teslim tarihinden itibaren 14 (on dört) gün içerisinde
                cayma hakkını kullanabilir.
              </p>
              <p className="mb-4">
                Ancak, ALICI'nın talepleri ve açık onayı doğrultusunda hazırlanan, kişiye özel üretilen veya üzerinde
                değişiklik ya da ilaveler yapılarak kişisel ihtiyaçlara uyarlanan ürünler için cayma hakkı kullanılamaz.
                Bu kapsamda, özel olarak üretilen kanvas baskılar için cayma hakkı bulunmamaktadır.
              </p>
              <p>
                Cayma hakkı ile ilgili detaylı bilgiler, web sitesindeki "İade Politikası" sayfasında yer almaktadır.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">8. Uyuşmazlıkların Çözümü</h2>
              <p className="mb-4">
                İşbu Sözleşme'den doğan uyuşmazlıklarda, Türkiye Cumhuriyeti yasaları uygulanacaktır. Sözleşme'den
                doğabilecek ihtilaflarda, Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
              </p>
              <p>
                ALICI, şikâyet ve itirazları konusunda başvurularını, Ticaret Bakanlığı tarafından her yıl Aralık ayında
                belirlenen parasal sınırlar dâhilinde, mal veya hizmeti satın aldığı veya ikametgâhının bulunduğu
                yerdeki Tüketici Hakem Heyeti'ne veya Tüketici Mahkemesi'ne yapabilir.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">9. Yürürlük</h2>
              <p>
                İşbu Sözleşme, ALICI tarafından elektronik ortamda onaylanması ile yürürlüğe girer ve taraflar arasında
                akdedilmiş diğer sözleşme ve taahhütlerin eki ve ayrılmaz bir parçası olarak hüküm ifade eder.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
