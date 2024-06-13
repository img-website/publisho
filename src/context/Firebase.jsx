import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(firebaseApp);

const FirebaseContext = createContext(null)

export  const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) =>{
    return (
        <FirebaseContext.Provider value={{ firebaseAuth }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}