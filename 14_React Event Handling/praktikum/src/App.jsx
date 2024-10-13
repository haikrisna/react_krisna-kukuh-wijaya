import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Function to handle button click and log random number
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log("Random Number:", randomNumber);
  };

}

export default App;
