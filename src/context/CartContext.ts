import { createContext } from 'react'
import { Product } from '@/types/api'

type CartContextType = {
  cart: Product[]
  addProduct: (product: Product) => void
  isInCart: (id: number) => boolean
  increaseQuantity: (id: number) => void
}

export const CartContext = createContext<CartContextType | null>(null)
