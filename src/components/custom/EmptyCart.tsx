import { Button } from '../ui/button'
import { useNavigate } from 'react-router'

function EmptyCart () {
  const navigate = useNavigate()
  
  return (
    <div className='h-[80vh] flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-3xl'>No tienes productos en el carrito 😔</h1>
      <Button className='cursor-pointer' onClick={() => navigate('/')}>ver productos</Button>
    </div>
  )
}

export default EmptyCart
