import {RouterProvider, createBrowserRouter, Outlet, Navigate  } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/AuthContext'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Products from '../pages/Products'
import MyOrder from '../pages/MyOrder'
import Cart from '../pages/Cart'
import AddProduct from '../pages/AddProduct'
import AdminProducts from '../pages/AdminProducts'
import EditProduct from '../pages/EditProduct'


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
                element: <Home/> 
            },
            {
                path: 'login',
                element:  <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
              path: 'product',
              element: <Products />  
          },
          {
            path: 'cart',
            element:<Cart /> 
        },
          {
            path: 'myorder',
            element:  <MyOrder />
        },

        {
          path: 'adminproduct',
          element: <AdminProducts /> 
      },
      {
        path: 'addproduct',
        element:  <AddProduct/>
    },

    {
      path: 'editproduct/:id',
      element:  <EditProduct/>
  },
   

       
     ]
    },


  ])
  return (
    <RouterProvider router={router}/>
  )
}



