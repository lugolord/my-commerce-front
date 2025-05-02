import { Product } from '@/types/api'
import CartItem from './CartItem'

function CartList ({ cart } : { cart: Product[] }) {
  return (
    <div className='w-[50%] h-96 p-3 overflow-y-auto'>
      {cart.map(prod => <CartItem prod={prod} key={prod.id} />)}
    </div>
  )
}

export default CartList
