// import { AnimatePresence, motion } from "framer-motion";
// import { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// export default function LandingPage() {
//   const navigate = useNavigate();
//   const { currentUser } = useSelector((state) => state.user);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [showFeatures, setShowFeatures] = useState(false);

//   const featuresRef = useRef(null);

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

// //ashah
// function FAQItem({ question, answer }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <div className="flex justify-between items-center cursor-pointer">
//         <h3 className="text-xl font-semibold text-teal-700">{question}</h3>
//         <motion.div
//           className="text-teal-700 transform transition-transform"
//           animate={{ rotate: isOpen ? 90 : 0 }}
//         >
//           ➤
//         </motion.div>
//       </div>
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className={`overflow-hidden mt-4`}
//       >
//         <p className="text-gray-600 leading-relaxed">{answer}</p>
//       </motion.div>
//     </div>
//   );
// }

// //wvwhdvw





//   const handleGetStarted = () => {
//     setShowFeatures(!showFeatures);

//     // Scroll to features section
//     if (!showFeatures) {
//       setTimeout(() => {
//         featuresRef.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 100); // Delay to ensure the section renders before scrolling
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="relative ml-0">
//         {/* Navbar */}
//         <header className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center w-full">
//           <div className="flex items-center ml-10">
//             <Link to="/">
//               <img src="/Logo.png" width={100} height={80} alt="Logo" />
//             </Link>
//           </div>

//           {/* SignIn Button */}
//           <div className="flex items-center mt-[-20px]">
//             {currentUser ? (
//               <Link
//                 to="/profile"
//                 className="flex items-center space-x-2 font-bold mr-10"
//               >
//                 {currentUser.profilePicture ? (
//                   <img
//                     src={currentUser.profilePicture}
//                     alt="profile"
//                     className="h-9 w-9 rounded-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-teal-800 hover:text-teal-500 transition duration-300">
//                     Profile
//                   </span>
//                 )}
//               </Link>
//             ) : (
//               <button
//                 onClick={() => (window.location.href = "/sign-in")}
//                 className="text-white hover:text-white-700 transition duration-300 mr-10 px-3 py-1 bg-teal-600 rounded-lg hover:bg-teal-500"
//               >
//                 Sign In
//               </button>
//             )}
//           </div>
//         </header>

//         {/* Hero Section */}
//         <section
//           className={`bg-cover bg-center min-h-screen flex items-center justify-start ${
//             showFeatures ? "text-black" : "text-white"
//           }`}
//           style={{
//             backgroundImage: "url('/Untitled design.png')",
//           }}
//         >
//           {/* Overlay before clicking "Get Started" */}
//           {!showFeatures && (
//             <div className="absolute inset-0 bg-black opacity-40"></div>
//           )}

//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="container mx-auto flex justify-between items-center px-8 text-left relative z-10"
//           >
//             <div className="text-left max-w-xl ml-10 mt-20">
//               <h1
//                 className={`text-5xl font-bold ${
//                   showFeatures ? "text-teal-600" : "text-white"
//                 }`}
//               >
//                 Soulace: Your Path to Mental Wellness
//               </h1>
//               <p
//                 className={`text-lg mt-6 ${
//                   showFeatures ? "text-black" : "text-white"
//                 }`}
//               >
//                 Welcome to Soulace – a comprehensive and user-friendly online
//                 platform designed to support your mental well-being journey.
//               </p>
//               <button
//                 onClick={handleGetStarted}
//                 className="mt-8 px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-500 transition duration-300"
//               >
//                 {showFeatures ? "Hide Features" : "Get Started"}
//               </button>
//             </div>
//           </motion.div>
//         </section>

//         {/* Features Section */}
//         <AnimatePresence>
//           {showFeatures && (
//             <motion.section
//               ref={featuresRef} // Reference for scrolling
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.5 }}
//               className="py-20 bg-white"
//             >
//               <div className="container mx-auto px-8 text-center py-16 bg-gradient-to-b from-teal-100 to-white rounded-lg shadow-md">
//                 <h2 className="text-4xl font-bold text-teal-800 tracking-wide">
//                   Enhance Your Well-Being with Our Tracking Tools
//                 </h2>
//                 <p className="text-lg text-gray-600 mt-4">
//                   Discover insights into your mental health with our powerful
//                   tracking features.
//                 </p>

// {/* Feature Sections */}
// <div className="mt-12 min-w-full">
      
