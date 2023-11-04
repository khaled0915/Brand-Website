import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import BrandsDetails from "../Pages/BrandsDetails/BrandsDetails";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import UpdatedProduct from "../UpdatedProduct/UpdatedProduct";

const routes = createBrowserRouter([


    {
        path : '/',
        element : <Root></Root>,
        errorElement  : <ErrorPage></ErrorPage>,
        children : [

            {
                path : '/',

                element : <Home></Home>,
                loader : () => fetch('/brands.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/addProduct',
                element : <PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>
            },

           

            {
                path: '/brands/:brand_name',
                element: <BrandsDetails></BrandsDetails>,
                loader: ({ params }) => fetch(`https://brand-server-rho.vercel.app/product/${params.brand_name}`)
              },

              {
                path: '/products/:id',
                element: <PrivateRoute> <ProductDetail></ProductDetail> </PrivateRoute>,

                loader: () => fetch('https://brand-server-rho.vercel.app/product')
              },
            
              
           
            










        ]
    }
















])

export default routes ;
    