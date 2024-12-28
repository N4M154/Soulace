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
            <Link to="/">
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
              onClick={() => navigate("/musicrecommendation")}
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
              Dive into articles written by experts or the videos to nurture your mental well-being.
Gain valuable insights, strategies, and practical tips for managing stress, anxiety, and building emotional resilience.

            </p>
            <button
              onClick={() => navigate("/contents")}
              className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-500 transition duration-300"
            >
              See Contents
            </button>
          </div>
          <div className="flex-1 ">
            <img
              src="/MindGrowth.png"
              alt="Mind growth concept"
              className="h-80 w-100 rounded-lg object-cover "
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
              onClick={() => navigate("/jokeoftheday")}
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
          Relaxation Games and Exercises
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
            onClick={() => navigate("/breathinggame")}
          >
            Play now
          </button>
        </motion.div>
      </div>
    </motion.section>
  )}
</AnimatePresence>
{/* New Section: Meditation Feature */}
<AnimatePresence>
  {showFeatures && (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-blue-50"
    >
      <div className="container mx-auto px-8 text-center py-16 bg-gradient-to-b from-blue-300 to-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-blue-800 tracking-wide">
          Meditation: Find Your Calm
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Engage in minimalistic activities to unwind and rediscover your focus.
        </p>

        <motion.div
          className="mt-12 mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center max-w-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-full h-64 flex items-center justify-center">
            {/* Animated Circles for Relaxation */}
            <motion.div
              className="absolute w-40 h-40 bg-blue-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
            ></motion.div>

            <motion.div
              className="absolute w-24 h-24 bg-blue-600 rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            ></motion.div>

            <motion.div
              className="absolute w-12 h-12 bg-blue-800 rounded-full"
              animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            ></motion.div>
          </div>
          <p className="text-gray-600 mt-4">
            Focus on the gentle rhythm of the shapes. Let go of stress.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-500 transition"
            onClick={() => navigate("/meditation")}
          >
            Start Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  )}
</AnimatePresence>


