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
import ReportedItems from "../../pages/Dashboard/ReportedItems/ReportedItems";

import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Regiester from "../../pages/Regiester/Regiester";
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
      children:[
       {
        path:'/dashboard/myOrder',
        element:<MyOrders></MyOrders>,
       },
       {
        path:'/dashboard/addProduct',
        element:<AddProduct></AddProduct>,
       },
       {
        path:'/dashboard/myProduct',
        element:<MyProduct></MyProduct>,
       },
       {
        path:'/dashboard/allSeller',
        element:<AllSellers></AllSellers>,
       },
       {
        path:'/dashboard/allBuyer',
        element:<AllBuyers></AllBuyers>,
       },
       {
        path:'/dashboard/ReportedItems',
        element:<ReportedItems></ReportedItems>,
       }
       
      ]
      
    },
    {
      path:'*',
      element:<h1>no route found</h1>
  }
])