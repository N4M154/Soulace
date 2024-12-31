// import React, { useState } from "react";
// import {
//   FaBell,
//   FaBook,
//   FaBrain,
//   FaGamepad,
//   FaMoon,
//   FaMusic,
//   FaRobot,
//   FaSmile,
//   FaThList,
//   FaUserMd,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// const sidebarButtons = [
//   { name: "Relaxation Games", icon: <FaGamepad />, route: "/breathinggame", color: "#00796B" },
//   { name: "Meditation", icon: <FaBrain />, route: "/meditation", color: "#00695C" },
//   { name: "Joke of the Day", icon: <FaSmile />, route: "/jokeoftheday", color: "#004D40" },
//   { name: "Music Recommendation", icon: <FaMusic />, route: "/musicrecommendation", color: "#00796B" },
//   { name: "Chatbot", icon: <FaRobot />, route: "/chatbot", color: "#00695C" },
//   { name: "Mood-Sleep Tracker", icon: <FaMoon />, route: "/Mood-Tracker", color: "#004D40" },
//   { name: "Daily Journal", icon: <FaBook />, route: "/daily-journal", color: "#00796B" },
//   { name: "Need a specialist?", icon: <FaUserMd />, route: "/specialist", color: "#00695C" },
//   { name: "Subscribe", icon: <FaBell />, route: "/subscribe", color: "#004D40" },
//   { name: "Contents", icon: <FaThList />, route: "/contents", color: "#00796B" },
// ];

// const SideButtons = () => {
//   const location = useLocation();
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: "15%", // Moved down
//         left: "12px",
//         display: "flex",
//         flexDirection: "column",
//         gap: "10px",
//         zIndex: 1000,
//         perspective: "1000px",
//       }}
//     >
//       {sidebarButtons.map((service, index) => {
//         const isActive = location.pathname === service.route;
//         const isHovered = hoveredIndex === index;
        
//         return (
//           <Link
//             key={index}
//             to={service.route}
//             style={{
//               position: "relative",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "45px",
//               height: "45px",
//               backgroundColor: service.color,
//               color: "white",
//               textDecoration: "none",
//               borderRadius: "50%",
//               transform: `
//                 perspective(1000px)
//                 rotateY(${isHovered ? '20deg' : '0deg'})
//                 scale(${isHovered ? 1.15 : 1})
//                 translateZ(${isHovered ? '10px' : '0px'})
//               `,
//               transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//               boxShadow: isHovered
//                 ? `0 10px 25px rgba(0, 0, 0, 0.3),
//                    inset 0 0 15px rgba(255, 255, 255, 0.2),
//                    0 0 0 2px rgba(255, 255, 255, 0.2),
//                    0 0 30px ${service.color}80`
//                 : `0 6px 15px rgba(0, 0, 0, 0.2)`,
//               animation: `float-${index} ${3 + index % 2}s ease-in-out infinite`,
//               animationDelay: `${index * 0.1}s`,
//               fontSize: "1.1rem",
//               fontStyle: "italic",
//             }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <div
//               style={{
//                 position: "relative",
//                 zIndex: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transform: isHovered ? "scale(1.2) rotate(360deg)" : "scale(1)",
//                 transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
//               }}
//             >
//               {service.icon}
//               {isActive && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     inset: "-8px",
//                     borderRadius: "50%",
//                     background: `radial-gradient(circle at center, ${service.color}40 0%, transparent 70%)`,
//                     animation: "pulse 2s infinite",
//                   }}
//                 />
//               )}
//             </div>

//             {isHovered && (
//               <div
//                 style={{
//                   position: "absolute",
//                   left: "calc(100% + 15px)",
//                   backgroundColor: "rgba(0, 0, 0, 0.9)",
//                   color: "white",
//                   padding: "6px 12px",
//                   borderRadius: "8px",
//                   fontSize: "0.85rem",
//                   fontWeight: "500",
//                   fontStyle: "italic",
//                   letterSpacing: "0.3px",
//                   whiteSpace: "nowrap",
//                   opacity: 1,
//                   transform: "translateX(0)",
//                   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                   boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
//                   animation: "fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 }}
//               >
//                 {service.name}
//                 <div
//                   style={{
//                     position: "absolute",
//                     left: "-6px",
//                     top: "50%",
//                     transform: "translateY(-50%) rotate(45deg)",
//                     width: "12px",
//                     height: "12px",
//                     backgroundColor: "rgba(0, 0, 0, 0.9)",
//                     borderRadius: "2px",
//                     boxShadow: "-3px -3px 5px rgba(0, 0, 0, 0.1)",
//                   }}
//                 />
//               </div>
//             )}

