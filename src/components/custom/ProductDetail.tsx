import { Product } from '@/types/api'
import { toast } from 'sonner'
import { useCart } from '@/hooks/useCart'
import { CircleAlert, CircleCheck } from 'lucide-react'
import ProducDetailCarousel from './ProductDetailCarousel'
import ProductDetailCounter from './ProductDetailCounter'

function ProductDetail ({ product } : { product: Product }) {
  const { addProduct, isInCart } = useCart()

  const showToast = (
    msg: string, 
    color: string, 
    Icon: React.ComponentType<{color: string}>
  ) => {
    toast(product.title, {
      description: msg,
      richColors: true,
      icon: <Icon color={color} />,
    })
  }

  const handleAdd = (q: number) => {
    if (isInCart(product.id)) {
      showToast("Ya esta en el carrito", '#F59E0B', CircleAlert)
    } else {
      showToast("Se ha agregado al carrito", "green", CircleCheck)
      addProduct({ ...product, quantity: q })
    }
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
        <ProductDetailCounter handleAdd={handleAdd} />
      </div>
    </div>
  )
}

export default ProductDetail
