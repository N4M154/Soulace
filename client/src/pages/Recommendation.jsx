import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import Header from "../components/Header";

const Recommendation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;

  useEffect(() => {
    if (!state || typeof state.probability !== "number") {
      navigate("/", { replace: true }); // Redirect to the form page if state is missing
    }
  }, [state, navigate]);

  if (!state || typeof state.probability !== "number") {
    return null; // Render nothing while redirecting
  }

  const { probability } = state;

  const getMessage = () => {
    const percentage = (probability * 100).toFixed(2);
    if (probability > 0.5) {
      return `There's a ${percentage}% chance you might benefit from talking to a professional.`;
    } else {
      return `There's a ${percentage}% likelihood that professional help may not be necessary right now.`;
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center p-6">
        <div className="bg-teal-50 shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">
            Assessment Results
          </h2>
          <p className="text-gray-700 mb-6">{getMessage()}</p>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Here are your next steps:
          </h3>

          {/* Horizontal Button Layout */}
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 mt-4">
            <Link
              to="/schedule-consultation"
              className="flex flex-col items-center mb-4 md:mb-0"
            >
              <img
                src="/Schedule.png"
                alt="Schedule Consultation"
                className="w-24 h-24 object-contain hover:scale-110 transition transform duration-300"
              />
              <span className="mt-2 text-sm text-gray-700">
                Schedule a Consultation
              </span>
            </Link>

            <Link
              to="/chat-specialist"
              className="flex flex-col items-center mb-4 md:mb-0"
            >
              <img
                src="/chat-doctor.png"
                alt="Chat with Specialist"
                className="w-24 h-24 object-contain hover:scale-110 transition transform duration-300"
              />
              <span className="mt-2 text-sm text-gray-700">
                Chat with Specialist
              </span>
            </Link>

            <Link
              to="/emergency-support"
              className="flex flex-col items-center"
            >
              <img
                src="/emergency.png"
                alt="Emergency Support"
                className="w-24 h-24 object-contain hover:scale-110 transition transform duration-300"
              />
              <span className="mt-2 text-sm text-gray-700">
                Emergency Support
              </span>
            </Link>
          </div>

          <div className="mt-6">
            <Link
              to="/specialist"
              className="text-purple-600 hover:text-purple-800 transition underline"
            >
              Take the test again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