//       <div className="ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//         {[
//           {
//             name: "Mood-Tracker",
//             description: "Track your daily moods to better understand yourself.",
//             image: "/Mood Tracker.png",
//           },
//           {
//             name: "Sleep-Tracker",
//             description: "Monitor your sleep patterns and improve your rest.",
//             image: "/Sleep Tracker.png",
//           },
//         ].map((feature, index) => (
//           <motion.div
//             key={index}
//             className="p-8 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center h-[400px] cursor-pointer transition-transform"
//             whileHover={{ scale: 1.05}}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               const isLoggedIn = localStorage.getItem("token"); // Check if the user is logged in
//               if (isLoggedIn) {
//                 // Navigate to the feature's page if logged in
//                 navigate(`/${feature.name.toLowerCase().replace(/ /g, "-")}`);
//               } else {
//                 // Navigate to Sign-In page if not logged in
//                 navigate("/Mood-Tracker");
//               }
//             }}
//           >
//             <motion.img
//               src={feature.image}
//               alt={feature.name}
//               className="h-48 w-48 mb-6 rounded-xl object-cover"
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//             />
//             <h3 className="text-2xl font-semibold text-teal-700 text-center">
//               {feature.name}
//             </h3>
//             <p className="text-gray-700 mt-4 text-center">
//               {feature.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>


//               </div>
//             </motion.section>
//           )}
//         </AnimatePresence>

//         {/* New Section: Boost Your Mood */}
// <AnimatePresence>
//   {showFeatures && (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.5 }}
      
//     >
//       <h2 className="ml-10 text-center text-4xl font-bold text-black-800 tracking-wide">
//           Boost Your Mood
//         </h2>
//         <p className="ml-10 text-lg text-center text-gray-600 mt-4">
//           Explore tools designed to uplift your spirits and help you find joy
//           in small moments.
//         </p>
//       <div className="container mx-auto px-8 py-16 space-y-16">
        
//         {/* Music Recommendation Feature */}
//         <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 bg-pink-100 p-8 rounded-lg shadow-lg">
//           <div className="flex-1 text-left">
//             <h2 className="text-3xl font-bold text-pink-800 mb-4 ml-10">
//               Music That Matches Your Mood
//             </h2>
//             <p className="text-lg text-gray-700 mb-6 ml-10"> 
//               Explore personalized playlists to suit your mood and energy level. You can choose your mood and get recommendation of music that suits the mood. Helps you boost your mood. 
//             </p>
//             <button
//               onClick={() => navigate("/musicrecommendation")}
//               className="px-6 py-3 bg-pink-700 text-white rounded-lg hover:bg-pink-500 transition duration-300 ml-10"
//             >
//               Discover Music
//             </button>
//           </div>
//           <div className="flex-1">
//             <img
//               src="/CatMusic.png"
//               alt="Cat listening to music"
//               className="h-80 w-80  object-cover ml-40 "
//             />
//           </div>
//         </section>

//         {/* Mental Health Articles Feature */}
//         <section className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-10 bg-gray-100 p-8 rounded-lg shadow-lg">
//           <div className="flex-1 text-left ">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
//               Learn, Reflect, and Grow
//             </h2>
//             <p className="text-lg text-gray-600 mb-6">
//               Dive into articles written by experts or the videos to nurture your mental well-being.
// Gain valuable insights, strategies, and practical tips for managing stress, anxiety, and building emotional resilience.

//             </p>
//             <button
//               onClick={() => navigate("/contents")}
//               className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-500 transition duration-300"
//             >
//               See Contents
//             </button>
//           </div>
//           <div className="flex-1 ">
//             <img
//               src="/MindGrowth.png"
//               alt="Mind growth concept"
//               className="h-80 w-100 rounded-lg object-cover "
//             />
//           </div>
//         </section>

//         {/* Joke of the Day Feature */}
//         <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 bg-yellow-100 p-8 rounded-lg shadow-lg">
//           <div className="flex-1 text-left">
//             <h2 className="text-3xl font-bold text-yellow-800 mb-4 ml-10">
//               Smile with the Joke of the Day!
//             </h2>
//             <p className="text-lg text-gray-700 mb-6 italic ml-10">
//               "Why don’t scientists trust atoms? Because they make up everything!"
//             </p>
//             <button
//               onClick={() => navigate("/jokeoftheday")}
//               className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300 ml-10"
//             >
//               See Another Joke
//             </button>
//           </div>
//           <div className="flex-1">
//             <img
//               src="/SmilingSun.png"
//               alt="Smiling sun"
//               className="h-84 w-84  object-cover "
//             />
//           </div>
//         </section>
//       </div>
//     </motion.section>
//   )}
// </AnimatePresence>


