import { Product } from '@/types/api'
import ProductsLayout from './ProductsLayout'
import ProductCard from '../ProductCard'
import CardsPlaceholder from '../CardsPlaceholder'

function ProductsList ({ products } : { products: Product[] }) {
  if (!products.length) {
    return <CardsPlaceholder />
  }

  return (
    <ProductsLayout>
      {products.map(prod => <ProductCard prod={prod} key={prod.id} />)}
    </ProductsLayout>
  )
}

export default ProductsList
