import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {

    const [user  ,setUser] = useState(null);

    const [loading , setLoading] = useState(true);


    // for registration 

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email ,password);

    }

    // for login 

    const logIn = (email , password ) =>{
        return signInWithEmailAndPassword(auth , email , password );

    }

    // logout 

    const logOut = () => {
        return signOut(auth);
    }


    // onAuthStateChange

useEffect ( ( ) => {

    const unSubscribe =    onAuthStateChanged(auth , currentUser => {

        console.log('user in the auth state change' , currentUser);

        setUser(currentUser);
        setLoading(false);


    })

    return () => {
        unSubscribe();
    }





} , [] )
    

const userInfo = {

    user ,
    createUser,
    logIn,
    loading,
    logOut
}
    return (
        <AuthContext.Provider value={userInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;