import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'

import './App.css'


// TODO; fix background so it's not white when you scroll down
// TODO: scale site so it fits whatever your browser size is
// TODO: fix weird white stripes
// TODO: fix alignment for other componenets
// TODO: get fade on frames set up
// TODO; make frame component resizable

function App() {

  // state variables
  const [count, setCount] = useState(0)

  console.log("in app");

  return (
      <div style={{position: 'fixed'}}>
          <Dashboard/>
      </div>
  )
}

export default App
