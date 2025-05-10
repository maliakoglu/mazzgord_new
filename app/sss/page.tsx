import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SSSPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Sıkça Sorulan Sorular</h1>
          <p className="text-muted-foreground mb-8">
            Mazzgord.com üzerinden sipariş edilen kanvas baskılar ve tablolar hakkında sık sorulan sorular ve cevapları
          </p>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Ürünler orijinal tablo mu yoksa baskı mı?</AccordionTrigger>
                <AccordionContent>
                  Sitemizde hem özel tasarım kanvas baskılar, hem de sınırlı sayıda üretilen, sanatçıya ait orijinal
                  tablolar satılmaktadır. Her ürün açıklamasında bu açıkça belirtilmiştir.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Ürünler sipariş üzerine mi hazırlanıyor?</AccordionTrigger>
                <AccordionContent>
                  Evet, tüm baskılı ürünler sipariş üzerine özel olarak üretilir. Stokta beklemez, her sipariş taze
                  hazırlanır.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Kanvas baskıların kalitesi nasıl?</AccordionTrigger>
                <AccordionContent>
                  Yüksek kaliteli, dayanıklı ve solmaya karşı dirençli boyalarla, 1. sınıf pamuklu kanvas kumaşlara
                  baskı yapılır. Ahşap şasiye gerdirilmiş, duvara asıma hazır şekilde gönderilir.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Siparişim ne kadar sürede kargoya verilir?</AccordionTrigger>
                <AccordionContent>
                  Kanvas baskılar genellikle 2-4 iş günü içinde hazırlanıp kargoya verilir. Orijinal tablolar ise
                  hazırsa aynı gün, değilse 1-2 gün içinde gönderilir.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Kargo ücreti ne kadar?</AccordionTrigger>
                <AccordionContent>
                  Belirli bir tutarın üzerindeki siparişlerde kargo ücretsizdir. Aksi durumda kargo ücreti, ödeme
                  sırasında sepete otomatik olarak yansıtılır.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Ürün hasarlı gelirse ne yapmalıyım?</AccordionTrigger>
                <AccordionContent>
                  Kargoda oluşabilecek hasarlara karşı ürününüz sigortalıdır. Hasarlı ürün elinize ulaşırsa bizimle
                  iletişime geçin, ücretsiz değişim yapılır.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>İade kabul ediyor musunuz?</AccordionTrigger>
                <AccordionContent>
                  Sipariş üzerine özel olarak üretilen kanvas baskılarda iade kabul edilmez. Ancak orijinal tablolar ve
                  hazır ürünler için, hasar dışı iadeler 3 gün içinde geçerlidir.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Ödeme yöntemleri nelerdir?</AccordionTrigger>
                <AccordionContent>
                  Kredi kartı, banka kartı ve iyzico altyapısıyla güvenli ödeme yapabilirsiniz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>Hediye olarak sipariş verebilir miyim?</AccordionTrigger>
                <AccordionContent>
                  Evet, siparişinizi hediye paketiyle ve isterseniz özel bir notla gönderebiliriz. Sipariş sırasında
                  bunu belirtmeniz yeterlidir.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>Ürün görselleriyle elime ulaşan ürün birebir aynı mı olur?</AccordionTrigger>
                <AccordionContent>
                  Kanvas baskılar birebir aynı tasarıma sahiptir. Ancak ekran renk ayarlarına bağlı olarak küçük ton
                  farkları olabilir. Orijinal tablolar da görsellerdekiyle tamamen aynıdır.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger>Yurtdışına gönderim yapıyor musunuz?</AccordionTrigger>
                <AccordionContent>
                  Şu an için yalnızca Türkiye içi gönderim yapıyoruz. Ancak kısa zamanda yurtdışına da gönderim
                  başlatmayı planlıyoruz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger>Size özel bir tablo ya da kanvas tasarımı yaptırabilir miyim?</AccordionTrigger>
                <AccordionContent>
                  Evet! İletişim sayfamızdan taleplerinizi bize iletebilir, sizin için özel bir sanat eseri
                  tasarlanmasını talep edebilirsiniz.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
