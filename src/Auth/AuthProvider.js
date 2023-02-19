import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const UserRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const UserLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
            setUser(currentUser)
        })
        return ()=> unsubscribe
    },[])
    const Update = (name,photo) =>{
        updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const authInfo = {user,UserRegister,UserLogin,LogOut,loader,setLoader,Update}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;