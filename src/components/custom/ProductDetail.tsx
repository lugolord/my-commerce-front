import { Button } from '../ui/button'
import { Product } from '@/types/api'
import { toast } from 'sonner'
import ProducDetailCarousel from './ProductDetailCarousel'

function ProductDetail ({ product } : { product: Product }) {
  const handleAdd = () => {
    toast(product.title, {
      description: "Se ha agregado al carrito",
      richColors: true
    })
  }

  return (
    <div className='grid grid-cols-2 place-items-center justify-items-center h-[80vh]'>
      <ProducDetailCarousel images={product?.images} />
      <div className='h-[80%] w-[90%] justify-self-start flex flex-col justify-between'>
        <div>
          <h2>{product?.title}</h2>
          <p>{product?.brand}</p>
          <p>{product?.stock ? 'In stock 🟢' : 'No stock 🔴'}</p>
        </div>
        <p>{product?.description}</p>
        <div className='flex flex-col'>
          <input 
            type="number" 
            className='border p-1 mb-2 rounded text-center' 
            defaultValue={1}
            min={1}
          />
          <Button onClick={handleAdd}>add to cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
