import { Product } from '@/types/api'
import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider ({ children } : { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
