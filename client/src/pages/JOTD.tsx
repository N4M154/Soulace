
// //------------------------------

// import { useState } from "react";
// import { FaLaugh, FaSpinner } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import Footer from "../components/Footer.jsx";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";


// const JokeOfTheDay = () => {
//   const [joke, setJoke] = useState("");
//   const [showJoke, setShowJoke] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { currentUser } = useSelector((state) => state.user);
//   const [isExpanded, setIsExpanded] = useState(true);

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
//     <div className="flex min-h-screen bg-gray-50">
//       <SideButtons />
//       <div
//         id="main-content"
//         className="flex-1 transition-all duration-300"
//         style={{ marginLeft: isExpanded ? "260px" : "80px" }}
//       >
//         <Header />

     
//         <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 mt-12 bg-gray-100 rounded-xl shadow-lg p-8">
//           <div className="text-center">
//             <div className="inline-block mb-4">
//               <FaLaugh className="text-5xl text-teal-500" />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-800">Joke of the Day</h1>
//             <p className="text-gray-600 mt-2">
//               Feeling down? Click the button below for a random joke!
//             </p>
//           </div>

//           <div className="w-full bg-white text-gray-800 p-6 rounded-lg shadow-md">
//             {loading ? (
//               <p className="text-teal-500 text-lg font-medium text-center">
//                 Fetching your joke... 😄
//               </p>
//             ) : showJoke ? (
//               <p className="text-lg font-semibold text-gray-700 text-center">
//                 {joke}
//               </p>
//             ) : (
//               <p className="text-center text-gray-500">
//                 Click the button to hear a joke!
//               </p>
//             )}
//           </div>

//           <button
//             onClick={fetchJoke}
//             disabled={loading}
//             className={`px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 ${
//               loading ? "cursor-not-allowed" : "cursor-pointer"
//             }`}
//           >
//             {loading ? <FaSpinner className="animate-spin" /> : "Tell Me a Joke!"}
//           </button>
//         </div>
        
//         <Footer></Footer>
//       </div>
//     </div>
  
//   );
// };

// export default JokeOfTheDay;

///////------------------------------------------
import { Heart, Laugh, Loader, RefreshCw, Sparkles } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import SideButtons from "../components/SideButtons.jsx";

function App() {
  const [joke, setJoke] = useState("");
  const [showJoke, setShowJoke] = useState(false);
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(0);
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
    <div className="flex min-h-screen w-full">
      <SideButtons/>
      <div
        id="main-content"
        className="flex-1 transition-all duration-300 min-h-screen"
        style={{
          marginLeft: isExpanded ? "260px" : "80px",
        }}
      >
        <Header />
   
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-white text-teal-900 text-white py-16 px-8 rounded-2xl shadow-lg mx-4 mt-6">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1517242027094-631f8c218a0f?auto=format&fit=crop&q=80"
              alt="Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative w-full mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Laugh className="h-20 w-20 text-white mx-auto mb-6" />
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Daily Dose of Laughter
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-teal-100">
                Start your day with a smile! Our curated collection of jokes will brighten up your mood.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full px-4 py-12">
          {/* Joke Card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 text-teal-500" />
                  <h2 className=" text-2xl font-bold text-gray-800">Joke of the Day</h2>
                </div>
                <RefreshCw 
                  className={`h-6 w-6 text-teal-500 cursor-pointer hover:rotate-180 transition-transform duration-500 ${loading ? 'animate-spin' : ''}`}
                  onClick={fetchJoke}
                />
              </div>

              <div className="min-h-[120px] flex items-center justify-center bg-gray-50 rounded-xl p-8 mb-6">
                {loading ? (
                  <div className="flex items-center space-x-3">
                    <Loader className="h-6 w-6 text-teal-500 animate-spin" />
                    <p className="text-teal-500 text-lg font-medium">Loading your daily laugh...</p>
                  </div>
                ) : showJoke ? (
                  <p className="text-xl font-medium text-gray-700 text-center leading-relaxed">
                    {joke}
                  </p>
                ) : (
                  <p className="text-gray-500 text-lg">
                    Ready to brighten your day? Click the refresh icon for a joke!
                  </p>
                )}
              </div>

              {/* Love Button */}
              <div className="flex items-center justify-center">
                <button 
                  onClick={() => setLikes(prev => prev + 1)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors group"
                >
                  <Heart className="h-6 w-6 group-hover:fill-current" />
                  <span>{likes}</span>
                </button>
              </div>
            </div>

            {/* Global Laughter Stats */}
            <div className="bg-gray-50 px-8 py-6">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold text-teal-500 text-lg">Stress Reduction</p>
                  <p className="mt-2 text-2xl font-bold text-gray-700">68% decrease</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold text-teal-500 text-lg">Immune System Boost</p>
                  <p className="mt-2 text-2xl font-bold text-gray-700">+43% function</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-semibold text-teal-500 text-lg">Mental Well-being</p>
                  <p className="mt-2 text-2xl font-bold text-gray-700">87% improved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;