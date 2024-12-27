import { Link } from "react-router-dom";

const Recommendation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Results are here! 🎧</h2>
        <p className="text-gray-700 mb-6">
          Hi <span className="font-semibold text-purple-700">Faiza Maliat</span>, based on your
          responses, it seems like connecting with a mental health specialist could really help you
          right now. Remember, seeking support is a sign of strength, and we're here to guide you
          every step of the way. 🌟
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">Here is what you can do:</h3>
        <div className="flex justify-center gap-4">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition">
            Schedule A Consultation
          </button>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
            Instant Chat with Specialist
          </button>
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition">
            Emergency Support Line
          </button>
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
  );
};

export default Recommendation;
