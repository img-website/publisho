import React, { useState } from "react";
import Loading from "../Loading";
import { useAuthentication } from "../../context/AuthContext";
import { Button, Input } from "@nextui-org/react";
import { Eyeopenicon, Eyecloseicon, Googleicon,Loginicon } from "../../component/Icons";
import { Link } from "react-router-dom";

function Login() {
  const allAuth = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleSignUpWithGoogle = async () => {
    setLoading(true);
    try {
      await allAuth.signInWithGoogle("signUp");
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  const HandleSignInUserWithEmailAndPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await allAuth.signInUserWithEmailAndPassword(email, password);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  console.log(allAuth, "login");
  return (
    <div>
      {/* {loading && <Loading />} */}
      <div className="h-dvh  flex justify-center items-center">
        <div className="max-w-[400px] h-max rounded-xl  flex flex-col justify-center items-center w-full mx-auto px-4 sm:px-8 xl:px-0 shadow-2xl">
          <div className="rounded-xl bg-white w-full shadow-box p-4 sm:p-7.5 xl:p-12.5">
            <div className="text-center mb-">
              <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black">
                Sign In
              </h1>
              <p className="text-body my-2">Sign in your account</p>
            </div>
            <Button
              onClick={HandleSignUpWithGoogle}
              className="w-full !border-black hover:!bg-black/10 text-sm font-semibold"
              variant="bordered"
              startContent={<Googleicon />}
            >
              Login With Google
            </Button>
            {/* <button className="mt-4 w-full flex items-center justify-center gap-2.5 text-dark p-3.5 rounded-lg border border-gray-4 ease-in duration-200 hover:border-gray-5 hover:bg-gray">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9997 1.83331C5.93773 1.83331 1.83301 6.04119 1.83301 11.232C1.83301 15.3847 4.45954 18.9077 8.10178 20.1505C8.55988 20.2375 8.72811 19.9466 8.72811 19.6983C8.72811 19.4743 8.71956 18.7338 8.71567 17.9485C6.16541 18.517 5.6273 16.8395 5.6273 16.8395C5.21032 15.7532 4.60951 15.4644 4.60951 15.4644C3.77785 14.8811 4.6722 14.893 4.6722 14.893C5.59272 14.9593 6.07742 15.8615 6.07742 15.8615C6.89499 17.2984 8.22184 16.883 8.74493 16.6429C8.82718 16.0353 9.06478 15.6208 9.32694 15.3861C7.2909 15.1484 5.15051 14.3425 5.15051 10.7412C5.15051 9.71509 5.5086 8.87661 6.09503 8.21844C5.99984 7.98167 5.68611 7.02577 6.18382 5.73115C6.18382 5.73115 6.95358 5.47855 8.70532 6.69458C9.43648 6.48627 10.2207 6.3819 10.9997 6.37836C11.7787 6.3819 12.5635 6.48627 13.2961 6.69458C15.0457 5.47855 15.8145 5.73115 15.8145 5.73115C16.3134 7.02577 15.9995 7.98167 15.9043 8.21844C16.4921 8.87661 16.8477 9.715 16.8477 10.7412C16.8477 14.351 14.7033 15.146 12.662 15.3786C12.9909 15.6702 13.2838 16.2423 13.2838 17.1191C13.2838 18.3766 13.2732 19.3888 13.2732 19.6983C13.2732 19.9485 13.4382 20.2415 13.9028 20.1492C17.5431 18.905 20.1663 15.3833 20.1663 11.232C20.1663 6.04119 16.0621 1.83331 10.9997 1.83331Z"
                  fill="#15171A"
                ></path>
              </svg>
              Sign in with Github
            </button> */}
            <span className="relative block text-custom-sm text-center mt-4 mb-2">
              <span className="block absolute left-0 top-1/2 h-px max-w-30 w-full bg-gray-300"></span>
              <span className="block absolute right-0 top-1/2 h-px max-w-30 w-full bg-gray-300"></span>
              <div className="bg-white w-max mx-auto font-semibold text-sm px-4 relative z-30">
                {" "}
                Or sign In with email
              </div>
            </span>
            <div className="mt-6">
              <form onSubmit={HandleSignInUserWithEmailAndPassword}>
                <div className="mb-4">
                  <div className="mb-4 w-full">
                    <Input
                      onValueChange={setEmail}
                      value={email}
                      isRequired
                      isClearable
                      type="email"
                      label="Email"
                      variant="bordered"
                      placeholder=""
                      validationBehavior="native"
                      onClear={() => console.log("input cleared")}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="mb-4 !w-full">
                  <Input
                    onValueChange={setPassword}
                    value={password}
                    isRequired
                    label="Password"
                    variant="bordered"
                    placeholder=""
                    validationBehavior="native"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <Eyeopenicon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <Eyecloseicon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="w-full"
                  />
                </div>
                <div className="mb-6 text-right w-full">
                  <a
                    href="/forget-Password"
                    className="text-black/80 yexy-base font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-md text-white font-medium flex justify-center py-3.5 px-5 bg-black hover:opacity-90 transition-all duration-200"
                  endContent={<Loginicon className="text-white"/>}
              >
                  
                  {loading ? (
                    <Loading
                      color="secondary"
                      size="sm"
                      area-label="Loading..."
                    />
                  ) : (
                    "Sign in"
                  )}
                </Button>
                <p className="text-center mt-5">
                  Don't have an account?
                  <Link to="/signUp" className="text-dark font-semibold ms-2">
                    Sign Up for Free
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
