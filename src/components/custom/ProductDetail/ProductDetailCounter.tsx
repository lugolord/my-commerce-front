import { Button } from '../../ui/button'
import { useState } from 'react'

type Props = {
  handleAdd: (q: number) => void
  disabled: boolean
  stock: number
}

function ProductDetailCounter ({ handleAdd, disabled, stock } : Props) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='flex flex-col items-center'>
      <input 
        type="number" 
        className='border p-1 mb-2 rounded text-center w-[90%] md:w-[100%]' 
        min={1}
        max={stock}
        value={quantity}
        onChange={(e) => setQuantity(e.target.valueAsNumber)}
        disabled={disabled}
      />
      <Button 
        onClick={() => handleAdd(quantity)} 
        disabled={disabled}
        className='w-[90%] md:w-[100%]'
      >
        add to cart
      </Button>
    </div>
  )
}

export default ProductDetailCounter
