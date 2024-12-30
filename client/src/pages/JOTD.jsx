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
  <Header/>
</div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "220vh",
        minHeight: "84vh",
        
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        color: "#333",
        textAlign: "center",
        padding: "20px",
      }}
    >
        
        
     
  <div
    style={{
      background: "#d2e9d9",
      borderRadius: "15px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
      padding: "30px",
      maxWidth: "600px",
      width: "100%",
    }}
  >
    <header style={{ marginBottom: "20px" }}>
      <h1
        style={{
          fontSize: "3rem",
          font: "bold",
          color: "teal",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
        }}
      >
        Joke of the Day
      </h1>
      <p style={{ fontSize: "1.2rem", color: "black", textAlign: "center" }}>
        Need a laugh? Click the button below for a random joke!
      </p>
    </header>
    <main
      style={{
        background: "#f9f9f9",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
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

    </div>
    
  );
};

export default JokeOfTheDay;
