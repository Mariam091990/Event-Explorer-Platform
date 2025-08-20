import React, { createContext, useEffect, useState } from 'react';

import app from '../firebas/firebase.config'
export const AuthContext= createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
console.log(user);
const [loading, setLoading] = useState(true);

const createUser = (email, password)=> {

    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}




const signIn = (email, password) => {
        //  console.log(email,password);
        setLoading(true);

        return  signInWithEmailAndPassword(auth, email, password);

    }

    const googleSignIn=()=> {

setLoading(true);
return signInWithPopup(auth, googleProvider);

    }



//     const googleSignIn = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);

//     }

//     const updateUser=(updateData)=>{

//         return updateProfile(auth.currentUser, updateData);
//     }

//     const resetPassword = (email)=>{
//         setLoading(true);
//         return  sendPasswordResetEmail (auth, email);

//     }


    const logOut = () => {
        return signOut(auth);

    };

    const updateUser =(updateData)=> {

        return updateProfile(auth.currentUser, updateData);
    }



  useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)

        })
        return () => {

            unSubscribe();
        }

    }, []);






const authData = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        signIn,
         googleSignIn,
         updateUser,
        logOut,
        // resetPassword ,
        
}
    return (
        <AuthContext value={authData} >

{children}


        </AuthContext>
    );
};

export default AuthProvider;