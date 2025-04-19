import MainRouter from './router/MainRouter'
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <MainRouter />
      <Toaster position='bottom-right' theme='system' />
    </>
  )
}

export default App