{/* New Section: Mood-Reflective Daily Journal */}
<AnimatePresence>
  {showFeatures && (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div
        className="container mx-auto px-8 text-center py-16 bg-gradient-to-b from-black/70 to-black/30 rounded-lg shadow-md"
        style={{ backgroundImage: "url('/background-image.gif')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h2 className="text-4xl font-bold text-white tracking-wide">
          Mood-Reflective Daily Journal
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          A premium feature to express your thoughts and track emotional growth.
        </p>

        {/* Feature Description with Image */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-8">
          {/* Feature Description */}
          <div className="text-left max-w-md ml-10">
            <h3 className="text-2xl font-semibold text-white">What is the Mood-Reflective Daily Journal?</h3>
            <p className="text-gray-300 mt-4">
              This premium feature allows you to record your daily thoughts, track your emotional growth, and revisit past entries. It’s designed to help you reflect, relax, and recharge.
            </p>
            <p className="text-gray-300 mt-4">
              Unlock the Mood-Reflective Daily Journal by subscribing for just $5-10. Enjoy exclusive access to a personalized journaling experience.
            </p>
          </div>

          {/* Feature Image */}
          <img
            src="/journal.png" // Replace with the path to your feature image
            alt="Mood-Reflective Daily Journal"
            className="rounded-lg shadow-lg max-w-sm mr-10"
          />
        </div>

        {/* Subscription Button */}
        <div className="mt-8">
          <button
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition shadow-lg"
            onClick={() => navigate('/subscribe')}
          >
            Unlock for $5-10 Subscription
          </button>
        </div>
      </div>
    </motion.section>
  )}
</AnimatePresence>
{/* New Section: Interactive Chatbot */}
  <AnimatePresence>
    {showFeatures && (
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div
          className="container mx-auto px-8 text-center py-16 bg-teal-800 rounded-lg shadow-lg"
        >
          <h2 className="text-4xl font-bold text-white tracking-wide">
            Meet SoulMate: Your Emotional Support Chatbot
          </h2>
          <p className="text-xl text-gray-100 mt-2">
            A safe space to share your thoughts and feelings without judgment, whenever you need it most.
          </p>
  
          {/* Feature Description with Image */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-12">
            {/* Feature Image */}
            <img
              src="/chatbot.png" alt="SoulMate Chatbot" className="max-w-xl"
            />
            {/* Feature Description */}
            <div className="text-left max-w-lg mr-10">
              <h3 className="text-3xl font-semibold text-white mb-4">Why Choose SoulMate?</h3>
              <p className="text-gray-100 leading-relaxed">
                SoulMate is your companion during challenging times, offering empathetic responses and a judgment-free space to express yourself. It helps you navigate emotions and feel supported anytime, anywhere.
              </p>
              <p className="text-gray-100 leading-relaxed mt-4">
                Whether you're feeling stressed, lonely, or just need someone to talk to, SoulMate is here for you.
              </p>
            </div>
  
            
          </div>
  
          {/* Learn More Button */}
          <div className="mt-6">
            <button
              className="px-8 py-4 bg-teal-600 text-white font-bold text-lg rounded-full hover:bg-teal-500 transition-transform transform hover:scale-105 shadow-lg"
              onClick={() => navigate('/chatbot')}
            >
              Chat Now
            </button>
          </div>
        </div>
      </motion.section>
    )}
  </AnimatePresence>

  

{/* New Section: Connect with a Specialist */}
<AnimatePresence>
  {showFeatures && (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div
        className="container mx-auto px-8 text-center py-16 bg-purple-900 rounded-lg shadow-lg"
      >
        <h2 className="text-5xl font-bold text-white tracking-wide">
          Connect with a Specialist
        </h2>
        <p className="text-xl text-gray-100 mt-6">
          Get personalized guidance from mental health specialists based on your needs.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-12">
          <div className="text-left max-w-lg ml-10">
            <h3 className="text-3xl font-semibold text-white mb-4">How It Works</h3>
            <p className="text-gray-100 leading-relaxed">
              Using machine learning, we assess your needs and connect you with certified mental health specialists for timely and professional support.
            </p>
            <p className="text-gray-100 leading-relaxed mt-4">
              Get recommendations tailored to your individual challenges and ensure the care you deserve.
            </p>
          </div>
          <img
            src="/doctor.png" // Replace with the path to your feature image
            alt="Specialist Support"
            className="max-w-xl "
          />
        </div>
        <div className="mt-12">
          <button
            className="px-8 py-4 bg-purple-700 text-white font-bold text-lg rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105 shadow-lg"
            onClick={() => navigate('/specialist')}
          >
            Connect with a Specialist
          </button>
        </div>
      </div>
    </motion.section>
  )}
</AnimatePresence>
{/* New Section: Track Your Progress */}
<AnimatePresence>
  {showFeatures && (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div
        className="container mx-auto px-8 text-center py-16 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-5xl font-bold text-gray-800 tracking-wide">
          Track Your Progress
        </h2>
        <p className="text-xl text-gray-600 mt-6">
          Visualize your emotional journey by tracking inputs from mood ratings, journal entries, and other activities.
        </p>
        <div className="flex flex-col md:flex-row items-center mt-2">
  {/* Feature Description */}
  <div className="text-left max-w-lg ml-24">
    <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Tracking Matters</h3>
    <p className="text-gray-600 leading-relaxed">
      Monitoring your progress helps you understand patterns and triggers, making it easier to manage your mental health and recognize your growth.
    </p>
  </div>
  {/* Feature Image */}
  <img
    src="/progress.png"
    alt="Progress Tracking"
    className="max-w-4xl float-right"
  />
</div>

      </div>
    </motion.section>
  )}
</AnimatePresence>
{/* New Section: Achievement Dashboard */}
<AnimatePresence>
  {showFeatures && (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div
        className="container mx-auto px-8 text-center py-16 rounded-lg shadow-lg"
        style={{ backgroundImage: "url('/achievement-dashboard.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h2 className="text-5xl font-bold text-white tracking-wide">
          Achievement Dashboard
        </h2>
        <p className="text-xl text-gray-100 mt-6">
          Earn badges based on your mood ratings and journal entries to showcase your emotional growth.
        </p>
        <div className="mt-12">
          <button
            className="px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-500 transition-transform transform hover:scale-105 shadow-lg"
            onClick={() => navigate('/learn-more-dashboard')}
          >
            Learn More About the Dashboard
          </button>
        </div>
      </div>
    </motion.section>
  )}
</AnimatePresence>






      </div>
    </div>
  );
}
