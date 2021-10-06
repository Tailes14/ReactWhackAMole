import './App.css';
import { useState } from 'react';


function Headers({score, bestScore, setBestScore, time}) {
  return <>
  <div class="headers">
    <h1>High Score: {bestScore}</h1>
    <h1>Current Score: {score}</h1>
    <h1>Time Remaining: <span id="remainingTime">{time}</span></h1>
  </div>
  </>
}

function PlayGrid({}) {

  return <>
  <div class="playGrid">
    <div class="square" id="1"></div>
    <div class="square" id="2"></div>
    <div class="square" id="3"></div>
    <div class="square" id="4"></div>
    <div class="square" id="5"></div>
    <div class="square" id="6"></div>
    <div class="square" id="7"></div>
    <div class="square" id="8"></div>
    <div class="square" id="9"></div>
  </div>
  </>
}

function ScoreTable({}) {
  return <>
  </>
}

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [time, setTime] = useState(0);

  const handleStart = (() => {
    setTime(60)
  })

  return (
    <div className="App">
      <Headers score={score} bestScore={bestScore} setBestScore={setBestScore} time={time}/>
      <PlayGrid/>
      <input id="startGame" type="button" value="Start Game" onClick={handleStart}/>
      <ScoreTable/>

    </div>
  );
}

export default App;