// {/* New Section: Breathing Exercise */}
// <AnimatePresence>
//   {showFeatures && (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.5 }}
//       className="py-20 bg-purple-50"
//     >
//       <div className="container mx-auto px-8 text-center py-16 bg-gradient-to-b from-purple-300 to-white rounded-lg shadow-md">
//         <h2 className="text-4xl font-bold text-purple-800 tracking-wide">
//           Relaxation Games and Exercises
//         </h2>
//         <p className="text-lg text-gray-600 mt-4">
//           Engage in guided breathing exercises to relax and improve focus.
//         </p>

//         <motion.div
//           className="mt-12 mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center max-w-lg"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="relative w-full h-64 flex items-center justify-center">
//             {/* Heart Pumping Animation */}
//             <motion.img
//               src="/heart.png" // Add the path to your heart image here
//               alt="Pumping Heart"
//               className=" w-88 h-88"
//               animate={{
//                 scale: [1, 1.1, 1], // Heart pumps by scaling up and down
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: "loop", // Makes the animation repeat forever
//               }}
//             />
//           </div>
//           <p className="text-gray-600 mt-4">
//             Follow the heart as it beats in sync with your breath.
//           </p>
//           <button
//             className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-500 transition"
//             onClick={() => navigate("/breathinggame")}
//           >
//             Play now
//           </button>
//         </motion.div>
//       </div>
//     </motion.section>
//   )}
// </AnimatePresence>
// {/* New Section: Meditation Feature */}
// <AnimatePresence>
//   {showFeatures && (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.5 }}
//       className="py-20 bg-blue-50"
//     >
//       <div className="container mx-auto px-8 text-center py-16 bg-gradient-to-b from-blue-300 to-white rounded-lg shadow-md">
//         <h2 className="text-4xl font-bold text-blue-800 tracking-wide">
//           Meditation: Find Your Calm
//         </h2>
//         <p className="text-lg text-gray-600 mt-4">
//           Engage in minimalistic activities to unwind and rediscover your focus.
//         </p>

//         <motion.div
//           className="mt-12 mx-auto p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center max-w-lg"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="relative w-full h-64 flex items-center justify-center">
//             {/* Animated Circles for Relaxation */}
//             <motion.div
//               className="absolute w-40 h-40 bg-blue-400 rounded-full"
//               animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
//               transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
//             ></motion.div>

//             <motion.div
//               className="absolute w-24 h-24 bg-blue-600 rounded-full"
//               animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
//               transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
//             ></motion.div>

//             <motion.div
//               className="absolute w-12 h-12 bg-blue-800 rounded-full"
//               animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//             ></motion.div>
//           </div>
//           <p className="text-gray-600 mt-4">
//             Focus on the gentle rhythm of the shapes. Let go of stress.
//           </p>
//           <button
//             className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-500 transition"
//             onClick={() => navigate("/meditation")}
//           >
//             Start Now
//           </button>
//         </motion.div>
//       </div>
//     </motion.section>
//   )}
// </AnimatePresence>


// {/* New Section: Mood-Reflective Daily Journal */}
// <AnimatePresence>
//   {showFeatures && (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.5 }}
//       className="py-20"
//     >
//       <div
//         className="container mx-auto px-8 text-center py-16 bg-gradient-to-b from-black/70 to-black/30 rounded-lg shadow-md"
//         style={{ backgroundImage: "url('/background-image.gif')", backgroundSize: 'cover', backgroundPosition: 'center' }}
//       >
//         <h2 className="text-4xl font-bold text-white tracking-wide">
//           Mood-Reflective Daily Journal
//         </h2>
//         <p className="text-lg text-gray-300 mt-4">
//           A premium feature to express your thoughts and track emotional growth.
//         </p>

//         {/* Feature Description with Image */}
//         <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-8">
//           {/* Feature Description */}
//           <div className="text-left max-w-md ml-10">
//             <h3 className="text-2xl font-semibold text-white">What is the Mood-Reflective Daily Journal?</h3>
//             <p className="text-gray-300 mt-4">
//               This premium feature allows you to record your daily thoughts, track your emotional growth, and revisit past entries. It’s designed to help you reflect, relax, and recharge.
//             </p>
//             <p className="text-gray-300 mt-4">
//               Unlock the Mood-Reflective Daily Journal by subscribing for just $5-10. Enjoy exclusive access to a personalized journaling experience.
//             </p>
//           </div>

