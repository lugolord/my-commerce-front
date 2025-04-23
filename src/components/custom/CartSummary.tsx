import { Button } from '../ui/button'
import { useCart } from '@/hooks/useCart'

function CartSummary () {
  const { calculateSubtotal, calculateTotal, cart } = useCart()

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
      })
  
      if (!response.ok) throw new Error('Error al crear la sesión de pago')
  
      const data = await response.json()
      window.location.href = data.url
    } catch (error) {
      console.error('Checkout error:', error)
    }
  }

  return (
    <div className='w-[30%] h-96 p-3 flex flex-col justify-between border-s-2'>
      <h2 className='text-2xl underline'>Resumen de la compra:</h2>
      <p>Subtotal: <span className='font-bold'>{calculateSubtotal()}</span></p>
      <p>Descuentos: <span className='font-bold'>0</span></p>
      <p>Envio: <span className='font-bold'>Gratis 🆓</span></p>
      <p>Total a pagar: <span className='font-bold'>{calculateTotal()}</span></p>
      <form onSubmit={handleCheckout}>
        <Button type='submit' className='w-full'>finalizar compra 🎉</Button>
      </form>
    </div>
  )
}

export default CartSummary
