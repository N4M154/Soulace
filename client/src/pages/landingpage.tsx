

//-------------------------------------------------------------------------------------------------


import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart, Brain, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp,
  Globe2,
  Heart,
  LineChart,
  MessageCircle,
  Music, Shield, Sparkles, Star, Users,
  Users2
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
      label: "Availability", 
      value: "24/7", 
      color: "from-purple-500 to-purple-300", 
      delay: 0.2 
    },
    { 
      label: "User Experience", 
      value: "9/10", 
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


function SDGSection() {
  const impactData = [
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Contributing to worldwide mental health initiatives and supporting SDG 3's mission for better health and well-being.",
      stats: "1 in 8 people globally affected by mental health conditions",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: Users2,
      title: "Bangladesh Focus",
      description: "Addressing critical mental health needs in Bangladesh by providing accessible and stigma-free support.",
      stats: "16.8% of adults in Bangladesh face mental health challenges",
      color: "from-green-600 to-green-400"
    },
    {
      icon: Heart,
      title: "SDG 3 Alignment",
      description: "Supporting the UN's Sustainable Development Goal 3 through digital mental health solutions.",
      stats: "Promoting well-being for all ages",
      color: "from-red-600 to-red-400"
    },
    {
      icon: LineChart,
      title: "Measurable Impact",
      description: "Tracking and improving mental health outcomes through data-driven approaches.",
      stats: "Reducing treatment gaps in mental healthcare",
      color: "from-purple-600 to-purple-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-large font-medium text-teal-700 bg-teal-50 rounded-full">
            SDG 3 Impact
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Supporting Global Mental Health Goals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soulace actively contributes to the UN's Sustainable Development Goal 3, 
            focusing on mental health and well-being both in Bangladesh and globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-2.5 mb-6`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-500">
                  Key Statistic
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {item.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-teal-100 px-24 py-8 rounded-full">
            <img 
              src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg" 
              alt="SDG 3 Icon" 
              className="w-8 h-8"
            />
            <span className="text-teal-700 font-medium">
              Proud contributor to UN Sustainable Development Goal 3
            </span>
          </div>
        </motion.div>
      </div>
    </section>
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
        <SDGSection />
        <FAQ />
      </main>
      <Foooter />
    </div>
  );
}

export default LandingPage;




