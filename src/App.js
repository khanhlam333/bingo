import './App.css';
import Header from './Header';
import HumanBlock from './HumanBlock';
import MachineBlock from './MachineBlock';
import React from 'react';

export default function App () {
  const [start, setStart] = React.useState(false);
  const [playCount, setPlayCount] = React.useState(1);
  const [number, setNumber] = React.useState();
  const [humanArray, setHumanArray] = React.useState([]);
  const [machineArray, setMachineArray] = React.useState([]);
  const [indexHuman, setIndexHuman] = React.useState([]);
  const [indexMachine, setIndexMachine] = React.useState([]);
  const [bingo, setBingo] = React.useState();
  const [scene, setScene] = React.useState(false);

  React.useEffect(() => {
    for (let i = 0; i < 25; i++) {
      const random = Math.floor(Math.random() * 50);
      setHumanArray(prevHumanArray => {
        return [...prevHumanArray, {
          id: i + 1,
          number: random
        }]
      })
    }

    for (let i = 0; i < 25; i++) {
      const random = Math.floor(Math.random() * 50)
      setMachineArray(prevMachineArray => {
        return [...prevMachineArray, {
          id: i + 1,
          number: random
        }]
      })
    }
  }, [playCount])

  
  const humanBoard = humanArray.map (num => {
    return <HumanBlock
       id = {num.id}
       number = {num.number}
       indexHuman = {indexHuman}
       setIndexHuman = {setIndexHuman}
       numberTwo = {number}
    />
  })

  const machineBoard = machineArray.map (num => {
    return <MachineBlock
       id = {num.id}
       number = {num.number}
       indexMachine = {indexMachine}
       setIndexMachine = {setIndexMachine}
       numberTwo = {number}
    />
  })

  function nextNumber () {
    const random = Math.floor(Math.random() * 50);
    setNumber(random);
  }

  function onClickStart () {
    setStart(true);
    setPlayCount (prevPlayCount => prevPlayCount + 1);
    setNumber();
    setHumanArray([]);
    setMachineArray([]);
    setIndexHuman([]);
    setIndexMachine([]);
    setBingo();
    setScene(false)
    
  }

  const wins = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [5,10,15,20,25],
    [1,7,13,19,25],
    [5,9,13,17,21]
  ]

  

  React.useEffect(() => {
    function checkTrue(win) {
       return indexHuman.includes(win)
        
    }
    if(indexHuman.length >= 5){
      for(let i = 0; i < wins.length; i++){
      if(wins[i].every(checkTrue)) {
        setScene(true);
        setBingo(true);
      }
   }
  }
  }, [indexHuman])

  React.useEffect(() => {
    function checkTrue(win) {
      return indexMachine.includes(win)
      }
  
  if(indexMachine.length >= 5){
    for(let i = 0; i < wins.length; i++){
    if(wins[i].every(checkTrue)) {
      setScene(true);
      setBingo(false);
    }
 }
}
  }, [indexMachine])


  return(
    <div className="app">
      {!start && <Header />}
      {!start && <button onClick={onClickStart}>Start Game</button>}
      <div className="showcase">
      {start && <div className="humanBoard">
        <p className="words">The Player</p>
        <br/>
        <div className="flexBoard">{humanBoard}</div>
      </div>
      }

      {start && <div className="machineBoard">
        <p className="words">The Machine</p>
        <br/>
        <div className="flexBoard">{machineBoard}</div>
      </div>
      }

      {start && <div className="buttons">
        <div className="column">
          <button onClick={nextNumber}>Generate Number</button>
          <p style={{fontWeight: "bold"}}>Number</p>
          <p>{number}</p>
        </div>
         
        <button onClick={onClickStart}>{start ? "Play Again" : "Start"}</button>
      </div> }
      
      {scene && <div>{bingo ? "You win. Play Again" : "Machine wins. Play Again"}</div>}
      </div>
    </div>
   
  )
}
