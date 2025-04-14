import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Separator } from '../ui/separator'
import { AspectRatio } from '../ui/aspect-ratio'
import { Product } from '@/types/api'
import { useNavigate } from 'react-router'

function ProductCard ({ prod } : { prod: Product }) {
  const navigate = useNavigate()

  return (
    <Card className='cursor-pointer' onClick={() => navigate(`/products/${prod.id}`)}>
      <CardHeader>
        <CardTitle>{prod.title}</CardTitle>
        <AspectRatio ratio={4/5}>
          <img src={prod.thumbnail} alt="" loading='lazy' />
        </AspectRatio>
      </CardHeader>
      <CardContent className='flex justify-around gap-3'>
        <p>${prod.price}</p>
        <Separator orientation='vertical' />
        <p>{prod.category}</p>
      </CardContent>
    </Card>  
  )
}

export default ProductCard

