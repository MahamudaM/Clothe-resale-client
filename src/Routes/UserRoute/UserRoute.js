import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexte/AutheProvider';
import useUser from '../../Hooks/useUser';

const UserRoute = ({children}) => {
    const location = useLocation()
    const {user,loader}=useContext(AuthContext)
    const [userCheck,userCheckLoading]=useUser(user?.email)
    if(loader || userCheckLoading){
        return <button className="btn loading">loading</button>
    }
    if(user && userCheck){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default UserRoute;