import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader , setLoader] = useState(true);
    

    const createUser = (email , password ) =>{
        setLoader(true);
        
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const createLogin = (email , password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser);
            setLoader(false);
        })

        return () =>{
            return unsubscribe();
        }
    },[])

    const userUpdateData =(logUser, name,photo) =>{
        console.log(photo);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
          })
    }

    const authInfo ={
        user,
        loader,
        createUser,
        createLogin,
        logOut,
        userUpdateData
       
    }

    return (
        <AuthContext.Provider value={authInfo}>

                {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;