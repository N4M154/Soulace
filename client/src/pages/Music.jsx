import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const MusicRecommendation = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const moods = ["happy", "sad", "relax", "party", "energetic"];

  const fetchRecommendations = async () => {
    if (!selectedMood) {
      setError("Please select a mood to get recommendations!");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
          method: "tag.getTopTracks",
          tag: selectedMood,
          api_key: import.meta.env.VITE_LASTFM_API_KEY, // Ensure this is correct
          format: "json",
          page: page,
          limit: 5, // Fetch 5 songs per request
        },
      });
      if (response.data.tracks && response.data.tracks.track) {
        setRecommendations(response.data.tracks.track);
        setPage((prevPage) => prevPage + 1);
      } else {
        setError("No recommendations found for the selected mood.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to fetch recommendations. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          minHeight: "100vh",
          background: "#d2e9d9",
          color: "#004d40",
          fontFamily: "'Roboto', sans-serif",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            width: "100%",
            textAlign: "center",
            marginTop: "100px"
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#004d40" }}>
            Music Recommendations
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#004d40" }}>
            Select a mood and discover the perfect tracks for your vibe!
          </p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <select
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                flex: "1",
                fontSize: "1rem",
                color: "#004d40",
              }}
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
            >
              <option value="">Select Mood</option>
              {moods.map((mood) => (
                <option key={mood} value={mood}>
                  {mood.charAt(0).toUpperCase() + mood.slice(1)}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                setPage(1);
                fetchRecommendations();
              }}
              style={{
                padding: "10px 20px",
                backgroundColor: "#00796b",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Get Recommendations
            </button>
          </div>
          {error && (
            <p style={{ color: "#d32f2f", marginBottom: "20px" }}>{error}</p>
          )}
        </div>
        <div
          style={{
            
            padding: "20px",
            borderRadius: "15px",
            maxWidth: "600px",
            width: "100%",
            marginLeft: "20px",
          }}
        >
          {recommendations.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {recommendations.map((rec, idx) => (
                <li
                  key={idx}
                  style={{
                    background: "#ffffff",
                    color: "#004d40",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ fontSize: "1rem", fontWeight: "bold" }}>{rec.name}</p>
                  <p style={{ fontSize: "0.9rem", color: "#00796b" }}>{rec.artist.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontSize: "1.1rem", color: "#004d40" }}>No music recommendations yet.</p>
          )}
          {recommendations.length > 0 && (
            <button
              onClick={() => fetchRecommendations()}
              style={{
                
                padding: "10px 20px",
                color: "teal",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                display: "block",
                width: "100%",
                
              }}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicRecommendation;
