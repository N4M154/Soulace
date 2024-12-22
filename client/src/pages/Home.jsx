import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

export default function Home() {

  useEffect(() => {
    if (location.pathname === "/home") {
      const scriptConfig = document.createElement("script");
      scriptConfig.innerHTML = 
      window.embeddedChatbotConfig = {
        chatbotId: "lJhXZiYyPabaAQhxF2WMx",
        domain: "www.chatbase.co"
      };
      document.body.appendChild(scriptConfig);

      const scriptEmbed = document.createElement("script");
      scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
      scriptEmbed.setAttribute("chatbotId", "lJhXZiYyPabaAQhxF2WMx");
      scriptEmbed.setAttribute("domain", "www.chatbase.co");
      scriptEmbed.defer = true;
      document.body.appendChild(scriptEmbed);

      return () => {
        document.body.removeChild(scriptConfig);
        document.body.removeChild(scriptEmbed);
      };
    }
  }, [location.pathname]);

  const [musicPlaying, setMusicPlaying] = useState(null);
  const [showJoke, setShowJoke] = useState(false);
  const [joke, setJoke] = useState("");
  const [showArticles, setShowArticles] = useState(false);
  const [selectedMood, setSelectedMood] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");

  // Article state and loading state
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  

  const fetchJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJoke(data.setup + " - " + data.punchline);
    setShowJoke(true);
  };

  const fetchRecommendations = async () => {
    try {
      setError("");
      const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
          method: "tag.getTopTracks",
          tag: selectedMood,
          api_key: import.meta.env.VITE_LASTFM_API_KEY,
          format: "json",
        },
      });
      setRecommendations(response.data.tracks.track);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recommendations");
    }
  };

  const fetchArticle = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=mental%20health&apiKey=690c534bd52c4d1e8353e4c34b64eb97"
      );
      const data = await response.json();

      // Randomly select an article and check for image URL
      if (data.articles && data.articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        const randomArticle = data.articles[randomIndex];

        // Set the article and image if available
        setArticle(randomArticle);
      } else {
        setArticle("No articles found.");
      }
    } catch (error) {
      console.error("Error fetching article:", error);
      setArticle("An error occurred while fetching the article.");
    } finally {
      setLoading(false);
    }
  };

  const moods = [
    "happy",
    "sad",
    "relaxed",
    "energetic",
    "calm",
    "excited",
    "angry",
    "melancholic",
    "romantic",
    "upbeat",
    "dreamy",
    "nostalgic",
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center px-6 md:px-10">
      <Header />

      <div className="mt-14 space-y-8 w-full">
        {/* Mood and Sleep Tracking Section */}
        <div className="bg-teal-600 p-8 rounded-lg shadow-lg">
          <div className="text-center space-y-4">
            <h2 className="text-white text-3xl font-extrabold">Track Your Mood and Sleep</h2>
            <div className="space-x-6">
              <Link
                to="/track-mood"
                className="bg-white text-teal-600 py-3 px-8 rounded-lg hover:bg-teal-200 transition duration-300"
              >
                Track Mood
              </Link>
              <Link
                to="/sleep"
                className="bg-white text-teal-600 py-3 px-8 rounded-lg hover:bg-teal-200 transition duration-300"
              >
                Track Sleep
              </Link>
            </div>
          </div>
        </div>

        {/* Boost Your Mood Section */}
<div className="text-center mt-10 space-y-6">
  <h2 className="text-teal-700 text-3xl font-bold">Boost Your Mood</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card for Listening to Music */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-teal-600">Listen to Music</h3>
        <p className="text-gray-600 mt-2">
          Boost your mood by listening to handpicked songs.
        </p>
        <button
          onClick={() => setMusicPlaying(musicOptions)}
          className="mt-4 bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
        >
          Explore Music
        </button>
      </div>
    </div>

    {/* Card for Learning About Mental Health */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-teal-600">Learn About Mental Health</h3>
        <p className="text-gray-600 mt-2">
          Discover insightful articles on mental health.
        </p>
        <button
          onClick={() => {
            setShowArticles(true);
            fetchArticle();
          }}
          className="mt-4 bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
        >
          Read Articles
        </button>
      </div>
    </div>

    {/* Card for Joke of the Day */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-teal-600">Joke of the Day</h3>
        <p className="text-gray-600 mt-2">
          Brighten your day with a funny joke.
        </p>
        <button
          onClick={fetchJoke}
          className="mt-4 bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
        >
          Joke of the Day
        </button>
      </div>
    </div>
  </div>
</div>


        {/* Breathing Exercise Section */}
        <div className="game-card bg-gray-800 rounded-lg shadow-lg overflow-hidden">
  <div className="w-full h-48 bg-black flex items-center justify-center">
    <img
      src="/gg.png"
      alt="Breathing Exercise Game"
      className="max-w-full max-h-full object-contain"
    />
  </div>
  <div className="p-4 text-center">
    <h2 className="text-lg font-bold text-white mb-3">Breathing Exercise</h2>
    <button
      onClick={() => navigate("/breathinggame")}
      className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
    >
      Play Now
    </button>
  </div>
</div>



        {/* Render Music Options */}
        {musicPlaying && (
          <div className="flex space-x-8 bg-teal-700  bg-opacity-70 p-8 rounded-lg mt-14">
            <div className="w-full max-w-md p-6 mb-8 bg-gradient-to-r from-green-700 via-slate-700 to-blue-800 border border-zinc-500 rounded-lg shadow-lg shadow-teal-600">
              
              <div className="mb-8">
                <label className="block mb-4 text-xl font-semibold text-teal-100">
                  Select your mood:
                </label>
                <div className="flex">
                  <select
                    value={selectedMood}
                    onChange={(e) => setSelectedMood(e.target.value)}
                    className="p-4 border border-gray-300 rounded-l-md focus:outline-none  "
                  >
                    <option value="">Select...</option>
                    {moods.map((mood) => (
                      <option key={mood} value={mood}>
                        {mood.charAt(0).toUpperCase() + mood.slice(1)}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={fetchRecommendations}
                    className="p-4 bg-pink-500 text-white rounded-r-md hover:bg-blue-600 transition duration-300"
                  >
                    Get Music Recommendations
                  </button>
                </div>
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </div>
            </div>

            {/* Recommendations Table */}
            {recommendations.length > 0 && (
              <div className="w-full max-w-lg max-h-96 overflow-y-auto bg-transparent rounded-xl shadow-lg shadow-pink-300 p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gradient-to-r from-green-200 to-blue-300 border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-4 px-6 bg-transparent text-orange-600 border-b font-semibold text-xl">
                          Song
                        </th>
                        <th className="py-4 px-6 bg-transparent border-b font-semibold text-xl text-orange-600">
                          Artist
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recommendations.map((track, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 text-teal-800">{track.name}</td>
                          <td className="py-2 px-4 text-teal-700">{track.artist.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Render Joke */}
        {showJoke && <div className="text-center mt-10">{joke}</div>}

        {/* Render Article */}
        {showArticles && (
          <div className="mt-14 space-y-8 max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl">
            {loading ? (
              <div className="text-center text-gray-600">Loading article...</div>
            ) : article ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p>{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Read more
                </a>
                {article.urlToImage && (
                  <img src={article.urlToImage} alt="Article Image" 
                  style={{maxWidth:"100%",
                    maxWidth: "400px",
                    marginTop: "10px",
                  }}
                  className="w-full h-56 object-cover rounded-lg mt-4" />
                )}
              </div>
            ) : (
              <p className="text-red-500">Failed to load article</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

