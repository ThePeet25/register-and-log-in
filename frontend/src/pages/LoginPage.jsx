import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen px-7">
      <div className="w-full max-w-md flex flex-col px-8 py-6 gap-4 bg-white rounded-3xl shadow-lg shadow-white">
        <h2 className="text-2xl text-neutral-800 font-bold text-center cursor-default">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-neutral-800"
            >
              Password
            </label>
            <div className="relative w-full flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <button
                className="absolute right-3 top-3 flex justify-center items-center size-7 rounded-full hover:bg-neutral-800/10 hover:scale-110  active:scale-90 transition-all"
                onClick={passwordToggle}
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="size-4 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-neutral-800 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-neutral-900 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-neutral-800 rounded-lg cursor-pointer hover:bg-neutral-800/90 hover:scale-105 focus:outline-none focus:ring focus:ring-indigo-200 active:scale-95 transition-all"
          >
            Login
          </button>
          <p className="pt-2 text-sm text-neutral-800 text-center">
            Don't have an account?
            <Link
              to="/register"
              className="ml-1 text-neutral-900 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
