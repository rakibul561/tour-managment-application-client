/* eslint-disable @typescript-eslint/no-explicit-any */
import { role } from "@/constnts/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";

 

 export const getSidebarItems = (userRole:any) =>{
   
    switch (userRole) {
        case role.superAdmin :
          return [...adminSidebarItems]
        case role.admin :
          return [...adminSidebarItems]
        case role.user :
          return [...userSidebarItems]
    
        default:
            return [];
    }

 }