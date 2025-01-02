

import { AnimatePresence, motion } from "framer-motion";
import { Brain, ChevronLeft, ChevronRight, Crown, Heart, Shield, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FloatingChatbot from "../components/Chatbot";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const services = [
 
  {
    name: "Community Portal",
    description: "Connect with others on similar wellness journeys.",
    image: "/com.png",
    route: "/community"
  },
  {
    name: "Relaxation Exercises",
    description: "Guided exercises to help you unwind and de-stress.",
    image: "/relax.png",
    route: "/relaxation"
  },
  {
    name: "Meditation Sessions",
    description: "Find peace with guided meditation practices.",
    image: "/med.png",
    route: "/meditation"
  },
  {
    name: "AI Chatbot Support",
    description: "24/7 emotional support and guidance from our AI companion.",
    image: "/chatbot.png",
    route: "/chatbot"
  },
  {
    name: "Mood Tracker",
    description: "Track your daily moods to better understand yourself.",
    image: "/Mood Tracker.png",
    route: "/mood-tracker"
  },
  {
    name: "Sleep Tracker",
    description: "Monitor your sleep patterns and improve your rest.",
    image: "/Sleep Tracker.png",
    route: "/sleep-tracker"
  },
  {
    name: "Music Recommendation",
    description: "Discover music that matches your mood.",
    image: "/music.png",
    route: "/musicrecommendation"
  },
  {
    name: "Mental Health Content",
    description: "Learn and grow with expert articles and videos.",
    image: "/MindGrowth.png",
    route: "/contents"
  },
  {
    name: "Daily Jokes",
    description: "Start your day with a smile!",
    image: "/SmilingSun.png",
    route: "/jokeoftheday"
  },
  {
    name: "Breathing Exercise",
    description: "Follow guided breathing exercises.",
    image: "/heart.png",
    route: "/breathinggame"
  }
];

export default function Home() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <SideButtons />
      
      <div className="ml-48 px-4">
        <FloatingChatbot iconSrc="/chatbot.png"/>
        
        {/* Hero Section with Services Slider */}
        <section className="pt-4 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center text-teal-700 mb-4">
              Your Mental Wellness Journey
            </h1>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover a suite of tools and services designed to support your mental well-being
            </p>
            
            {/* Enhanced Services Slider */}
            <div className="relative py-8 overflow-hidden">
              <div className="flex items-center justify-center">
                <button
                  onClick={prevSlide}
                  className="absolute left-4 z-10 p-4 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-8 h-8 text-gray-800" />
                </button>
                
                <div className="flex gap-8 items-center px-20">
                  <AnimatePresence mode="wait">
                    {getVisibleServices().map((service, idx) => (
                      <motion.div
                        key={`${service.name}-${idx}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: idx === 1 ? 1.1 : 0.9,
                          y: idx === 1 ? -20 : 0
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 24
                        }}
                        className={`relative cursor-pointer ${
                          idx === 1 ? 'z-10' : 'z-0'
                        }`}
                        onClick={() => {
                          if (currentUser) {
                            navigate(service.route);
                          } else {
                            navigate("/sign-in");
                          }
                        }}
                      >
                        <div className={`
                          bg-white rounded-2xl shadow-xl overflow-hidden
                          transition-all duration-300 transform hover:scale-105
                          ${idx === 1 ? 'w-96 h-[32rem]' : 'w-80 h-96 opacity-75'}
                        `}>
                          <div className="relative h-3/5">
                            <img
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>
                          <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                              {service.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 z-10 p-4 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-8 h-8 text-gray-800" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block p-2 px-4 bg-purple-100 rounded-full mb-4"
              >
                <span className="text-purple-800 font-semibold flex items-center gap-2">
                  <Crown className="w-5 h-5" /> Premium Experience
                </span>
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Unlock Premium Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform your wellness journey with our premium tools
              </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-12">
              {/* Feature Row 1 */}
              <div className="flex flex-col md:flex-row gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Consultation</h3>
                      <p className="text-gray-600 mb-4">Connect with certified mental health professionals for personalized guidance and support.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>24/7 priority access</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>Video consultation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Analytics</h3>
                      <p className="text-gray-600 mb-4">Comprehensive tracking and insights for your mental wellness journey.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>Detailed progress reports</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>Personalized insights</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Feature Row 2 */}
              <div className="flex flex-col md:flex-row gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex-1 bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Daily Wellness Journal</h3>
                      <p className="text-gray-600 mb-4">Track your emotional journey with our advanced journaling tools.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>Mood patterns analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>Guided reflection prompts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex-1 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <Sparkles className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Achievement System</h3>
                      <p className="text-gray-600 mb-4">Celebrate your progress with our gamified wellness journey.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>Custom milestones</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>Rewards system</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-12"
              >
                <button
                  onClick={() => navigate("/subscribe")}
                  className="px-8 py-4 bg-gradient-to-r from-gray-600 to-teal-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Start Your Premium Journey
                </button>
                <p className="mt-4 text-gray-600">
                 
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}