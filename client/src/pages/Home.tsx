// // import { AnimatePresence, motion } from "framer-motion";
// // import { Brain, ChevronLeft, ChevronRight, Crown, Heart, Shield, Sparkles, Star } from "lucide-react";
// // import { useState } from "react";
// // import { useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";

// // import Header from "../components/Header";
// // import SideButtons from "../components/SideButtons";

// // const services = [

// //   {
// //     name: "Community Portal",
// //     description: "Connect with others on similar wellness journeys.",
// //     image: "/com.png",
// //     route: "/community"
// //   },
// //   {
// //     name: "Relaxation Exercises",
// //     description: "Guided exercises to help you unwind and de-stress.",
// //     image: "/relax.png",
// //     route: "/relaxation"
// //   },
// //   {
// //     name: "Meditation Sessions",
// //     description: "Find peace with guided meditation practices.",
// //     image: "/med.png",
// //     route: "/meditation"
// //   },
// //   {
// //     name: "AI Chatbot Support",
// //     description: "24/7 emotional support and guidance from our AI companion.",
// //     image: "/chatbot.png",
// //     route: "/chatbot"
// //   },
// //   {
// //     name: "Mood Tracker",
// //     description: "Track your daily moods to better understand yourself.",
// //     image: "/Mood Tracker.png",
// //     route: "/mood-tracker"
// //   },
// //   {
// //     name: "Sleep Tracker",
// //     description: "Monitor your sleep patterns and improve your rest.",
// //     image: "/Sleep Tracker.png",
// //     route: "/sleep-tracker"
// //   },
// //   {
// //     name: "Music Recommendation",
// //     description: "Discover music that matches your mood.",
// //     image: "/music.png",
// //     route: "/musicrecommendation"
// //   },
// //   {
// //     name: "Mental Health Content",
// //     description: "Learn and grow with expert articles and videos.",
// //     image: "/MindGrowth.png",
// //     route: "/contents"
// //   },
// //   {
// //     name: "Daily Jokes",
// //     description: "Start your day with a smile!",
// //     image: "/SmilingSun.png",
// //     route: "/jokeoftheday"
// //   },
// //   {
// //     name: "Breathing Exercise",
// //     description: "Follow guided breathing exercises.",
// //     image: "/heart.png",
// //     route: "/breathinggame"
// //   }
// // ];

// // export default function Home() {
// //   const navigate = useNavigate();
// //   const { currentUser } = useSelector((state) => state.user);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const nextSlide = () => {
// //     setCurrentIndex((prev) => (prev + 1) % services.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
// //   };

// //   const getVisibleServices = () => {
// //     const result = [];
// //     for (let i = 0; i < 3; i++) {
// //       const index = (currentIndex + i) % services.length;
// //       result.push(services[index]);
// //     }
// //     return result;
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
// //       <Header />
// //       <SideButtons />

// //       <div className="ml-48 px-4">

// //         {/* Hero Section with Services Slider */}
// //         <section className="pt-4 pb-20">
// //           <div className="container mx-auto px-4">
// //             <h1 className="text-3xl font-bold text-center text-teal-700 mb-4">
// //               Your Mental Wellness Journey
// //             </h1>
// //             <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
// //               Discover a suite of tools and services designed to support your mental well-being
// //             </p>

// //             {/* Enhanced Services Slider */}
// //             <div className="relative py-8 overflow-hidden">
// //               <div className="flex items-center justify-center">
// //                 <button
// //                   onClick={prevSlide}
// //                   className="absolute left-4 z-10 p-4 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all transform hover:scale-110"
// //                 >
// //                   <ChevronLeft className="w-8 h-8 text-gray-800" />
// //                 </button>

