import { useCart } from '@/hooks/useCart'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useState, useEffect } from 'react'

function CartSummary () {
  const [preferenceId, setPreferenceId] = useState(null)
  const { calculateSubtotal, calculateTotal, cart } = useCart()

  initMercadoPago('APP_USR-c8381a73-ae1c-4d7e-818c-d8b27daf9fa5')

  useEffect(() => {
    const createPreference = async () => {
      try {
        const response = await fetch('https://my-commerce-server.lugolord.deno.net/create-preference', {
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            items: cart
          })
        })
  
        if (response.ok) {
          const data = await response.json()
          setPreferenceId(data.preference_id)
        }
      } catch (error) {
        console.log(error)
      }
    } 

    createPreference()
  }, [cart])
  
  return (
    <div className='w-[90%] lg:w-[30%] h-96 p-3 flex flex-col justify-between lg:border-s-2'>
      <h2 className='text-2xl underline'>Resumen de la compra:</h2>
      <p>Subtotal: <span className='font-bold'>{calculateSubtotal()}</span></p>
      <p>Descuentos: <span className='font-bold'>0</span></p>
      <p>Envio: <span className='font-bold'>Gratis 🆓</span></p>
      <p>Total a pagar: <span className='font-bold'>{calculateTotal()}</span></p>
      {preferenceId && <div style={{ width: '300px' }}>
        <Wallet 
          initialization={{ preferenceId: preferenceId }} 
          customization={{theme: 'dark', customStyle: {hideValueProp: true} }}  
        />
      </div>}
    </div>
  )
}

export default CartSummary
