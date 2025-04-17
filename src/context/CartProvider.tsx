import { Product } from '@/types/api'
import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider ({ children } : { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  const isInCart = (id: number) => cart.some(prod => prod.id === id)

  const addProduct = (product: Product) => setCart([...cart, product])

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, isInCart, increaseQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
