// ColorGrid.jsx
import React from "react";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";
const ColorGrid = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
      <Header />
{/* Side Buttons */}
<SideButtons />
      {/* Main Content */}
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-12">Colorful Circles</h1>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 15 }).map((_, idx) => (
            <div
              key={idx}
              className={`w-16 h-16 rounded-full ${
                idx === 9
                  ? "bg-pink-300"
                  : idx % 3 === 0
                  ? "bg-green-200"
                  : "bg-orange-200"
              }`}
            ></div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ColorGrid;
