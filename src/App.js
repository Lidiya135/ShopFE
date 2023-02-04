import Login from './pages/login';
import Register from './pages/Register';
import ResetPass from './pages/ResetPass';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import MyBag from './pages/MyBag';
import Checkout from './pages/Checkout';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AuthChecker from './components/AuthChecker';
import SellingProduct from './pages/Profile/SellingProduct';
import DetailProduct from './pages/DetailProduct';
import RegisterCustomer from './pages/Register_Customer';
import LoginCustomer from './pages/login_customer';
import Landing from './pages/Landing';
import MyOrder from './pages/Profile/myOrder';
import MyProduct from './pages/Profile/MyProduct';
import MyHistory from './pages/MyHistory';
import Test from './pages/My';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={
            <AuthChecker>
              <Product />
            </AuthChecker>
          } />
          <Route path='/register' element={<Register />} />
          <Route path='/register_customer' element={<RegisterCustomer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login_customer' element={<LoginCustomer />} />
          <Route path='/ResetPass' element={<ResetPass />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/myBag' element={
          <AuthChecker>
            <MyBag />
          </AuthChecker>
          } />
          <Route path='/Checkout' element={
          <AuthChecker>
            <Checkout />
          </AuthChecker>
          } />
          <Route path='/sellingProduct' element={<SellingProduct />} />
          <Route path='/detailProduct' element={<DetailProduct />} />
          <Route path='/detailProduct/:id' element={<DetailProduct />} />
          <Route path='/myOrder' element={<MyOrder />} />
          <Route path='/myProduct' element={<MyProduct />} />
          <Route path='/myHistory' element={<MyHistory />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
