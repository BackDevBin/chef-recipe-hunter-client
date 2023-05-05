import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

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

    const userUpdateData =(logUser, name,photo) =>{
        
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
          })
    }

    const GoogleLogin = () =>{
        
        return signInWithPopup(auth,googleProvider)
    }

    const GithubLogin = () =>{
        
        return signInWithPopup(auth,gitProvider)
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

    const authInfo ={
        user,
        loader,
        createUser,
        createLogin,
        logOut,
        userUpdateData,
        GoogleLogin,
        GithubLogin
       
    }

    return (
        <AuthContext.Provider value={authInfo}>

                {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;