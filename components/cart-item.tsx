"use client"

import Image from "next/image"
import { Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, type CartItem } from "@/context/cart-context"

interface CartItemProps {
  item: CartItem
}

export function CartItemComponent({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 border-b pb-6">
      <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden flex-shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-medium text-lg">{item.name}</h3>
            <p className="text-sm text-muted-foreground">
              {item.technique}, {item.size}
            </p>
          </div>
          <div className="mt-2 sm:mt-0 text-right">
            <p className="font-semibold">{item.price.toLocaleString("tr-TR")} ₺</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={decrementQuantity}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center flex items-center justify-center">{item.quantity}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none" onClick={incrementQuantity}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeItem(item.id)}>
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Ürünü kaldır</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
