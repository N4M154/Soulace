import React from "react";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";
const Swirl = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
     
      <Header />
      {/* Side Buttons */}
      <SideButtons />
      {/* Main Content */}
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Swirl Visualization</h1>
        <div className="w-96 h-96 flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full "
          >
            <path
              d="
                M100,100 
                m-90,0 
                a90,90 0 1,1 180,0 
                a90,90 0 1,1 -180,0 
                M100,100 
                m-80,0 
                a80,80 0 1,1 160,0 
                a80,80 0 1,1 -160,0
                M100,100 
                m-70,0 
                a70,70 0 1,1 140,0 
                a70,70 0 1,1 -140,0
                M100,100 
                m-60,0 
                a60,60 0 1,1 120,0 
                a60,60 0 1,1 -120,0
                M100,100 
                m-50,0 
                a50,50 0 1,1 100,0 
                a50,50 0 1,1 -100,0
                M100,100 
                m-40,0 
                a40,40 0 1,1 80,0 
                a40,40 0 1,1 -80,0
                M100,100 
                m-30,0 
                a30,30 0 1,1 60,0 
                a30,30 0 1,1 -60,0
                M100,100 
                m-20,0 
                a20,20 0 1,1 40,0 
                a20,20 0 1,1 -40,0
                M100,100 
                m-10,0 
                a10,10 0 1,1 20,0 
                a10,10 0 1,1 -20,0
              "
              fill="none"
              stroke="teal"
              strokeWidth="2"
            />
          </svg>
        </div>
      </main>
    </div>
  );
};

export default Swirl;
