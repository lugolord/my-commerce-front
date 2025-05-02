import { Skeleton } from '../ui/skeleton'
import ProductsLayout from './Products/ProductsLayout'

const placeholders = ['','','', '','', '', '', '']

function CardsPlaceholder () {
  return (
    <ProductsLayout>
      {placeholders.map((p, i) => (
        <div className="w-full aspect-[4/5] min-h-full" key={i}>
          <Skeleton className='w-[100%] h-[100%]' />
        </div>
      ))}
    </ProductsLayout>
  )
}

export default CardsPlaceholder
