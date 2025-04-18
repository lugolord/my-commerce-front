import { Product } from '@/types/api'
import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider ({ children } : { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  const isInCart = (id: number) => cart.some(prod => prod.id === id)

  const addProduct = (product: Product) => setCart([...cart, product])

  const removeFromCart = (id: number) => setCart((prev) => prev.filter(prod => prod.id !== id)) 

  const handleQuantity = (id: number, type: 'increment' | 'decrement') => {
    const action = type === 'increment' ? 1 : -1
  
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity + action)
            }
          : product
      )
    )
  }
  
  return (
    <CartContext.Provider value={{ cart, addProduct, isInCart, handleQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
