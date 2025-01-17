
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";

// const JokeOfTheDay = () => {
//   const [joke, setJoke] = useState("");
//   const [showJoke, setShowJoke] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { currentUser } = useSelector((state) => state.user);

//   const fetchJoke = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://official-joke-api.appspot.com/random_joke");
//       const data = await response.json();
//       setJoke(`${data.setup} - ${data.punchline}`);
//       setShowJoke(true);
//     } catch (error) {
//       setJoke("Oops! Couldn't fetch a joke. Try again later.");
//       setShowJoke(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div
//         className="text-teal-700 w-full"
//         style={{
//           background: "white",
//         }}
//       >
//         <Header />
//       </div>

//       {/* Side Buttons */}
//       <SideButtons />

//       {/* Main Content */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           marginLeft: "80px", // Adjusted to avoid overlap with side buttons
//           minHeight: "84vh",
//           fontFamily: "'Comic Sans MS', cursive, sans-serif",
//           color: "#333",
//           textAlign: "center",
//           padding: "20px",
//         }}
//       >
//         <div
//           style={{
//             background: "linear-gradient(135deg,rgb(6, 142, 133),rgb(18, 158, 149))",
//             borderRadius: "15px",
//             boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
//             padding: "30px",
//             maxWidth: "600px",
//             width: "100%",
//           }}
//         >
//           <header style={{ marginBottom: "20px" }}>
//             <h1
//               style={{
//                 fontSize: "3rem",
//                 font: "bold",
//                 color: "white",
//                 textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
//                 textAlign: "center",
//               }}
//             >
//               Joke of the Day
//             </h1>
//             <p style={{ fontSize: "1.2rem", color: "#f9f9f9", textAlign: "center" }}>
//               Need a laugh? Click the button below for a random joke!
//             </p>
//           </header>
//           <main
//             style={{
//               background: "rgba(255, 255, 255, 0.8)",
//               padding: "20px",
//               borderRadius: "15px",
//               boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//             }}
//           >
//             {loading && (
//               <p style={{ color: "#ffa726", fontSize: "1.2rem" }}>
//                 Fetching your joke... 😄
//               </p>
//             )}
//             {showJoke && (
//               <p style={{ fontSize: "1.5rem", margin: "20px 0", color: "#555" }}>
//                 {joke}
//               </p>
//             )}
//             <button
//               style={{
//                 backgroundColor: "#00777E",
//                 color: "#fff",
//                 fontSize: "1.2rem",
//                 border: "none",
//                 borderRadius: "10px",
//                 padding: "10px 20px",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s ease",
//               }}
//               onClick={fetchJoke}
//               disabled={loading}
//             >
//               {loading ? "Loading..." : "Tell me a joke!"}
//             </button>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JokeOfTheDay;



//------------------------------

import { useState } from "react";
import { FaLaugh, FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";


const JokeOfTheDay = () => {
  const [joke, setJoke] = useState("");
  const [showJoke, setShowJoke] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [isExpanded, setIsExpanded] = useState(true);

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
    <div className="flex min-h-screen bg-gray-50">
      <SideButtons />
      <div
        id="main-content"
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: isExpanded ? "260px" : "80px" }}
      >
        <Header />

     
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 mt-12 bg-gray-100 rounded-xl shadow-lg p-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <FaLaugh className="text-5xl text-teal-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Joke of the Day</h1>
            <p className="text-gray-600 mt-2">
              Feeling down? Click the button below for a random joke!
            </p>
          </div>

          <div className="w-full bg-white text-gray-800 p-6 rounded-lg shadow-md">
            {loading ? (
              <p className="text-teal-500 text-lg font-medium text-center">
                Fetching your joke... 😄
              </p>
            ) : showJoke ? (
              <p className="text-lg font-semibold text-gray-700 text-center">
                {joke}
              </p>
            ) : (
              <p className="text-center text-gray-500">
                Click the button to hear a joke!
              </p>
            )}
          </div>

          <button
            onClick={fetchJoke}
            disabled={loading}
            className={`px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Tell Me a Joke!"}
          </button>
        </div>
        
        <Footer></Footer>
      </div>
    </div>
  
  );
};

export default JokeOfTheDay;
