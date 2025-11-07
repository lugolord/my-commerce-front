import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from '../components/custom/Navbar/Navbar'
import ProductsContainer from '../components/custom/Products/ProductsContainer'
import ProductDetailContainer from '../components/custom/ProductDetail/ProductDetailContainer'
import CartContainer from '@/components/custom/Cart/CartContainer'
import OrderSuccess from '@/components/custom/Order/OrderSuccess'
import FailOrder from '@/components/custom/Order/FailOrder'
import CheckoutContainer from '@/components/custom/Checkout/CheckoutContainer'

function MainRouter () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductsContainer />} />
        <Route path='/category/:category' element={<ProductsContainer />} />
        <Route path='/products/:id' element={<ProductDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
        <Route path='/success' element={<OrderSuccess />} />
        <Route path='/fail' element={<FailOrder />} />
        <Route path='/checkout' element={<CheckoutContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter
