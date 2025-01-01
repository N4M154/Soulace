// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const DailyJournal = () => {
//   const { currentUser } = useSelector((state) => state.user);

//   const [journal, setJournal] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [musicPlaying, setMusicPlaying] = useState(false);
//   const [spotifyPlayer, setSpotifyPlayer] = useState(null);
//   const [deviceId, setDeviceId] = useState(null);
//   const [scrollVisible, setScrollVisible] = useState(false);

//   const trackUri = "spotify:album:5K8PsqGs0KKmGywXhcBQQB"; // Replace with your track's URI
//   const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your token from the backend

//   const toggleMusic = () => {
//     const audio = document.getElementById("relaxing-music");

//     if (audio) {
//       if (musicPlaying) {
//         audio.pause();
//       } else {
//         audio.play().catch((error) => {
//           console.error("Error playing music:", error);
//         });
//       }
//       setMusicPlaying(!musicPlaying);
//     } else {
//       console.error("Audio element not found");
//     }
//   };
//   // Fetch journal entries
//   const fetchNotes = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5173/api/journal?page=${page}`);
//       const data = await response.json();
//       setNotes(data.notes.slice(0, 3)); // Load only the first 3 notes initially
//     } catch (err) {
//       console.error("Error fetching notes:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // Load more notes
//   const loadMoreNotes = async () => {
//     if (loading) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5173/api/journal?page=${page + 1}`);
//       const data = await response.json();
//       setNotes((prevNotes) => [...prevNotes.slice(data.notes.length), ...data.notes]); // Keep only 3 notes visible
//       setPage((prevPage) => prevPage + 1);
//       setScrollVisible(true); // Make scroll visible only after loading more
//     } catch (err) {
//       console.error("Error loading more notes:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Initialize Spotify Web Playback SDK
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.scdn.co/spotify-player.js";
//     script.async = true;
//     document.body.appendChild(script);

//     window.onSpotifyWebPlaybackSDKReady = () => {
//       const player = new Spotify.Player({
//         name: "Relaxing Music Player",
//         getOAuthToken: (cb) => cb(accessToken),
//       });

//       player.addListener("ready", ({ device_id }) => {
//         console.log("Spotify Player is ready with Device ID:", device_id);
//         setDeviceId(device_id);
//       });

//       player.addListener("not_ready", ({ device_id }) => {
//         console.log("Spotify Player is not ready:", device_id);
//       });

//       player.addListener("player_state_changed", (state) => {
//         if (!state) return;
//         setMusicPlaying(!state.paused);
//       });

//       player.connect();
//       setSpotifyPlayer(player);
//     };
//   }, [accessToken]);

//   // Play the relaxing track
//   const playMusic = async () => {
//     if (!spotifyPlayer || !deviceId) {
//       alert("Spotify Player is not ready yet.");
//       return;
//     }

//     try {
//       await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
//         method: "PUT",
//         body: JSON.stringify({ uris: [trackUri] }),
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Playing relaxing music...");
//     } catch (err) {
//       console.error("Error playing music:", err);
//     }
//   };

//   // Pause the relaxing track
//   const pauseMusic = async () => {
//     if (!spotifyPlayer || !deviceId) {
//       alert("Spotify Player is not ready yet.");
//       return;
//     }

//     try {
//       await fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Music paused.");
//     } catch (err) {
//       console.error("Error pausing music:", err);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5173/api/journal", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ content: journal }),
//       });

//       if (!response.ok) throw new Error("Failed to save journal entry");

//       const newNote = await response.json();
//       setNotes((prevNotes) => [newNote, ...prevNotes.slice(0, 2)]); // Add new note and keep only 3
//       setJournal(""); // Clear input field
//     } catch (err) {
//       console.error("Error saving journal:", err);
//     }
//   };

//   return (
//     <div
//   className="container mx-auto p-8 bg-cover bg-center h-screen overflow-hidden flex flex-col items-center"
//   style={{ backgroundImage: "url('/journal-bg.jpg')", backgroundAttachment: "fixed" }}
// >
//   {/* Header */}
//   <header
//     className="bg-transparent text-teal-700 w-full absolute top-0 left-0 z-50 transition-opacity duration-300 opacity-0 hover:opacity-100"

//   >
//     <div className="px-16 flex justify-between items-center py-2 mt-4">
//       {/* Logo */}
//       <div className="flex items-center">
//         <Link to="/home">
//           <img src="/Logo.png" width={100} height={80} alt="Logo" />
//         </Link>
//       </div>

