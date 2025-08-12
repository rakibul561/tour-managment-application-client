/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const verify = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const [email ] = useState(location.state)
    
   
    useEffect(() => {
        if(!email){
            navigate('/')
        }

    }, [email])

    return (
        <div>
            <h2>this is a verify page</h2>
       
        </div>
    );
};

export default verify;