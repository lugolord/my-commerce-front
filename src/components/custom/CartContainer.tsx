import { Button } from '../ui/button'
import { useCart } from '@/hooks/useCart'
import CartList from './CartList'
import EmptyCart from './EmptyCart'

function CartContainer () {
  const { cart } = useCart()
  const isEmpty = cart.length === 0

  if (isEmpty) {
    return <EmptyCart />
  }

  return (
    <div className='h-screen flex items-center justify-center gap-3'>
      <CartList cart={cart} />
      <div className='w-[30%] h-96 p-3 flex flex-col justify-between border-s-2'>
        <h2 className='text-2xl underline'>Resumen de la compra:</h2>
        <p>Subtotal: <span className='font-bold'>1000</span></p>
        <p>Descuentos: <span className='font-bold'>0</span></p>
        <p>Envio: <span className='font-bold'>Gratis 🆓</span></p>
        <p>Total a pagar: <span className='font-bold'>1000</span></p>
        <Button>finalizar compra 🎉</Button>
      </div>
    </div>
  )
}

export default CartContainer
