import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton } from '../ui/skeleton'

function ProducDetailCarousel ({ images } : { images: string[] | undefined }) {
  return (
    <Carousel className='w-96'>
      <CarouselContent>
        {images?.length === 0 ? <Skeleton className='w-[100%] h-[300px] bg-accent' /> : ''}
        {images?.map((image, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={image} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ProducDetailCarousel
