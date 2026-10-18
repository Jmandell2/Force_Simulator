import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NavBar from './components/NavBar'


import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    return (
        <div className="app">
            <Dashboard />
        </div>
    );
}

export default App;