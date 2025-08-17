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
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constnts/role";
import type { TRole } from "@/types";
import Unauthorized from "@/pages/Unauthorized ";
import Tour from "@/pages/Tour";
import TourDetails from "@/pages/TourDetails";
import HomePage from "@/pages/HomePage";
import Booking from "@/pages/Booking";
import Fail from "@/pages/fail";
import SuccessPayment from "@/pages/success";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: withAuth(About),
        path: "/about",
      },
      {
        Component: Tour,
        path: "/tours",
      },
      {
        Component: TourDetails,
        path: "tours/:id",
      },
      {
        Component: TourDetails,
        path: "tours/:id",
      },
      {
        Component: withAuth(Booking),
        path: "booking/:id",
      },
    ],
  },

  {
    path: "/admin",
    Component: withAuth(DashBoardLayout, role.superAdmin as TRole),
    children: [
      { index: true, element: <Navigate to="/admin/analytices" /> },

      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "/user",
    Component: withAuth(DashBoardLayout, role.user as TRole),
    children: [
      { index: true, element: <Navigate to="/user/bookings" /> },
      ...generateRoutes(userSidebarItems),
    ],
  },

  {
    Component: LoginPage,
    path: "/login",
  },
  {
    Component: RegisterPage,
    path: "/register",
  },
  {
    Component: verify,
    path: "/verify",
  },

  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
  {
    Component: SuccessPayment,
    path: "/payment/success",
  },
  {
    Component: Fail,
    path: "/payment/fail",
  },
]);
