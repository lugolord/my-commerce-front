import { Spinner } from '@/components/ui/spinner'

function CheckOrder () {
  return (
    <div className='flex items-center justify-center gap-5 h-screen'>
      <Spinner className='size-5' />
      <p className='text-2xl'>Checking id</p>
    </div>
  )
}

export default CheckOrder