//           {/* Feature Image */}
//           <img
//             src="/journal.png" // Replace with the path to your feature image
//             alt="Mood-Reflective Daily Journal"
//             className="rounded-lg shadow-lg max-w-sm mr-10"
//           />
//         </div>

//         {/* Subscription Button */}
//         <div className="mt-8">
//           <button
//             className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition shadow-lg"
//             onClick={() => navigate('/subscribe')}
//           >
//             Unlock for $5-10 Subscription
//           </button>
//         </div>
//       </div>
//     </motion.section>
//   )}
// </AnimatePresence>
// {/* New Section: Interactive Chatbot */}
//   <AnimatePresence>
//     {showFeatures && (
//       <motion.section
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 50 }}
//         transition={{ duration: 0.5 }}
//         className="py-20"
//       >
//         <div
//           className="container mx-auto px-8 text-center py-16 bg-teal-800 rounded-lg shadow-lg"
//         >
//           <h2 className="text-4xl font-bold text-white tracking-wide">
//             Meet SoulMate: Your Emotional Support Chatbot
//           </h2>
//           <p className="text-xl text-gray-100 mt-2">
//             A safe space to share your thoughts and feelings without judgment, whenever you need it most.
//           </p>
  
//           {/* Feature Description with Image */}
//           <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-12">
//             {/* Feature Image */}
//             <img
//               src="/chatbot.png" alt="SoulMate Chatbot" className="max-w-xl"
//             />
//             {/* Feature Description */}
//             <div className="text-left max-w-lg mr-10">
//               <h3 className="text-3xl font-semibold text-white mb-4">Why Choose SoulMate?</h3>
//               <p className="text-gray-100 leading-relaxed">
//                 SoulMate is your companion during challenging times, offering empathetic responses and a judgment-free space to express yourself. It helps you navigate emotions and feel supported anytime, anywhere.
//               </p>
//               <p className="text-gray-100 leading-relaxed mt-4">
//                 Whether you're feeling stressed, lonely, or just need someone to talk to, SoulMate is here for you.
//               </p>
//             </div>
  
            
//           </div>
  
//           {/* Learn More Button */}
//           <div className="mt-6">
//             <button
//               className="px-8 py-4 bg-teal-600 text-white font-bold text-lg rounded-full hover:bg-teal-500 transition-transform transform hover:scale-105 shadow-lg"
//               onClick={() => navigate('/home')}
//             >
//               Chat Now
//             </button>
//           </div>
//         </div>
//       </motion.section>
//     )}
//   </AnimatePresence>

  

// {/* New Section: Connect with a Specialist */}
// <AnimatePresence>
//   {showFeatures && (
//     <motion.section
//       initial={{ opacity: 0, x: -100 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -100 }}
//       transition={{ duration: 0.5 }}
//       className="py-20"
//     >
//       <div
//         className="container mx-auto px-8 text-center py-16 bg-purple-900 rounded-lg shadow-lg"
//       >
//         <h2 className="text-5xl font-bold text-white tracking-wide">
//           Connect with a Specialist
//         </h2>
//         <p className="text-xl text-gray-100 mt-6">
//           Get personalized guidance from mental health specialists based on your needs.
//         </p>
//         <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-12">
//           <div className="text-left max-w-lg ml-10">
//             <h3 className="text-3xl font-semibold text-white mb-4">How It Works</h3>
//             <p className="text-gray-100 leading-relaxed">
//               Using machine learning, we assess your needs and connect you with certified mental health specialists for timely and professional support.
//             </p>
//             <p className="text-gray-100 leading-relaxed mt-4">
//               Get recommendations tailored to your individual challenges and ensure the care you deserve.
//             </p>
//           </div>
//           <img
//             src="/doctor.png" // Replace with the path to your feature image
//             alt="Specialist Support"
//             className="max-w-xl "
//           />
//         </div>
//         <div className="mt-12">
//           <button
//             className="px-8 py-4 bg-purple-700 text-white font-bold text-lg rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105 shadow-lg"
//             onClick={() => navigate('/subscribe')}
//           >
//             Connect with a Specialist
//           </button>
//         </div>
//       </div>
//     </motion.section>
//   )}
// </AnimatePresence>
// {/* New Section: Track Your Progress */}
// <AnimatePresence>
//   {showFeatures && (
//     <motion.section
//       initial={{ opacity: 0, x: -100 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -100 }}
//       transition={{ duration: 0.5 }}
//       className="py-20"
//     >
//       <div
//         className="container mx-auto px-8 text-center py-16 bg-white rounded-lg shadow-lg"
//       >
//         <h2 className="text-5xl font-bold text-gray-800 tracking-wide">
//           Track Your Progress
//         </h2>
//         <p className="text-xl text-gray-600 mt-6">
//           Visualize your emotional journey by tracking inputs from mood ratings, journal entries, and other activities.
//         </p>
//         <div className="flex flex-col md:flex-row items-center mt-2">
//   {/* Feature Description */}
//   <div className="text-left max-w-lg ml-24">
//     <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Tracking Matters</h3>
//     <p className="text-gray-600 leading-relaxed">
//       Monitoring your progress helps you understand patterns and triggers, making it easier to manage your mental health and recognize your growth.
//     </p>
//   </div>
//   {/* Feature Image */}
//   <img
//     src="/progress.png"
//     alt="Progress Tracking"
//     className="max-w-4xl float-right"
//   />
// </div>

