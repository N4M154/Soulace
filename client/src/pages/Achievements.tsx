// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMedal } from "@fortawesome/free-solid-svg-icons";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";

// const Achievements = () => {
//   // Mock achievements data
//   const [achievements] = useState(["Mood Master", "Mindful Explorer", "Gratitude Guru"]);

//   const badgeDescriptions = {
//     "Mood Master": "Logged moods daily for 7 consecutive days.",
//     "Sleep Star": "Maintained healthy sleep patterns for a month.",
//     "Mindful Explorer": "Completed 10 meditation sessions.",
//     "Community Connector": "Engaged with the community by posting or commenting.",
//     "Breathing Champion": "Completed 5 guided breathing exercises.",
//     "Gratitude Guru": "Wrote 10 daily journal entries.",
//     "Stress Buster": "Completed 3 breathing sessions in a single day.",
//   };

//   const allBadges = [
    // "Mood Master",
    // "Sleep Star",
    // "Mindful Explorer",
    // "Community Connector",
    // "Breathing Champion",
    // "Gratitude Guru",
    // "Stress Buster",
//   ];

//   const isBadgeEarned = (badge) => {
//     return achievements.includes(badge);
//   };

//   const styles = {
//     dashboard: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "20px",
//       backgroundColor: "#fff",
//       minHeight: "100vh",
//     },
//     achievementsTitle: {
//       fontSize: "2.3rem",
//       fontWeight: "bold",
//       color: "#333",
//       marginBottom: "30px",
//       textAlign: "center",
//       textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
//     },
//     badgeList: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "30px",
//       justifyContent: "center",
//       maxWidth: "1200px",
//       width: "100%",
//     },
//     achievementItem: {
//       background: "#fff",
//       border: "2px solid #ddd",
//       borderRadius: "15px",
//       width: "280px",
//       padding: "25px",
//       textAlign: "center",
//       boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
//       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     },
//     achievementHeader: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       marginBottom: "15px",
//     },
//     medalIcon: {
//       fontSize: "2.5rem",
//       marginRight: "10px",
//       color: "#bbb",
//     },
//     achievementName: {
//       fontSize: "1.5rem",
//       fontWeight: "bold",
//       color: "gray",
//     },
//     achievementDescription: {
//       fontSize: "1.1rem",
//       color: "gray",
//       lineHeight: "1.5",
//     },
//     earned: {
//       color: "teal",
//     },
//     earnedItem: {
//       transform: "translateY(-5px)",
//       boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
//     },
//   };

//   return (
//     <div>
//       <Header />
//       <SideButtons/>
//       <div style={styles.dashboard}>
//         <h1 style={styles.achievementsTitle}>Badges Earned</h1>
//         <div style={styles.badgeList}>
//           {allBadges.map((badge, index) => (
//             <div
//               key={index}
//               style={{
//                 ...styles.achievementItem,
//                 ...(isBadgeEarned(badge) ? styles.earnedItem : {}),
//               }}
//             >
//               <div style={styles.achievementHeader}>
//                 <FontAwesomeIcon
//                   icon={faMedal}
//                   style={{
//                     ...styles.medalIcon,
//                     ...(isBadgeEarned(badge) ? styles.earned : {}),
//                   }}
//                 />
//                 <span
//                   style={{
//                     ...styles.achievementName,
//                     ...(isBadgeEarned(badge) ? styles.earned : {}),
//                   }}
//                 >
//                   {badge}
//                 </span>
//               </div>
//               <div
//                 style={{
//                   ...styles.achievementDescription,
//                   ...(isBadgeEarned(badge) ? styles.earned : {}),
//                 }}
//               >
//                 {badgeDescriptions[badge]}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;

//--------------------------------------------------------------
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const Achievements: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const mockUserData: { achievements: { title: string; description: string; progress: number }[] } = {
    achievements: [
      {
        title: "Mood Master",
        description: "Logged moods daily for 7 consecutive days.",
        progress: 100,
      },
      {
        title: "Sleep Star",
        description: "Maintained healthy sleep patterns for a month.",
        progress: 90,
      },
      {
        title: "Mindful Explorer",
        description: "Completed 10 meditation sessions.",
        progress: 80,
      },
      {
        title: "Community Connector",
        description: "Engaged with the community by posting or commenting.",
        progress: 70,
      },
      {
        title: "Breathing Champion",
        description: "Completed 5 guided breathing exercises.",
        progress: 60,
      },
      {
        title: "Gratitude Guru",
        description: "Wrote 10 daily journal entries.",
        progress: 50,
      },
      {
        title: "Stress Buster",
        description: "Completed 3 breathing sessions in a single day.",
        progress: 40,
      },
      {
        title: "Focus Finder",
        description: "Stayed focused on tasks without distractions for a week.",
        progress: 75,
      },
      {
        title: "Energy Enthusiast",
        description: "Kept a high energy level with consistent exercise for two weeks.",
        progress: 85,
      },
    ],
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
        <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-white text-teal-900 text-white py-16 px-8 rounded-2xl shadow-lg mx-4 mt-6">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Celebrate Your Wins<br />Fuel Your Next Victory
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Every achievement is a step forward. Let your progress inspire your next challenge.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            {/* Placeholder for an illustrative icon */}
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke-width="2" />
            </svg>
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-teal-800 mb-6">
          
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockUserData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-teal-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={faMedal} className="text-teal-500 text-2xl" />
                  <h3 className="font-semibold text-teal-800">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
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
      </div>
    </div>
  );
};

export default Achievements;
