import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexte/AutheProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const location = useLocation()
    const {user,loader}=useContext(AuthContext)
    const [admin,adminLoading]=useAdmin(user?.email)
    if(loader || adminLoading){
        return <p>loadin....</p>
    }
    if(user && admin){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;