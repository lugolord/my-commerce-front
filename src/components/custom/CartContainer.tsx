import { CircleX } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

function CartContainer () {
  return (
    <div className='h-screen flex items-center justify-center gap-3'>
      <div className='w-[50%] h-96 p-3 overflow-y-auto'>
        <div className='flex justify-around items-center'>
          <div className='w-10 h-10 bg-gray-400'></div>
          product name
          cantidad
          <Button>mas</Button>
          <Button>menos</Button>
          <Button variant='destructive'><CircleX /></Button>
        </div>
        <Separator className='my-3' />
      </div>
      <div className='w-[30%] h-96 p-3 flex flex-col justify-between border-s-2'>
        <h2 className='text-2xl underline'>Resumen de la compra:</h2>
        <p>Subtotal: <span className='font-bold'>1000</span></p>
        <p>Descuentos: <span className='font-bold'>0</span></p>
        <p>Envio: <span className='font-bold'>Gratis 🆓</span></p>
        <p>Total a pagar: <span className='font-bold'>1000</span></p>
        <Button>finalizar compra 🎉</Button>
      </div>
    </div>
  )
}

export default CartContainer
