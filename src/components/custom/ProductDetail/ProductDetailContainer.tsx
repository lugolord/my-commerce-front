import { useState, useEffect } from 'react'
import { Product } from '@/types/api'
import { useParams } from 'react-router'
import ProductDetailSkeleton from './ProductDetailSkeleton'
import ProductDetail from './ProductDetail'

function ProductDetailContainer () {
  const [product, setProduct] = useState<Product>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setProduct(data)
        }, 2000)
      })
  }, [id])

  return (
    <>
      {!product ? <ProductDetailSkeleton /> : <ProductDetail product={product} />}
    </>
  )
}

export default ProductDetailContainer
