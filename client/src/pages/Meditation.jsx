import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const MeditationPage = ({ currentUser }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
      <Header />
      {/* Side Buttons */}
      <SideButtons />

      {/* Main Content */}
      <main className="flex flex-col items-center mt-12">
        <h1 className="text-3xl font-bold text-gray-700 mb-12">Select Your Game</h1>

        <div className="relative flex flex-col items-center w-full">
          {/* Top Game */}
          <Link
            to="/swirl"
            className="w-40 h-40 bg-gradient-to-br from-teal-600 to-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform mb-8 relative"
          >
            <span className="text-gray-700 text-xl font-semibold">Spiral Burst</span>
            <div
              className="absolute inset-0 rounded-full border-dashed border-2 border-teal-300 animate-pulse"
              style={{ animationDuration: "2s" }}
            ></div>
          </Link>

          {/* Bottom Two Games */}
          <div className="flex space-x-16">
            <Link
              to="/switch"
              className="w-40 h-40 bg-gradient-to-br from-teal-600 to-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform relative"
            >
              <span className="text-gray-700 text-xl font-semibold">Flip Flick</span>
              <div
                className="absolute inset-0 rounded-full border-dashed border-2 border-teal-300 animate-pulse"
                style={{ animationDuration: "2.5s" }}
              ></div>
            </Link>

            <Link
              to="/break"
              className="w-40 h-40 bg-gradient-to-br from-teal-600 to-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform relative"
            >
              <span className="text-gray-700 text-xl font-semibold">Pulse Pop</span>
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

export default MeditationPage;



//changed the name : swirl to Spiral burst , switch to Flip Flick and break to Pulse Pop


