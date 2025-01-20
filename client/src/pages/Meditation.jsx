import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const MeditationPage = ({ currentUser }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="flex min-h-screen w-full dark:bg-[#2c2c2c]">
      <SideButtons />
      <div
        id="main-content"
        className="flex-1 transition-all duration-300 min-h-screen"
        style={{
          marginLeft: isExpanded ? "260px" : "80px",
        }}
      >
        <Header />

        {/* Main Content */}
        <main className="flex flex-col items-center mt-12 mb-48">
          <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-12">
            Select Your Game
          </h1>

          <div className="relative flex flex-col items-center w-full">
            {/* Top Game */}
            <Link
              // to="/swirl"
              to="/swirl/1"
              className="w-40 h-40 bg-gradient-to-br from-teal-600 dark:from-teal-950 dark:to-teal-800 to-white rounded-full flex items-center justify-center shadow-lg dark:shadow-black cursor-pointer transform hover:scale-110 transition-transform mb-8 relative"
            >
              <span className="text-gray-700 dark:text-gray-300 text-xl font-semibold">
                Spiral Burst
              </span>
              <div
                className="absolute inset-0 rounded-full border-dashed border-2 border-teal-300 dark:border-teal-700 animate-pulse"
                style={{ animationDuration: "2s" }}
              ></div>
            </Link>

            {/* Bottom Two Games */}
            <div className="flex space-x-16">
              <Link
                // to="/switch"
                to="/switch/1"
                className="w-40 h-40 bg-gradient-to-br from-teal-600 dark:from-teal-950 dark:to-teal-800 to-white rounded-full flex items-center justify-center shadow-lg dark:shadow-black cursor-pointer transform hover:scale-110 transition-transform mb-8 relative"
              >
                <span className="text-gray-700 dark:text-gray-300 text-xl font-semibold">
                  Flip Flick
                </span>
                <div
                  className="absolute inset-0 rounded-full border-dashed border-2 border-teal-300 dark:border-teal-700 animate-pulse"
                  style={{ animationDuration: "2.5s" }}
                ></div>
              </Link>

              <Link
                // to="/break"
                to="/break/1"
                className="w-40 h-40 bg-gradient-to-br from-teal-600 dark:from-teal-950 dark:to-teal-800 to-white rounded-full flex items-center justify-center shadow-lg dark:shadow-black cursor-pointer transform hover:scale-110 transition-transform mb-8 relative"
              >
                <span className="text-gray-700 dark:text-gray-300 text-xl font-semibold">
                  Pulse Pop
                </span>
                <div
                  className="absolute inset-0 rounded-full border-dashed border-2 border-teal-300 dark:border-teal-700 animate-pulse"
                  style={{ animationDuration: "3s" }}
                ></div>
              </Link>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MeditationPage;
