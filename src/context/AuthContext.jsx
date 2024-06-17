import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getIdToken,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { db, useFirebase } from "./Firebase";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const AuthContext = createContext(null);

export const useAuthentication = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const { firebaseAuth } = useFirebase();

  //   console.log("firebaseAuth", firebaseAuth);

  const signUpUserWithEmailAndPassword = async (
    email,
    password,
    displayName
  ) => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then( async(res) => {
        const { user } =  res;
        console.log("usersignup", user);
        await setDoc(doc(collection(db, "Users"), user.uid), {
            displayName: user.displayName || displayName,
            email: user.email,
            createdAt:user.metadata.createdAt,
            creationTime:user.metadata.creationTime,
            lastLoginAt:user.metadata.lastLoginAt,
            lastSignInTime:user.metadata.lastSignInTime,
          });

           // Get the user's ID token
        const idToken = await getIdToken(user);
        // console.log("ID Token:", idToken);

        // Store the token 
        localStorage.setItem("accessToken", idToken);

        toast.success("Signup Successful , Login Please", {
          description: "Welcome to the app",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
        switch (error.code) {
          case "auth/email-already-in-use":
            toast.error("Email already in use.", {
              description: "Please choose a different email address.",
            });
            break;
          case "auth/weak-password":
            toast.error("Password is too weak.", {
              description:
                "Please choose a stronger password with at least 6 characters.",
            });
            break;
          case "auth/invalid-email":
            toast.error("Invalid email format.", {
              description: "Please enter a valid email address.",
            });
            break;
          case "auth/too-many-requests":
            toast.error("Too many signup attempts.", {
              description: "Please try again later.",
            });
            break;
          // Handle other potential errors (see Firebase documentation)
          default:
            console.error("Unexpected signup error:", error);
            toast.error("An error occurred during signup. Please try again.");
        }
      })
      .finally(() => {});
  };

  //   SignIn function

  const signInUserWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(async(res) => {
        const { user } =  res;
        console.log(res.user);
           // Get the user's ID token
        const idToken = await getIdToken(user);
        // console.log("ID Token:", idToken);

        // Store the token 
        localStorage.setItem("accessToken", idToken);

        toast.success("Login Successful", {
          description: "Welcome to the app",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error); 
        switch (error.code) {
          case "auth/user-not-found":
            toast.error("user-not-found", {
              description:
                "There is no existing user Please enter a valid email address.",
            });
            break;
          case "auth/invalid-email":
            toast.error("Invalid email format.", {
              description: "Please enter a valid email address.",
            });
            break;
          case "auth/too-many-requests":
            toast.error("Too many signup attempts.", {
              description: "Please try again later.",
            });
            break;
          // Handle other potential errors (see Firebase documentation)
          default:
            console.error("Unexpected signup error:", error);
            toast.error("An error occurred during signup. Please try again.");
        }
      })
      .finally(() => {});
  };

  // Password reset function
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      toast.success("Password reset email sent.", {
        description: "Please check your email to reset your password.",
      });
    } catch (error) {
      console.error("Password reset error:", error);
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("User not found.", {
            description: "Please enter a valid email address.",
          });
          break;
        case "auth/invalid-email":
          toast.error("Invalid email format.", {
            description: "Please enter a valid email address.",
          });
          break;
        case "auth/too-many-requests":
          toast.error("Too many password reset attempts.", {
            description: "Please try again later.",
          });
          break;
        default:
          toast.error(
            "An error occurred during password reset. Please try again."
          );
      }
    }
  };

  // Google Sign-In Function
  const signInWithGoogle = async (signUp) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const user = result.user;
      console.log("Google Sign-In Successful:", user);
      //   return user
      if (signUp) {
        // const docRef = await addDoc(collection(db, "Users"), {
        //     displayName:user.displayName,
        //     email:user.email
        //   });
        await setDoc(doc(collection(db, "Users"), user.uid), {
          displayName: user.displayName,
          email: user.email,
        });
      }

      const idToken = await getIdToken(user);
      // console.log("ID Token:", idToken);

      // Store the token 
      localStorage.setItem("accessToken", idToken);
      toast.success("Google Sign-In Successful", {
        description: "Welcome to the app",
      });

      navigate("/"); 
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("An error occurred during Google Sign-In. Please try again.");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        sendPasswordReset,
        signInWithGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
