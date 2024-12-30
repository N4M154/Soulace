import { Link } from "react-router-dom";
import Header from "../components/Header";

const ChatSpecialist = () => {
  return (
    <div>
      <Header />
      {/* Side Buttons */}
      <SideButtons />
      <div className="min-h-screen  flex flex-col items-center pt-8 pb-16">
        <div className="bg-gray-50 shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-3xl font-bold text-teal-800 mb-4 text-center">
            Chat with a Specialist
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Start an instant chat with a certified mental health specialist now.
          </p>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="8"
            placeholder="Type your message here..."
          ></textarea>
          <button
            className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Start Chat
          </button>
        </div>
        <Link to="/" className="text-teal-600 mt-6 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ChatSpecialist;
