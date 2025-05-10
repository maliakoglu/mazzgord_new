"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  // ESC tuşu ile kapatma işlevi
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent">
        <div className="relative w-full h-full">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50 bg-black/50 text-white hover:bg-black/70 rounded-full"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Kapat</span>
          </Button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
