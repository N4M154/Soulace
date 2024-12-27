import React from "react";
import Header from "../components/Header";
import { Link } from 'react-router-dom';

const Break = ({ currentUser }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-12">Select your Time (minutes)</h1>

        <div className="flex space-x-8">
  {[1, 3, 5].map((time) => (
    <Link
      to="/break/1" // Static route for all elements
      key={time}
      className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
    >
      <span className="text-white text-2xl font-semibold">{time}</span>
    </Link>
  ))}
</div>
      </main>
    </div>
  );
};

export default Break;