// //                 <div className="flex gap-8 items-center px-20">
// //                   <AnimatePresence mode="wait">
// //                     {getVisibleServices().map((service, idx) => (
// //                       <motion.div
// //                         key={`${service.name}-${idx}`}
// //                         initial={{ opacity: 0, scale: 0.8 }}
// //                         animate={{
// //                           opacity: 1,
// //                           scale: idx === 1 ? 1.1 : 0.9,
// //                           y: idx === 1 ? -20 : 0
// //                         }}
// //                         exit={{ opacity: 0, scale: 0.8 }}
// //                         transition={{
// //                           type: "spring",
// //                           stiffness: 300,
// //                           damping: 24
// //                         }}
// //                         className={`relative cursor-pointer ${
// //                           idx === 1 ? 'z-10' : 'z-0'
// //                         }`}
// //                         onClick={() => {
// //                           if (currentUser) {
// //                             navigate(service.route);
// //                           } else {
// //                             navigate("/sign-in");
// //                           }
// //                         }}
// //                       >
// //                         <div className={`
// //                           bg-white rounded-2xl shadow-xl overflow-hidden
// //                           transition-all duration-300 transform hover:scale-105
// //                           ${idx === 1 ? 'w-96 h-[32rem]' : 'w-80 h-96 opacity-75'}
// //                         `}>
// //                           <div className="relative h-3/5">
// //                             <img
// //                               src={service.image}
// //                               alt={service.name}
// //                               className="w-full h-full object-cover"
// //                             />
// //                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
// //                           </div>
// //                           <div className="p-8">
// //                             <h3 className="text-2xl font-bold text-gray-800 mb-3">
// //                               {service.name}
// //                             </h3>
// //                             <p className="text-gray-600 leading-relaxed">
// //                               {service.description}
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </motion.div>
// //                     ))}
// //                   </AnimatePresence>
// //                 </div>

// //                 <button
// //                   onClick={nextSlide}
// //                   className="absolute right-4 z-10 p-4 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all transform hover:scale-110"
// //                 >
// //                   <ChevronRight className="w-8 h-8 text-gray-800" />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Premium Features Section */}
// //         <section className="py-20 bg-gradient-to-b from-white to-gray-50">
// //           <div className="container mx-auto px-4">
// //             <div className="text-center mb-16">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="inline-block p-2 px-4 bg-purple-100 rounded-full mb-4"
// //               >
// //                 <span className="text-purple-800 font-semibold flex items-center gap-2">
// //                   <Crown className="w-5 h-5" /> Premium Experience
// //                 </span>
// //               </motion.div>
// //               <h2 className="text-4xl font-bold text-gray-800 mb-4">
// //                 Unlock Premium Features
// //               </h2>
// //               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //                 Transform your wellness journey with our premium tools
// //               </p>
// //             </div>

// //             <div className="max-w-7xl mx-auto space-y-12">
// //               {/* Feature Row 1 */}
// //               <div className="flex flex-col md:flex-row gap-8">
// //                 <motion.div
// //                   initial={{ opacity: 0, x: -20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg"
// //                 >
// //                   <div className="flex items-start gap-4">
// //                     <div className="p-3 bg-purple-100 rounded-lg">
// //                       <Shield className="w-6 h-6 text-purple-600" />
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Consultation</h3>
// //                       <p className="text-gray-600 mb-4">Connect with certified mental health professionals for personalized guidance and support.</p>
// //                       <ul className="space-y-2">
// //                         <li className="flex items-center gap-2">
// //                           <Star className="w-4 h-4 text-yellow-500" />
// //                           <span>24/7 priority access</span>
// //                         </li>
// //                         <li className="flex items-center gap-2">
// //                           <Star className="w-4 h-4 text-yellow-500" />
// //                           <span>Video consultation</span>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                   </div>
// //                 </motion.div>

// //                 <motion.div
// //                   initial={{ opacity: 0, x: 20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg"
// //                 >
// //                   <div className="flex items-start gap-4">
// //                     <div className="p-3 bg-blue-100 rounded-lg">
// //                       <Brain className="w-6 h-6 text-blue-600" />
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Analytics</h3>
// //                       <p className="text-gray-600 mb-4">Comprehensive tracking and insights for your mental wellness journey.</p>
// //                       <ul className="space-y-2">
// //                         <li className="flex items-center gap-2">
// //                           <Star className="w-4 h-4 text-yellow-500" />
// //                           <span>Detailed progress reports</span>
// //                         </li>
// //                         <li className="flex items-center gap-2">
// //                           <Star className="w-4 h-4 text-yellow-500" />
// //                           <span>Personalized insights</span>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               </div>

