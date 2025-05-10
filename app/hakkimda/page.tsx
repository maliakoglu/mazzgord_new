import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HakkimdaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Hakkımda</h1>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-black flex items-center justify-center">
              <Image src="/images/logo.jpg" alt="Mazzgord" width={400} height={400} className="object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Mazzgord</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Merhaba, ben Mazzgord. Sanat yolculuğuma 2000'li yılların başında, lise yıllarımda başladım. Resim
                  yapmak, benim için sadece bir hobi değil, aynı zamanda duyguları, düşünceleri ve hikayeleri ifade
                  etmenin en güçlü yoluydu. Eserlerimde genellikle doğanın güzelliklerini, insan duygularını ve yaşamın
                  farklı yönlerini tuvalime yansıtmaya çalışıyorum. Her bir tablom, kişisel hikayelerden ve
                  deneyimlerden ilham alarak şekilleniyor.
                </p>
                <p>
                  Sanat eğitimimi, ilk resim öğretmenlerimden ve okuldaki diğer öğretmenlerimden aldım. Üniversitede
                  Anadolu Üniversitesi Çalışma Ekonomisi bölümünde okudum, fakat resimle ilgim hiç bitmedi. Zamanla
                  eserlerimi, çeşitli sergilerde sanatseverlerle buluşturma fırsatı buldum.
                </p>
                <p>
                  Tablolarımda, canlı renkler ve dinamik fırça darbeleriyle izleyicilere duygusal bir deneyim sunmayı
                  amaçlıyorum. Akrilik, karakalem, yağlı boya ve karışık teknik kullanarak farklı dokular ve derinlikler
                  yaratmayı seviyorum. Sanatımın, sizlere ilham vermesi ve yaşam alanlarınıza değer katması en büyük
                  dileğimdir.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Eğitim ve Deneyim</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-2">
                <h3 className="font-semibold">Anadolu Üniversitesi</h3>
                <p className="text-sm text-muted-foreground">Çalışma Ekonomisi ve Endüstri İlişkileri, 2006-2014</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Sanat Yaklaşımım</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Teknik</h3>
                <p className="text-sm text-muted-foreground">
                  Çalışmalarımda akrilik, yağlı boya ve karışık teknik kullanıyorum. Her malzemenin kendine özgü
                  karakterini ve ifade gücünü keşfetmeyi seviyorum.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">İlham Kaynakları</h3>
                <p className="text-sm text-muted-foreground">
                  Doğa, insan duyguları, şehir yaşamı ve kültürel deneyimler eserlerime ilham veriyor. Günlük hayatın
                  sıradan anlarında bile sanatsal ifadeler bulmaya çalışıyorum.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Felsefe</h3>
                <p className="text-sm text-muted-foreground">
                  Sanatın insanları birleştiren, duyguları ifade eden ve yaşam kalitesini artıran bir güç olduğuna
                  inanıyorum. Her eserimde izleyiciyle duygusal bir bağ kurmayı hedefliyorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
