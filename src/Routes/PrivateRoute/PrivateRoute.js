import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexte/AutheProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loader}=useContext(AuthContext)
    if(loader){
        return <p>loadin....</p>
    }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;