// //               {/* Feature Row 2 */}
// //               <div className="flex flex-col md:flex-row gap-8">
// //                 <motion.div
// //                   initial={{ opacity: 0, x: -20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   className="flex-1 bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg"
// //                 >
// //                   <div className="flex items-start gap-4">
// //                     <div className="p-3 bg-green-100 rounded-lg">
// //                       <Heart className="w-6 h-6 text-green-600" />
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold text-gray-800 mb-2">Daily Wellness Journal</h3>
// //                       <p className="text-gray-600 mb-4">Track your emotional journey with our advanced journaling tools.</p>
// //                       <ul className="space-y-2">
// //                         <li className="flex items-center gap-2">
// //                           <Star className="w-4 h-4 text-yellow-500" />
// //                           <span>Mood patterns analysis</span>
// //                         </li>
// //                         <li className="flex items-center gap-2">
// //                           <Star className="w-4 h-4 text-yellow-500" />
// //                           <span>Guided reflection prompts</span>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                   </div>
// //                 </motion.div>

// //                 <motion.div
// //                   initial={{ opacity: 0, x: 20 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   className="flex-1 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg"
// //                 >
// //                   <div className="flex items-start gap-4">
// //                     <div className="p-3 bg-amber-100 rounded-lg">
// //                       <Sparkles className="w-6 h-6 text-amber-600" />
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-bold text-gray-800 mb-2">Achievement System</h3>
// //                       <p className="text-gray-600 mb-4">Celebrate your progress with our gamified wellness journey.</p>
// //                       <ul className="space-y-2">
// //                         <li className="flex items-center gap-2">
// //                           <Star className="w-4 h-4 text-yellow-500" />
// //                           <span>Custom milestones</span>
// //                         </li>
// //                         <li className="flex items-center gap-2">
// //                           <Star className="w-4 h-4 text-yellow-500" />
// //                           <span>Rewards system</span>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               </div>

// //               {/* CTA */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="text-center mt-12"
// //               >
// //                 <button
// //                   onClick={() => navigate("/subscribe")}
// //                   className="px-8 py-4 bg-gradient-to-r from-gray-600 to-teal-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
// //                 >
// //                   Start Your Premium Journey
// //                 </button>
// //                 <p className="mt-4 text-gray-600">

// //                 </p>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }

// //---------------------------------------------------------------------------------------------------

// import { motion } from "framer-motion";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";

// export default function Home() {
//   const navigate = useNavigate();
//   const { currentUser } = useSelector((state) => state.user);

//   const sleepHours = 7.5; // Example value
//   const mood = "Happy"; // Example value
//   const meditationMinutes = 15; // Example value
//   const streakDays = 5; // Example value

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-teal-50 to-purple-50 text-gray-800 flex">
//       {/* Sidebar */}
//       <div className="hidden md:block md:w-16 fixed top-0 left-0 z-10 bg-white shadow-lg h-full">
//         <SideButtons />
//       </div>

//       <div className="flex-grow md:ml-16 p-4 sm:p-6 lg:p-8">
//         <Header />

//         {/* Welcome Section */}
//         <section className="text-left mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
//               Welcome back, {currentUser?.name || "User"}
//             </h1>
//             <p className="text-lg md:text-2xl text-gray-600">
//               Let's check on your well-being today.
//             </p>
//           </motion.div>
//         </section>

