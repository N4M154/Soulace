import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

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
      backgroundColor: "#fff",
      minHeight: "100vh",
    },
    achievementsTitle: {
      fontSize: "2.3rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "30px",
      textAlign: "center",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    badgeList: {
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      justifyContent: "center",
      maxWidth: "1200px",
      width: "100%",
    },
    achievementItem: {
      background: "#fff",
      border: "2px solid #ddd",
      borderRadius: "15px",
      width: "280px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    achievementHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "15px",
    },
    medalIcon: {
      fontSize: "2.5rem",
      marginRight: "10px",
      color: "#bbb",
    },
    achievementName: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "gray",
    },
    achievementDescription: {
      fontSize: "1.1rem",
      color: "gray",
      lineHeight: "1.5",
    },
    earned: {
      color: "teal",
    },
    earnedItem: {
      transform: "translateY(-5px)",
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div>
      <Header />
      <SideButtons/>
      <div style={styles.dashboard}>
        <h1 style={styles.achievementsTitle}>Badges Earned</h1>
        <div style={styles.badgeList}>
          {allBadges.map((badge, index) => (
            <div
              key={index}
              style={{
                ...styles.achievementItem,
                ...(isBadgeEarned(badge) ? styles.earnedItem : {}),
              }}
            >
              <div style={styles.achievementHeader}>
                <FontAwesomeIcon
                  icon={faMedal}
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
