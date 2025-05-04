import { Product } from '@/types/api'
import CartItem from './CartItem'

function CartList ({ cart } : { cart: Product[] }) {
  return (
    <div className='my-10 w-[90%] max-h-60 lg:my-0 lg:w-[50%] lg:h-96 lg:p-3 overflow-y-auto scrollbar-none'>
      {cart.map(prod => <CartItem prod={prod} key={prod.id} />)}
    </div>
  )
}

export default CartList
