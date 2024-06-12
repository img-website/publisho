import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import Loading from "./Loading"; // Adjust the import path if necessary
import '../../src/index.css'; // Import your CSS file

function Signup() {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const HandleSignUpUserWithEmailAndPassword = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setLoading(true);
        try {
            await firebase.signUpUserWithEmailAndPassword(email, password);
            alert("Signup successful!");
        } catch (error) {
            alert("Signup failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <Loading />}
            <section className="pt-34 lg:pt-39 pb-15 lg:pb-20 bg-gray my-5">
                <div className="max-w-[520px] mx-auto px-4 sm:px-8 xl:px-0 shadow-2xl">
                    <div className="rounded-xl bg-white shadow-box p-4 sm:p-7.5 xl:p-12.5">
                        <div className="text-center mb-9">
                            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-3">
                                Sign up
                            </h1>
                            <p className="text-body">Create your account</p>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2.5 text-dark p-3.5 rounded-lg border border-gray-4 ease-in duration-200 hover:border-gray-5 hover:bg-gray">
                            <svg
                                width="23"
                                height="22"
                                viewBox="0 0 23 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_709_8846)">
                                    <path
                                        d="M22.5001 11.2438C22.5134 10.4876 22.4338 9.73256 22.2629 8.995H11.7246V13.0771H17.9105C17.7933 13.7929 17.5296 14.478 17.1352 15.0914C16.7409 15.7047 16.224 16.2335 15.6158 16.646L15.5942 16.7827L18.9264 19.3124L19.1571 19.335C21.2772 17.4161 22.4997 14.5926 22.4997 11.2438"
                                        fill="#4285F4"
                                    ></path>
                                    <path
                                        d="M11.7245 22C14.755 22 17.2992 21.0221 19.1577 19.3355L15.6158 16.6464C14.6679 17.2944 13.3958 17.7467 11.7245 17.7467C10.3051 17.7385 8.92433 17.2926 7.77814 16.472C6.63195 15.6515 5.77851 14.4981 5.33892 13.1755L5.20737 13.1865L1.74255 15.8142L1.69727 15.9376C2.63043 17.7602 4.06252 19.2925 5.83341 20.3631C7.60429 21.4337 9.64416 22.0005 11.7249 22"
                                        fill="#34A853"
                                    ></path>
                                    <path
                                        d="M5.33889 13.1755C5.09338 12.4753 4.96669 11.7404 4.96388 11C4.9684 10.2608 5.09041 9.52685 5.32552 8.8245L5.31927 8.67868L1.81196 6.00867L1.69724 6.06214C0.910039 7.5938 0.5 9.28491 0.5 10.9999C0.5 12.7148 0.910039 14.406 1.69724 15.9376L5.33889 13.1755Z"
                                        fill="#FBBC05"
                                    ></path>
                                    <path
                                        d="M11.7249 4.25337C13.3333 4.22889 14.8888 4.8159 16.065 5.89121L19.2329 2.86003C17.2011 0.992106 14.5106 -0.0328008 11.7249 3.27798e-05C9.64418 -0.000452376 7.60433 0.566279 5.83345 1.63686C4.06256 2.70743 2.63046 4.23965 1.69727 6.06218L5.32684 8.82455C5.77077 7.50213 6.62703 6.34962 7.77491 5.5295C8.9228 4.70938 10.3044 4.26302 11.7249 4.25337Z"
                                        fill="#EB4335"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_709_8846">
                                        <rect
                                            width="22"
                                            height="22"
                                            fill="white"
                                            transform="translate(0.5)"
                                        ></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            Sign up with Google
                        </button>
                        <button className="mt-4 w-full flex items-center justify-center gap-2.5 text-dark p-3.5 rounded-lg border border-gray-4 ease-in duration-200 hover:border-gray-5 hover:bg-gray">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.9997 1.83331C5.93773 1.83331 1.83301 6.04119 1.83301 11.232C1.83301 15.3847 4.45954 18.9077 8.10178 20.1505C8.55988 20.2375 8.72811 19.9466 8.72811 19.6983C8.72811 19.4743 8.71956 18.7338 8.71567 17.9485C6.16541 18.517 5.6273 16.8395 5.6273 16.8395C5.21032 15.7532 4.60951 15.4644 4.60951 15.4644C3.77785 14.8811 4.6722 14.893 4.6722 14.893C5.59272 14.9593 6.07742 15.8615 6.07742 15.8615C6.89499 17.2984 8.22184 16.883 8.74493 16.6429C8.82718 16.0353 9.06478 15.6208 9.32694 15.3861C7.2909 15.1484 5.15051 14.3425 5.15051 10.7412C5.15051 9.71509 5.5086 8.87661 6.09503 8.21844C5.99984 7.98167 5.68611 7.02591 6.18338 5.80966C6.18338 5.80966 7.00064 5.55332 8.69435 6.82214C9.47899 6.60955 10.3242 6.50391 11.1664 6.50391C12.0085 6.50391 12.8538 6.60955 13.6396 6.82214C15.3333 5.55332 16.1493 5.80966 16.1493 5.80966C16.6464 7.02591 16.3328 7.98167 16.2372 8.21844C16.8236 8.87661 17.1816 9.71509 17.1816 10.7412C17.1816 14.3541 15.037 15.144 12.9931 15.3755C13.3366 15.6696 13.6365 16.2434 13.6365 17.0796C13.6365 18.2872 13.6238 19.3641 13.6238 19.6983C13.6238 19.9494 13.7919 20.2425 14.2582 20.1505C17.9004 18.9067 20.5269 15.3847 20.5269 11.232C20.5264 6.04119 16.4216 1.83331 11.3597 1.83331"
                                    fill="#181616"
                                ></path>
                            </svg>
                            Sign up with Github
                        </button>
                        <div className="mt-10 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-body-color-2"></div>
                            </div>
                            <div className="relative text-center">
                                <span className="bg-white px-5 text-body-color block text-sm font-semibold">
                                    OR
                                </span>
                            </div>
                        </div>
                        <form onSubmit={HandleSignUpUserWithEmailAndPassword}>
                            <div className="mb-8">
                                <label
                                    htmlFor="email"
                                    className="block text-xs text-dark font-semibold mb-3"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full border border-[#E9EDF4] rounded-lg py-3 px-6 text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary"
                                />
                            </div>
                            <div className="mb-8">
                                <label
                                    htmlFor="password"
                                    className="block text-xs text-dark font-semibold mb-3"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full border border-[#E9EDF4] rounded-lg py-3 px-6 text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary"
                                />
                            </div>
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="w-full py-4 text-white bg-primary rounded-lg text-base font-semibold hover:bg-opacity-90 transition"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;
