import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
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

// login user 
const login =(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// log out
const logOut =()=>{
    setLoader(true)
    return signOut(auth)
}
// update userj
const updateUser = (userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
}
// google sign in 
const googleSignIn =provider=>{
    setLoader(true)
    return signInWithPopup(auth,provider)
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

    const authInfo = {userRegister,user,loader,login,logOut,googleSignIn,updateUser}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AutheProvider;