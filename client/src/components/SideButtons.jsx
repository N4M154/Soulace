import React, { useState } from "react";
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
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        position: "fixed",
        top: "15%", // Moved down
        left: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 1000,
        perspective: "1000px",
      }}
    >
      {sidebarButtons.map((service, index) => {
        const isActive = location.pathname === service.route;
        const isHovered = hoveredIndex === index;
        
        return (
          <Link
            key={index}
            to={service.route}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "45px",
              height: "45px",
              backgroundColor: service.color,
              color: "white",
              textDecoration: "none",
              borderRadius: "50%",
              transform: `
                perspective(1000px)
                rotateY(${isHovered ? '20deg' : '0deg'})
                scale(${isHovered ? 1.15 : 1})
                translateZ(${isHovered ? '10px' : '0px'})
              `,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: isHovered
                ? `0 10px 25px rgba(0, 0, 0, 0.3),
                   inset 0 0 15px rgba(255, 255, 255, 0.2),
                   0 0 0 2px rgba(255, 255, 255, 0.2),
                   0 0 30px ${service.color}80`
                : `0 6px 15px rgba(0, 0, 0, 0.2)`,
              animation: `float-${index} ${3 + index % 2}s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`,
              fontSize: "1.1rem",
              fontStyle: "italic",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: isHovered ? "scale(1.2) rotate(360deg)" : "scale(1)",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {service.icon}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    inset: "-8px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle at center, ${service.color}40 0%, transparent 70%)`,
                    animation: "pulse 2s infinite",
                  }}
                />
              )}
            </div>

            {isHovered && (
              <div
                style={{
                  position: "absolute",
                  left: "calc(100% + 15px)",
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  fontStyle: "italic",
                  letterSpacing: "0.3px",
                  whiteSpace: "nowrap",
                  opacity: 1,
                  transform: "translateX(0)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  animation: "fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {service.name}
                <div
                  style={{
                    position: "absolute",
                    left: "-6px",
                    top: "50%",
                    transform: "translateY(-50%) rotate(45deg)",
                    width: "12px",
                    height: "12px",
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    borderRadius: "2px",
                    boxShadow: "-3px -3px 5px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            )}

            {isActive && (
              <div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "50%",
                  background: `linear-gradient(45deg, ${service.color}, transparent)`,
                  opacity: 0.4,
                  filter: "blur(4px)",
                  animation: "rotate 4s linear infinite",
                }}
              />
            )}
          </Link>
        );
      })}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.4;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          ${sidebarButtons.map((_, index) => `
            @keyframes float-${index} {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(${-4 - (index % 3) * 2}px);
              }
            }
          `).join('\n')}
        `}
      </style>
    </div>
  );
};

export default SideButtons;