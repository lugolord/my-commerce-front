import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from '../components/custom/Navbar'
import ProductsContainer from '../components/custom/ProductsContainer'
import ProductDetailContainer from '../components/custom/ProductDetailContainer'
import CartContainer from '@/components/custom/CartContainer'
import CartProvider from '@/context/CartProvider'

function MainRouter () {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
      </CartProvider>
      <Routes>
        <Route path='/' element={<ProductsContainer />} />
        <Route path='/category/:category' element={<ProductsContainer />} />
        <Route path='/products/:id' element={<ProductDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
