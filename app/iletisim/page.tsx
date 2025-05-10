import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function IletisimPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">İletişim</h1>
          <p className="text-muted-foreground mb-8">
            Sorularınız, özel sipariş talepleriniz veya işbirliği önerileriniz için benimle iletişime geçebilirsiniz.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-6">İletişim Bilgileri</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Adres</h3>
                    <p className="text-muted-foreground">... Sokak No: 1, Daire: 1</p>
                    <p className="text-muted-foreground">Pamukkale, Denizli</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">E-posta</h3>
                    <p className="text-muted-foreground">info@mazzgord.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <p className="text-muted-foreground">+1(631) 316 8030</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Çalışma Saatleri</h3>
                    <p className="text-muted-foreground">Pazartesi - Cuma: 9:00 - 17:00</p>
                    <p className="text-muted-foreground">Cumartesi: 9:00 - 15:00</p>
                    <p className="text-muted-foreground">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Sosyal Medya</h2>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
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
                  <Button variant="outline" size="icon">
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
                  <Button variant="outline" size="icon">
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
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-6">İletişim Formu</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Adınız
                    </label>
                    <Input id="name" placeholder="Adınız" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-posta
                    </label>
                    <Input id="email" type="email" placeholder="E-posta adresiniz" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Konu
                  </label>
                  <Input id="subject" placeholder="Mesajınızın konusu" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mesajınız
                  </label>
                  <Textarea id="message" placeholder="Mesajınızı buraya yazın..." rows={5} />
                </div>

                <Button type="submit" className="w-full">
                  Gönder
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
