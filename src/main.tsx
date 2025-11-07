import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CartProvider from './context/CartProvider.tsx'
import { initMercadoPago } from '@mercadopago/sdk-react'

initMercadoPago('APP_USR-c8381a73-ae1c-4d7e-818c-d8b27daf9fa5')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
