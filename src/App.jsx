import Homepage from '@/pages/Homepage'
import { Routes, Route, useLocation } from 'react-router-dom'
import CartPage from '@/pages/CartPage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from '@/pages/LoginPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductManagementPage from './pages/admin/ProductManagementPage'
import CreateProductPage from './pages/admin/CreateProductPage'
import EditProductPage from './pages/admin/EditProductPage'

function App() {
  
  const location = useLocation();

  console.log(location.pathname)
  
  return(
    <>

      {
        !location.pathname.startsWith("/admin") ? <Header /> : null
      }
      <Routes>
        <Route path="/" Component={Homepage}/>
        <Route path="/cart" Component={CartPage}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path="/product/:productId" Component={ProductDetailPage}/>

        <Route path='/admin'>
          <Route path="product" Component={ProductManagementPage}/>
          <Route path="product/create" Component={CreateProductPage}/>
          <Route path="product/edit/:productId" Component={EditProductPage}/>
        </Route>


        <Route path="*" Component={NotFoundPage}/>

      </Routes>

      {
        !location.pathname.startsWith("/admin") ? <Footer/> : null
      }
    </>
  )
}

export default App;