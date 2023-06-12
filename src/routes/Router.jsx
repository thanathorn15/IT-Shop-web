import {RouterProvider, createBrowserRouter, Outlet, Navigate  } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/AuthContext'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Products from '../pages/Products'
import MyOrder from '../pages/MyOrder'
import Cart from '../pages/Cart'




export default function Router() {
  const {user} = useAuth()
 
  const router = createBrowserRouter([
    {
        path: '/',
        element : (
            <>
            <Navbar />
            <Outlet />
            </>
        ),
        errorElement: <Navigate to='/' />,
        children : [
            {
                path: '/',
                element: user? <Home/> : <Login />
            },
            {
                path: 'login',
                element: user? <Navigate to='/' /> : <Login />
            },
            {
                path: 'register',
                element: user ? <Navigate to='/' /> : <Register />
            },
            {
              path: 'product',
              element: user ? <Products /> :<Navigate to='/' /> 
          },
          {
            path: 'cart',
            element: user ? <Cart /> :<Navigate to='/' /> 
        },
          {
            path: 'myorder',
            element: user ?  <MyOrder />:<Navigate to='/' /> 
        },
       
     ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}
