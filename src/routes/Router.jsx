
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Home from "../pages/Home";
import Products from '../pages/Products'
import MyOrder from "../pages/MyOrder";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Navbar from '../components/Navbar'


export default function Router() {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <>
        <Navbar />
        <Outlet />
      </>,
      children : [
        { index: true , element: <Home/> },
        { path: 'login' , element: <Login />},
        { path: 'register' , element: <Register/> },
        { path: 'product' , element: <Products/> },
        { path: 'myOrder' , element: <MyOrder/> },
        { path: 'cart' , element: <Cart/> },
        // { path: '/logout' , element: <div className="text-xl">Logout</div> },
        { path: '*', element: <h1 className='text-xl text-red-500 flex justify-center'>Page not found</h1>}
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

