import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PremiumRoute = ({ children }) => {
  const [isOnTrial, setIsOnTrial] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkTrialStatus = async () => {
      try {
        const response = await fetch("https://soulace-backend.onrender.com/api/user/trial-status", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setIsOnTrial(data.isOnTrial);
      } catch (err) {
        console.error("Error checking trial status:", err);
      } finally {
        setLoading(false);
      }
    };

    checkTrialStatus();
  }, []);

  if (loading) return <p>Loading...</p>;

  return isOnTrial ? children : <Navigate to="/subscribe" />;
};

export default PremiumRoute;
