import Link from "next/link"
import { Button } from "@/components/ui/button"

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
                <Link href="/iletisim" className="text-muted-foreground hover:text-foreground">
                  İletişim
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
            <Button variant="ghost" size="icon" aria-label="Facebook">
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
            <Button variant="ghost" size="icon" aria-label="Instagram">
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
            <Button variant="ghost" size="icon" aria-label="Twitter">
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
            <Button variant="ghost" size="icon" aria-label="Pinterest">
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
                <path d="M8 12h8" />
                <path d="M12 8v8" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
