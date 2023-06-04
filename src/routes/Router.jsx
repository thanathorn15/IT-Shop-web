import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import MyOrder from './pages/MyOrder'
import Login from './pages/Login'
import Register from '../pages/Register'


export default function Router() {
  return (
    <div>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/product' element={<Products/>} />
  <Route path='/myorder' element={<MyOrder/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
 
 
</Routes>
    </div>
  )
}
