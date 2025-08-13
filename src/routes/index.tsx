
import App from "@/App";
import DashBoardLayout from "@/components/layout/DashBoardLayout";
import About from "@/pages/About";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import verify from "@/pages/verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";


 
 
export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                Component: About,
                path: '/about'
            }
        ]
    },

      {
        path: '/admin',
        Component:DashBoardLayout,
        children:[
     {index: true, element: <Navigate to= '/admin/analytices' />},

            ... generateRoutes(adminSidebarItems)
        
        ]
    },
    {
        path: '/user',
        Component:DashBoardLayout,
        children: [
      {index: true, element: <Navigate to= '/user/bookings' />},
           ...generateRoutes(userSidebarItems)
        ]
    },
  
    {
        Component: LoginPage,
        path: '/login'
    },
    {
        Component: RegisterPage,
        path: '/register'
    },
    {
        Component: verify,
        path: '/verify'
    }
    
])