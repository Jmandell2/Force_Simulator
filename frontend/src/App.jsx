import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'

import './App.css'

function App() {

  // state variables
  const [count, setCount] = useState(0)

  console.log("in app");

  return (
    <div>
            <h1>Force Simulator</h1>
            <NavBar/>
            <Dashboard/>

    </div>
  )
}

export default App
