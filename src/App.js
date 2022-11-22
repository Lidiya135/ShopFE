import Login from './pages/login'
import Register from './pages/Register'
import ResetPass from './pages/ResetPass'
import Home from './pages/Home'
import Product from './pages/Product'
import Profile from './pages/Profile'
import MyBag from './pages/MyBag'
import Checkout from './pages/Checkout'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import AuthChecker from './components/AuthChecker'
import SellingProduct from './pages/SellingProduct'
import DetailProduct from './pages/DetailProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} replace="true" />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={
            <AuthChecker>
              <Product />
            </AuthChecker>
          } />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/ResetPass' element={<ResetPass />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/myBag' element={<MyBag />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/sellingProduct' element={<SellingProduct />} />
          <Route path='/DetailProduct' element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
