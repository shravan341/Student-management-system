import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import bg from "../assets/bg.jpg";
import axios from "axios";
import LoginForm from "./LoginPage";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        formData
      );

      if (response.data.success) {
        // Save token and redirect
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // Redirect to dashboard after successful signup
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />

        <div className="absolute top-0 w-full mt-10 flex justify-center items-center gap-40">
          {/* Welcome Message */}
          <div className="template flex flex-col w-64">
            <div className="p-5">
              <h1 className="font-mono text-2xl">New Here?</h1>
              <p className="font-mono text-sm">
                Ready to embark on your new educational escapade? Buckle up,
                friend, because this journey is about to get real—real fun, real
                challenging, and real caffeinated!
              </p>
            </div>
          </div>

          {/* Sign-up Form */}
          <div className="template">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Company Logo"
                />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                  Create a new account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {error && (
                  <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
                    {error}
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        loading
                          ? "bg-indigo-400"
                          : "bg-indigo-600 hover:bg-indigo-500"
                      }`}
                    >
                      {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in instead
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
