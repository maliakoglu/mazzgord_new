import type React from "react"
import { Suspense } from "react"
import "@/components/ui/scrollbar-hide.css"
import "@/app/globals.css"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import { SearchProvider } from "@/context/search-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mazzgord - Özgün Sanat Eserleri ve Tablolar",
  description:
    "Mazzgord'un özgün ve etkileyici tablolarını keşfedin. Tuval üzerine akrilik ve yağlı boya eserler ile yaşam alanlarınıza değer katın.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SearchProvider>
            <CartProvider>
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Yükleniyor...</div>}>
                {children}
              </Suspense>
            </CartProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
