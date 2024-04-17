import React from "react";
import { useState } from "react";
import LoginIcons from "../assest/assest/loginImage.png";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section id="login" className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="w-96  bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold mb-4 flex items-center justify-center text-green-600">
              Login
            </h1>
          </div>
          <div className="flex justify-center items-cent">
            <img src={LoginIcons} alt="login icon max-w-80" />
          </div>
          <form>
            <div>
              <label className="block text-sm font-medium pb-2">Email</label>

              <div className="flex justify-end  bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder=" Enter Email"
                  className="w-full h-full outline-none bg-transparent "
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium pb-2">Password</label>

              <div className="flex justify-end bg-slate-100 p-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=" Enter Password"
                  className="w-full h-full outline-none bg-transparent"
                />

                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</span>
                </div>
              </div>
            </div>

            <div className="mb-4 mt-4">
              <button className="w-full bg-green-600 text-white p-2 rounded-md hover:scale-90 transition-all">
                Login
              </button>
            </div>
            <div className="flex justify-between">
              <a href="#" className="text-green-600">
                Forgot Password
              </a>
              <a href="#" className="text-green-600">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
