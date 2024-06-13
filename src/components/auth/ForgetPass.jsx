import React, { useState } from 'react';
import {Button, Input} from "@nextui-org/react";
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
                <div className="mb-4 w-full">
                                <Input
                                
                                
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                    isClearable
                                    type="email"
                                    label="Email"
                                    variant="bordered"
                                    placeholder=""
                                    defaultValue="junior@nextui.org"
                                    onClear={() => console.log("input cleared")}
                                    className="w-full"
                                    />
                                </div>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-md text-white font-medium flex justify-center py-3.5 px-5 bg-black hover:opacity-90 transition-all duration-200"
                >
                 {loading?<Loading color="secondary"  size="sm" area-label="Loading..." />:"Verify" } 

                </Button>
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
