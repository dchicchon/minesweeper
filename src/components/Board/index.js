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
      createStartingBoard();
    };
    // Show modal in the middle of everything
    return (
      <div id="gameOverModal">
        <h1>Game Over!</h1>
        <button className="button" onClick={playAgain}>
          Play Again?
        </button>
        <button className="button" onClick={() => props.setInPlay(false)}>
          Quit
        </button>
      </div>
    );
  };

  const Cell = (props) => {
    let [checked, setChecked] = useState(false);
    let [type, setType] = useState(props.type);
    let [flag, setFlag] = useState(false);
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

        if (num === 0) {
          console.log("0 mines, check other cells");
          let cells = document.getElementsByClassName("cell");
          let boardLength = board[0].length;
          let boardHeight = board.length;
          console.log("board height:", boardHeight);
          console.log("board length:", boardLength);
          // Which cell is this one?
          let cell = board[y][x];
          // Check top
          // let top = parseInt(`${}`)
          // cells[${}`${}`]
          console.log(cells); 

          // NEED MATHHHH

          // 1 place will be row
          // 2 place will be col
          // run depth first search to do this for every cell that has a 0 in it
        }

        setType(num);
      } else {
        // Game over!
        setGameOver(true);
      }
      setChecked(true); // this will re-render the cell
    };

    let putFlagDown = (event) => {
      event.preventDefault();
      if (!checked) setFlag(!flag);
    };

    return (
      <>
        {flag ? (
          <div className="cell" onContextMenu={(e) => putFlagDown(e)}>
            ?
          </div>
        ) : (
          <div
            className="cell"
            onClick={cellClick}
            onContextMenu={(e) => putFlagDown(e)}
            style={checked ? style : {}}
          >
            {checked ? type : " "}
          </div>
        )}
      </>
    );
  };

  // cell click should trigger renderBoard again? the purpose of renderboard is to
  // show the user what the board looks like so far

  const renderBoard = (board) => {
    console.log("RENDER BOARD");
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