//         {/* Daily Overview Section */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {[
//             {
//               title: "Sleep Quality",
//               value: `${sleepHours} hours`,
//               bgImage: "https://images.unsplash.com/photo-1583132335900-7e8d6d73c302?auto=format&fit=crop&q=80",
//             },
//             {
//               title: "Current Mood",
//               value: mood,
//               bgImage: "https://images.unsplash.com/photo-1520975929535-df114f4f04b4?auto=format&fit=crop&q=80",
//             },
//             {
//               title: "Meditation",
//               value: `${meditationMinutes} minutes`,
//               bgImage: "https://images.unsplash.com/photo-1518462488872-1e7ccf2897d3?auto=format&fit=crop&q=80",
//             },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               className="rounded-3xl shadow-lg overflow-hidden relative h-64"
//               style={{ backgroundImage: `url(${item.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="absolute inset-0 bg-black/40 flex flex-col justify-start items-start p-6">
//                 <h3 className="text-xl md:text-3xl font-semibold text-white">{item.title}</h3>
//                 <p className="text-lg md:text-xl text-white mt-2">{item.value}</p>
//               </div>
//             </motion.div>
//           ))}
//         </section>

//         {/* To-Do and Engagement Section */}
//         <section className="mb-16">
//           <div className="bg-gradient-to-r from-teal-400 to-teal-200 rounded-lg shadow-md p-8">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Today's Focus</h2>
//             <ul className="list-disc pl-6 text-lg text-gray-100">
//               <li>Complete your daily meditation session</li>
//               <li>Log your mood and sleep quality</li>
//               <li>Reflect in your journal</li>
//             </ul>
//           </div>
//           <p className="text-lg md:text-2xl text-gray-800 mt-6">
//             Feeling like a laugh? Grab a <span className="text-teal-500 underline cursor-pointer" onClick={() => navigate("/jokeoftheday")}>joke</span> or some <span className="text-purple-500 underline cursor-pointer" onClick={() => navigate("/musicrecommendation")}>music</span>!
//           </p>
//         </section>

//         {/* Meditation and Health Quote */}
//         <section className="mb-16">
//           <div className="bg-white rounded-lg shadow-lg p-8 text-left">
//             <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">Meditation for Today</h2>
//             <p className="text-lg md:text-xl text-gray-700 italic mb-6">
//               "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship." - Buddha
//             </p>
//             <button
//               onClick={() => navigate("/meditation")}
//               className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600"
//             >
//               Start Your Session
//             </button>
//             <p className="mt-4 text-teal-600 font-medium">{streakDays} days of meditation streak!</p>
//           </div>
//         </section>

//         {/* Mood and Sleep Logger */}
//         <section className="mb-16">
//           <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-lg p-8">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Log Your Mood and Sleep</h2>
//             <p className="text-lg md:text-xl text-gray-100 mb-6">
//               It would be good to log your mood and sleep today. Here's what we have so far:
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div className="text-left">
//                 <h3 className="text-xl md:text-2xl font-semibold text-gray-100">Average Sleep Hours</h3>
//                 <p className="text-lg text-gray-200">7.2 hours</p>
//               </div>
//               <div className="text-left">
//                 <h3 className="text-xl md:text-2xl font-semibold text-gray-100">Consistency</h3>
//                 <p className="text-lg text-gray-200">5 days</p>
//               </div>
//             </div>
//             <button
//               onClick={() => navigate("/mood-tracker")}
//               className="mt-6 px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-300"
//             >
//               Log Mood and Sleep
//             </button>
//           </div>
//         </section>

