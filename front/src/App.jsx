import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex w-full z-20 h-screen">
        <h1 class="text-black m-auto">TITRE</h1>
      </div>
      <div class="h-screen w-screen">
        <ul class="flex text-black justify-evenly h-3/6 w-full border-radus">
          <li class="w-2/5 h-2/5 bg-green-500"><button type="button">OPT1</button></li>
          <li class="w-2/5 h-2/5 bg-green-500"><button type="button">OPT2</button></li>
        </ul>
      </div>
      <div class="h-screen w-screen">
        <ul class="flex text-black justify-evenly h-3/6 w-full">
          <li class="w-2/5 h-2/5 bg-green-500">
            <a href="/map">
              <button type="button">Age</button>
            </a>
          </li>
          <li class="w-2/5 h-2/5 bg-green-500">
            <a href="/login">
              <button type="button">Login</button>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
