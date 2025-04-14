import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
  handleNext: React.MouseEventHandler
  handlePrev: React.MouseEventHandler
  skip: number
}

function ProductsPagination ({ handleNext, handlePrev, skip } : Props) {
  return (
    <Pagination className='my-8'>
      <PaginationContent>
        <PaginationItem>
          {skip > 0 ? <PaginationPrevious onClick={handlePrev} className='cursor-pointer' /> : ''}
        </PaginationItem>
        <PaginationItem>
          {skip <= 180 ? <PaginationNext onClick={handleNext} className='cursor-pointer' /> : ''}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default ProductsPagination
