


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
    { name: 'Inhale', duration: 4000, color: 'from-[#005057] to-[#00777E]' },
    { name: 'Hold', duration: 4000, color: 'from-[#4B3217] to-[#785230]' },
    { name: 'Exhale', duration: 4000, color: 'from-[#AE9276] to-[#005057]' },
    { name: 'Rest', duration: 2000, color: 'from-[#00777E] to-[#4B3217]' },
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
      <h1 className="text-4xl font-bold mb-4">Gratitude Diary</h1>
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
      <div className="p-6 bg-teal-10 rounded shadow-md inline-block">
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
  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [message, setMessage] = useState("Flip the cards to find matches!");

  function shuffleCards() {
    const cardValues = [1, 2, 3, 4, 5, 6, 7, 8];
    const deck = [...cardValues, ...cardValues].sort(() => Math.random() - 0.5);
    return deck.map((value, index) => ({ id: index, value, flipped: false }));
  }

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id)) return;

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      checkForMatch(newFlippedCards, updatedCards);
    }
  };

  const checkForMatch = (flipped, updatedCards) => {
    const [firstId, secondId] = flipped;
    const firstCard = updatedCards.find((card) => card.id === firstId);
    const secondCard = updatedCards.find((card) => card.id === secondId);

    if (firstCard.value === secondCard.value) {
      setMatchedCards((prev) => [...prev, firstId, secondId]);
      setMessage("Match found! Keep going!");
    } else {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            flipped.includes(card.id) ? { ...card, flipped: false } : card
          )
        );
      }, 1000);
      setMessage("No match. Try again!");
    }

    setFlippedCards([]);
  };

  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setMessage("Flip the cards to find matches!");
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Memory Game</h1>
      <p className="mb-4">{message}</p>
      <div className="grid grid-cols-4 gap-4 w-64 mx-auto">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`w-16 h-20 text-xl font-bold rounded shadow-md flex items-center justify-center
              ${card.flipped || matchedCards.includes(card.id) ? "bg-teal-500 text-white" : "bg-gray-300"}`}
          >
            {card.flipped || matchedCards.includes(card.id) ? card.value : ""}
          </button>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-5 px-9 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
      >
        Reset Game
      </button>
    </div>
  );
};



const GameSelector = () => {
  const [selectedGame, setSelectedGame] = useState("Breathing");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SideButtons />
      <div className="flex flex-col flex-grow">
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setSelectedGame("Breathing")}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Breathing Exercise
          </button>
          <button
            onClick={() => setSelectedGame("Gratitude")}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Gratitude
          </button>
          <button
            onClick={() => setSelectedGame("Memory")}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Memory Game
          </button>
          <button
            onClick={() => setSelectedGame("Affirmation")}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Affirmation
          </button>
        
        </div>
        <div className="mt-8 flex-grow">
          {selectedGame === "Breathing" && <BreathingGame />}
          {selectedGame === "Gratitude" && <GratitudeGame />}
          {selectedGame === "Affirmation" && <AffirmationGame />}
          {selectedGame === "Memory" && <MemoryGame />}
        </div>
      </div>
      {/* <footer className="mt-auto py-4 bg-gray-200 text-center">
        <p className="text-gray-600">© 2024 Soulace. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default GameSelector;