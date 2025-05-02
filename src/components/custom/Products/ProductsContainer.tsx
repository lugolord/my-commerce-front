import { useState, useEffect } from 'react'
import { Product } from '@/types/api'
import ProductsPagination from './ProductsPagination'
import ProductsList from './ProductsList'
import { useSearchParams, useParams } from 'react-router'

function ProductsContainer  () {
  const [products, setProducts] = useState<Product[] | []>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const skip = searchParams.get("skip") || "0"
  const { category } = useParams()

  useEffect(() => {
    const urlCategories = `https://dummyjson.com/products/category/${category}`
    const urlProducts = `https://dummyjson.com/products?limit=10&skip=${skip}`

    fetch(category ? urlCategories : urlProducts)
      .then(res => res.json())
      .then(data => setProducts(data.products))

    return () => {
      setProducts([])
    }
  }, [skip, category])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleNext = () => {
    scrollTop()
    setSearchParams({ limit: '10',  skip: `${parseInt(skip) + 10}`})
  }
  
  const handlePrev = () => {
    scrollTop()
    setSearchParams({ limit: '10',  skip: `${parseInt(skip) - 10}`})
  }

  return (
    <>
      <ProductsList products={products} />
      {!category ? (
        <ProductsPagination 
          handleNext={handleNext} 
          handlePrev={handlePrev} 
          skip={parseInt(skip)} 
        />
        ) : ''
      }
    </>
  )
}

export default ProductsContainer
