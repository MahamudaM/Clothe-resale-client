import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import CategoreClothe from "../../pages/CategoreClothe/CategoreClothe/CategoreClothe";
import CategoreCard from "../../pages/Home/CategoreCard/CategoreCard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Regiester from "../../pages/Regiester/Regiester";

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
                element:<CategoreClothe></CategoreClothe>            
                
              },
        ]
    }
])