//       </div>
//     </motion.section>
//   )}
// </AnimatePresence>
// {/* New Section: Achievement Dashboard */}
// <AnimatePresence>
//   {showFeatures && (
//     <motion.section
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.5 }}
//       className="py-20"
//     >
//       <div
//         className="container mx-auto px-8 text-center py-16 rounded-lg shadow-lg"
//         style={{ backgroundImage: "url('/achievement-dashboard.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
//       >
//         <h2 className="text-5xl font-bold text-white tracking-wide">
//           Achievement Dashboard
//         </h2>
//         <p className="text-xl text-gray-100 mt-6">
//           Earn badges based on your mood ratings and journal entries to showcase your emotional growth.
//         </p>
//         <div className="mt-12">
//           <button
//             className="px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-500 transition-transform transform hover:scale-105 shadow-lg"
//             onClick={() => navigate('/learn-more-dashboard')}
//           >
//             Learn More About the Dashboard
//           </button>
//         </div>
//       </div>
//     </motion.section>

    
//   )}

  
// </AnimatePresence>



// {/* FAQ Section */}
// <AnimatePresence>
//   {showFeatures && (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.5 }}
//       className="py-20 bg-gray-50"
//     >
//       <div className="container mx-auto px-8">
//         <h2 className="text-4xl font-bold text-teal-800 tracking-wide text-center mb-12">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-4 max-w-4xl mx-auto">
//           {[
//             {
//               question: "What is Soulace?",
//               answer:
//                 "Soulace is a mental wellness platform designed to help users track their mood, sleep, and emotional well-being through interactive tools and games.",
//             },
//             {
//               question: "Is Soulace free to use?",
//               answer:
//                 "Most of our features are free. However, premium features like the Mood-Reflective Daily Journal require a subscription for exclusive access.",
//             },
//             {
//               question: "How does the chatbot work?",
//               answer:
//                 "The chatbot, SoulMate, uses AI to provide empathetic responses and emotional support in a judgment-free space.",
//             },
//             {
//               question: "How do I track my progress?",
//               answer:
//                 "You can track your progress through the dedicated progress tracker, which visualizes mood ratings, journal entries, and other activities.",
//             },
//             {
//               question: "Is my data secure?",
//               answer:
//                 "Absolutely. We prioritize your privacy and ensure all data is stored securely and used only for the intended purposes.",
//             },
//           ].map((faq, index) => (
//             <FAQItem key={index} question={faq.question} answer={faq.answer} />
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   )}
// </AnimatePresence>







//       </div>
//     </div>
//   );
// }
//---------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------


