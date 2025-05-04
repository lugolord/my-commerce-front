import { useCart } from '@/hooks/useCart'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
import CartSummary from './CartSummary'

function CartContainer () {
  const { cart } = useCart()
  const isEmpty = cart.length === 0

  if (isEmpty) {
    return <EmptyCart />
  }

  return (
    <div className='h-screen flex flex-col lg:flex-row items-center lg:justify-center lg:gap-3'>
      <CartList cart={cart} />
      <CartSummary />
    </div>
  )
}

export default CartContainer
