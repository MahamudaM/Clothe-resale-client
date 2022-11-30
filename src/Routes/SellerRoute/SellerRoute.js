import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexte/AutheProvider';

import useSeller from '../../Hooks/useSeller';

const SellerRoute = ({children}) => {
    const location = useLocation()
    const {user,loader}=useContext(AuthContext)
    const [seller,sellerLoading]=useSeller(user?.email)
    if(loader || sellerLoading){
        return <button className="btn loading">loading</button>
    }
    if(user && seller){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default SellerRoute;