import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart, Brain, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Heart,
  MessageCircle,
  Music, Shield, Sparkles, Star, Users
} from 'lucide-react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
     url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    title: "Serene Retreat",
    subtitle: "Find your moment of calm"
  },
  {
    url: "https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?auto=format&fit=crop&w=800&q=80",
    title: "Mindful Play",
    subtitle: "Engage in meditation games"
  },
  {
    url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80",
    title: "Laugh Out Loud",
    subtitle: "Discover joy in every moment"
  },
  {
    url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
    title: "Harmony in Sound",
    subtitle: "Immerse yourself in calming music"
  },
  {
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    title: "Together We Grow",
    subtitle: "Join a community of like-minded souls"
  },
  {
    url: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80",
    title: "Inspire and Be Inspired",
    subtitle: "Consume content that uplifts your spirit"
  },
  {
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    title: "Content That Heals",
    subtitle: "Nourish your mind and soul"
  }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigateSlides = (direction: "prev" | "next") => {
    setCurrentIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return (prev + 1) % images.length;
    });
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-5xl bg-white text-gray-900">

      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-teal-900/60 to-transparent z-10" />
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-white mb-4"
              >
                {images[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-200"
              >
                {images[currentIndex].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        <button
          onClick={() => navigate("/sign-in")}
          className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-500 hover:to-teal-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Started Free
        </button>
        <button
          onClick={() => navigate("/demo")}
          className="px-8 py-3 rounded-full font-semibold text-teal-600 bg-white hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Watch Demo
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => navigateSlides("prev")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => navigateSlides("next")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}


function StatsSection() {
  const stats = [
    { 
      label: "Minutes of Mindfulness Practiced", 
      value: "5K+", 
      color: "from-teal-500 to-teal-300", 
      delay: 0.1 
    },
    { 
      label: "Deep Breaths Taken Together", 
      value: "10M+", 
      color: "from-purple-500 to-purple-300", 
      delay: 0.2 
    },
    { 
      label: "Happy Minds Engaged", 
      value: "1K+", 
      color: "from-pink-500 to-pink-300", 
      delay: 0.3 
    },
  ];
  

  return (
    <section className="py-12 bg-white text-gray-900">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: stat.delay, duration: 0.6 }}
        className="relative overflow-hidden rounded-xl bg-gray-100 p-6 text-center group hover:bg-gray-200 transition-all duration-300"
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-xl`} />
        <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
        <p className="text-gray-600">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</section>
  );
}

function PremiumFeatures() {
  const premiumFeatures = [
    {
      icon: Shield,
      title: "AI-Powered Journal",
      description:
        "Track your mood and thoughts with our intelligent journaling system that provides personalized insights.",
      benefits: ["Mood Analysis", "Pattern Recognition", "Growth Tracking"],
      gradient: "from-teal-600 to-teal-400",
      delay: 0.1,
    },
    {
      icon: Star,
      title: "Expert Connection",
      description:
        "Connect with certified mental health specialists for personalized guidance and support.",
      benefits: ["Video Sessions", "Chat Support", "Expert Matching"],
      gradient: "from-teal-600 to-teal-400",
      delay: 0.2,
    },
    {
      icon: BarChart,
      title: "Progress Dashboard",
      description:
        "Visualize your wellness journey with detailed analytics and actionable insights.",
      benefits: ["Custom Reports", "Goal Tracking", "Progress Metrics"],
      gradient: "from-teal-600 to-teal-400",
      delay: 0.3,
    },
    {
      icon: Brain,
      title: "Smart Suggestions",
      description:
        "Get personalized recommendations based on your wellness patterns and goals.",
      benefits: ["Custom Plans", "Daily Tips", "Activity Suggestions"],
      gradient: "from-teal-600 to-teal-400",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-gray-900">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-teal-700 bg-teal-50 rounded-full"
        >
          Premium Features
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Transform Your Mental Wellness
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Unlock powerful tools and expert guidance to enhance your mental wellbeing.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {premiumFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: feature.delay }}
            className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className={`h-1.5 bg-gradient-to-r ${feature.gradient}`} />
            <div className="p-4">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.gradient} p-2 mb-4`}
              >
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <Check className="w-4 h-4 text-teal-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


function Foooter() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Soulace</h3>
            <p className="text-gray-600 font-bold">A journey to mental wellness starts here.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Features</h4>
            <ul className="space-y-2 font-bold text-gray-600">
              <li>Meditation & Relaxation</li>
              <li>Recommendations</li>
              <li>Community </li>
              <li>Mood and Sleep tracker</li>
              <li>Expert Support</li>
             
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 font-bold text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 font-bold text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex items-center justify-center text-gray-400">
       
        </div>
      </div>
    </footer>
  );
}


