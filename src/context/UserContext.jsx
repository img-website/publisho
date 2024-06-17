import React, { createContext, useContext, useEffect, useState } from "react";
import { useFirebase } from "./Firebase"; 
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { firebaseAuth } = useFirebase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
