import { Link } from "react-router-dom";
import Header from "../components/Header";

const Recommendation = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Results are here! 🎧</h2>
          <p className="text-gray-700 mb-6">
            Hi <span className="font-semibold text-purple-700">Faiza Maliat</span>, based on your
            responses, it seems like connecting with a mental health specialist could really help you
            right now. Remember, seeking support is a sign of strength, and we are here to guide you
            every step of the way. 🌟
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">Here is what you can do:</h3>

          {/* Horizontal Button Layout */}
          <div className="flex justify-center space-x-8 mt-4">
            <Link to="/schedule-consultation" className="flex flex-col items-center">
              <img
                src="/Schedule.png"
                alt="Schedule Consultation"
                className="w-24 h-24 object-contain hover:scale-110 transition transform duration-300"
              />
              <span className="mt-2 text-sm text-gray-700">Schedule a Consultation</span>
            </Link>

            <Link to="/chat-specialist" className="flex flex-col items-center">
              <img
                src="/chat-doctor.png"
                alt="Chat with Specialist"
                className="w-24 h-24 object-contain hover:scale-110 transition transform duration-300"
              />
              <span className="mt-2 text-sm text-gray-700">Chat with Specialist</span>
            </Link>

            <Link to="/emergency-support" className="flex flex-col items-center">
              <img
                src="/emergency.png"
                alt="Emergency Support"
                className="w-24 h-24 object-contain hover:scale-110 transition transform duration-300"
              />
              <span className="mt-2 text-sm text-gray-700">Emergency Support</span>
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
