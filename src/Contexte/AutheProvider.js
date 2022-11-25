import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AutheProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)


// create user
const userRegister = (email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
// user observer
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        console.log('curent user')
        setUser(currentUser)
        setLoader(false)
    });
return ()=>unsubscribe()
},[])

    const authInfo = {userRegister,user,loader}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AutheProvider;