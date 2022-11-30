import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Bloges from "../../pages/Bloges/Bloges";
import CategoreClothe from "../../pages/CategoreClothe/CategoreClothe/CategoreClothe";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../pages/Dashboard/Payment/Payment";
import ReportedItems from "../../pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Regiester from "../../pages/Regiester/Regiester";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import SellerRoute from "../SellerRoute/SellerRoute";
import UserRoute from "../UserRoute/UserRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
              path:'/',
              element:<Home></Home>
              
            },
            {
                path:'/login',
                element:<Login></Login>
                
              },
              {
                path:'/regiester',
                element:<Regiester></Regiester>
                
              },
              {
                path:'/categore/:id',
                element:<PrivateRoute><CategoreClothe></CategoreClothe></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/categore/${params.id}`)          
                
              },
              {
                path:'/bloge',
                element:<Bloges></Bloges>
                
              },
              
        ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
       {
        path:'/dashboard/myOrder',
        element:<UserRoute><MyOrders></MyOrders></UserRoute>,
       },
       {
        path:'/dashboard/payment/:id',
        element:<UserRoute><Payment></Payment></UserRoute>,
        loader:({params})=>fetch(`http://localhost:5000/booking/${params.id}`)
       },
       {
        path:'/dashboard/addProduct',
        element:<SellerRoute><AddProduct></AddProduct></SellerRoute>,
       },
       {
        path:'/dashboard/myProduct',
        element:<SellerRoute><MyProduct></MyProduct></SellerRoute>,
       },
       {
        path:'/dashboard/allSeller',
        element:<AdminRoute><AllSellers></AllSellers></AdminRoute>,
       },
       {
        path:'/dashboard/allBuyer',
        element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>,
       },
       {
        path:'/dashboard/ReportedItems',
        element:<AdminRoute><ReportedItems></ReportedItems></AdminRoute>,
       }
       
      ]
      
    },
  //   {
  //     path:'*',
  //     element:<ErrorPage></ErrorPage>
  // }
])