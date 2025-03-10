import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const BASE = "http://localhost:3001";
    e.preventDefault();
    console.log(formData);
    try{
      const response = await axios.post(`${BASE}/api/register`, {
          email: formData.email,
          password: formData.password
      }, {
        withCredentials: true
      });
      if(response.data === "register success") {
        window.alert("register success");
        navigate("/login");
      } else {
        window.alert("Email is already exits");
      }
  } catch(err) {
      console.log(err);
  }
  };

  return (
    <div className="flex items-center justify-center h-screen px-7">
      <div className="w-full max-w-md flex flex-col px-8 py-6 gap-4 bg-white rounded-3xl shadow-lg shadow-white">
        <h2 className="text-2xl text-neutral-800 font-bold text-center cursor-default">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-neutral-800"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-neutral-800"
            >
              Password
            </label>
            <div className="relative w-full item-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
              <FaEyeSlash
                onClick={passwordToggle}
                className="absolute right-3 top-4 size-5 hover:scale-110 active:scale-90"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-3 font-bold text-white bg-neutral-800 rounded-lg cursor-pointer hover:bg-neutral-800/90 hover:scale-105 focus:outline-none focus:ring focus:ring-indigo-200 active:scale-95 transition-all"
          >
            Register
          </button>
          <p className="pt-2 text-sm text-neutral-800 text-center">
            Already have an account?
            <Link to="/login" className="ml-1 text-neutral-900 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
