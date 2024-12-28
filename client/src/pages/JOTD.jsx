import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const JokeOfTheDay = () => {
  const [joke, setJoke] = useState("");
  const [showJoke, setShowJoke] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
    

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
      setShowJoke(true);
    } catch (error) {
      setJoke("Oops! Couldn't fetch a joke. Try again later.");
      setShowJoke(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <div
  className="text-teal-700 w-full"
  style={{
    background: "white",
  }}
>
  <div className=" mx-auto px-4 flex justify-between items-center py-4 ">
    {/* Logo */}
    <div className="flex items-center ml-10">
      <Link to="/home">
        <img src="/Logo.png" width={100} height={80} alt="Logo" />
      </Link>
    </div>

    {/* Navbar */}
    <nav
      className="hidden md:flex space-x-8 mr-10"
      style={{ background: "transparent" }}
    >
      {currentUser && (
        <Link
          to="/community"
          className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
        >
          Community
        </Link>
      )}
      {currentUser && (
        <Link
          to="/analytics"
          className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
        >
          Analytics
        </Link>
      )}
      {currentUser && (
        <Link
          to="/about"
          className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
        >
          About
        </Link>
      )}
      <Link to="/profile" className="flex items-center space-x-2 font-bold">
        {currentUser ? (
          <img
            src={currentUser.profilePicture}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span className="text-teal-700 hover:text-teal-500 transition duration-300">
            Sign In
          </span>
        )}
      </Link>
    </nav>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button className="text-teal-500 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "220vh",
        minHeight: "84vh",
        background: "#FFF9C4",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        color: "#333",
        textAlign: "center",
        padding: "20px",
      }}
    >
        
        
      <header style={{ marginBottom: "20px" }}>
        <h1
          style={{
            fontSize: "3rem",
            font: "bold",
            color: "teal",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Joke of the Day
        </h1>
        <p style={{ fontSize: "1.2rem", color: "black" }}>
          Need a laugh? Click the button below for a random joke!
        </p>
      </header>
      <main
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        {loading && (
          <p style={{ color: "#ffa726", fontSize: "1.2rem" }}>
            Fetching your joke... 😄
          </p>
        )}
        {showJoke && (
          <p style={{ fontSize: "1.5rem", margin: "20px 0", color: "#555" }}>
            {joke}
          </p>
        )}
        <button
          style={{
            backgroundColor: "teal",
            color: "#fff",
            fontSize: "1.2rem",
            border: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={fetchJoke}
          disabled={loading}
        >
          {loading ? "Loading..." : "Tell me a joke!"}
        </button>
      </main>
    </div>
    </div>
  );
};

export default JokeOfTheDay;
