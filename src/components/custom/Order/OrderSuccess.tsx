import { useSearchParams, useNavigate } from 'react-router'
import { CircleCheck } from 'lucide-react'
import { Button } from '../../ui/button'
import { useEffect, useState } from 'react'
import { useCart } from '@/hooks/useCart'
import CheckOrder from './CheckOrder'

function OrderSuccess () {
  const [loading, setLoading] = useState(true)
  const { clearCart } = useCart()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const paymentId = searchParams.get('payment_id')

  useEffect(() => {
    const chekcPaymentId = async () => {
      const res = await fetch('https://my-commerce-server.lugolord.deno.net/check-id', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payment_id: paymentId })
      })

      const data = await res.json()

      if (data.ok) {
        clearCart()
        setLoading(false)
      } else {
        navigate('/')
      }
    }

    chekcPaymentId()
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentId])

  const handleClick = () => navigate('/')

  if (loading) {
    return <CheckOrder />
  }

  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen'>
      <CircleCheck size={100} color='#47c536' />
      <p className='text-2xl'>La compra se realizo con exito 😄</p>
      <p className='text-2xl text-center'>El ID de tu orden es:</p>
      <p className='text-2xl break-all px-10'>{paymentId}</p>
      <Button onClick={handleClick}>volver a los productos</Button>
    </div>
  )
}

export default OrderSuccess
