import { Mic, MicOff, Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';
import Header from "../components/Header.jsx";
import SideButtons from "../components/SideButtons";

const BreathingGame = () => {
  const [phase, setPhase] = useState('Inhale');
  const [progress, setProgress] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTTSEnabled, setIsTTSEnabled] = useState(false);

  const synth = window.speechSynthesis;

  const phases = [
    { name: 'Inhale', duration: 4000, color: 'from-cyan-400 to-blue-500' },
    { name: 'Hold', duration: 4000, color: 'from-blue-500 to-indigo-600' },
    { name: 'Exhale', duration: 4000, color: 'from-indigo-600 to-purple-700' },
    { name: 'Rest', duration: 2000, color: 'from-purple-700 to-pink-600' },
  ];

  React.useEffect(() => {
    let currentPhase = 0;
    let interval;

    const runPhases = () => {
      if (!isPlaying) return;

      let currentProgress = 0; // Initialize progress for the current phase
      setPhase(phases[currentPhase].name);
      setProgress(0);

      if (isTTSEnabled) {
        speak(phases[currentPhase].name);
      }

      interval = setInterval(() => {
        currentProgress += (100 / (phases[currentPhase].duration / 100));
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(interval);
          currentPhase = (currentPhase + 1) % phases.length;
          if (currentPhase === 0) {
            setCycles((prevCycles) => prevCycles + 1);
          }
          runPhases();
        }
      }, 100);
    };

    if (isPlaying) {
      runPhases();
    }

    return () => clearInterval(interval);
  }, [isPlaying, isTTSEnabled]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetGame = () => {
    setIsPlaying(false);
    setPhase('Inhale');
    setProgress(0);
    setCycles(0);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleTTS = () => {
    setIsTTSEnabled(!isTTSEnabled);
  };

  const speak = (text) => {
    if (synth.speaking) {
      synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
     
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Breathing Exercise</h1>
      <p className="text-lg">Completed Cycles: {cycles}</p>
      <div className="relative w-80 h-80 mx-auto my-8">
        {phases.map((p) => (
          <div
            key={p.name}
            className={`absolute top-0 left-0 w-full h-full rounded-full flex justify-center items-center shadow-lg transition-all duration-1000 ease-in-out 
              bg-gradient-to-br ${p.color} 
              ${phase === p.name ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ zIndex: phase === p.name ? 10 : 0 }}
          >
            <p className="text-2xl font-bold text-white">{p.name}</p>
          </div>
        ))}
      </div>
      <div className="w-64 mx-auto">
        <div className="h-2 bg-gray-300 rounded-full">
          <div
            className="h-2 bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={resetGame}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reset
        </button>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </button>
        <button
          onClick={toggleTTS}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          {isTTSEnabled ? <MicOff /> : <Mic />}
        </button>
      </div>
    </div>
  );
};

const GratitudeGame = () => {
  const [gratitudeList, setGratitudeList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addGratitude = () => {
    if (inputValue.trim() !== '') {
      setGratitudeList([...gratitudeList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Gratitude Journal</h1>
      <p className="mb-4">Write down things you are grateful for today:</p>
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="I am grateful for..."
          className="border border-gray-400 px-4 py-2 rounded w-80"
        />
        <button
          onClick={addGratitude}
          className="ml-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          Add
        </button>
      </div>
      <ul className="list-disc text-left inline-block">
        {gratitudeList.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const AffirmationGame = () => {
  const affirmations = [
    "I am strong and capable.",
    "I am in charge of my happiness.",
    "I believe in myself and my abilities.",
    "Every day is a fresh start.",
    "I am grateful for the good in my life.",
    "I am growing and learning every day.",
    "I am worthy of love and respect.",
    "I choose to focus on the positive.",
    "I have the power to create change.",
    "I trust myself and my decisions.",
    "I deserve to be happy and successful.",
    "I am confident in who I am.",
    "I let go of fear and embrace joy.",
    "I am surrounded by love and support.",
    "I have the strength to overcome challenges.",
    "I am at peace with my past and present.",
    "I am a magnet for positivity and success.",
    "I am resilient and can handle life's challenges.",
    "I choose to see the good in every situation.",
    "I am aligned with the energy of abundance."
];


  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0]);

  const showNextAffirmation = () => {
    const nextIndex = (affirmations.indexOf(currentAffirmation) + 1) % affirmations.length;
    setCurrentAffirmation(affirmations[nextIndex]);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Affirmation Exercise</h1>
      <p className="mb-6">Focus on these positive affirmations to boost your mood and confidence:</p>
      <div className="p-6 bg-blue-100 rounded shadow-md inline-block">
        <p className="text-lg font-semibold">{currentAffirmation}</p>
      </div>
      <button
        onClick={showNextAffirmation}
        className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
      >
        Next Affirmation
      </button>
    </div>
  );
};

const MemoryGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [message, setMessage] = useState('');

  const generateSequence = () => {
    const newSequence = [...sequence, Math.floor(Math.random() * 4)];
    setSequence(newSequence);
    setUserInput([]);
    setMessage('Follow the sequence!');
  };

  const handleUserInput = (num) => {
    const newInput = [...userInput, num];
    setUserInput(newInput);
    if (newInput.join('') === sequence.join('').slice(0, newInput.length)) {
      if (newInput.length === sequence.length) {
        setMessage('Well done! Generate the next sequence.');
      }
    } else {
      setMessage('Oops! Try again.');
      setSequence([]);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Memory Game</h1>
      <p className="mb-4">{message}</p>
      <div className="grid grid-cols-2 gap-4 w-48 mx-auto">
        {[0, 1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleUserInput(num)}
            className="w-20 h-20 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            {num}
          </button>
        ))}
      </div>
      <button
        onClick={generateSequence}
        className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
      >
        Generate Sequence
      </button>
    </div>
  );
};

const GameSelector = () => {
  const [selectedGame, setSelectedGame] = useState('Breathing');

  return (
    <div>
      <Header />
      <SideButtons /> {/* Added SideButtons for navigation */}
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-[80%] mx-auto p-4">
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setSelectedGame('Breathing')}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Breathing Game
            </button>
            <button
              onClick={() => setSelectedGame('Gratitude')}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Gratitude Game
            </button>
            <button
              onClick={() => setSelectedGame('Affirmation')}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Affirmation Game
            </button>
            <button
              onClick={() => setSelectedGame('Memory')}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Memory Game
            </button>
          </div>
          <div className="mt-8">
            {selectedGame === 'Breathing' && <BreathingGame />}
            {selectedGame === 'Gratitude' && <GratitudeGame />}
            {selectedGame === 'Affirmation' && <AffirmationGame />}
            {selectedGame === 'Memory' && <MemoryGame />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSelector;