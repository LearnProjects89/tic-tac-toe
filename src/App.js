import React, { useState } from 'react';
import Square from './components/Square';
// import Button from './components/Button';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  // const [squares, setSquares] = useState(Array(9).fill(null))
  // const [currentPlayer, setCurrentPlayer] = useState("❄")
  // const [winner, setWinner] = useState(null)

  return (
    <>
      <p><Header /></p>
      {/* <Profile /> */}
      <Square />
     
      
      {/* <Button /> */}
      <Footer />
    </>
  )
}

export default App