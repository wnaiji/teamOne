import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex w-full z-20 h-screen">
        <h1 class="text-3xl text-indigo-600 font-bold text-center m-auto">RiskyQuest</h1>
      </div>
      <h2 class = "text-black text-center">Fonctionnalités</h2>
      <div className="grid grid-cols-2 gap-2 mb-8">
        <div className="bg-violet-100 w-full h-12 rounded-lg flex items-center justify-center text-indigo-700">Feature 1</div>
        <div className="bg-violet-100 w-full h-12 rounded-lg flex items-center justify-center text-indigo-700">Feature 2</div>
        <div className="bg-violet-100 w-full h-12 rounded-lg flex items-center justify-center text-indigo-700">Feature 3</div>
        <div className="bg-violet-100 w-full h-12 rounded-lg flex items-center justify-center text-indigo-700">Feature 4</div>
      </div>
        {/* Description Text */}
      <div className="text-gray-700 text-center mb-4 description-text">
        RiskyQuest est un outil interactif conçu pour vous aider à apprendre à gérer des risques face aux situations réelles de manière ludique!
      </div>
      
      {/* Image Placeholder */}
      <div className="bg-gray-300 w-full h-32 rounded-lg mb-4 flex items-center justify-center text-gray-500 image-placeholder">
        Image
      </div>
      
      {/* Presentation Text */}
      <div className="text-center text-sm text-indigo-600 font-semibold mb-4 presentation-text">
        Utilisez RiskyQuest pour éduquer dès le jeune âge vos enfants.
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg w-full">
          Tester la solution
        </button>
        <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg w-full">
          Se connecter
        </button>
        <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg w-full">
          Sans connection
        </button>
      </div>
    </>
  );
}

export default App
