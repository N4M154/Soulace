import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const MeditationPage = ({ currentUser }) => {
  return (
    
    <div className=" min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center ">
        <Header/>
      {/* Header */}
      

      {/* Main Content */}
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-12">Select your Game</h1>

        <div className="flex space-x-8">
  {['swirl', 'switch', 'break'].map((activity) => (
    <Link
      to={`/${activity}`} // Route path
      key={activity}
      className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
    >
      <span className="text-white text-2xl font-semibold capitalize">{activity}</span>
    </Link>
  ))}
</div>
      </main>
    </div>
  );
};

export default MeditationPage;
