import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

function Signup() {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const HandleSignUpUserWithEmailAndPassword = async () => {
        try {
            await firebase.signUpUserWithEmailAndPassword(email, password);
            alert("Signup successful!");
        } catch (error) {
            alert("Signup failed: " + error.message);
        }
    };

    console.log(firebase, "firebase");
  return (
    <div>
      <h1>Firebase</h1>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="enter email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="enter password"
        />
        <button onClick={HandleSignUpUserWithEmailAndPassword}>Signup</button>
      </div>
    </div>
  )
}

export default Signup