//       {/* Navbar */}
//       <nav className="hidden md:flex space-x-8">
//         {currentUser && (
//           <Link
//             to="/community"
//             className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
//           >
//             Community
//           </Link>
//         )}
//         {currentUser && (
//           <Link
//             to="/analytics"
//             className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
//           >
//             Analytics
//           </Link>
//         )}
//         {currentUser && (
//           <Link
//             to="/about"
//             className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
//           >
//             About
//           </Link>
//         )}
//         <Link to="/profile" className="flex items-center space-x-2 font-bold">
//           {currentUser ? (
//             <img
//               src={currentUser.profilePicture}
//               alt="profile"
//               className="h-10 w-10 rounded-full object-cover"
//             />
//           ) : (
//             <span className="text-teal-700 hover:text-teal-500 transition duration-300">
//               Sign In
//             </span>
//           )}
//         </Link>
//       </nav>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button className="text-teal-500 focus:outline-none">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </header>

//   <div className="mt-16 w-full flex flex-col items-start mb-6 ml-10">
//   <div className="flex items-center justify-between w-full">
//     <h1 className="text-4xl font-bold text-white ml-6">Daily Journal</h1>
//     <img
//       src={musicPlaying ? "/playmusic.gif" : "/playmusic.gif"} // Replace with your actual GIF file paths
//       alt={musicPlaying ? "Pause Music" : "Play Music"}
//       onClick={toggleMusic}
//       className="w-20 h-20 cursor-pointer transition-transform duration-300 hover:scale-110 mr-12"
//     />
//     <audio id="relaxing-music" src="/relaxing-music.mp3" />
//   </div>
//   <h2 className="text-gray-400 text-lg ml-6">Your Daily Thoughts: Reflect, Release, and Recharge</h2>
// </div>

//   <div className="flex flex-wrap md:flex-nowrap w-full max-w-6xl gap-20">
//     {/* Journal Writing Section */}
//     <div className="w-full md:w-10/12 bg-transparent backdrop-blur- shadow-lg rounded-xl p-6">
//       <h2 className="text-2xl text-yellow-100 font-bold mb-4">Hey, how was your day?</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <textarea
//           value={journal}
//           onChange={(e) => setJournal(e.target.value)}
//           rows="5"
//           className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 bg-transparent text-white"
//           placeholder="Feel free to jot down what's on your mind, I'm here to listen!"
//           required
//         />

//   <div className="flex items-center justify-between w-full">
//   <div className="flex space-x-2">
//     <button
//       type="button"
//       className="py-1 px-2 bg-gray-200 text-gray-600 font-medium rounded-md hover:bg-gray-300 transition duration-200 flex items-center space-x-1 text-sm"
//     >
//       <img src="/photos.png" alt="Add" className="h-4 w-4" />
//       <span>Add Image</span>
//     </button>
//     <button
//       type="button"
//       className="py-1 px-2 bg-gray-200 text-gray-600 font-medium rounded-md hover:bg-gray-300 transition duration-200 flex items-center space-x-1 text-sm"
//     >
//       <img src="/happy.png" alt="Emoji" className="h-4 w-4" />
//       <span>Add Emoji</span>
//     </button>
//   </div>
//   <button
//     type="submit"
//     className="py-1 px-4 bg-blue-200 text-gray-600 font-medium rounded-md hover:bg-gray-300 transition duration-200 text-sm"
//   >
//     Save
//   </button>
// </div>

//       </form>
//     </div>

//     {/* Journal Notes Section */}
//     <div className="w-full md:w-6/12 mt-6 md:mt-0 md:ml-6">
//       <h2 className="text-1xl font-bold text-white mb-4">See Older Posts</h2>
//       <div className="space-y-4">
//         {notes.map((note, index) => (
//           <div key={index} className="bg-gray-900 shadow-md rounded-lg p-3">
//             <p className="text-sm text-white">{note.content}</p>
//             <p className="text-sm text-yellow-100 mt-2">
//               {new Date(note.date).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={loadMoreNotes}
//         className="mt-4 w-full py-2 bg-transparent  text-teal-600 font-bold rounded-lg  hover:text-white transition duration-300 text-sm"
//       >
//         Load More
//       </button>
//     </div>
//   </div>
// </div>

//   );
// };

// export default DailyJournal;

// DailyJournal.jsx
import { Groq } from "groq-sdk"; // Import Groq SDK
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MoodTimeline from "./MoodTimeline"; // Import the MoodTimeline component

