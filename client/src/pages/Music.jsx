///------------------------------------

// import axios from "axios";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// import { BiHappyBeaming, BiParty, BiSad } from "react-icons/bi";
// import { FaHeadphones, FaMusic, FaSpinner } from "react-icons/fa";
// import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
// import { RiMentalHealthLine } from "react-icons/ri";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";

// const MusicRecommendation = () => {
//   const [selectedMood, setSelectedMood] = useState("");
//   const [recommendations, setRecommendations] = useState([]);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(true);

//   const moods = [
//     { value: "happy", icon: <BiHappyBeaming className="text-2xl" />, label: "Happy" },
//     { value: "sad", icon: <BiSad className="text-2xl" />, label: "Sad" },
//     { value: "relax", icon: <RiMentalHealthLine className="text-2xl" />, label: "Relax" },
//     { value: "party", icon: <BiParty className="text-2xl" />, label: "Party" },
//     { value: "energetic", icon: <MdOutlineEnergySavingsLeaf className="text-2xl" />, label: "Energetic" },
//   ];

//   const fetchRecommendations = async () => {
//     if (!selectedMood) {
//       setError("Please select a mood to get recommendations!");
//       return;
//     }
//     setError("");
//     setLoading(true);
//     try {
//       const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
//         params: {
//           method: "tag.getTopTracks",
//           tag: selectedMood,
//           api_key: import.meta.env.VITE_LASTFM_API_KEY,
//           format: "json",
//           page: page,
//           limit: 5,
//         },
//       });
//       if (response.data.tracks && response.data.tracks.track) {
//         setRecommendations(response.data.tracks.track);
//         setPage((prevPage) => prevPage + 1);
//       } else {
//         setError("No recommendations found for the selected mood.");
//       }
//     } catch (err) {
//       console.error("API Error:", err);
//       setError("Failed to fetch recommendations. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const selectedMoodIcon = moods.find(mood => mood.value === selectedMood)?.icon;

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <SideButtons />
//       <div
//         id="main-content"
//         className="flex-1 transition-all duration-300"
//         style={{ marginLeft: isExpanded ? "260px" : "80px" }}
//       >
//         <Header />
//         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 mt-12">
//           {/* Mood Selection Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="lg:w-1/2 bg-gray-100 rounded-xl shadow-lg p-6"
//           >
//             <motion.div
//               className="text-center mb-6"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-block mb-3"
//               >
//                 <FaMusic className="text-4xl text-teal-500 mx-auto" />
//               </motion.div>
//               <h1 className="text-2xl font-bold text-gray-800 mb-2">
//                 Music Recommendations
//               </h1>
//               <p className="text-gray-600 text-sm">
//                 Select your mood and discover the perfect tracks!
//               </p>
//             </motion.div>

