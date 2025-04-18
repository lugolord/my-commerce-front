import { CircleX } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Product } from '@/types/api'

function CartItem ({ prod } : { prod: Product }) {
  return (
    <>
      <div className='flex items-center gap-2'>
        <img src={prod.thumbnail} className='w-10 h-10 flex-1' />
        <p className='flex-10'>{prod.title}</p>
        <p className='flex-1'>{prod.quantity}</p>
        <Button className='flex-1'>+</Button>
        <Button className='flex-1'>-</Button>
        <Button 
          className='flex-1' 
          variant='destructive'
        >
          <CircleX />
        </Button>
      </div>
      <Separator className='my-3' />
    </>
  )
}

export default CartItem
