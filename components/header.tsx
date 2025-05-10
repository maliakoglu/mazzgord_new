"use client"

import Link from "next/link"
import { ShoppingCart, User, Search, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menüyü aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-lg font-semibold">
                  Ana Sayfa
                </Link>
                <Link href="/galeri" className="text-lg font-semibold">
                  Galeri
                </Link>
                <Link href="/hakkimda" className="text-lg font-semibold">
                  Hakkımda
                </Link>
                <Link href="/koleksiyonlar" className="text-lg font-semibold">
                  Koleksiyonlar
                </Link>
                <Link href="/iletisim" className="text-lg font-semibold">
                  İletişim
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Mazzgord</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Ana Sayfa
            </Link>
            <Link href="/galeri" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Galeri
            </Link>
            <Link href="/hakkimda" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Hakkımda
            </Link>
            <Link
              href="/koleksiyonlar"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Koleksiyonlar
            </Link>
            <Link href="/iletisim" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              İletişim
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex relative w-40 lg:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Ara..." className="w-full pl-8 rounded-full bg-muted" />
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Hesap</span>
          </Button>
          <Link href="/sepet">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Sepet</span>
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                3
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
