import { Product } from '@/types/api'
import { CartContext } from './CartContext'
import { useState, useEffect } from 'react'

function CartProvider ({ children } : { children: React.ReactNode }) {
  const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
  const [cart, setCart] = useState<Product[]>(localCart || [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const isInCart = (id: number) => cart.some(prod => prod.id === id)

  const clearCart = () => setCart([])

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

  const calculateSubtotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    return Number(subtotal.toFixed(2))
  }

  const calculateTotal = () => {
    const costoEnvio = 0
    const descuentos = 0
    const subTotal = calculateSubtotal()
    const total = costoEnvio + descuentos + subTotal
    
    return Number(total.toFixed(2))
  }

  const calculateCartQuantity = () => cart.reduce((total, item) => total + item.quantity, 0)

  const value = {
    cart,
    addProduct,
    isInCart,
    handleQuantity,
    removeFromCart,
    calculateSubtotal,
    calculateTotal,
    calculateCartQuantity,
    clearCart
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
