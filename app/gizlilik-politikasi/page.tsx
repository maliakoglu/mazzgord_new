import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GizlilikPolitikasiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Gizlilik Politikası</h1>
          <p className="text-muted-foreground mb-8">
            Mazzgord.com olarak kişisel verilerinizin güvenliği ve gizliliği konusunda hassasiyetle yaklaşıyoruz
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">1. Giriş</h2>
              <p className="mb-4">
                Mazzgord.com olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel
                verilerinizin güvenliği ve gizliliği konusunda hassasiyetle yaklaşmaktayız. Bu Gizlilik Politikası, web
                sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda kişisel verilerinizin nasıl toplandığını,
                kullanıldığını ve korunduğunu açıklamaktadır.
              </p>
              <p>
                Web sitemizi kullanarak, bu Gizlilik Politikası'nda belirtilen uygulamaları kabul etmiş sayılırsınız.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">2. Toplanan Kişisel Veriler</h2>
              <p className="mb-4">Mazzgord.com üzerinden aşağıdaki kişisel verilerinizi toplayabiliriz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Kimlik Bilgileri:</strong> Ad, soyad
                </li>
                <li>
                  <strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, teslimat adresi
                </li>
                <li>
                  <strong>Ödeme Bilgileri:</strong> Kredi kartı bilgileri (kart numarası, son kullanma tarihi, CVV kodu)
                </li>
                <li>
                  <strong>Kullanım Verileri:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar, ziyaret tarihi
                  ve saati
                </li>
                <li>
                  <strong>Çerez Verileri:</strong> Web sitemizde kullanılan çerezler aracılığıyla toplanan bilgiler
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
              <p className="mb-4">Kişisel verilerinizi aşağıdaki amaçlar doğrultusunda işlemekteyiz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sipariş işlemlerinizi gerçekleştirmek ve yönetmek</li>
                <li>Ürünlerinizi teslim etmek</li>
                <li>Müşteri hizmetleri sunmak ve sorularınıza yanıt vermek</li>
                <li>Ödeme işlemlerinizi gerçekleştirmek</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                <li>Web sitemizin ve hizmetlerimizin güvenliğini sağlamak</li>
                <li>Web sitemizi ve hizmetlerimizi geliştirmek</li>
                <li>Pazarlama ve tanıtım faaliyetlerinde bulunmak (izniniz olması halinde)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">4. Kişisel Verilerin Paylaşılması</h2>
              <p className="mb-4">
                Kişisel verilerinizi, aşağıdaki durumlar dışında üçüncü taraflarla paylaşmamaktayız:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Hizmet Sağlayıcılar:</strong> Sipariş işleme, ödeme, kargo ve müşteri hizmetleri gibi
                  hizmetleri sağlayan iş ortaklarımız
                </li>
                <li>
                  <strong>Yasal Zorunluluklar:</strong> Yasal bir zorunluluk olması halinde, yetkili kamu kurum ve
                  kuruluşları
                </li>
                <li>
                  <strong>İş Ortakları:</strong> Hizmetlerimizi sunmak için işbirliği yaptığımız iş ortakları (sadece
                  gerekli olduğu ölçüde)
                </li>
              </ul>
              <p className="mt-4">
                Kişisel verilerinizi paylaştığımız üçüncü tarafların, bu verileri bu Gizlilik Politikası'na ve
                yürürlükteki yasalara uygun olarak işlemesini sağlamak için gerekli önlemleri almaktayız.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">5. Kişisel Verilerin Korunması</h2>
              <p className="mb-4">
                Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler almaktayız. Bu tedbirler
                arasında:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Veri şifreleme teknolojileri kullanmak</li>
                <li>Veri tabanlarına erişimi sınırlamak</li>
                <li>Güvenlik duvarları ve anti-virüs programları kullanmak</li>
                <li>Düzenli güvenlik değerlendirmeleri yapmak</li>
                <li>Çalışanlarımıza veri güvenliği konusunda eğitim vermek</li>
              </ul>
              <p className="mt-4">
                Ancak, internet üzerinden yapılan veri iletimlerinin %100 güvenli olduğu garanti edilemez. Bu nedenle,
                kişisel verilerinizin korunması için elimizden gelen tüm çabayı göstermemize rağmen, mutlak güvenliği
                garanti edemeyiz.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">6. Çerezler (Cookies)</h2>
              <p className="mb-4">
                Web sitemizde, deneyiminizi geliştirmek ve hizmetlerimizi iyileştirmek için çerezler kullanmaktayız.
                Çerezler, tarayıcınız tarafından cihazınıza kaydedilen küçük metin dosyalarıdır.
              </p>
              <p className="mb-4">Kullandığımız çerez türleri şunlardır:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Zorunlu Çerezler:</strong> Web sitemizin düzgün çalışması için gerekli olan çerezler
                </li>
                <li>
                  <strong>Analitik Çerezler:</strong> Web sitemizin nasıl kullanıldığını analiz etmemize yardımcı olan
                  çerezler
                </li>
                <li>
                  <strong>İşlevsellik Çerezleri:</strong> Web sitemizde tercihlerinizi hatırlamamıza yardımcı olan
                  çerezler
                </li>
                <li>
                  <strong>Pazarlama Çerezleri:</strong> Reklam ve pazarlama faaliyetlerimizi yönetmemize yardımcı olan
                  çerezler
                </li>
              </ul>
              <p className="mt-4">
                Tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerez gönderildiğinde uyarı verilmesini
                sağlayabilirsiniz. Ancak, bazı çerezleri reddetmeniz durumunda, web sitemizin bazı özelliklerinin düzgün
                çalışmayabileceğini unutmayınız.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">7. Haklarınız</h2>
              <p className="mb-4">KVKK kapsamında, kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>
                  Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme
                </li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>
                  KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok
                  edilmesini isteme
                </li>
                <li>
                  Kişisel verilerinizin aktarıldığı üçüncü kişilere yukarıda belirtilen düzeltme, silme veya yok etme
                  işlemlerinin bildirilmesini isteme
                </li>
                <li>
                  İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize
                  bir sonucun ortaya çıkmasına itiraz etme
                </li>
                <li>
                  Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın
                  giderilmesini talep etme
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">8. İletişim</h2>
              <p className="mb-4">
                Bu Gizlilik Politikası ile ilgili sorularınız veya talepleriniz için aşağıdaki iletişim bilgilerinden
                bize ulaşabilirsiniz:
              </p>
              <p>
                <strong>E-posta:</strong> info@mazzgord.com
                <br />
                <strong>Telefon:</strong> +1 (631) 316 8030
                <br />
                <strong>Adres:</strong> ... Sokak No: 1, Daire: 1, Pamukkale, Denizli
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">9. Gizlilik Politikası'nda Değişiklikler</h2>
              <p>
                Bu Gizlilik Politikası'nı dilediğimiz zaman değiştirme hakkını saklı tutarız. Gizlilik Politikası'nda
                yapılan değişiklikler, web sitemizde yayınlandığı tarihten itibaren geçerli olacaktır. Gizlilik
                Politikası'nda önemli değişiklikler yapılması durumunda, web sitemizde bir bildirim yayınlayacağız.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
