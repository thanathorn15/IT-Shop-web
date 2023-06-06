import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Navbar from "../components/Navbar";

export default  Router = () => {
  const router = createBrowserRouter([

    { path: "/home", element: <Home /> },
  ]);
 
  return <RouterProvider router={router} />;
}
