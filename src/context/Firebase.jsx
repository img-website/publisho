import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_pkRfSNouS62FH8lOI3PyqPaEo5YSSxk",
    authDomain: "demo1-96a43.firebaseapp.com",
    projectId: "demo1-96a43",
    storageBucket: "demo1-96a43.appspot.com",
    messagingSenderId: "764960629301",
    appId: "1:764960629301:web:c6887c4188e1a515d3c77c"
  };

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)

const FirebaseContext = createContext(null)

export  const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) =>{

    const signUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword (firebaseAuth, email, password)
    }
    const signInUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword (firebaseAuth, email, password)
    }
    return (
        <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword,signInUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )

}