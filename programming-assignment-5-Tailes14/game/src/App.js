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


function PlayGrid( {molePoisiton, setScore}) {
  let assignMole = [
    false, false, false, false, false, false, false, false, false
  ]


  assignMole[molePoisiton] = true
  return <>
  <div className="playGrid">
    <div className={assignMole[0] ? 'square mole' : 'square'} id="1"></div>
    <div className={assignMole[1] ? 'square mole' : 'square'} id="2" ></div>
    <div className={assignMole[2] ? 'square mole' : 'square'} id="3"></div>
    <div className={assignMole[3] ? 'square mole' : 'square'} id="4"></div>
    <div className={assignMole[4] ? 'square mole' : 'square'} id="5"></div>
    <div className={assignMole[5] ? 'square mole' : 'square'} id="6"></div>
    <div className={assignMole[6] ? 'square mole' : 'square'} id="7"></div>
    <div className={assignMole[7] ? 'square mole' : 'square'} id="8"></div>
    <div className={assignMole[8] ? 'square mole' : 'square'} id="9"></div>
  </div>
  </>
}

function ScoreTable({}) {
  return <>
  </>
}

let gameClock

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [time, setTime] = useState(10);
  const [toggleStart, setToggleStart] = useState(false)
  const [molePoisiton, setMolePoisiton] = useState(0)
  const [id, setId] = useState(null)

  const square = document.querySelectorAll('.square')

  square.forEach((clickID) => {
    clickID.addEventListener('mouseup', () => {
      console.log(clickID.id)
      console.log(molePoisiton+1)
      if (Number(clickID.id )=== Number(molePoisiton+1)) {
        setScore(score+1)
      }
    })
  })
  
  useEffect(() => {
    //let gameClock
    if (toggleStart) {
      /*
      if (gameClock) {
        clearInterval(gameClock)
      }
      */
     if (id) return;
      gameClock = setInterval(() => {
        setTime(time => time-1);
        setMolePoisiton(Math.floor(Math.random() * 9))
      }, 1000)
      setId(gameClock)
      console.log(gameClock)
      //setToggleStart(false)
    } else {
      //setId(null)
      clearInterval(id)
    }
    /*
    console.log(Number(time), 0)
    if (Number(time) === 0) {
      console.log("entered")
      clearInterval(gameClock)
      console.log(gameClock)
      setToggleStart(false)
      //console.log(toggleStart)
      
    }
    */
  }, [toggleStart, time, id])

  return (
    <div className="App">
      <Headers score={score} bestScore={bestScore} setBestScore={setBestScore} time={time}/>
      <PlayGrid molePoisiton={molePoisiton} setScore={setScore}/>
      <input id="startGame" type="button" value="Start Game" onClick={() => setToggleStart(true)}/>
      <ScoreTable/>
    </div>
  );
}

export default App;
