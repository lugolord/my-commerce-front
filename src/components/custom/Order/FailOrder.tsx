import { Button } from '@/components/ui/button'
import { CircleX } from 'lucide-react'
import { useNavigate } from 'react-router'

function FailOrder () {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen'>
      <CircleX size={100} />
      <p className='text-2xl'>Hubo un problema con tu orden</p>
      <Button onClick={() => navigate('/')}>volver a los productos</Button>
    </div>
  )
}

export default FailOrder
