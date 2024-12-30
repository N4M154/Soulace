import {
    FaBell,
    FaBook,
    FaBrain,
    FaGamepad,
    FaMoon,
    FaMusic,
    FaRobot,
    FaSmile,
    FaThList,
    FaUserMd,
} from "react-icons/fa";
  
  export const sidebarData = [
    { name: "Relaxation Games", icon: <FaGamepad />, route: "/breathinggame", color: "#00796B" },
    { name: "Meditation", icon: <FaBrain />, route: "/meditation", color: "#00695C" },
    { name: "Joke of the Day", icon: <FaSmile />, route: "/jokeoftheday", color: "#004D40" },
    { name: "Music Recommendation", icon: <FaMusic />, route: "/musicrecommendation", color: "#00796B" },
    { name: "Chatbot", icon: <FaRobot />, route: "/chatbot", color: "#00695C" },
    { name: "Mood-Sleep Tracker", icon: <FaMoon />, route: "/Mood-Tracker", color: "#004D40" },
    { name: "Daily Journal", icon: <FaBook />, route: "/daily-journal", color: "#00796B" },
    { name: "Need a specialist?", icon: <FaUserMd />, route: "/specialist", color: "#00695C" },
    { name: "Subscribe", icon: <FaBell />, route: "/subscribe", color: "#004D40" },
    { name: "Contents", icon: <FaThList />, route: "/contents", color: "#00796B" },
  ];