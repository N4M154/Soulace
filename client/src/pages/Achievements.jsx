import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

const Achievements = () => {
  // Mock achievements data
  const [achievements] = useState(["Mood Master", "Mindful Explorer", "Gratitude Guru"]);

  const badgeDescriptions = {
    "Mood Master": "Logged moods daily for 7 consecutive days.",
    "Sleep Star": "Maintained healthy sleep patterns for a month.",
    "Mindful Explorer": "Completed 10 meditation sessions.",
    "Community Connector": "Engaged with the community by posting or commenting.",
    "Breathing Champion": "Completed 5 guided breathing exercises.",
    "Gratitude Guru": "Wrote 10 daily journal entries.",
    "Stress Buster": "Completed 3 breathing sessions in a single day.",
  };

  const allBadges = [
    "Mood Master",
    "Sleep Star",
    "Mindful Explorer",
    "Community Connector",
    "Breathing Champion",
    "Gratitude Guru",
    "Stress Buster",
  ];

  const isBadgeEarned = (badge) => {
    return achievements.includes(badge);
  };

  const styles = {
    dashboard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f4f8fb",
      minHeight: "100vh",
    },
    achievementsTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#4caf50",
      marginBottom: "20px",
    },
    badgeList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
    achievementItem: {
      background: "#fff",
      border: "2px solid #ddd",
      borderRadius: "10px",
      width: "250px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
    },
    achievementHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "10px",
    },
    medalIcon: {
      fontSize: "2rem",
      marginRight: "10px",
      color: "#ddd",
    },
    achievementName: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#333",
    },
    achievementDescription: {
      fontSize: "1rem",
      color: "#555",
    },
    earned: {
      color: "#4caf50",
    },
  };

  return (
    <div><Header/>
    <div style={styles.dashboard}>
        
      <h1 style={styles.achievementsTitle}>Achievements</h1>
      <div style={styles.badgeList}>
        {allBadges.map((badge, index) => (
          <div
            key={index}
            style={{
              ...styles.achievementItem,
              ...(isBadgeEarned(badge) ? { transform: "translateY(-5px)" } : {}),
            }}
          >
            <div style={styles.achievementHeader}>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  ...styles.medalIcon,
                  ...(isBadgeEarned(badge) ? styles.earned : {}),
                }}
              />
              <span
                style={{
                  ...styles.achievementName,
                  ...(isBadgeEarned(badge) ? styles.earned : {}),
                }}
              >
                {badge}
              </span>
            </div>
            <div
              style={{
                ...styles.achievementDescription,
                ...(isBadgeEarned(badge) ? styles.earned : {}),
              }}
            >
              {badgeDescriptions[badge]}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Achievements;
