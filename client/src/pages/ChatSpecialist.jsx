import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const ChatSpecialist = () => {
  return (
    <div>
      <Header />
      {/* Side Buttons */}
      <SideButtons />
      <div className="min-h-screen  flex flex-col items-center pt-8 pb-16 dark:bg-[#2c2c2c]">
        <div className="bg-gray-50 dark:bg-[#2c2c2c] dark:border dark:border-teal-700 shadow-lg dark:shadow-black rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-3xl font-bold text-teal-800 dark:text-teal-500 mb-4 text-center">
            Chat with a Specialist
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
            Start an instant chat with a certified mental health specialist now.
          </p>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 dark:bg-gray-400 dark:placeholder:text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="8"
            placeholder="Type your message here..."
          ></textarea>
          <button className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">
            Start Chat
          </button>
        </div>
        <Link
          to="/"
          className="text-teal-600 dark:text-teal-400 mt-6 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ChatSpecialist;
