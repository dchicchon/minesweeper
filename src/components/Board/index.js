import React, { useState, useEffect } from "react";
import "./board.css";

// Should be initial board and main board

const Board = (props) => {
  let [board, setBoard] = useState([]);
  let [gameOver, setGameOver] = useState(false);

  // Runs only on the first render
  useEffect(() => {
    createStartingBoard();
  }, []);

  const createStartingBoard = () => {
    console.log("STARTING BOARD");
    let initialBoard = props.boardArray.slice();
    let mainBoard = [];
    // This is where we should start doing the random mines cells
    for (let i = 0; i < initialBoard[0]; i++) {
      let row = [];
      for (let j = 0; j < initialBoard[1]; j++) {
        const random = Math.random();
        if (random < 0.2) row.push("x");
        else {
          // Check cells around it to pass in a certain value
          // Look above
          row.push("");
        }
      }
      mainBoard.push(row);
    }
    setBoard(mainBoard);
  };

  // This works
  const GameOverModal = () => {
    const playAgain = () => {
      setGameOver(false);
      // createStartingBoard();
    };
    // Show modal in the middle of everything
    return (
      <div id="gameOverModal">
        <h1>Game Over!</h1>
        <button onClick={playAgain}>Play Again?</button>
        <button onClick={() => props.setInPlay(false)}>Quit</button>
      </div>
    );
  };

  const Cell = (props) => {
    let [checked, setChecked] = useState(false);
    let [type, setType] = useState(props.type);
    // Maybe this will work? Not the most important thing to work on tbh
    // useEffect(() => {

    // }, [])

    let style = {
      background: type === "x" ? "red" : "",
    };

    let cellClick = () => {
      if (type !== "x") {
        let { x } = props;
        let { y } = props;
        let num = 0;
        // This works as long as were in the center somewhat
        // Dependent on y! Make this better later forsure bb
        if (y === 0) {
          if (board[y][x + 1] === "x") num++;
          if (board[y][x - 1] === "x") num++;
          if (board[y + 1][x] === "x") num++;
          if (board[y + 1][x - 1] === "x") num++;
          if (board[y + 1][x + 1] === "x") num++;
        } else if (y === board.length - 1) {
          if (board[y - 1][x] === "x") num++;
          if (board[y - 1][x + 1] === "x") num++;
          if (board[y - 1][x - 1] === "x") num++;
          if (board[y][x + 1] === "x") num++;
          if (board[y][x - 1] === "x") num++;
        } else {
          if (board[y - 1][x] === "x") num++;
          if (board[y - 1][x + 1] === "x") num++;
          if (board[y - 1][x - 1] === "x") num++;
          if (board[y][x + 1] === "x") num++;
          if (board[y][x - 1] === "x") num++;
          if (board[y + 1][x] === "x") num++;
          if (board[y + 1][x - 1] === "x") num++;
          if (board[y + 1][x + 1] === "x") num++;
        }

        // Check coordinates in main board
        // board[y][x] is current coord
        // board[y-1][x] is top
        // board[y-1][x+1] is top-right
        // board[y][x+1] is right
        // board[y+1][x+1] is bottom-right
        // board[y+1][x] is bottom
        setType(num);
      } else {
        // Game over!
        setGameOver(true);
      }
      setChecked(true); // this will re-render the cell
    };

    return (
      <div className="cell" onClick={cellClick} style={checked ? style : {}}>
        {checked ? type : " "}
      </div>
    );
  };

  // cell click should trigger renderBoard again? the purpose of renderboard is to
  // show the user what the board looks like so far

  const renderBoard = (board) => {
    console.log("RENDER BOARD");
    console.log(board);
    let returnBoard = [];

    // At some point here, we should randomize if a cell is a mine, number, or nothing

    // Odds 0.1 that its a mine
    // 0.7 that its a number
    // 0.2 that its nothing
    for (let i = 0; i < board.length; i++) {
      let row = [];
      for (let j = 0; j < board[i].length; j++) {
        let cell = <Cell key={`${i}${j}`} y={i} x={j} type={board[i][j]} />;
        row.push(cell);
      }

      returnBoard.push(
        <div className="row" key={i}>
          {row}
        </div>
      );
    }
    return returnBoard;
  };

  return (
    <div id="board">
      {renderBoard(board)}
      {gameOver ? <GameOverModal /> : ""}
      {/* Put grid here */}
    </div>
  );
};

export default Board;
