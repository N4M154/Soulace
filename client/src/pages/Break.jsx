import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const Break = ({ currentUser }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
      <Header />
      {/* Side Buttons */}
      <SideButtons />

      {/* Main Content */}
      <main className="flex flex-col items-center mt-12">
        <h1 className="text-3xl font-bold text-gray-700 mb-12">Select Your Time (minutes)</h1>

        <div className="relative flex flex-col items-center w-full">
          {/* Top Time Option */}
          <Link
            to="/break/1"
            className="w-40 h-40 bg-gradient-to-br from-teal-600 to-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform mb-8 relative"
          >
            <span className="text-gray-700 text-xl font-semibold">1</span>
            <div
              className="absolute inset-0 rounded-full border-dashed border-2 border-teal-300 animate-pulse"
              style={{ animationDuration: "2s" }}
            ></div>
          </Link>

          {/* Bottom Two Time Options */}
          <div className="flex space-x-16">
            <Link
              to="/break/1"
              className="w-40 h-40 bg-gradient-to-br from-teal-600 to-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform relative"
            >
              <span className="text-gray-700 text-xl font-semibold">3</span>
              <div
                className="absolute inset-0 rounded-full border-dashed border-2 border-teal-300 animate-pulse"
                style={{ animationDuration: "2.5s" }}
              ></div>
            </Link>

            <Link
              to="/break/1"
              className="w-40 h-40 bg-gradient-to-br from-teal-600 to-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform relative"
            >
              <span className="text-gray-700 text-xl font-semibold">5</span>
              <div
                className="absolute inset-0 rounded-full border-dashed border-2 border-teal-300 animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Break;
