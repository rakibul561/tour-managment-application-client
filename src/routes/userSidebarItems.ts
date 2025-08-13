
import Booking from "@/pages/user/Booking";
import type { ISidebar } from "@/types";


export const userSidebarItems:ISidebar[] = [
    {
      title: "History",
      items:[
        {
           title: "Booking",
           url: "/user/bookings",
           component: Booking
        }
      ]
    },
   
  
  ]