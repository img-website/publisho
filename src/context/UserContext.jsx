import React, { createContext, useContext, useEffect, useState } from "react";
import { useFirebase } from "./Firebase"; 
import { getIdToken, onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { firebaseAuth } = useFirebase();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
      console.log("chal gaya")
      if(user) {
        getIdToken(user).then((token)=>{
            localStorage.setItem('accessToken', token);            
            setIsAuthenticated(true)
        })
      } else {
        setIsAuthenticated(false)
        localStorage.removeItem('accessToken');
      }
    });
  }, []);


console.log({ isAuthenticated })
  return (
    <UserContext.Provider value={{ currentUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
