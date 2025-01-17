
//besttt

import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Moon,
  Smile,
  Star,
  TrendingUp
} from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer.jsx";
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
    <div className="flex min-h-screen bg-gray-50 ">
      <SideButtons />
      <div
        id="main-content"
        className="flex-1 transition-all duration-300 "
        style={{ marginLeft: isExpanded ? "260px" : "80px" }}
      >
        <Header />
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[50vh] mb-12 overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000"
              alt="Peaceful meditation"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          <div className="relative h-full flex items-center px-8 md:px-16 max-w-7xl mx-auto rounded-2xl">
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
         
      {/* Quick Actions Section */}
      <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-teal-800 mb-8">Quick Actions</h2>
            <div className="space-y-6">
              {/* Mood Logger */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => navigate("/mood-tracker")}
              >
                <div className="flex items-stretch">
                  <div className="w-1/3 relative">
                    <img
                      src="https://images.unsplash.com/photo-1512757776214-26d36777b513?auto=format&fit=crop&w=800"
                      alt="Mood Tracking"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                  <div className="w-2/3 p-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                    <h3 className="text-2xl font-bold mb-3">Mood & Sleep Logger</h3>
                    <p className="text-lg opacity-90">
                      Track your daily emotional journey and sleep patterns. Your personal 
                      wellness diary awaits - let's capture how you're feeling today.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Daily Journal */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => navigate("/journal")}
              >
                <div className="flex items-stretch">
                  <div className="w-2/3 p-8 bg-gradient-to-r from-teal-700 to-teal-800 text-white">
                    <h3 className="text-2xl font-bold mb-3">Daily Journal</h3>
                    <p className="text-lg opacity-90">
                      Express yourself freely with our AI-powered journal. Get insights into 
                      your thoughts and emotions through advanced sentiment analysis.
                    </p>
                  </div>
                  <div className="w-1/3 relative">
                    <img
                      src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800"
                      alt="Journaling"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Take a Test */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => navigate("/test")}
              >
                <div className="flex items-stretch">
                  <div className="w-1/3 relative">
                    <img
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
                      alt="Mental Health Test"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                  <div className="w-2/3 p-8 bg-gradient-to-r from-teal-800 to-teal-900 text-white">
                    <h3 className="text-2xl font-bold mb-3">Take a test?</h3>
                    <p className="text-lg opacity-90">
                      Get personalized insights with our ML-powered assessment. Understand 
                      your mental well-being better through scientific analysis.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
          </div>
        
          <Footer></Footer>
        </div>
      </div>
    
  
  );
}