//         {/* Journal Section */}
//         <section className="mb-16">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">Daily Journal</h2>
//             <p className="text-lg md:text-xl text-gray-700 mb-6">
//               Track your thoughts and emotions with AI-powered sentiment analysis.
//             </p>
//             <button
//               onClick={() => navigate("/journal")}
//               className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600"
//             >
//               Open Journal
//             </button>
//             <div className="mt-6">
//               <h3 className="text-xl md:text-2xl font-semibold text-teal-600 mb-4">Recent Entries</h3>
//               <div className="bg-teal-50 rounded-lg shadow-md p-4 mb-4">
//                 <h4 className="text-lg font-semibold text-teal-600">Today's Entry</h4>
//                 <p className="text-gray-600">September 15, 2023 • 3:30 PM</p>
//                 <p className="text-teal-700">Positive</p>
//                 <p className="text-gray-800">
//                   Today was a productive day. I managed to complete all my tasks and even had time for a short meditation session...
//                 </p>
//               </div>
//               <div className="bg-teal-50 rounded-lg shadow-md p-4">
//                 <h4 className="text-lg font-semibold text-teal-600">Yesterday's Reflection</h4>
//                 <p className="text-gray-600">September 14, 2023 • 9:45 PM</p>
//                 <p className="text-teal-700">Neutral</p>
//                 <p className="text-gray-800">
//                   Had a mixed day. Started with some challenges but managed to practice my breathing exercises...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Specialist Test */}
//         <section className="mb-16">
//           <div className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg shadow-lg p-8">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialist Test</h2>
//             <p className="text-lg md:text-xl text-gray-100 mb-6">
//               Take a test to get personalized insights and recommendations.
//             </p>
//             <button
//               onClick={() => navigate("/specialist")}
//               className="px-6 py-3 bg-white text-teal-600 rounded-full hover:bg-teal-200"
//             >
//               Take the Test
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

//-------------------------------------------------------------------------------------

//besttt

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  ChevronLeft,
  ChevronRight,
  Moon,
  Smile,
  Star,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const services = [
  {
    name: "Musical Therapy",
    description:
      "Feeling down? Let's lift your spirits with personalized music recommendations.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800",
    route: "/musicrecommendation",
  },
  {
    name: "Meditation Game",
    description: "Need a moment of peace? Join our calming meditation session.",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800",
    route: "/meditation",
  },
  {
    name: "Mood Booster",
    description:
      "Looking for a smile? Discover uplifting content and activities.",
    image:
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800",
    route: "/jokeoftheday",
  },
  {
    name: "Community Portal",
    description: "Connect with others on similar wellness journeys.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800",
    route: "/community",
  },
  {
    name: "Daily Contents",
    description:
      "Drift into serenity with our calming stories and tranquil visuals, crafted to guide you into peaceful rest.",
    image:
      "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=800",
    route: "/contents",
  },
];

// Mock data - replace with actual data from your state/API
const mockUserData = {
  name: "Faiza!!!!",
  sleepHours: 7.5,
  currentMood: "Happy",
  averageMood: "Positive",
  meditationMinutes: 45,
  streakDays: 7,
  totalSessions: 28,
  averageSleepQuality: "Good",
  journalEntries: [
    {
      date: "March 12, 2024",
      time: "3:30 PM",
      mood: "Positive",
      content:
        "Today was a productive day. I managed to complete all my tasks and even had time for a short meditation session...",
    },
    {
      date: "March 11, 2024",
      time: "9:45 PM",
      mood: "Neutral",
      content:
        "Had a mixed day. Started with some challenges but managed to practice my breathing exercises...",
    },
  ],
  todoList: [
    "Morning meditation - 10 mins",
    "Breathing exercise",
    "Evening reflection",
  ],
  achievements: [
    {
      title: "Early Bird",
      description: "Complete morning meditation 5 days in a row",
      progress: 80,
    },
    {
      title: "Mindfulness Master",
      description: "Achieve 30 days meditation streak",
      progress: 60,
    },
    {
      title: "Sleep Champion",
      description: "Maintain good sleep schedule for a week",
      progress: 90,
    },
  ],
};

const inspirationalQuotes = [
  "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
  "Small steps every day lead to big changes.",
  "Take care of your mind, and it will take care of you.",
];

