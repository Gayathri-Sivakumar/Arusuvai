import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpIcon from "../assest/assest/signupImage.png";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section id="signup" className="mx-auto container p-4">
      <div className="w-full sm:w-96 bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold mb-4 flex items-center justify-center text-green-600">
              Sign Up
            </h1>
          </div>
          <div className="flex justify-center items-center max-sm:">
            <img src={SignUpIcon} alt="login icon" className="max-w-70" />
          </div>
        </div>
        <form className="pt-4 flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium pb-2">Name</label>
            <div className="flex justify-end  bg-slate-100 p-2">
              <input
                type="text"
                placeholder=" Enter Name"
                name="name"
                value={data.name}
                className="w-full h-full outline-none bg-transparent "
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium pb-2">Email</label>
            <div className="flex justify-end  bg-slate-100 p-2">
              <input
                type="email"
                placeholder=" Enter Email"
                name="email"
                value={data.email}
                className="w-full h-full outline-none bg-transparent "
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium pb-2">Password</label>
            <div className="flex justify-end bg-slate-100 p-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" Enter Password"
                name="password"
                value={data.password}
                className="w-full h-full outline-none bg-transparent"
                onChange={handleChange}
              />
              <div
                className="cursor-pointer text-lg"
                onClick={() => setShowPassword((preve) => !preve)}
              >
                <span>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium pb-2">
              Confirm Password
            </label>
            <div className="flex justify-end bg-slate-100 p-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder=" Enter confirm Password"
                name="confirmpassword"
                value={data.confirmpassword}
                className="w-full h-full outline-none bg-transparent"
                onChange={handleChange}
              />
              <div
                className="cursor-pointer text-lg"
                onClick={() => setShowConfirmPassword((preve) => !preve)}
              >
                <span>
                  {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4 mt-4">
            <button className="w-full bg-green-600 text-white p-2 rounded-md hover:scale-90 transition-all">
              SignUp
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-green-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
