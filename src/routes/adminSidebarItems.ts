import AddTour from "@/pages/admin/AddTour";
// import Analytices from "@/pages/admin/Analytics";
import type { ISidebar } from "@/types";
import { lazy } from "react";

 

const  Analytices = lazy(()=> import ("@/pages/admin/Analytics"))

export const adminSidebarItems:ISidebar[] = [
    {
      title: "Dashboard",
      items:[
        {
           title: "Analytices",
           url: "/admin/analytices",
           component: Analytices
        }
      ]
    },
    {
      title: "Tour Managment",
      items:[
        {
           title: "Add Tour",
           url: "/admin/add-tour",
           component: AddTour
        },
        {
           title: "Add TourType",
           url: "/admin/add-tour-type",
           component: AddTour
        }
      ]
    },
    
  
  ]