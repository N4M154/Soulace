import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import SideButtons from "../components/SideButtons";

const SubscribePage = () => {
  return (
    <div className="flex flex-col min-h-screen  via-white to-teal-50">
      <Header />
  

{/* Side Buttons */}
<SideButtons />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto mt-16 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-teal-600 text-white text-center py-8">
            <h2 className="text-4xl font-bold">Subscribe to Our Services</h2>
            <p className="text-lg mt-2">
              Unlock exclusive features designed to support your mental health journey.
            </p>
          </div>
          <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/journal.png" // Replace with the actual image path
                alt="Daily Journal"
                className="h-40 w-40 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">Daily Journal</h3>
              <p className="text-gray-600 text-center mt-2">
                Track your daily thoughts, moods, and reflections with ease.
              </p>
              <Link
                to="/daily-journal"
                className="mt-4 bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300"
              >
                Subscribe Now
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/doctor.png" // Replace with the actual image path
                alt="Connect with Specialist"
                className="h-40 w-40 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">Connect with Specialist</h3>
              <p className="text-gray-600 text-center mt-2">
                Get personalized guidance from certified mental health professionals.
              </p>
              <Link
                to="/specialist"
                className="mt-4 bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default SubscribePage;
