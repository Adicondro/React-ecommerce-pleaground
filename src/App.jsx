import Homepage from '@/pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import CartPage from '@/pages/CartPage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from '@/pages/LoginPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" Component={Homepage}/>
        <Route path="/cart" Component={CartPage}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path="*" Component={NotFoundPage}/>
        <Route path="/product/:productId" Component={ProductDetailPage}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;