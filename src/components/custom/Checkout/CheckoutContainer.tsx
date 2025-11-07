import { useState } from 'react'
import { Wallet } from '@mercadopago/sdk-react'
import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'

function CheckoutContainer () {
  const [preferenceId, setPreferenceId] = useState(null)
  const { cart } = useCart()
  const preferenceUrl = 'https://my-commerce-server.lugolord.deno.net/create-preference'

  const createPreference = async () => {
    try {
      const response = await fetch(preferenceUrl, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cart })
      })

      if (response.ok) {
        const data = await response.json()
        setPreferenceId(data.preference_id)
      }
    } catch (error) {
      console.log(error)
    }
  } 

  const handleClick = () => {
    createPreference()
  }

  return (
    <div className='flex flex-col items-center justify-center gap-5 h-screen'>
      <h2 className='text-2xl'>Si ya tienes todo, finaliza tu compra 👇🏽</h2>
      {!preferenceId && <Button onClick={handleClick}>finalizar compra</Button>}
      {preferenceId && <div style={{ width: '300px' }}>
        <Wallet 
          initialization={{ preferenceId: preferenceId }}
          customization={{ customStyle: {valuePropColor: 'white'} }}  
        />
      </div>}
    </div>
  )
}

export default CheckoutContainer
