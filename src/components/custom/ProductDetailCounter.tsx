import { Button } from '../ui/button'
import { useState } from 'react'

type Props = {
  handleAdd: (q: number) => void
}

function ProductDetailCounter ({ handleAdd } : Props) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='flex flex-col'>
      <input 
        type="number" 
        className='border p-1 mb-2 rounded text-center' 
        min={1}
        value={quantity}
        onChange={() => setQuantity(quantity + 1)}
      />
      <Button onClick={() => handleAdd(quantity)}>add to cart</Button>
    </div>
  )
}

export default ProductDetailCounter
