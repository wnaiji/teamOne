import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="d-flex h-5/6 w-full z-20">
        <h1 class="text-black">TITRE</h1>
      </div>
      <div class="class d-flex h-screen w-full">
        <ul>
          <li>
            <div class="d-flex h-1/2 w-full bg-green-800"></div>
          </li>
          <li>
            <div class="d-flex h-1/2 w-full bg-green-800">
              <button></button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
