import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuthentication } from '../../context/AuthContext';
import Loading from '../Loading';

function ForgetPass() {
  const { sendPasswordReset } = useAuthentication(); // Access the sendPasswordReset function from the authentication context
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordReset(email);
    } catch (error) {
    }finally{
        setLoading(false)
    }
  };

  return (
    <div>
        {/* {loading && <Loading />} */}
      <section className="pt-34 lg:pt-39 pb-15 lg:pb-20 bg-gray my-5">
        <div className="max-w-[520px] mx-auto px-4 sm:px-8 xl:px-0 shadow-2xl">
          <div className="rounded-xl bg-white shadow-box p-4 sm:p-7.5 xl:p-12.5">
            <div className="text-center mb-9">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black mb-3">
                Forget Password
              </h1>
            </div>
          
            <div className="mt-6">
              <form onSubmit={handleResetPassword}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-medium text-dark text-custom-sm mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-md border border-gray-4 bg-white placeholder:text-dark-2 w-full py-3.5 px-6 outline-none duration-200 focus:shadow-input focus:ring-2 focus:ring-dark-4/20 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md text-white font-medium flex justify-center py-3.5 px-5 bg-black hover:opacity-90 transition-all duration-200"
                >
                 {loading?<Loading color="secondary"  size="sm" area-label="Loading..." />:"Verify" } 

                </button>
                <p className="text-center mt-5">
                  Don't have an account?
                  <Link to="/login" className="text-dark">
                    SignIn
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgetPass;
