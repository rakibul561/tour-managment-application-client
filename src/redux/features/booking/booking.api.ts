import { baseApi } from "@/redux/baseApi";


 

  
 export  const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        createBooking: builder.mutation({
            query: (bookingData) => ({
                url: "/booking",
                method: "POST",
                data: bookingData
            }),
               invalidatesTags: ["BOOKING"],
        }),
       
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo
            }),
           
        }),
        

        
    })
  }) 


  export const {
    useCreateBookingMutation
   

  } = authApi