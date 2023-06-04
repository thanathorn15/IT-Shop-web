import {Link,NavLink,BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import MyOrder from './pages/MyOrder'
import Login from './pages/Login'



function App() {


  return (
    <BrowserRouter>
    <>
     <div>
         <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">IT Shop</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><Link to= '/'>Home</Link></li>
      <li><Link to = '/product'>Products</Link></li>
      <li><Link to = '/myorder'>MyOrder</Link></li>
      <li><Link to = '/login'>Login</Link></li>
      
    </ul>
  </div>
</div>
    </div>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/product' element={<Products/>} />
  <Route path='/myorder' element={<MyOrder/>} />
  <Route path='/login' element={<Login/>} />
 
 
</Routes>
    </>
</BrowserRouter>
  )
}

export default App
