import { createContext } from 'react'
import { Product } from '@/types/api'

type CartContextType = {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
}

export const CartContext = createContext<CartContextType | null>(null)
