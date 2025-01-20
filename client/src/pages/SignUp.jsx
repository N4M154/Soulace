import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import ThemeToggle from "../components/ThemeToggle";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-[url('/signinbg.png')] dark:bg-[url('/signin-dark.png')]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {/* Logo Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <img
          src="/Logo.png"
          alt="Logo"
          className="w-78 h-64"
          style={{
            animation: "jump-slow 2s infinite",
            transformOrigin: "bottom",
          }}
        />
        <p className="dark:text-teal-400 text-teal-700 text-lg font-medium">
          Welcome to Soulace, Your Mental Help.
        </p>
        <p className="dark:text-white">Please sign up to continue.</p>
      </div>

      {/* Sign-up Form Section */}
      <div className="md:w-1/2 flex items-center">
        <div className="p-8 max-w-md w-full  border dark:border-teal-600 border-gray-300 rounded-lg shadow-xl dark:shadow-black">
          <h1 className="text-3xl text-center font-semibold mb-7 dark:text-[#f5f5f5] text-gray-800">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="dark:bg-teal-100 bg-white p-3 rounded-lg focus:outline-none focus:ring-2 dark:focus:ring-teal-600 focus:ring-blue-300 text-black"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="dark:bg-teal-100 bg-white p-3 rounded-lg focus:outline-none focus:ring-2 dark:focus:ring-teal-600 focus:ring-blue-300 text-black"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="dark:bg-teal-100 bg-white p-3 rounded-lg focus:outline-none focus:ring-2 dark:focus:ring-teal-600 focus:ring-blue-300 text-black"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-blue-500 text-white p-3 rounded-lg uppercase hover:bg-blue-600 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
            <OAuth />
          </form>
          <div className="flex items-center justify-center mt-5">
            <p className="dark:text-gray-300 text-gray-600 font-semibold">
              Have an account?
            </p>
            <Link to="/sign-in">
              <span className="dark:text-blue-300 text-blue-500 font-bold text-lg ml-1 hover:underline">
                Sign In
              </span>
            </Link>
          </div>
          <p className="text-red-600 mt-5">
            {error ? error.message || "Something went wrong!" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

/* Inline CSS Animation */
const style = document.createElement("style");
style.textContent = `
  @keyframes jump-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
document.head.appendChild(style);
