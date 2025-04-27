import { useParams } from 'react-router'
import { CircleCheck } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { useCart } from '@/hooks/useCart'

function OrderSuccess () {
  const [hasClearedCart, setHasClearedCart] = useState(false)
  const { id } = useParams()
  const { clearCart } = useCart()

  useEffect(() => {
    if (!hasClearedCart) {
      clearCart()
      setHasClearedCart(true)
    }
  }, [hasClearedCart, clearCart])

  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen'>
      <CircleCheck size={100} color='#47c536' />
      <p className='text-2xl'>La compra se realizo con exito 😄</p>
      <p className='text-2xl text-center'>El ID de tu orden es: {id}</p>
      <Button>volver a los productos</Button>
    </div>
  )
}

export default OrderSuccess
