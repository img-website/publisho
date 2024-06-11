import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

function Login() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSignInUserWithEmailAndPassword = async () => {
      try {
        await firebase.signInUserWithEmailAndPassword(email,password)
        alert("Login successful!");
      } catch (error) {
        alert("Signin failed: " + error.message);
      }
  }

  console.log(firebase, "login");
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
        <button onClick={HandleSignInUserWithEmailAndPassword}>Signup</button>
      </div>
    </div>
  );
}

export default Login;
