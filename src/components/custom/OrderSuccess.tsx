import { useParams } from 'react-router'
import { CircleCheck } from 'lucide-react'
import { Button } from '../ui/button'

function OrderSuccess () {
  const { id } = useParams()

  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen'>
      <CircleCheck size={100} color='#47c536' />
      <p className='text-2xl'>La compra se realizo con exito 😄</p>
      <p className='text-2xl'>El ID de tu orden es: {id}</p>
      <Button>volver a los productos</Button>
    </div>
  )
}

export default OrderSuccess
