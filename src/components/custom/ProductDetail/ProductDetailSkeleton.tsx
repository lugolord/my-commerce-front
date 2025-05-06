import { Button } from '../../ui/button'
import { Skeleton } from '../../ui/skeleton'
import ProducDetailCarousel from './ProductDetailCarousel'

function ProductDetailSkeleton () {
  return (
    <div className='grid lg:grid-cols-2 place-items-center justify-items-center h-[80vh]'>
      <ProducDetailCarousel images={[]} />
      <div className='h-[400px] w-[70%] md:w-[50%] lg:w-[70%] lg:justify-self-start flex flex-col justify-between'>
        <div>
          <Skeleton className="h-4 w-[250px] mb-3" />
          <Skeleton className="h-4 w-[200px] mb-3" />
          <Skeleton className="h-4 w-[200px] mb-3" />
        </div>
        <Skeleton className="h-20 w-[100%]" />
        <div className='flex flex-col'>
          <input type="number" className='border p-1 mb-2 rounded text-center' defaultValue={1} disabled />
          <Button disabled>add to cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton
