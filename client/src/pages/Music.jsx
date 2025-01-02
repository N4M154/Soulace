// import axios from "axios";
// import React, { useState } from "react";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";

// const MusicRecommendation = () => {
//   const [selectedMood, setSelectedMood] = useState("");
//   const [recommendations, setRecommendations] = useState([]);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const moods = ["happy", "sad", "relax", "party", "energetic"];

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
//           api_key: import.meta.env.VITE_LASTFM_API_KEY, // Ensure this is correct
//           format: "json",
//           page: page,
//           limit: 5, // Fetch 5 songs per request
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

//   return (
//     <div>
//       <Header />

//       {/* Side Buttons */}
//       <SideButtons />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "flex-start",
//           justifyContent: "space-between",
//           minHeight: "100vh",
//           background: "white",
//           color: "#004d40",
//           fontFamily: "'Roboto', sans-serif",
//           padding: "20px",
//         }}
//       >
//         {/* Mood Selection Box */}
//         <div
//           style={{
//             backgroundColor: "#d2e9d9",
//             padding: "30px",
//             borderRadius: "15px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             maxWidth: "600px",
//             width: "100%",
//             textAlign: "center",
//             marginTop: "100px",
//             marginLeft: "260px", // Shifted to the right
//           }}
//         >
//           <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#004d40" }}>
//             Music Recommendations
//           </h1>
//           <p style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#004d40" }}>
//             Select a mood and discover the perfect tracks for your vibe!
//           </p>
//           <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//             <select
//               style={{
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 flex: "1",
//                 fontSize: "1rem",
//                 color: "#004d40",
//               }}
//               value={selectedMood}
//               onChange={(e) => setSelectedMood(e.target.value)}
//             >
//               <option value="">Select Mood</option>
//               {moods.map((mood) => (
//                 <option key={mood} value={mood}>
//                   {mood.charAt(0).toUpperCase() + mood.slice(1)}
//                 </option>
//               ))}
//             </select>
//             <button
//               onClick={() => {
//                 setPage(1);
//                 fetchRecommendations();
//               }}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#00796b",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Get Recommendations
//             </button>
//           </div>
//           {error && (
//             <p style={{ color: "#d32f2f", marginBottom: "20px" }}>{error}</p>
//           )}
//         </div>

//         {/* Music Recommendations Box */}
//         <div
//           style={{
//             backgroundColor: "#d2e9d9",
//             padding: "20px",
//             borderRadius: "15px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             maxWidth: "600px",
//             width: "100%",
//             marginLeft: "20px",
//           }}
//         >
//           {recommendations.length > 0 ? (
//             <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
//               {recommendations.map((rec, idx) => (
//                 <li
//                   key={idx}
//                   style={{
//                     background: "#ffffff",
//                     color: "#004d40",
//                     padding: "10px",
//                     borderRadius: "8px",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   <p style={{ fontSize: "1rem", fontWeight: "bold" }}>{rec.name}</p>
//                   <p style={{ fontSize: "0.9rem", color: "#00796b" }}>{rec.artist.name}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p style={{ fontSize: "1.1rem", color: "#004d40" }}>No music recommendations yet.</p>
//           )}
//           {recommendations.length > 0 && (
//             <button
//               onClick={() => fetchRecommendations()}
//               style={{
//                 padding: "10px 20px",
//                 color: "teal",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//                 display: "block",
//                 width: "100%",
//               }}
//             >
//               {loading ? "Loading..." : "Load More"}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MusicRecommendation;



//----------------------------------------


// import axios from "axios";
// import { AnimatePresence, motion } from "framer-motion";
// import React, { useState } from "react";
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

//   const moods = [
//     { value: "happy", icon: <BiHappyBeaming className="text-xl" />, label: "Happy" },
//     { value: "sad", icon: <BiSad className="text-xl" />, label: "Sad" },
//     { value: "relax", icon: <RiMentalHealthLine className="text-xl" />, label: "Relax" },
//     { value: "party", icon: <BiParty className="text-xl" />, label: "Party" },
//     { value: "energetic", icon: <MdOutlineEnergySavingsLeaf className="text-xl" />, label: "Energetic" }
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
//     <div className="min-h-screen bg-gradient-to-br from-[#004d40] to-[#00796b]">
//       <Header />
//       <SideButtons />
      
//       <div className="ml-[60px] sm:ml-[80px] p-4 sm:p-6">
//         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 mt-12">
//           {/* Mood Selection Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="lg:w-1/2 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
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
//                 <FaMusic className="text-4xl text-white mx-auto" />
//               </motion.div>
//               <h1 className="text-2xl font-bold text-white mb-2">
//                 Music Recommendations
//               </h1>
//               <p className="text-white/80 text-sm">
//                 Select your mood and discover the perfect tracks!
//               </p>
//             </motion.div>

//             <div className="space-y-4">
//               <div className="grid grid-cols-3 gap-2 mb-4">
//                 {moods.map(({ value, icon, label }) => (
//                   <motion.button
//                     key={value}
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.97 }}
//                     onClick={() => setSelectedMood(value)}
//                     className={`p-2 rounded-lg flex flex-col items-center gap-1 transition-colors ${
//                       selectedMood === value
//                         ? 'bg-white text-[#004d40]'
//                         : 'bg-white/10 text-white hover:bg-white/20'
//                     }`}
//                   >
//                     {icon}
//                     <span className="text-xs font-medium">{label}</span>
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
//                 className="w-full bg-white text-[#004d40] py-3 px-4 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 text-sm"
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
//                   className="text-red-300 text-center text-sm mt-2"
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
//             className="lg:w-1/2 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6"
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
//                       className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
//                     >
//                       <div className="flex items-center gap-3">
//                         <motion.div
//                           whileHover={{ scale: 1.1, rotate: 360 }}
//                           transition={{ duration: 0.5 }}
//                         >
//                           <FaHeadphones className="text-white text-lg" />
//                         </motion.div>
//                         <div>
//                           <h3 className="font-semibold text-white text-sm group-hover:text-white/90">
//                             {rec.name}
//                           </h3>
//                           <p className="text-white/70 text-xs group-hover:text-white/80">
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
//                   <FaMusic className="text-3xl text-white/50 mx-auto mb-3" />
//                   <p className="text-white/70 text-sm">
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
//                 className="w-full mt-4 bg-white/10 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
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

///------------------------------------


import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BiHappyBeaming, BiParty, BiSad } from "react-icons/bi";
import { FaHeadphones, FaMusic, FaSpinner } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const MusicRecommendation = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const moods = [
    { value: "happy", icon: <BiHappyBeaming className="text-2xl" />, label: "Happy" },
    { value: "sad", icon: <BiSad className="text-2xl" />, label: "Sad" },
    { value: "relax", icon: <RiMentalHealthLine className="text-2xl" />, label: "Relax" },
    { value: "party", icon: <BiParty className="text-2xl" />, label: "Party" },
    { value: "energetic", icon: <MdOutlineEnergySavingsLeaf className="text-2xl" />, label: "Energetic" },
  ];

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

  const selectedMoodIcon = moods.find(mood => mood.value === selectedMood)?.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SideButtons />

      <div className="ml-[60px] md:ml-[260px] p-4 sm:p-6 transition-all">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 mt-12">
          {/* Mood Selection Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-1/2 bg-gray-100 rounded-xl shadow-lg p-6"
          >
            <motion.div 
              className="text-center mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-3"
              >
                <FaMusic className="text-4xl text-teal-500 mx-auto" />
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Music Recommendations
              </h1>
              <p className="text-gray-600 text-sm">
                Select your mood and discover the perfect tracks!
              </p>
            </motion.div>

            <div className="space-y-4">
              <div className="flex justify-center gap-6 mb-6">
                {moods.map(({ value, icon, label }) => (
                  <motion.button
                    key={value}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedMood(value)}
                    className={`w-16 h-16 flex flex-col items-center justify-center rounded-full transition-colors shadow-lg ${
                      selectedMood === value
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {icon}
                    <span className="text-xs font-medium mt-1">{label}</span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setPage(1);
                  fetchRecommendations();
                }}
                className="w-full bg-teal-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 text-sm"
                disabled={loading}
              >
                {loading ? (
                  <FaSpinner className="animate-spin text-lg" />
                ) : (
                  <>
                    {selectedMoodIcon || <FaHeadphones className="text-lg" />}
                    Get Recommendations
                  </>
                )}
              </motion.button>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center text-sm mt-2"
                >
                  {error}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Recommendations Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 bg-gray-100 rounded-xl shadow-lg p-6"
          >
            <AnimatePresence mode="wait">
              {recommendations.length > 0 ? (
                <motion.ul className="space-y-3">
                  {recommendations.map((rec, idx) => (
                    <motion.li
                      key={`${rec.name}-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <FaHeadphones className="text-teal-500 text-lg" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm group-hover:text-gray-900">
                            {rec.name}
                          </h3>
                          <p className="text-gray-600 text-xs group-hover:text-gray-700">
                            {rec.artist.name}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-6"
                >
                  <FaMusic className="text-3xl text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-600 text-sm">
                    Select a mood to get music recommendations
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {recommendations.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={fetchRecommendations}
                className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <FaSpinner className="animate-spin text-lg" />
                ) : (
                  "Load More"
                )}
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MusicRecommendation;
