import { Link } from "react-router-dom";
import Header from "../components/Header";

const EmergencySupport = () => {
  return (
    <div>
      <Header />
      {/* Side Buttons */}
      <SideButtons />
      <div className="min-h-screen bg-white flex flex-col items-center pt-8 pb-16">
        <div className="bg-red-50 shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-3xl font-bold text-red-800 mb-4 text-center">
            Emergency Support Line
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            If you’re in immediate distress, please call one of the emergency support lines below.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="text-gray-700 font-bold">National Helpline:</span>
              <span className="text-red-700 font-semibold">123-456-7890</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700 font-bold">Crisis Text Line:</span>
              <span className="text-red-700 font-semibold">Text "HELP" to 12345</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700 font-bold">Suicide Prevention Hotline:</span>
              <span className="text-red-700 font-semibold">1-800-273-8255</span>
            </li>
          </ul>
          <button
            className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Call Now
          </button>
        </div>
        <Link to="/" className="text-red-600 mt-6 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default EmergencySupport;
