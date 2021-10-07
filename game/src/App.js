import './App.css';
import { useEffect, useState } from 'react';


function Headers({score, bestScore, setBestScore, time}) {
  return <>
  <div className="headers">
    <h1>High Score: {bestScore}</h1>
    <h1>Current Score: {score}</h1>
    <h1>Time Remaining: <span id="remainingTime">{time}</span></h1>
  </div>
  </>
}

function PlayGrid( {molePoisiton}) {
 
  return <>
  <div className="playGrid">
    <div className="square" id="1"></div>
    <div className="square" id="2"></div>
    <div className="square" id="3"></div>
    <div className="square" id="4"></div>
    <div className="square" id="5"></div>
    <div className="square" id="6"></div>
    <div className="square" id="7"></div>
    <div className="square" id="8"></div>
    <div className="square" id="9"></div>
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
  const [time, setTime] = useState(5);
  const [toggleStart, setToggleStart] = useState(false)
  const [molePoisiton, setMolePoisiton] = useState(0)



  useEffect(() => {
    if (toggleStart === true) {
      let gameClock = setTimeout(() => {
        setTime(time-1);
        setMolePoisiton(Math.floor(Math.random() * 9))
      }, 1000)
      if (time === 0) {
        clearInterval(gameClock)
      }
    }
  })

  return (
    <div className="App">
      <Headers score={score} bestScore={bestScore} setBestScore={setBestScore} time={time}/>
      <PlayGrid molePoisiton={molePoisiton}/>
      <input id="startGame" type="button" value="Start Game" onClick={() => setToggleStart(true)}/>
      <ScoreTable/>
    </div>
  );
}

export default App;
