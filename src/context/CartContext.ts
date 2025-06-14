import { createContext } from 'react'
import { Product } from '@/types/api'

type CartContextType = {
  cart: Product[]
  addProduct: (product: Product) => void
  isInCart: (id: number) => boolean
  handleQuantity: (product: Product, type: 'increment' | 'decrement') => void
  removeFromCart: (id: number) => void
  calculateSubtotal: () => number
  calculateTotal: () => number
  calculateCartQuantity: () => number
  clearCart: () => void
}

export const CartContext = createContext<CartContextType | null>(null)