//             {isActive && (
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: "-4px",
//                   borderRadius: "50%",
//                   background: `linear-gradient(45deg, ${service.color}, transparent)`,
//                   opacity: 0.4,
//                   filter: "blur(4px)",
//                   animation: "rotate 4s linear infinite",
//                 }}
//               />
//             )}
//           </Link>
//         );
//       })}

//       <style>
//         {`
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//               transform: translateX(-10px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           @keyframes pulse {
//             0% {
//               transform: scale(1);
//               opacity: 0.8;
//             }
//             50% {
//               transform: scale(1.2);
//               opacity: 0.4;
//             }
//             100% {
//               transform: scale(1);
//               opacity: 0.8;
//             }
//           }

//           @keyframes rotate {
//             from {
//               transform: rotate(0deg);
//             }
//             to {
//               transform: rotate(360deg);
//             }
//           }

//           ${sidebarButtons.map((_, index) => `
//             @keyframes float-${index} {
//               0%, 100% {
//                 transform: translateY(0px);
//               }
//               50% {
//                 transform: translateY(${-4 - (index % 3) * 2}px);
//               }
//             }
//           `).join('\n')}
//         `}
//       </style>
//     </div>
//   );
// };

// export default SideButtons;

//----------------------------------------

// import {
//   Bell,
//   BookOpen,
//   Bot,
//   Brain,
//   ChevronLeft,
//   Gamepad2,
//   LayoutList,
//   Moon,
//   Music2,
//   Smile,
//   UserRound,
// } from 'lucide-react';
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const sidebarItems = [
//   { name: "Relaxation Games", icon: Gamepad2, route: "/breathinggame", color: "#00796B" },
//   { name: "Meditation", icon: Brain, route: "/meditation", color: "#00695C" },
//   { name: "Joke of the Day", icon: Smile, route: "/jokeoftheday", color: "#004D40" },
//   { name: "Music Recommendation", icon: Music2, route: "/musicrecommendation", color: "#00796B" },
//   { name: "Chatbot", icon: Bot, route: "/chatbot", color: "#00695C" },
//   { name: "Mood-Sleep Tracker", icon: Moon, route: "/Mood-Tracker", color: "#004D40" },
//   { name: "Daily Journal", icon: BookOpen, route: "/daily-journal", color: "#00796B" },
//   { name: "Need a specialist?", icon: UserRound, route: "/specialist", color: "#00695C" },
//   { name: "Subscribe", icon: Bell, route: "/subscribe", color: "#004D40" },
//   { name: "Contents", icon: LayoutList, route: "/contents", color: "#00796B" },
// ];

// const SideButtons = () => {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const location = useLocation();
//   const [hoveredItem, setHoveredItem] = useState(null);

//   return (
//     <div className="side-buttons-container">
//       <style>
//         {`
//           .side-buttons-container {
//             position: fixed;
//             top: 0;
//             left: 0;
//             height: 100vh;
//             z-index: 1000;
//           }

//           .side-menu {
//             height: 100%;
//             background: linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%);
//             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//             box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
//             overflow: hidden;
//             display: flex;
//             flex-direction: column;
//           }

//           .side-menu.expanded {
//             width: 260px;
//           }

//           .side-menu.collapsed {
//             width: 80px;
//           }

//           .toggle-button {
//             position: absolute;
//             right: -12px;
//             top: 20px;
//             width: 24px;
//             height: 24px;
//             background: #6366f1;
//             border: none;
//             border-radius: 50%;
//             color: white;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//             transition: all 0.3s ease;
//             z-index: 2;
//             box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
//           }

//           .toggle-button:hover {
//             background: #4f46e5;
//             transform: scale(1.1);
//           }

//           .menu-header {
//             padding: 20px;
//             color: white;
//             font-size: 24px;
//             font-weight: bold;
//             text-align: center;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .menu-items {
//             padding: 10px;
//             overflow-y: auto;
//           }

//           .menu-item {
//             display: flex;
//             align-items: center;
//             padding: 12px;
//             color: #e5e7eb;
//             text-decoration: none;
//             border-radius: 8px;
//             margin: 4px 0;
//             transition: all 0.2s ease;
//             position: relative;
//           }

//           .menu-item:hover {
//             background: rgba(89, 224, 21, 0.1);
//             transform: translateX(4px);
//           }

//           .menu-item.active {
//             background: rgba(99, 102, 241, 0.2);
//             color: white;
//           }

//           .item-content {
//             display: flex;
//             align-items: center;
//             gap: 12px;
//             width: 100%;
//           }

//           .item-icon {
//             width: 20px;
//             height: 20px;
//             flex-shrink: 0;
//           }

//           .item-text {
//             font-size: 14px;
//             white-space: nowrap;
//             opacity: 1;
//             transition: opacity 0.2s ease;
//           }

//           .collapsed .item-text {
//             opacity: 0;
//             width: 0;
//           }

//           .tooltip {
//             position: absolute;
//             left: calc(100% + 10px);
//             top: 50%;
//             transform: translateY(-50%);
//             background: #1a1a1a;
//             color: white;
//             padding: 6px 12px;
//             border-radius: 4px;
//             font-size: 12px;
//             white-space: nowrap;
//             pointer-events: none;
//             opacity: 0;
//             transition: opacity 0.2s ease;
//             box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
//           }

//           .tooltip::before {
//             content: '';
//             position: absolute;
//             left: -4px;
//             top: 50%;
//             transform: translateY(-50%);
//             border-width: 4px;
//             border-style: solid;
//             border-color: transparent #1a1a1a transparent transparent;
//           }

//           .menu-item:hover .tooltip {
//             opacity: 1;
//           }

//           .active-indicator {
//             position: absolute;
//             inset: 0;
//             border-radius: 8px;
//             background: linear-gradient(45deg, rgba(99, 102, 241, 0.2), transparent);
//             pointer-events: none;
//             animation: pulse 2s infinite;
//           }

//           @keyframes pulse {
//             0%, 100% { opacity: 0.6; }
//             50% { opacity: 1; }
//           }
//         `}
//       </style>

//       <div className={`side-menu ${isExpanded ? 'expanded' : 'collapsed'}`}>
//         <button
//           className="toggle-button"
//           onClick={() => setIsExpanded(!isExpanded)}
//           style={{
//             transform: `rotate(${isExpanded ? '0' : '180deg'})`,
//           }}
//         >
//           <ChevronLeft size={16} />
//         </button>

//         <div className="menu-header">
//           {isExpanded ? 'Navigation' : 'Nav'}
//         </div>

//         <div className="menu-items">
//           {sidebarItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.route;

//             return (
//               <Link
//                 key={item.route}
//                 to={item.route}
//                 className={`menu-item ${isActive ? 'active' : ''}`}
//                 onMouseEnter={() => setHoveredItem(item.route)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 <div className="item-content">
//                   <Icon className="item-icon" />
//                   <span className="item-text">
//                     {item.name}
//                   </span>
//                 </div>

//                 {!isExpanded && hoveredItem === item.route && (
//                   <div className="tooltip">{item.name}</div>
//                 )}

//                 {isActive && <div className="active-indicator" />}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideButtons;


//--------------------------------------


import {
  Bell,
  BookOpen,
  Bot,
  Brain,
  ChevronLeft,
  Gamepad2,
  LayoutList,
  LogOut,
  Moon,
  Music2,
  Smile,
  UserRound,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const sidebarItems = [
  { name: "Relaxation Games", icon: Gamepad2, route: "/breathinggame" },
  { name: "Meditation", icon: Brain, route: "/meditation" },
  { name: "Joke of the Day", icon: Smile, route: "/jokeoftheday" },
  { name: "Music Recommendation", icon: Music2, route: "/musicrecommendation" },
  { name: "Chatbot", icon: Bot, route: "/chatbot" },
  { name: "Mood-Sleep Tracker", icon: Moon, route: "/Mood-Tracker" },
  { name: "Daily Journal", icon: BookOpen, route: "/daily-journal" },
  { name: "Need a specialist?", icon: UserRound, route: "/specialist" },
  { name: "Subscribe", icon: Bell, route: "/subscribe" },
  { name: "Contents", icon: LayoutList, route: "/contents" },
];

const SideButtons = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  // Update main content margin when sidebar state changes
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.marginLeft = isExpanded ? '260px' : '80px';
      mainContent.style.transition = 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }
  }, [isExpanded]);

  const handleLogout = () => {
    // navigate to landing page
    navigate('/');
  };

  return (
    <>
      <style>
        {`
          .side-buttons-container {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            z-index: 1000;
          }

          .side-menu {
            height: 100%;
            background: linear-gradient(180deg, #0d9488 0%, #115e59 100%);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }

          .side-menu.expanded {
            width: 260px;
          }

          .side-menu.collapsed {
            width: 80px;
          }

          .toggle-button {
            position: absolute;
            right: -12px;
            top: 20px;
            width: 24px;
            height: 24px;
            background: #0d9488;
            border: none;
            border-radius: 50%;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 2;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          }

          .toggle-button:hover {
            background: #0f766e;
            transform: scale(1.1);
          }

          .menu-header {
            padding: 16px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .expanded .menu-header {
            padding: 24px;
          }

          .logo {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            object-fit: contain;
          }

          .expanded .logo {
            height: 75px;
            width: auto;
          }

          .collapsed .logo {
            height: 32px;
            width: 32px;
          }

          .menu-items {
            padding: 10px;
            overflow-y: auto;
            flex: 1;
          }

          .menu-item {
            display: flex;
            align-items: center;
            padding: 12px;
            color: #e5e7eb;
            text-decoration: none;
            border-radius: 8px;
            margin: 4px 0;
            transition: all 0.2s ease;
            position: relative;
          }

          .menu-item:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(4px);
          }

          .menu-item.active {
            background: rgba(255, 255, 255, 0.2);
            color: white;
          }

          .item-content {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
          }

          .item-icon {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }

          .item-text {
            font-size: 14px;
            white-space: nowrap;
            opacity: 1;
            transition: opacity 0.2s ease;
          }

          .collapsed .item-text {
            opacity: 0;
            width: 0;
          }

          .tooltip {
            position: absolute;
            left: calc(100% + 10px);
            top: 50%;
            transform: translateY(-50%);
            background: #0d9488;
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .tooltip::before {
            content: '';
            position: absolute;
            left: -4px;
            top: 50%;
            transform: translateY(-50%);
            border-width: 4px;
            border-style: solid;
            border-color: transparent #0d9488 transparent transparent;
          }

          .menu-item:hover .tooltip {
            opacity: 1;
          }

          .active-indicator {
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), transparent);
            pointer-events: none;
            animation: pulse 2s infinite;
          }

          .logout-button {
            margin: 16px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 8px;
            color: white;
            display: flex;
            align-items: center;
            gap: 12px;
            width: calc(100% - 32px);
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .logout-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateX(4px);
          }

          /* Add styles for main content */
          #main-content {
            margin-left: 260px;
            padding: 20px;
            min-height: 100vh;
            transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}
      </style>

      <div className="side-buttons-container">
        <div className={`side-menu ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <button
            className="toggle-button"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              transform: `rotate(${isExpanded ? '0' : '180deg'})`,
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <div className="menu-header">
            <img src="/Logo.png" alt="Logo" className="logo" />
          </div>

          <div className="menu-items">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.route;

              return (
                <Link
                  key={item.route}
                  to={item.route}
                  className={`menu-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredItem(item.route)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="item-content">
                    <Icon className="item-icon" />
                    <span className="item-text">
                      {item.name}
                    </span>
                  </div>

                  {!isExpanded && hoveredItem === item.route && (
                    <div className="tooltip">{item.name}</div>
                  )}

                  {isActive && <div className="active-indicator" />}
                </Link>
              );
            })}
          </div>

          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={20} />
            {isExpanded && <span>Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideButtons;