import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const ScheduleConsultation = () => {
  return (
    <div>
      <Header />

      <SideButtons />
      <div className="min-h-screen bg-white dark:bg-[#2c2c2c] flex flex-col items-center pt-8 pb-16">
        <div className="bg-teal-50 dark:bg-transparent shadow-lg dark:shadow-black dark:border dark:border-teal-700 rounded-lg p-8 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold text-teal-800 dark:text-teal-500 mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Book a session with a certified mental health specialist to discuss
            your concerns.
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white font-medium mb-2"
                htmlFor="date"
              >
                Select Date:
              </label>
              <input
                type="date"
                id="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white font-medium mb-2"
                htmlFor="time"
              >
                Select Time:
              </label>
              <input
                type="time"
                id="time"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-500 transition duration-300"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
        <Link
          to="/home"
          className="mt-6 text-teal-700 hover:text-teal-500 dark:text-teal-500 dark:hover:text-teal-400 underline transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ScheduleConsultation;
