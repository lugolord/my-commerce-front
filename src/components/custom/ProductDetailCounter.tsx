import { Button } from '../ui/button'
import { useState } from 'react'

type Props = {
  handleAdd: (q: number) => void
  disabled: boolean
}

function ProductDetailCounter ({ handleAdd, disabled } : Props) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='flex flex-col'>
      <input 
        type="number" 
        className='border p-1 mb-2 rounded text-center' 
        min={1}
        value={quantity}
        onChange={() => setQuantity(quantity + 1)}
        disabled={disabled}
      />
      <Button onClick={() => handleAdd(quantity)} disabled={disabled}>add to cart</Button>
    </div>
  )
}

export default ProductDetailCounter
