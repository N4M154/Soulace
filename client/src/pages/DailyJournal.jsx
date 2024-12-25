
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

const DailyJournal = () => {
  const [journal, setJournal] = useState("");
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [spotifyPlayer, setSpotifyPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);

  const trackUri = "spotify:album:5K8PsqGs0KKmGywXhcBQQB"; // Replace with your track's URI
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your token from the backend

  // Fetch journal entries
  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5173/api/journal?page=${page}`);
        const data = await response.json();
        setNotes((prevNotes) => [...prevNotes, ...data.notes]); // Append new notes
      } catch (err) {
        console.error("Error fetching notes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [page]);

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
      setNotes([newNote, ...notes]); // Add new note to the top
      setJournal(""); // Clear input field
    } catch (err) {
      console.error("Error saving journal:", err);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Mood-Reflective Daily Journal</h1>

      <div className="flex flex-col md:flex-row">
        {/* Journal Writing Section */}
        <div className="md:w-2/3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Write Your Thoughts</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={journal}
              onChange={(e) => setJournal(e.target.value)}
              rows="8"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="What's on your mind today?"
              required
            />
            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Save Entry
            </button>
          </form>
          <button
            onClick={musicPlaying ? pauseMusic : playMusic}
            className="mt-4 py-3 px-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
          >
            {musicPlaying ? "Pause Relaxing Music" : "Play Relaxing Music"}
          </button>
        </div>

        {/* Journal Notes Section */}
        <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-bold mb-4">Recent Entries</h2>
          <div className="space-y-4">
            {notes.map((note, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <p className="text-gray-800">{note.content}</p>
                <p className="text-sm text-gray-500 mt-2">{new Date(note.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
          {loading ? (
            <p className="mt-4 text-center text-gray-600">Loading...</p>
          ) : (
            <button
              onClick={() => setPage((prevPage) => prevPage + 1)}
              className="mt-4 w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyJournal;
