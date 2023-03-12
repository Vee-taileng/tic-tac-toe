import { useState } from 'react';
import './App.css';
import Board from './Component/Board';
import ResetButton from './Component/ResetButton';
import ScoreBoard from './Component/ScoreBoard';

function App() {
  const win_contition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlay, setXPlay] = useState(true)
  const [score, setScore] = useState({xScore: 0, oScore: 0})
  const [gameOver, setGameOver] = useState(false)
  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlay === true ? "X" : "O"
      } else {
        return value
      }
    })

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let {oScore} = score;
        oScore += 1
        setScore({...score, oScore})
      } else {
        let { xScore } = score;
        xScore += 1
        setScore({...score, xScore})
      }
    }

    setBoard(updatedBoard)
    setXPlay(!xPlay)
  }

  const checkWinner = board => {
    for (let i = 0; i < win_contition.length; i++){
      const [x, y, z] = win_contition[i]

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <ScoreBoard score={score} xPlaying={xPlay} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
