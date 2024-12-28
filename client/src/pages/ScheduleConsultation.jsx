import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ScheduleConsultation = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-blue-50 flex flex-col items-center pt-8 pb-16">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold text-teal-800 mb-4">Schedule a Consultation</h1>
          <p className="text-gray-600 mb-6">
            Book a session with a certified mental health specialist to discuss your concerns.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                Select Date:
              </label>
              <input
                type="date"
                id="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
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
              className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
        <Link
          to="/home"
          className="mt-6 text-blue-500 hover:text-blue-700 underline transition"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ScheduleConsultation;