export default function Home() {
  const navigate = useNavigate();
  const { currentUser, loading, error } = useSelector(
    (state: { user: { currentUser: any; loading: boolean; error: any } }) =>
      state.user
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const quote =
    inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      result.push(services[index]);
    }
    return result;
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
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[50vh] mb-12 overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000"
              alt="Peaceful meditation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          <div className="relative h-full flex items-center px-8 md:px-16 max-w-7xl mx-auto">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">
                Welcome back, {currentUser.username}
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Hope you are doing well.Let's continue your journey to mental
                wellness and inner peace
              </p>
              <button
                onClick={() => navigate("/breathinggame")}
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Start Today's Session
              </button>
            </div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Daily Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Moon className="text-teal-500" />
                <h3 className="font-semibold text-gray-700">Sleep Quality</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {mockUserData.sleepHours}h
              </p>
              <p className="text-sm text-gray-500">
                Quality: {mockUserData.averageSleepQuality}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Smile className="text-teal-500" />
                <h3 className="font-semibold text-gray-700">Current Mood</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {mockUserData.currentMood}
              </p>
              <p className="text-sm text-gray-500">
                Avg: {mockUserData.averageMood}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="text-teal-500" />
                <h3 className="font-semibold text-gray-700">Meditation</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {mockUserData.meditationMinutes}min
              </p>
              <p className="text-sm text-gray-500">Today's session</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-teal-500" />
                <h3 className="font-semibold text-gray-700">Streak</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {mockUserData.streakDays} days
              </p>
              <p className="text-sm text-gray-500">
                {mockUserData.totalSessions} total sessions
              </p>
            </div>
          </motion.div>

          {/* Services Carousel */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
              Explore Our Services
            </h2>
            <div className="relative">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-6 overflow-hidden px-12">
                <AnimatePresence mode="wait">
                  {getVisibleServices().map((service, idx) => (
                    <motion.div
                      key={`${service.name}-${idx}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: idx === 1 ? 1.1 : 0.9,
                        y: idx === 1 ? -20 : 0,
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex-1 cursor-pointer"
                      onClick={() => navigate(service.route)}
                    >
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="h-48 relative">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-teal-800 mb-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </section>

          {/* Today's Focus and Inspiration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-teal-100"
            >
              <h2 className="text-xl font-bold text-teal-800 mb-4">
                Today's Focus
              </h2>
              <ul className="space-y-3">
                {mockUserData.todoList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <input type="checkbox" className="rounded text-teal-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-teal-100"
            >
              <h2 className="text-xl font-bold text-teal-800 mb-4">
                Daily Inspiration
              </h2>
              <blockquote className="text-gray-700 italic border-l-4 border-teal-500 pl-4">
                {quote}
              </blockquote>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-teal-800 mb-6">
              Your Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockUserData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-teal-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="text-teal-500" />
                    <h3 className="font-semibold text-teal-800">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {achievement.description}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {achievement.progress}% completed
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Journal Preview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-teal-100 mb-12"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-teal-800">
                Recent Journal Entries
              </h2>
              <button
                onClick={() => navigate("/journal")}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                View All
              </button>
            </div>
            <div className="space-y-6">
              {mockUserData.journalEntries.map((entry, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-800">
                      {entry.date} • {entry.time}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        entry.mood === "Positive"
                          ? "bg-teal-100 text-teal-700"
                          : entry.mood === "Neutral"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {entry.mood}
                    </span>
                  </div>
                  <p className="text-gray-600">{entry.content}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/mood-tracker")}
              className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl text-white text-left"
            >
              <h3 className="text-lg font-semibold mb-2">Mood-Sleep Logger</h3>
              <p className="text-sm opacity-90">
                To log daily mood and get personalized suggestion
              </p>
              <ArrowRight className="mt-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/journal")}
              className="p-6 bg-gradient-to-r from-teal-700 to-teal-800 rounded-xl text-white text-left"
            >
              <h3 className="text-lg font-semibold mb-2">Daily Journal</h3>
              <p className="text-sm opacity-90">Sentiment Analysis</p>
              <ArrowRight className="mt-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/test")}
              className="p-6 bg-gradient-to-r from-teal-800 to-teal-900 rounded-xl text-white text-left"
            >
              <h3 className="text-lg font-semibold mb-2">Take a Test</h3>
              <p className="text-sm opacity-90">
                Need specialist? Take a test, test using ML
              </p>
              <ArrowRight className="mt-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
