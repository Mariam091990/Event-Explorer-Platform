import React, { createContext, useState } from 'react';


export const AuthContext= createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../firebas/firebase.config'
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password)=> {

    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}




const signIn = (email, password) => {
        //  console.log(email,password);
        setLoading(true);

        return  signInWithEmailAndPassword (auth, email, password);

    }



    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const updateUser=(updateData)=>{

        return updateProfile(auth.currentUser, updateData);
    }


const authData = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        signIn,
        googleSignIn,
        updateUser,
        
}
    return (
        <AuthContext value={authData} >

{children}


        </AuthContext>
    );
};

export default AuthProvider;