function FeatureCard({ icon: Icon, text, color, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group relative p-6 rounded-xl bg-gray-800 text-white border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
      />
      <div
        className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${color} p-2.5 transform group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-lg font-semibold">{text}</h3>
    </motion.div>
  );
}
function FAQ() {
  const faqs = [
    {
      question: "How can Soulace help with my mental wellbeing?",
      answer:
        "Soulace offers a comprehensive suite of tools including guided meditation, relaxation exercises, mood tracking, and expert support to help you maintain and improve your mental wellness.",
    },
    {
      question: "What's included in the free version?",
      answer:
        "The free version includes access to basic meditation sessions, relaxation exercises, community forums, and our AI chatbot for general support.",
    },
    {
      question: "How do I connect with mental health specialists?",
      answer:
        "Premium users can schedule one-on-one sessions with licensed mental health professionals through our secure platform.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Yes, we take privacy seriously. All your data is encrypted and stored securely. We never share your personal information without your explicit consent.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-purple-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Soulace
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white text-gray-900 shadow-md">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src="/Logo.png" alt="Soulace Logo" className="w-15 h-10" />
          
        </div>

        {/* Navigation */}
        <button
          onClick={() => navigate("/sign-in")}
          className="px-4 py-2 text-white bg-teal-600 rounded-full shadow hover:bg-teal-500 transition-all duration-300"
        >
          Sign In
        </button>
      </div>
    </header>
  );
}





function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Yoga Instructor",
      content:
        "Soulace has transformed how I manage stress and anxiety. The AI-powered journal is like having a personal therapist.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    },
    {
      name: "Arif Hossain",
      role: "Software Engineer",
      content:
        "The expert connection feature helped me find the perfect therapist. It's been a game-changer for my mental health.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80",
    },
  ];
  
  
  

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Users Say
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of users who have transformed their lives with Soulace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
//---------------

//--------------

function LandingPage() {
  const features = [
    {
      icon: Heart,
      text: "Relaxation Exercises",
      description: "Relax your mind and body with guided exercises.",
      color: "from-teal-600 to-teal-400",
      delay: 0.1,
    },
    {
      icon: Sparkles,
      text: "Guided Meditation",
      description: "Experience tranquility with our expert-led sessions.",
      color: "from-teal-600 to-teal-400",
      delay: 0.2,
    },
    {
      icon: Brain,
      text: "Mental Wellness Contents",
      description: "Access curated articles and tips for a healthy mind.",
      color: "from-teal-600 to-teal-400",
      delay: 0.3,
    },
    {
      icon: Users,
      text: "Community Support",
      description: "Engage with a supportive community of like-minded individuals.",
      color: "from-violet-600 to-violet-400",
      delay: 0.4,
    },
    {
      icon: MessageCircle,
      text: "AI Chat Support",
      description: "Get instant assistance and advice through our AI.",
      color: "from-violet-600 to-violet-400",
      delay: 0.5,
    },
    {
      icon: Music,
      text: "Calming Music",
      description: "Enjoy soothing music tailored for relaxation.",
      color: "from-violet-600 to-violet-400",
      delay: 0.6,
    },
    {
      icon: Brain,
      text: "Sleep Tracker",
      description: "Monitor and improve your sleep patterns effortlessly.",
      color: "from-teal-600 to-teal-400",
      delay: 0.7,
    },
    {
      icon: Sparkles,
      text: "Mood Tracker",
      description: "Track your emotions and discover patterns over time.",
      color: "from-teal-600 to-teal-400",
      delay: 0.8,
    },
    {
      icon: BarChart,
      text: "Achievement Dashboard",
      description: "Visualize your progress and celebrate milestones.",
      color: "from-teal-600 to-teal-400",
      delay: 0.9,
    },
  ];

  function FeatureCard({ icon: Icon, text, description, color, delay }: any) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative p-6 rounded-xl bg-white text-gray-900 border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
        />
        <div
          className={`w-8 h-8 mb-4 rounded-lg bg-gradient-to-r ${color} p-2.5 transform group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-full h-full text-white" />
        </div>
        <h3 className="text-lg font-semibold">{text}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gray-900 text-white">
      {/* Include Header */}
      <Header />
      <header>
        <ImageSlider />
      </header>
      <main>
        <StatsSection />
        <section className="py-24 bg-white text-gray-900">
        <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl font-extrabold text-center mb-16 text-gray-900"
>
Discover Features Designed Just for You
</motion.h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[90%] mx-auto px-4">

            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>
        <PremiumFeatures />
        <Testimonial />
        <FAQ />
      </main>
      <Foooter />
    </div>
  );
}

export default LandingPage;




