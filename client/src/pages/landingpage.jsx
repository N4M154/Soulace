import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const featuresRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGetStarted = () => {
    setShowFeatures(!showFeatures);

    // Scroll to features section
    if (!showFeatures) {
      setTimeout(() => {
        featuresRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // Delay to ensure the section renders before scrolling
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative ml-0">
        {/* Navbar */}
        <header className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center w-full">
          <div className="flex items-center ml-10">
            <Link to="/home">
              <img src="/Logo.png" width={100} height={80} alt="Logo" />
            </Link>
          </div>

          {/* SignIn Button */}
          <div className="flex items-center mt-[-20px]">
            {currentUser ? (
              <Link
                to="/profile"
                className="flex items-center space-x-2 font-bold mr-10"
              >
                {currentUser.profilePicture ? (
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-teal-800 hover:text-teal-500 transition duration-300">
                    Profile
                  </span>
                )}
              </Link>
            ) : (
              <button
                onClick={() => (window.location.href = "/sign-in")}
                className="text-white hover:text-white-700 transition duration-300 mr-10 px-3 py-1 bg-teal-600 rounded-lg hover:bg-teal-500"
              >
                Sign In
              </button>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section
          className={`bg-cover bg-center min-h-screen flex items-center justify-start ${
            showFeatures ? "text-black" : "text-white"
          }`}
          style={{
            backgroundImage: "url('/Untitled design.png')",
          }}
        >
          {/* Overlay before clicking "Get Started" */}
          {!showFeatures && (
            <div className="absolute inset-0 bg-black opacity-40"></div>
          )}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="container mx-auto flex justify-between items-center px-8 text-left relative z-10"
          >
            <div className="text-left max-w-xl ml-10 mt-20">
              <h1
                className={`text-5xl font-bold ${
                  showFeatures ? "text-teal-600" : "text-white"
                }`}
              >
                Soulace: Your Path to Mental Wellness
              </h1>
              <p
                className={`text-lg mt-6 ${
                  showFeatures ? "text-black" : "text-white"
                }`}
              >
                Welcome to Soulace – a comprehensive and user-friendly online
                platform designed to support your mental well-being journey.
              </p>
              <button
                onClick={handleGetStarted}
                className="mt-8 px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-500 transition duration-300"
              >
                {showFeatures ? "Hide Features" : "Get Started"}
              </button>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <AnimatePresence>
          {showFeatures && (
            <motion.section
              ref={featuresRef} // Reference for scrolling
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-white"
            >
              <div className="container mx-auto px-8 text-center py-16 bg-gradient-to-b from-teal-100 to-white rounded-lg shadow-md">
                <h2 className="text-4xl font-bold text-teal-800 tracking-wide">
                  Enhance Your Well-Being with Our Tracking Tools
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  Discover insights into your mental health with our powerful
                  tracking features.
                </p>

{/* Feature Sections */}
<div className="mt-12 min-w-full">
      
      <div className="ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {[
          {
            name: "Mood-Tracker",
            description: "Track your daily moods to better understand yourself.",
            image: "/Mood Tracker.png",
          },
          {
            name: "Sleep-Tracker",
            description: "Monitor your sleep patterns and improve your rest.",
            image: "/Sleep Tracker.png",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center h-[400px] cursor-pointer transition-transform"
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const isLoggedIn = localStorage.getItem("token"); // Check if the user is logged in
              if (isLoggedIn) {
                // Navigate to the feature's page if logged in
                navigate(`/${feature.name.toLowerCase().replace(/ /g, "-")}`);
              } else {
                // Navigate to Sign-In page if not logged in
                navigate("/sign-in");
              }
            }}
          >
            <motion.img
              src={feature.image}
              alt={feature.name}
              className="h-48 w-48 mb-6 rounded-xl object-cover"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <h3 className="text-2xl font-semibold text-teal-700 text-center">
              {feature.name}
            </h3>
            <p className="text-gray-700 mt-4 text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>


              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* New Section: Boost Your Mood */}
<AnimatePresence>
  {showFeatures && (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      
    >
      <h2 className="ml-10 text-center text-4xl font-bold text-black-800 tracking-wide">
          Boost Your Mood
        </h2>
        <p className="ml-10 text-lg text-center text-gray-600 mt-4">
          Explore tools designed to uplift your spirits and help you find joy
          in small moments.
        </p>
      <div className="container mx-auto px-8 py-16 space-y-16">
        
        {/* Music Recommendation Feature */}
        <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 bg-pink-100 p-8 rounded-lg shadow-lg">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-pink-800 mb-4 ml-10">
              Music That Matches Your Mood
            </h2>
            <p className="text-lg text-gray-700 mb-6 ml-10"> 
              Explore personalized playlists to suit your mood and energy level. You can choose your mood and get recommendation of music that suits the mood. Helps you boost your mood. 
            </p>
            <button
              onClick={() => navigate("/music-recommendation")}
              className="px-6 py-3 bg-pink-700 text-white rounded-lg hover:bg-pink-500 transition duration-300 ml-10"
            >
              Discover Music
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/CatMusic.png"
              alt="Cat listening to music"
              className="h-80 w-80  object-cover ml-40 "
            />
          </div>
        </section>

        {/* Mental Health Articles Feature */}
        <section className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-10 bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="flex-1 text-left ">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
              Learn, Reflect, and Grow
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Dive into articles written by experts to nurture your mental well-being.
Gain valuable insights, strategies, and practical tips for managing stress, anxiety, and building emotional resilience.

            </p>
            <button
              onClick={() => navigate("/mental-health-articles")}
              className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-500 transition duration-300"
            >
              Read Articles
            </button>
          </div>
          <div className="flex-1 ">
            <img
              src="/MindGrowth.png"
              alt="Mind growth concept"
              className="h-80 w-80 rounded-lg object-cover "
            />
          </div>
        </section>

        {/* Joke of the Day Feature */}
        <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 bg-yellow-100 p-8 rounded-lg shadow-lg">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-yellow-800 mb-4 ml-10">
              Smile with the Joke of the Day!
            </h2>
            <p className="text-lg text-gray-700 mb-6 italic ml-10">
              "Why don’t scientists trust atoms? Because they make up everything!"
            </p>
            <button
              onClick={() => navigate("/joke-of-the-day")}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300 ml-10"
            >
              See Another Joke
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/SmilingSun.png"
              alt="Smiling sun"
              className="h-84 w-84  object-cover "
            />
          </div>
        </section>
      </div>
    </motion.section>
  )}
</AnimatePresence>


{/* New Section: Breathing Exercise */}
<AnimatePresence>
  {showFeatures && (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-purple-50"
    >
      <div className="container mx-auto px-8 text-center py-16 bg-gradient-to-b from-purple-300 to-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-purple-800 tracking-wide">
          Breathing Exercise: A Relaxing Game
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Engage in guided breathing exercises to relax and improve focus.
        </p>

        <motion.div
          className="mt-12 mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center max-w-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-full h-64 flex items-center justify-center">
            {/* Heart Pumping Animation */}
            <motion.img
              src="/heart.png" // Add the path to your heart image here
              alt="Pumping Heart"
              className=" w-88 h-88"
              animate={{
                scale: [1, 1.1, 1], // Heart pumps by scaling up and down
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop", // Makes the animation repeat forever
              }}
            />
          </div>
          <p className="text-gray-600 mt-4">
            Follow the heart as it beats in sync with your breath.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-500 transition"
            onClick={() => navigate("/breathing-exercise")}
          >
            Start Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  )}
</AnimatePresence>



      </div>
    </div>
  );
}
