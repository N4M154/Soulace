import React from "react";
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
import { Link } from "react-router-dom";

const sidebarButtons = [
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

const SideButtons = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "10%", // Properly aligned to fit the screen
        left: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        zIndex: 1000,
      }}
    >
      {sidebarButtons.map((service, index) => (
        <Link
          key={index}
          to={service.route}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            backgroundColor: service.color,
            color: "white",
            textDecoration: "none",
            borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s, box-shadow 0.3s",
            fontSize: "1.2rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.4)";
            e.currentTarget.querySelector(".tooltip").style.opacity = "1";
            e.currentTarget.querySelector(".tooltip").style.transform = "translateX(0)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
            e.currentTarget.querySelector(".tooltip").style.opacity = "0";
            e.currentTarget.querySelector(".tooltip").style.transform = "translateX(-10px)";
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {service.icon}
          </div>
          <div
            className="tooltip"
            style={{
              position: "absolute",
              left: "calc(100% + 12px)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "6px 10px",
              borderRadius: "4px",
              fontSize: "0.85rem",
              whiteSpace: "nowrap",
              opacity: 0,
              transform: "translateX(-10px)",
              transition: "all 0.3s ease",
              pointerEvents: "none",
            }}
          >
            {service.name}
            <div
              style={{
                position: "absolute",
                left: "-4px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "0",
                height: "0",
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                borderRight: "4px solid rgba(0, 0, 0, 0.8)",
              }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideButtons;
