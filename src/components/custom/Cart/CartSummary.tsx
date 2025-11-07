import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

function CartSummary () {
  const { calculateSubtotal, calculateTotal } = useCart()
  const navigate = useNavigate()
  
  return (
    <div className='w-[90%] lg:w-[30%] h-96 p-3 flex flex-col justify-between lg:border-s-2'>
      <h2 className='text-2xl underline'>Resumen de la compra:</h2>
      <p>Subtotal: <span className='font-bold'>{calculateSubtotal()}</span></p>
      <p>Descuentos: <span className='font-bold'>0</span></p>
      <p>Envio: <span className='font-bold'>Gratis 🆓</span></p>
      <p>Total a pagar: <span className='font-bold'>{calculateTotal()}</span></p>
      <Button onClick={() => navigate('/checkout')}>ir al checkout</Button>
    </div>
  )
}

export default CartSummary
