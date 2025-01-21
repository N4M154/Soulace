// // DotsGrid.jsx
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";
// const DotsGrid = () => {
//   const [switchStates, setSwitchStates] = useState(
//     Array.from({ length: 50 }, () => false)
//   );
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [duration, setDuration] = useState(0);

//   const toggleSwitch = (index) => {
//     setSwitchStates((prevStates) => {
//       const newStates = [...prevStates];
//       newStates[index] = !newStates[index];
//       return newStates;
//     });
//   };

//   useEffect(() => {
//     if (switchStates.every((state) => state)) {
//       setEndTime(new Date());
//     }
//   }, [switchStates]);

//   const handleStart = () => {
//     setStartTime(new Date());
//     setSwitchStates(Array.from({ length: 50 }, () => false));
//     setEndTime(null);
//     setShowModal(false);
//     setDuration(0);
//   };

//   useEffect(() => {
//     if (endTime && startTime) {
//       const timeDuration = Math.floor((endTime - startTime) / 1000);
//       setDuration(timeDuration);
//       setShowModal(true);
//     }
//   }, [endTime]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center relative">
//       <Header />

//       {/* Side Buttons */}
//       <SideButtons />
//       {/* Main Content */}
//       <main className="flex flex-col items-center">
//         <h1 className="text-3xl font-bold text-gray-700 mb-8">Keep turning the switches on</h1>
//         <div className="flex items-center space-x-4 mb-8">
//           <button
//             onClick={handleStart}
//             className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-blue-600 text-sm"
//           >
//             Start
//           </button>
//           {startTime && !endTime && (
//             <div className=" text-black px-4 py-2 rounded  text-lg font-semibold">
//               Timer: {Math.floor((new Date() - startTime) / 1000)}s
//             </div>
//           )}
//         </div>
//         <div className="grid grid-cols-5 gap-4">
//           {switchStates.map((isOn, idx) => (
//             <label key={idx} className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={isOn}
//                 onChange={() => toggleSwitch(idx)}
//                 className="sr-only"
//               />
//               <div
//                 className={`w-10 h-5 rounded-full cursor-pointer transition-colors ${
//                   isOn ? "bg-teal-500" : "bg-gray-300"
//                 } relative`}
//               >
//                 <div
//                   className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
//                     isOn ? "translate-x-5" : "translate-x-0"
//                   }`}
//                 ></div>
//               </div>
//             </label>
//           ))}
//         </div>
//       </main>

//       {/* Completion Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black  bg-opacity-30 flex justify-center items-center">
//           <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-all scale-100">
//             <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
//             <p className="text-lg mb-6">
//               You have been meditating with us for {duration} seconds.
//             </p>
//             <button
//               onClick={() => setShowModal(false)}
//               className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-red-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DotsGrid;

// DotsGrid.jsx
import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const DotsGrid = () => {
  const [switchStates, setSwitchStates] = useState(
    Array.from({ length: 15 }, () => false)
  );
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [duration, setDuration] = useState(0);

  const toggleSwitch = (index) => {
    setSwitchStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  useEffect(() => {
    if (switchStates.every((state) => state)) {
      setEndTime(new Date());
    }
  }, [switchStates]);

  const handleStart = () => {
    setStartTime(new Date());
    setSwitchStates(Array.from({ length: 15 }, () => false));
    setEndTime(null);
    setShowModal(false);
    setDuration(0);
  };

  useEffect(() => {
    if (endTime && startTime) {
      const timeDuration = Math.floor((endTime - startTime) / 1000);
      setDuration(timeDuration);
      setShowModal(true);
    }
  }, [endTime]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#2c2c2c] flex flex-col items-center relative">
      <Header />

      {/* Side Buttons */}
      <SideButtons />

      {/* Main Content */}
      <main className="flex flex-col items-center">
        <h1 className="mt-20 text-3xl font-bold text-gray-700 dark:text-white mb-8">
          Keep turning the switches on
        </h1>
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={handleStart}
            className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Start
          </button>
          {startTime && !endTime && (
            <div className="text-black dark:text-white px-4 py-2 rounded text-lg font-semibold">
              Timer: {Math.floor((new Date() - startTime) / 1000)}s
            </div>
          )}
        </div>
        <div className="grid grid-cols-5 gap-4">
          {switchStates.map((isOn, idx) => (
            <label key={idx} className="flex items-center">
              <input
                type="checkbox"
                checked={isOn}
                onChange={() => toggleSwitch(idx)}
                className="sr-only"
              />
              <div
                className={`w-10 h-5 rounded-full cursor-pointer transition-colors ${
                  isOn ? "bg-teal-500" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    isOn ? "translate-x-5" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </label>
          ))}
        </div>
      </main>

      {/* How to Play Section */}
      <aside className="absolute right-20 top-60 p-4 w-64 bg-gray-50 dark:bg-transparent shadow-lg dark:shadow-black border dark:border-teal-700 rounded-lg">
        <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-4">
          How to Play
        </h2>
        <ol className="text-gray-600 dark:text-gray-300 text-sm list-decimal list-inside">
          <li>Click the "Start" button to begin the game.</li>
          <li className="mt-2">
            Toggle all the switches to the "on" position as quickly as possible.
          </li>
          <li className="mt-2">
            The timer starts as soon as you press "Start" and stops when all
            switches are on.
          </li>
          <li className="mt-2">
            Try to complete the task in the shortest time possible!
          </li>
        </ol>
      </aside>

      {/* Completion Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-all scale-100">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="text-lg mb-6">
              You have been meditating with us for {duration} seconds.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DotsGrid;
