
// import { useState, useEffect } from "react";

// const DailyJournal = () => {
//   const [journal, setJournal] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [musicPlaying, setMusicPlaying] = useState(false);

//   const music = new Audio("https://www.example.com/relaxing-music.mp3"); // Replace with a valid URL

//   // Fetch journal entries
//   useEffect(() => {
//     const fetchNotes = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`http://localhost:5173/api/journal?page=${page}`);
//         const data = await response.json();
//         setNotes((prevNotes) => [...prevNotes, ...data.notes]); // Append new notes
//       } catch (err) {
//         console.error("Error fetching notes:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNotes();
//   }, [page]);

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
//       setNotes([newNote, ...notes]); // Add new note to the top
//       setJournal(""); // Clear input field
//     } catch (err) {
//       console.error("Error saving journal:", err);
//     }
//   };

//   // Handle music toggle
//   const toggleMusic = () => {
//     if (musicPlaying) {
//       music.pause();
//       setMusicPlaying(false);
//     } else {
//       music.play();
//       setMusicPlaying(true);
//     }
//   };

//   return (
//     <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-8 text-center">Mood-Reflective Daily Journal</h1>

//       <div className="flex flex-col md:flex-row">
//         {/* Journal Writing Section */}
//         <div className="md:w-2/3 bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-4">Write Your Thoughts</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <textarea
//               value={journal}
//               onChange={(e) => setJournal(e.target.value)}
//               rows="8"
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               placeholder="What's on your mind today?"
//               required
//             />
//             <button
//               type="submit"
//               className="py-3 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Save Entry
//             </button>
//           </form>
//           <button
//             onClick={toggleMusic}
//             className="mt-4 py-3 px-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
//           >
//             {musicPlaying ? "Stop Music" : "Play Relaxing Music"}
//           </button>
//         </div>

//         {/* Journal Notes Section */}
//         <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6">
//           <h2 className="text-2xl font-bold mb-4">Recent Entries</h2>
//           <div className="space-y-4">
//             {notes.map((note, index) => (
//               <div key={index} className="bg-white shadow-md rounded-lg p-4">
//                 <p className="text-gray-800">{note.content}</p>
//                 <p className="text-sm text-gray-500 mt-2">{new Date(note.date).toLocaleString()}</p>
//               </div>
//             ))}
//           </div>
//           {loading ? (
//             <p className="mt-4 text-center text-gray-600">Loading...</p>
//           ) : (
//             <button
//               onClick={() => setPage((prevPage) => prevPage + 1)}
//               className="mt-4 w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition duration-300"
//             >
//               Load More
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailyJournal;
// //--------------------------------------------------------------------------------------------------------------

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

  const trackUri = "spotify:album:5K8PsqGs0KKmGywXhcBQQB"; // Replace with your track's URI
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your token from the backend

  // Fetch journal entries
  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5173/api/journal?page=${page}`);
      const data = await response.json();
      setNotes(data.notes.slice(0, 3)); // Load only the first 3 notes initially
    } catch (err) {
      console.error("Error fetching notes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Load more notes
  const loadMoreNotes = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5173/api/journal?page=${page + 1}`);
      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes.slice(data.notes.length), ...data.notes]); // Keep only 3 notes visible
      setPage((prevPage) => prevPage + 1);
      setScrollVisible(true); // Make scroll visible only after loading more
    } catch (err) {
      console.error("Error loading more notes:", err);
    } finally {
      setLoading(false);
    }
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
      await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
        method: "PUT",
        body: JSON.stringify({ uris: [trackUri] }),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
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
      await fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Music paused.");
    } catch (err) {
      console.error("Error pausing music:", err);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5173/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: journal }),
      });

      if (!response.ok) throw new Error("Failed to save journal entry");

      const newNote = await response.json();
      setNotes((prevNotes) => [newNote, ...prevNotes.slice(0, 2)]); // Add new note and keep only 3
      setJournal(""); // Clear input field
    } catch (err) {
      console.error("Error saving journal:", err);
    }
  };

  return (
    <div
      className="container mx-auto p-8 bg-cover bg-center h-screen overflow-hidden flex flex-col items-center"
      style={{ backgroundImage: "url('/journal-bg.jpg')", backgroundAttachment: "fixed" }}
    >
      <header className="bg-transparent text-teal-700 fixed top-0 left-0 w-full z-50">
  <div className="px-4 flex justify-between items-center py-4">
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
</header>

       
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-white">Daily Journal</h1>
        <button
          onClick={musicPlaying ? pauseMusic : playMusic}
          className="py-2 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
        >
          {musicPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>
      <p className="text-black mb-6 ">
        Your Daily Thoughts: Reflect, Release, and Recharge
      </p>

      <div className="flex flex-wrap md:flex-nowrap w-full max-w-6xl gap-20">
        {/* Journal Writing Section */}
        <div className="w-full md:w-10/12 bg-transparent backdrop-blur- shadow-lg rounded-xl p-6">
          <h2 className="text-2xl text-yellow-100 font-bold mb-4">Hey, how was your day?</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              rows="5"
              className="w-full p-4 border  border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 bg-transparent"
              placeholder="Feel free to jot down what's on your mind, I'm here to listen!"
              required
            />
            
            <div className="flex space-x-4 ">
              <button
                type="button"
                className="py-2 px-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition duration-300"
              >
                Add Image
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition duration-300"
              >
                Add Emoji
              </button>
              <button
                type="submit"
                className="py-2 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Save Entry
              </button>
            </div>
          </form>
        </div>

        {/* Journal Notes Section */}
        <div
          className={`w-full md:w-6/12 mt-6 md:mt-0 md:ml-6 ${
            scrollVisible ? "overflow-y-auto" : "overflow-hidden"
          } h-96`}
        >
          <style>
  {`
    .custom-scrollbar-white::-webkit-scrollbar {
      width: 10px;
    }
    .custom-scrollbar-white::-webkit-scrollbar-track {
      background: #f0f0f0; /* light gray background */
      border-radius: 10px;
    }
    .custom-scrollbar-white::-webkit-scrollbar-thumb {
      background: #888; /* darker thumb color */
      border-radius: 10px;
      border: 2px solid #f0f0f0; /* border color matching track */
    }
    .custom-scrollbar-white::-webkit-scrollbar-thumb:hover {
      background: #555; /* hover state darker thumb */
    }
  `}
</style>

          <h2 className="text-2xl font-bold text-white mb-4">See Older Posts</h2>
          <div className="space-y-4 custom-scrollbar-white">
            {notes.map((note, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <p className="text-gray-800">{note.content}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(note.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={loadMoreNotes}
            className="mt-4 w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyJournal;
