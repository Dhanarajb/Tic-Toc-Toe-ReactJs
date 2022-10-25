
import { useEffect, useState } from 'react';
import './App.css';
import SquareComponent from './SquareComponent';

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState,updateGameState]=useState(clearState);
  const [isXChance, updateIsXChance] =useState(false)
  
  const onSquareClicked=(index)=>{
    let string = Array.from(gameState)
    string[index] = isXChance?"X":"0";
    updateGameState(string)
    updateIsXChance(!isXChance)
  }
  const clearGame = () => {
    updateGameState(clearState)
}

  useEffect(()=>{
    const winner = checkWinner();
    if(winner){
      alert(`Ta da ! ${winner} has won the Game!`)
      updateGameState(gameState)
    }
  },[gameState])

  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

  return (
    <div className="app-header">
      <p className='heading-text'>React Tic-Tac-Toe 2022</p>
      <div className=" row jc-center">
        <SquareComponent className='b-bottom-right' state={gameState[0]} onClick={()=>onSquareClicked(0)}/>
        <SquareComponent className='b-bottom-right' state={gameState[1]} onClick={()=>onSquareClicked(1)}/>
        <SquareComponent className='b-bottom' state={gameState[2]} onClick={()=>onSquareClicked(2)}/>
      </div>
      <div className=" row jc-center">
        <SquareComponent className='b-bottom-right' state={gameState[3]} onClick={()=>onSquareClicked(3)}/>
        <SquareComponent className='b-bottom-right' state={gameState[4]} onClick={()=>onSquareClicked(4)}/>
        <SquareComponent className='b-bottom' state={gameState[5]} onClick={()=>onSquareClicked(5)}/>
      </div>
      <div className=" row jc-center">
        <SquareComponent className='b-right' state={gameState[6]} onClick={()=>onSquareClicked(6)}/>
        <SquareComponent className='b-right' state={gameState[7]} onClick={()=>onSquareClicked(7)}/>
        <SquareComponent  state={gameState[8]} onClick={()=>onSquareClicked(8)}/>
      </div>
      <button className='clear-button' onClick={clearGame}>Clear Game</button>
      <p className='fc-aqua fw-600'>The Tech Guy</p>

    </div>
  );
}

export default App;
