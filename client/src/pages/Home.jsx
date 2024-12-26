import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  useEffect(() => {
    if (location.pathname === "/home") {
      const scriptConfig = document.createElement("script");
      scriptConfig.innerHTML =
        window.embeddedChatbotConfig = {
          chatbotId: "lJhXZiYyPabaAQhxF2WMx",
          domain: "www.chatbase.co",
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

  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showJoke, setShowJoke] = useState(false);
  const [joke, setJoke] = useState("");
  const [showArticles, setShowArticles] = useState(false);
  const [selectedMood, setSelectedMood] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");
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
    if (!selectedMood) {
      setError("Please select a mood to get recommendations!");
      return;
    }
    setError("");
    try {
      const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
          method: "tag.getTopTracks",
          tag: selectedMood,
          api_key: import.meta.env.VITE_LASTFM_API_KEY,
          format: "json",
        },
      });
      setRecommendations(response.data.tracks.track || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recommendations.");
    }
  };

  const fetchArticle = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=mental%20health&apiKey=690c534bd52c4d1e8353e4c34b64eb97"
      );
      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setArticle(data.articles[randomIndex]);
      } else {
        setArticle(null);
      }
    } catch (error) {
      console.error("Error fetching article:", error);
      setArticle(null);
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
    <div
      className="bg-fixed bg-cover bg-center min-h-screen flex flex-col items-center px-6 md:px-10"
      style={{
        backgroundImage: "url('/teal.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <div className="mt-14 space-y-10 w-full max-w-6xl">
        {/* Mood and Sleep Tracking Section */}
        <div className="bg-gradient-to-r from-teal-300 via-teal-200 to-white p-8 rounded-lg shadow-md">
          <h2 className="text-center text-teal-700 text-3xl font-bold mb-6">
            Track Your Mood and Sleep
          </h2>
          <div className="flex justify-center gap-6">
            <Link
              to="/Mood-Tracker"
              className="bg-teal-600 text-white py-3 px-8 rounded-lg hover:bg-teal-500 transition duration-300 shadow-lg"
            >
              Track Mood
            </Link>
            <Link
              to="/Sleep-Tracker"
              className="bg-teal-600 text-white py-3 px-8 rounded-lg hover:bg-teal-500 transition duration-300 shadow-lg"
            >
              Track Sleep
            </Link>
          </div>
        </div>

        {/* Boost Your Mood Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-teal-700 text-3xl font-bold mb-6 text-center">
            Boost Your Mood
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Listen to Music
              </h3>
              <p className="text-gray-600 mb-4">
                Discover songs based on your mood.
              </p>
              <button
                onClick={() => setMusicPlaying(true)}
                className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
              >
                Explore Music
              </button>
            </div>

            <div className="bg-teal-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Learn About Mental Health
              </h3>
              <p className="text-gray-600 mb-4">
                Find insightful articles to improve your mental health.
              </p>
              <button
                onClick={() => {
                  setShowArticles(true);
                  fetchArticle();
                }}
                className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
              >
                Read Articles
              </button>
            </div>

            <div className="bg-teal-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                Joke of the Day
              </h3>
              <p className="text-gray-600 mb-4">
                Brighten your day with a funny joke!
              </p>
              <button
                onClick={fetchJoke}
                className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
              >
                Get a Joke
              </button>
            </div>
          </div>
        </div>

        {/* Breathing Exercise Section */}
<div className="bg-gradient-to-r from-teal-200 to-white rounded-lg shadow-lg overflow-hidden">
  <div className="w-full h-48 bg-white flex items-center justify-center space-x-4">
    <img
      src="/breath.png"
      alt="Breathing Exercise Game"
      className="max-w-[30%] max-h-full object-contain"
    />
    <img
      src="/teal2.png"
      alt="Teal Image 2"
      className="max-w-[30%] max-h-full object-contain"
    />
    <img
      src="/teal3.jpg"
      alt="Teal Image 3"
      className="max-w-[30%] max-h-full object-contain"
    />
  </div>
  <div className="p-4 text-center">
    <h2 className="text-lg font-bold text-teal-800 mb-3">
    So, let's get started !!!
    </h2>
    <button
      onClick={() => navigate("/breathinggame")}
      className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
    >
      Play Now
    </button>
  </div>
</div>


        {/* Music Recommendations */}
        {musicPlaying && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Music Recommendations</h3>
            <div className="flex gap-4">
              <select
                className="p-3 border border-gray-300 rounded-lg"
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
              >
                <option value="">Select Mood</option>
                {moods.map((mood) => (
                  <option key={mood} value={mood}>
                    {mood}
                  </option>
                ))}
              </select>
              <button
                onClick={fetchRecommendations}
                className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
              >
                Get Recommendations
              </button>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {recommendations.length > 0 && (
              <div className="mt-6">
                <ul className="space-y-4">
                  {recommendations.map((rec, idx) => (
                    <li
                      key={idx}
                      className="bg-teal-100 p-4 rounded-lg shadow-md"
                    >
                      <p className="text-teal-700 font-bold">{rec.name}</p>
                      <p className="text-gray-600">{rec.artist.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Render Joke */}
        {showJoke && (
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-4">Joke of the Day</h3>
            <p className="text-gray-700">{joke}</p>
          </div>
        )}

        {/* Render Article */}
        {showArticles && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {loading ? (
              <p className="text-center text-gray-600">Loading article...</p>
            ) : article ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p>{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800"
                >
                  Read More
                </a>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt="Article"
                    className="w-full h-56 object-cover rounded-lg mt-4"
                  />
                )}
              </div>
            ) : (
              <p className="text-red-500">Failed to load article.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