const DailyJournal = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [journal, setJournal] = useState("");
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [spotifyPlayer, setSpotifyPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [scrollVisible, setScrollVisible] = useState(false);

  const [moodLoading, setMoodLoading] = useState(false); // Manage loading state for saving
  const [moodError, setMoodError] = useState(null); // Handle any errors

  // Initialize Groq SDK
  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY, // Ensure this is set in your environment variables
    dangerouslyAllowBrowser: true,
  });

  const trackUri = "spotify:album:5K8PsqGs0KKmGywXhcBQQB"; // Replace with your track's URI
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your token from the backend

  const toggleMusic = () => {
    const audio = document.getElementById("relaxing-music");

    if (audio) {
      if (musicPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.error("Error playing music:", error);
        });
      }
      setMusicPlaying(!musicPlaying);
    } else {
      console.error("Audio element not found");
    }
  };

  // Fetch journal entries
  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5173/api/journal?page=${page}`
      );
      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, ...data.notes]); // Append new entries
    } catch (err) {
      console.error("Error fetching notes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Load more notes
  const loadMoreNotes = async () => {
    if (loading) return;
    setPage((prevPage) => prevPage + 1);
  };

  // Initialize Spotify Web Playback SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new Spotify.Player({
        name: "Relaxing Music Player",
        getOAuthToken: (cb) => cb(accessToken),
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Spotify Player is ready with Device ID:", device_id);
        setDeviceId(device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Spotify Player is not ready:", device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) return;
        setMusicPlaying(!state.paused);
      });

      player.connect();
      setSpotifyPlayer(player);
    };
  }, [accessToken]);

  // Play the relaxing track
  const playMusic = async () => {
    if (!spotifyPlayer || !deviceId) {
      alert("Spotify Player is not ready yet.");
      return;
    }

    try {
      await fetch(
        `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
        {
          method: "PUT",
          body: JSON.stringify({ uris: [trackUri] }),
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Playing relaxing music...");
    } catch (err) {
      console.error("Error playing music:", err);
    }
  };

  // Pause the relaxing track
  const pauseMusic = async () => {
    if (!spotifyPlayer || !deviceId) {
      alert("Spotify Player is not ready yet.");
      return;
    }

    try {
      await fetch(
        `https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Music paused.");
    } catch (err) {
      console.error("Error pausing music:", err);
    }
  };

  // Comprehensive Mood Analysis Function
  const analyzeMood = async (text) => {
    if (!text.trim()) {
      throw new Error("Journal entry is empty.");
    }

    try {
      // Send the journal entry to Groq for mood analysis with instructions for one-word mood and detailed analysis
      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile", // Replace with the appropriate model if different
        temperature: 0.0, // Lower temperature for more deterministic responses
        max_tokens: 150, // Adjust as needed for detailed analysis
        messages: [
          {
            role: "system",
            content:
              'You are an assistant that analyzes the mood of a given text. Provide your response in the following JSON format:\n{\n  "mood": "SingleWordMood",\n  "analysis": "Detailed analysis of the mood based on the journal entry."\n}',
          },
          {
            role: "user",
            content: text,
          },
        ],
      });

      // Extract mood and analysis from AI response
      const aiResponse = response.choices[0]?.message?.content.trim();

      // Parse the JSON response
      let parsedResponse;
      try {
        parsedResponse = JSON.parse(aiResponse);
      } catch (parseError) {
        console.error("Error parsing AI response as JSON:", parseError);
        throw new Error("Failed to parse mood analysis.");
      }

      let { mood, analysis } = parsedResponse;

      // Validate that the mood is a single word
      if (!mood || mood.split(" ").length > 1) {
        mood = "Neutral"; // Default mood if validation fails
      }

      // Optionally, map mood to a predefined set
      const validMoods = [
        "Happy",
        "Sad",
        "Anxious",
        "Neutral",
        "Excited",
        "Frustrated",
        "Calm",
        "Angry",
      ];
      if (!validMoods.includes(mood)) {
        mood = "Neutral"; // Default to Neutral if mood is unrecognized
      }

      // Ensure analysis is present
      if (!analysis) {
        analysis = "No detailed analysis available.";
      }

      return { mood, analysis };
    } catch (error) {
      console.error("Error analyzing mood with Groq:", error);
      throw new Error("Failed to analyze mood.");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!journal.trim()) {
      alert("Please write something in your journal before saving.");
      return;
    }

    setMoodLoading(true);
    setMoodError(null);

    try {
      // Perform comprehensive mood analysis
      const { mood, analysis } = await analyzeMood(journal);

      // Save journal entry with content, mood, and analysis
      const response = await fetch("http://localhost:5173/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: journal, mood, analysis }),
      });

      if (!response.ok) {
        throw new Error("Failed to save journal entry");
      }

      const newNote = await response.json();
      setNotes((prevNotes) => [newNote, ...prevNotes]); // Prepend new note
      setJournal(""); // Clear input field
    } catch (err) {
      console.error("Error saving journal:", err);
      setMoodError(
        err.message || "An error occurred while saving your journal."
      );
    } finally {
      setMoodLoading(false);
    }
  };

  return (
    <div
      className="container mx-auto p-8 bg-cover bg-center min-h-screen overflow-auto flex flex-col items-center"
      style={{
        backgroundImage: "url('/journal-bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      
      <header className="bg-transparent text-teal-700 w-full absolute top-0 left-0 z-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <div className="px-16 flex justify-between items-center py-2 mt-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home">
              <img src="/Logo.png" width={100} height={80} alt="Logo" />
            </Link>
          </div>

          {/* Navbar */}
          <nav className="hidden md:flex space-x-8">
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
            <Link
              to="/profile"
              className="flex items-center space-x-2 font-bold"
            >
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
      </header>

      {/* Page Title */}
      <div className="mt-16 w-full flex flex-col items-start mb-6 ml-10">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl font-bold text-white ml-6">Daily Journal</h1>
          <img
            src={musicPlaying ? "/pausemusic.gif" : "/playmusic.gif"} // Replace with your actual GIF file paths
            alt={musicPlaying ? "Pause Music" : "Play Music"}
            onClick={toggleMusic}
            className="w-20 h-20 cursor-pointer transition-transform duration-300 hover:scale-110 mr-12"
          />
          <audio id="relaxing-music" src="/relaxing-music.mp3" />
        </div>
        <h2 className="text-gray-400 text-lg ml-6">
          Your Daily Thoughts: Reflect, Release, and Recharge
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap md:flex-nowrap w-full max-w-6xl gap-20">
        {/* Journal Writing Section */}
        <div className="w-full md:w-10/12 bg-transparent backdrop-blur- shadow-lg rounded-xl p-6">
          <h2 className="text-2xl text-yellow-100 font-bold mb-4">
            Hey, how was your day?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 bg-transparent text-white"
              placeholder="Feel free to jot down what's on your mind, I'm here to listen!"
              required
            />

            {/* Buttons for additional features */}
            <div className="flex items-center justify-between w-full">
              <div className="flex space-x-2  mb-10">
                <button
                  type="button"
                  className="py-1 px-2 bg-gray-200 text-gray-600 font-medium rounded-md hover:bg-gray-300 transition duration-200 flex items-center space-x-1 text-sm"
                >
                  <img src="/photos.png" alt="Add" className="h-4 w-4" />
                  <span>Add Image</span>
                </button>
                <button
                  type="button"
                  className="py-1 px-2 bg-gray-200 text-gray-600 font-medium rounded-md hover:bg-gray-300 transition duration-200 flex items-center space-x-1 text-sm"
                >
                  <img src="/happy.png" alt="Emoji" className="h-4 w-4" />
                  <span>Add Emoji</span>
                </button>
                <button
                type="submit"
                className={`py-1 px-4 bg-blue-200 text-gray-600 font-medium rounded-md hover:bg-blue-300 transition duration-200 text-sm ${
                  moodLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={moodLoading}
              >
                {moodLoading ? "Saving..." : "Save"}
              </button>
              </div>
              
            </div>
          </form>
          {/* Mood Timeline Graph */}
          <MoodTimeline />


          {/* Display Error Message */}
          {moodError && (
            <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-700">{moodError}</p>
            </div>
          )}
        </div>

        {/* Journal Notes and Mood Timeline Section */}
        <div className="w-full md:w-6/12 mt-6 md:mt-0 md:ml-6">
          
          {/* Journal Notes */}
          <h2 className="text-1xl font-bold text-white mb-4 mt-6">
            See Older Posts
          </h2>
          <div className="space-y-4">
            {notes.map((note, index) => (
              <div key={index} className="bg-gray-900 shadow-md rounded-lg p-3">
                <p className="text-sm text-white">{note.content}</p>
                <p className="text-sm text-yellow-100 mt-2">
                  {new Date(note.date).toLocaleString()}
                </p>
                <p className="text-sm text-teal-400 mt-1">Mood: {note.mood}</p>{" "}
                {/* Display mood */}
                <p className="text-sm text-gray-300 mt-1">
                  Analysis: {note.analysis}
                </p>{" "}
                {/* Display analysis */}
              </div>
            ))}
          </div>
          <button
            onClick={loadMoreNotes}
            className="mt-4 w-full py-2 bg-transparent text-teal-600 font-bold rounded-lg hover:text-white transition duration-300 text-sm"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyJournal;
