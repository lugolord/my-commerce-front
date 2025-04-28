import { CircleX } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Product } from '@/types/api'
import { useCart } from '@/hooks/useCart'

function CartItem ({ prod } : { prod: Product }) {
  const { handleQuantity, removeFromCart } = useCart()

  return (
    <>
      <div className='flex items-center gap-2'>
        <img src={prod.thumbnail} className='w-10 h-10 flex-1' />
        <p className='flex-10'>{prod.title}</p>
        <p className='flex-1'>{prod.quantity}</p>
        <Button 
          className='flex-1' 
          onClick={() => handleQuantity(prod, 'increment')}
        >
          +
        </Button>
        <Button 
          className='flex-1' 
          onClick={() => handleQuantity(prod, 'decrement')}
        >
          -
        </Button>
        <Button 
          className='flex-1' 
          variant='destructive'
          onClick={() => removeFromCart(prod.id)}
        >
          <CircleX />
        </Button>
      </div>
      <Separator className='my-3' />
    </>
  )
}

export default CartItem
