import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import MyOrder from './pages/MyOrder'
import Login from './pages/Login'
import Cart from './pages/Cart'






function App() {


  return (
    <>
     <Navbar/>
     <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/product' element={<Products/>} />
  <Route path='/myorder' element={<MyOrder/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/login' element={<Login/>} />
 
 
</Routes>

    </>
  )
}

export default App
