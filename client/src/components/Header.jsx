import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className="bg-white text-teal-700 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center ml-10">
          <Link to="/home">
            <img src="/Logo.png" width={100} height={80} alt="Logo" />
          </Link>
        </div>
        {/* Navbar */}
<nav className="hidden md:flex space-x-8 mr-10">
  <div className="relative">
    <button
      onClick={handleServicesDropdownToggle}
      className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
    >
      Services
    </button>
    {isServicesDropdownOpen && (
      <div className="absolute mt-2 bg-white border border-teal-300 rounded shadow-lg w-[450px]">
        <ul className="py-4 grid grid-cols-2 gap-x-1">
          <li>
            <Link
              to="/breathinggame"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Relaxation Games
            </Link>
          </li>
          <li>
            <Link
              to="/meditation"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Meditation
            </Link>
          </li>
          <li>
            <Link
              to="/jokeoftheday"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Joke of the Day
            </Link>
          </li>
          <li>
            <Link
              to="/musicrecommendation"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Music Recommendation
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Chatbot
            </Link>
          </li>
          <li>
            <Link
              to="/Mood-Tracker"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Mood-Sleep Tracker
            </Link>
          </li>
          <li>
            <Link
              to="/daily-journal"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Daily Journal
            </Link>
          </li>
          <li>
            <Link
              to="/specialist"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Need a specialist?
            </Link>
          </li>
          <li>
            <Link
              to="/subscribe"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Subscribe
            </Link>
          </li>
          <li>
            <Link
              to="/contents"
              className="block px-4 py-2 text-teal-700 hover:bg-teal-100"
            >
              Contents
            </Link>
          </li>
        </ul>
      </div>
    )}
  </div>

  {currentUser && (
    <Link
      to="/community"
      className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
    >
      Community
    </Link>
  )}
  {currentUser && (
    <Link
      to="/analytics"
      className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
    >
      Analytics
    </Link>
  )}
  {currentUser && (
    <Link
      to="/about"
      className="text-teal-700 hover:text-teal-500 transition duration-300 font-semibold mt-2"
    >
      About
    </Link>
  )}

  <Link to="/profile" className="flex items-center space-x-2 font-bold">
    {currentUser ? (
      <img
        src={currentUser.profilePicture}
        alt="profile"
        className="h-10 w-10 rounded-full object-cover"
      />
    ) : (
      <span className="text-teal-700 hover:text-teal-500 transition duration-300">
        Sign In
      </span>
    )}
  </Link>
</nav>

      </div>
    </header>
  );
}