//             <div className="space-y-4">
//               <div className="flex justify-center gap-6 mb-6">
//                 {moods.map(({ value, icon, label }) => (
//                   <motion.button
//                     key={value}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setSelectedMood(value)}
//                     className={`w-16 h-16 flex flex-col items-center justify-center rounded-full transition-colors shadow-lg ${
//                       selectedMood === value
//                         ? 'bg-teal-500 text-white'
//                         : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                     }`}
//                   >
//                     {icon}
//                     <span className="text-xs font-medium mt-1">{label}</span>
//                   </motion.button>
//                 ))}
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => {
//                   setPage(1);
//                   fetchRecommendations();
//                 }}
//                 className="w-full bg-teal-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 text-sm"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <FaSpinner className="animate-spin text-lg" />
//                 ) : (
//                   <>
//                     {selectedMoodIcon || <FaHeadphones className="text-lg" />}
//                     Get Recommendations
//                   </>
//                 )}
//               </motion.button>

//               {error && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-red-500 text-center text-sm mt-2"
//                 >
//                   {error}
//                 </motion.p>
//               )}
//             </div>
//           </motion.div>

//           {/* Recommendations Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="lg:w-1/2 bg-gray-100 rounded-xl shadow-lg p-6"
//           >
//             <AnimatePresence mode="wait">
//               {recommendations.length > 0 ? (
//                 <motion.ul className="space-y-3">
//                   {recommendations.map((rec, idx) => (
//                     <motion.li
//                       key={`${rec.name}-${idx}`}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 20 }}
//                       transition={{ delay: idx * 0.1 }}
//                       className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition-all duration-300 group"
//                     >
//                       <div className="flex items-center gap-3">
//                         <motion.div
//                           whileHover={{ scale: 1.1, rotate: 360 }}
//                           transition={{ duration: 0.5 }}
//                         >
//                           <FaHeadphones className="text-teal-500 text-lg" />
//                         </motion.div>
//                         <div>
//                           <h3 className="font-semibold text-gray-800 text-sm group-hover:text-gray-900">
//                             {rec.name}
//                           </h3>
//                           <p className="text-gray-600 text-xs group-hover:text-gray-700">
//                             {rec.artist.name}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.li>
//                   ))}
//                 </motion.ul>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-center py-6"
//                 >
//                   <FaMusic className="text-3xl text-gray-300 mx-auto mb-3" />
//                   <p className="text-gray-600 text-sm">
//                     Select a mood to get music recommendations
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {recommendations.length > 0 && (
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={fetchRecommendations}
//                 className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <FaSpinner className="animate-spin text-lg" />
//                 ) : (
//                   "Load More"
//                 )}
//               </motion.button>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicRecommendation;

// //--------------------------------------------------------------

import axios from "axios";
import { motion } from "framer-motion";
import {
  Headphones,
  Heart,
  Loader,
  Music,
  Pause,
  Play,
  RefreshCw,
  Share2,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const featuredTracks = [
  {
    id: 1,
    title: "Forest Rain",
    artist: "Ambient Nature",
    mood: "relax",
    url: "/rain.mp3",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f",
  },
  {
    id: 2,
    title: "Meditation Bell",
    artist: "Zen Masters",
    mood: "relax",
    url: "/meditation.mp3",
    image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83",
  },
  {
    id: 3,
    title: "Gentle Piano",
    artist: "Classical Calm",
    mood: "relax",
    url: "/piano.mp3",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0",
  },
  {
    id: 4,
    title: "Ocean Waves",
    artist: "Nature Sounds",
    mood: "relax",
    url: "/wave.mp3",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 5,
    title: "Night Cricket",
    artist: "Nature's Symphony",
    mood: "relax",
    url: "/cricket.mp3",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
  },
  {
    id: 6,
    title: "Mountain Stream",
    artist: "Pure Nature",
    mood: "relax",
    url: "/stream.mp3",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
  },
];

const moods = [
  { value: "happy", icon: "🌟", label: "Happy" },
  { value: "sad", icon: "💙", label: "Sad" },
  { value: "relax", icon: "🌊", label: "Relax" },
  { value: "party", icon: "🎉", label: "Party" },
  { value: "energetic", icon: "⚡", label: "Energetic" },
];

export default function MusicRecommendation() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedMood, setSelectedMood] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

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
          api_key: import.meta.env.VITE_LASTFM_API_KEY,
          format: "json",
          page: page,
          limit: 5,
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

  const handlePlayPause = (track) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (currentTrack) {
        audioRef.current.pause();
      }
      audioRef.current.src = track.url;
      audioRef.current.play();
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const connectSpotify = () => {
    alert("Spotify integration would be implemented here!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#2c2c2c]">
      <SideButtons />
      <div
        id="main-content"
        className="flex-1 transition-all duration-300 "
        style={{ marginLeft: isExpanded ? "260px" : "80px" }}
      >
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-8xl mx-auto px-4 py-4"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 dark:from-teal-800 to-white dark:to-teal-600 text-white py-16 px-8 rounded-2xl shadow-lg dark:shadow-black mx-4 mt-6">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1614149162883-504ce4d13909"
                alt="Music Background"
                className="w-full h-full object-cover mix-blend-overlay opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-white/40"></div>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-white leading-tight">
                    Discover Your Mood Music
                  </h1>
                  <p className="text-xl text-white mb-8 leading-relaxed max-w-2xl">
                    Let your emotions guide you to the perfect soundtrack.
                    Experience music that resonates with your every mood.
                  </p>
                  <div className="flex flex-wrap gap-4 ">
                    {/* <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={connectSpotify}
                      className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-teal-500/20"
                    >
                      <Music className="w-5 h-5" />
                      Connect with Spotify
                    </motion.button> */}

                    <div className="text-2xl italic text-white">
                      Start Listening
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="lg:w-1/2 flex justify-center"
              >
                <div className="relative w-56 h-56 lg:w-72 lg:h-72">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-teal-500/20"
                  ></motion.div>
                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-8 rounded-full border-2 border-teal-500/30"
                  ></motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-full shadow-xl dark:shadow-black">
                      <Music className="w-16 h-16 text-teal-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Featured Tracks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-300">
            Featured Music
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTracks.map((track) => (
              <motion.div
                key={track.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-teal-950 rounded-xl overflow-hidden shadow-lg dark:shadow-black"
              >
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-gray-300">
                    {track.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {track.artist}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handlePlayPause(track)}
                      className="bg-teal-500 hover:bg-teal-600 p-2 rounded-full text-white"
                    >
                      {currentTrack?.id === track.id && isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </button>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 dark:text-teal-400 dark:hover:text-teal-600 hover:text-teal-500">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 dark:text-teal-400 dark:hover:text-teal-600 hover:text-teal-500">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Music Recommendations Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-100 dark:bg-gradient-to-b dark:to-black dark:from-teal-950 dark:border dark:border-teal-700 dark:rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-teal-400">
              How are you feeling today?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {moods.map(({ value, icon, label }) => (
                <motion.button
                  key={value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedMood(value)}
                  className={`${
                    selectedMood === value
                      ? "bg-teal-500 text-white"
                      : "bg-white dark:bg-gray-300 text-gray-700 hover:bg-gray-50"
                  } px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-md dark:shadow-black`}
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="font-medium">{label}</span>
                </motion.button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={fetchRecommendations}
              className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto"
              disabled={loading}
            >
              {loading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Get Recommendations
                </>
              )}
            </motion.button>
          </motion.div>

          {/* API Recommendations */}
          {recommendations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-transparent dark:border dark:border-teal-800 rounded-xl p-6 shadow-lg dark:shadow-black"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-300">
                Recommended Tracks
              </h2>
              <div className="space-y-4">
                {recommendations.map((rec, idx) => (
                  <motion.div
                    key={`${rec.name}-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-50 dark:bg-teal-600 p-4 rounded-lg flex items-center justify-between group hover:bg-gray-100 dark:hover:bg-teal-800 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal-500 dark:bg-teal-900 rounded-full flex items-center justify-center text-white">
                        <Headphones className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-black">
                          {rec.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-900 text-sm">
                          {rec.artist.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-500">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 dark:text-teal-200 hover:text-teal-500 dark:hover:text-teal-500">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={fetchRecommendations}
                className="mt-6 w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <RefreshCw className="w-5 h-5" />
                    Load More
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
