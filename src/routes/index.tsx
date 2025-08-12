
import App from "@/App";
import About from "@/pages/About";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import verify from "@/pages/verify";
import { createBrowserRouter } from "react-router";


 
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