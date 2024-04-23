import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcons from "../assest/assest/loginImage.png";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await fetch(SummaryApi.login.url, {
      method: SummaryApi.login.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      navigate("/");
    }
  };

  return (
    <section id="login" className="mx-auto container p-4">
      <div className="w-full sm:w-96 bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto">
        <div className="mb-4">
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold mb-4 flex items-center justify-center text-green-600">
              Login
            </h1>
          </div>
          <div className="flex justify-center items-center max-sm:">
            <img src={LoginIcons} alt="login icon" className="max-w-60" />
          </div>
        </div>
        <form className="pt-5" onSubmit={handleSubmit}>
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
          <Link
            to={"/forgot-password"}
            className="block w-fit ml-auto hover:underline hover:text-green-600"
          >
            Forgot Password ?
          </Link>
          <div className="mb-4 mt-4">
            <button className="w-full bg-green-600 text-white p-2 rounded-md hover:scale-90 transition-all">
              Login
            </button>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-green-600">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
