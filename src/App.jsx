import Board from "./Board"
import ScoreBoard from "./ScoreBoard"
import ResetBtn from "./ResetBtn"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  let [board, setBoard] = useState(Array(9).fill(null));
  let [xPlay, setXPlay] = useState(true);
  let [scores, setScores] = useState({xScore: 0, oScore: 0});
  let [gameOver, setGameOver] = useState(false);
  
  let handleBoxClick = (boxIndex) => {
    let updatedBoard = board.map( (value, index) => {
      if (index == boxIndex) {
        return xPlay == true? "X": "O";
      }
      else {
        return value;
      }
    })
    let winner = checkWinner(updatedBoard); 
    
    if (winner) {
      if (winner === 'X') {
        let {xScore} = scores;
        xScore += 1;
        setScores({...scores, xScore});
      }
      else {
        let {oScore} = scores;
        oScore += 1;
        setScores({...scores, oScore});
      }
    }
    
    setBoard(updatedBoard);
    setXPlay(!xPlay);
  }
  
  let checkWinner = (board) => {
    for(let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  } 
  
  let resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }
  
  return (
      <div className="flex items-center justify-between flex-col h-screen">
        <Header />
        <div>
          <ScoreBoard scores={scores} xPlay={xPlay} />
          <Board board={board} onClick={gameOver? resetBoard: handleBoxClick} />
          <ResetBtn resetBoard={resetBoard} />
        </div>
        <Footer />
      </div>
  )
}

export default App;
