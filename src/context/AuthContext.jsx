import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { db, useFirebase } from "./Firebase";
import { toast } from "sonner";
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuthentication = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const { firebaseAuth } = useFirebase();
  const navigate = useNavigate();

  //   console.log("firebaseAuth", firebaseAuth);

  const signUpUserWithEmailAndPassword = async (
    email,
    password,
    displayName
  ) => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then( async(res) => {
        const { user } =  res;
        // console.log("usersignup", user);
        await setDoc(doc(collection(db, "users"), user.uid), {
          displayName: user.displayName || displayName,
          email: user.email,
          creationAt:user.metadata.creationTime,
          lastSignInAt:user.metadata.lastSignInTime,
          isAdmin: false,
          });
          navigate("/")
        toast.success("Signup Successful , Login Please", {
          description: "Welcome to the app",
        });
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
  };

  //   SignIn function

  const signInUserWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(async(res) => {
        const { user } =  res;
        console.log(res.user);
        await setDoc(doc(collection(db, "users"), user.uid), {
          lastSignInAt:user.metadata.lastSignInTime,
        }, {merge: true});
        navigate("/")
        toast.success("Login Successful", {
          description: "Welcome to the app",
        });
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
        await setDoc(doc(collection(db, "users"), user.uid), {
          displayName: user.displayName || displayName,
          email: user.email,
          creationAt:user.metadata.creationTime,
          lastSignInAt:user.metadata.lastSignInTime,
          isAdmin: false,
        });
      }else {
        await setDoc(doc(collection(db, "users"), user.uid), {
          lastSignInAt:user.metadata.lastSignInTime,
        },{merge: true});
      }
      navigate("/")
      toast.success("Google Sign-In Successful", {
        description: "Welcome to the app",
      });

    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("An error occurred during Google Sign-In. Please try again.");
    }
  };


  const handleLogout = async () => {
    await signOut(firebaseAuth).then(()=> {
      toast.success("Logout Successfully")
    }).catch((error)=>{
      toast.error(error?.message)
    })
  }

  return (
    <AuthContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        sendPasswordReset,
        signInWithGoogle,
        handleLogout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
