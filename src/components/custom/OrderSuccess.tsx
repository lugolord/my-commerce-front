import { useParams, useNavigate } from 'react-router'
import { CircleCheck } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { useCart } from '@/hooks/useCart'

function OrderSuccess () {
  // const [hasClearedCart, setHasClearedCart] = useState(false)
  // const { id } = useParams()
  // const { clearCart } = useCart()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!hasClearedCart) {
  //     clearCart()
  //     setHasClearedCart(true)
  //   }
  // }, [hasClearedCart, clearCart])

  // const handleClick = () => navigate('/')

  return (
    // <div className='flex flex-col items-center justify-center gap-5 h-screen'>
    //   <CircleCheck size={100} color='#47c536' />
    //   <p className='text-2xl'>La compra se realizo con exito 😄</p>
    //   <p className='text-2xl text-center'>El ID de tu orden es:</p>
    //   <p className='text-2xl break-all px-10'>{id}</p>
    //   <Button onClick={handleClick}>volver a los productos</Button>
    // </div>
    <h1>success</h1>
  )
}

export default OrderSuccess
