import Link from "next/link"
import { PaymentLogos } from "@/components/payment-logos"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Mazzgord</h3>
            <p className="text-sm text-muted-foreground">
              Özgün sanat eserleri ile yaşam alanlarınıza değer katıyorum.
            </p>
            <div className="mt-4">
              <PaymentLogos />
            </div>
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
                <Link href="/kargo-teslimat" className="text-muted-foreground hover:text-foreground">
                  Kargo ve Teslimat
                </Link>
              </li>
              <li>
                <Link href="/iade-politikasi" className="text-muted-foreground hover:text-foreground">
                  İade Politikası
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="text-muted-foreground hover:text-foreground">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-muted-foreground hover:text-foreground">
                  Sıkça Sorulan Sorular
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
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mazzgord. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/mazzgord.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            >
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
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/mazzgord/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            >
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
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@mazzgord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
            >
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
                aria-hidden="true"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
