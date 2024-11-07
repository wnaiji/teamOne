import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex w-full z-20 h-screen">
        <h1 class="text-black m-auto">TITRE</h1>
      </div>

      <div class="h-screen w-screen">
      <ul class="flex text-black justify-evenly h-3/6 w-full">
        <li class="w-2/5 h-2/5 bg-green-500 "></li>
        <li class="w-2/5 h-2/5 bg-green-500"></li>
      </ul>
      </div>
        {/* <div className="flex flex-col h-screen w-full">
        <ul className="flex flex-col w-full">
          <li className="flex h-1/2 w-full">
            <div className="flex h-full w-full bg-green-800"></div>
          </li>
          <li className="flex h-1/2 w-full">
            <div className="flex h-full w-full bg-green-800 items-center justify-center">
              <button>Button</button>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default App
