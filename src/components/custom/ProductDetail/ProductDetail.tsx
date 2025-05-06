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
    } 
    else if (q > 0 && q <= product.stock) {
      addProduct({ ...product, quantity: q })
      showToast("Se ha agregado al carrito", "green", CircleCheck)
    }
    else if (q > product.stock) {
      showToast("La cantidad excede al stock", '#f40b07', CircleAlert)
    }
  }

  return (
    <div className='grid place-items-center lg:grid-cols-2 lg:place-items-center lg:justify-items-center lg:h-[80vh] mt-5 mb-10 md:mb-0'>
      <ProducDetailCarousel images={product?.images} />
      <div className='w-[70%] md:w-[50%] lg:w-[70%] lg:justify-self-start flex flex-col justify-between h-[440px]'>
        <div className='lg:mb-5'>
          <h2 className='text-2xl'>{product?.title}</h2>
          <p>{product?.brand}</p>
          <p>{product?.stock ? `${product.stock} in stock 🟢` : 'No stock 🔴'}</p>
        </div>
        <p className='mb-5 mf lg:mb-5'>{product?.description}</p>
        <ProductDetailCounter handleAdd={handleAdd} disabled={product.stock === 0} stock={product.stock} />
      </div>
    </div>
  )
}

export default ProductDetail
