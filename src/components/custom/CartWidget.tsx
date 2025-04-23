import { Button } from '../ui/button'
import { NavigationMenuItem } from '../ui/navigation-menu'
import { useNavigate } from 'react-router'
import { useCart } from '@/hooks/useCart'
import { ShoppingCart } from 'lucide-react'

function CartWidget () {
  const navigate = useNavigate()
  const { calculateCartQuantity } = useCart()

  return (
    <NavigationMenuItem>
      <Button variant='secondary' className='cursor-pointer' onClick={() => navigate('/cart')}>
        cart <ShoppingCart /> {calculateCartQuantity()}
      </Button>
    </NavigationMenuItem>
  )
}

export default CartWidget
