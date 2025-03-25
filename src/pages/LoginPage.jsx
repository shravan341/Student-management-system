import { useState } from "react";
import { data, Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "../MyWork/Dashboard";

const LoginForm = () => {
  const [formData, setFormData] = useState({
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
        "http://localhost:8080/auth/login",
        formData
      );
      console.log(response.data);
      if (response.data.succes) {
        // Note the misspelling to match backend
        localStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: response.data.email,
            name: response.data.name,
          })
        );
        navigate("/mywork", { replace: true });
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="template">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
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
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      to="/forgot-password"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
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
                  {loading ? "Signing In..." : "Sign in"}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              New Educator?{" "}
              <Link
                to="/signup"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Start today
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
