import React, { useState, useEffect, useRef } from "react";
import "./board.css";

// Should be initial board and main board

const Cell = (props) => {
  let [checked, setChecked] = useState(false);
  let [type, setType] = useState(props.type);
  let [flag, setFlag] = useState(false);

  // Do this when gameOverState changes
  useEffect(() => {
    setType(props.type);
    setChecked(false);
    setFlag(false);
  }, [props.gameNum]);

  let style = {
    background: type === "x" ? "red" : "",
  };

  // THE MOST IMPORTANT FUNCTION IN THIS SCRIPT
  let cellClick = () => {
    if (checked) return;
    if (type === "x") props.endGame(false);
    else {
      // Check board to see if there are any 'o's left
      let { x } = props;
      let { y } = props;
      let num = 0;

      // This isnt working I think
      for (let row = -1; row < 2; row++) {
        for (let col = -1; col < 2; col++) {
          if (row === 0 && col === 0) continue;
          let validRow = false;
          let validCol = false;
          let checkRow = 0;
          let checkCol = 0;
          if (y + row >= 0 && y + row < props.board.length) {
            validRow = true;
            checkRow = y + row;
          } else {
            continue;
          }
          if (x + col >= 0 && x + col < props.board[0].length) {
            validCol = true;
            checkCol = x + col;
          } else {
            continue;
          }
          if (validRow && validCol) {
            let validCell = props.board[checkRow][checkCol];
            if (validCell === "x") num++;
          }
        }
      }
      // This works as long as were in the center somewhat
      // Dependent on y! Make this better later forsure bb

      if (num === 0) {
        // we only click since all other cells not be mines
        let cells = document.getElementsByClassName("cell");
        // Check surrounding cells
        for (let j = -1; j < 2; j++) {
          for (let i = -1; i < 2; i++) {
            if (j === 0 && i === 0) continue; // dont check the current cell dummy
            if (y + j < 0 || y + j >= props.board.length) continue;
            if (x + i < 0 || x + i >= props.board[0].length) continue;
            let index = parseInt(`${y + j}${x + i}`);
            if (index < 0 || index >= cells.length) continue;
            let surroundingCell = cells[parseInt(`${y + j}${x + i}`)]; // we have the cell, now get reference from board
            // Later on, implement a function that makes this a timed event
            let time = Math.floor(Math.random() * 150) + 100;
            function checkSurroundingCell() {
              surroundingCell.click();
            }
            setTimeout(checkSurroundingCell, time);
            // surroundingCell.click();
          }
        }
      }

      let copyBoard = props.board.slice();
      copyBoard[y][x] = num;
      props.setBoard(copyBoard);

      // You win!
      if (props.checkWin(copyBoard)) {
        props.endGame(true);
      }

      setType(num);
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

const GameOverModal = (props) => {
  const playAgain = () => {
    props.setGameNum(props.gameNum + 1);
    props.createStartingBoard();
    props.setGameOverModal("n");
  };
  // Show modal in the middle of everything
  return (
    <div id="gameOverModal">
      {props.context === "win" ? <h1>You Win!</h1> : <h1>Game Over!</h1>}
      <button className="button" onClick={playAgain}>
        Play Again?
      </button>
      <button className="button" onClick={() => props.setInPlay(false)}>
        Quit
      </button>
    </div>
  );
};

const Board = (props) => {
  let [board, setBoard] = useState([]);
  let [gameNum, setGameNum] = useState(1);
  let [showGameOverModal, setGameOverModal] = useState("n");

  // Runs only on the first render
  useEffect(() => {
    createStartingBoard();
  }, []);

  const createStartingBoard = () => {
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
          row.push("o");
        }
      }
      mainBoard.push(row);
    }
    setBoard(mainBoard);
  };

  const endGame = (didWin) => {
    if (didWin) {
      props.setGamesWon(props.gamesWon + 1);
      setGameOverModal("win");
    } else {
      props.setGamesLost(props.gamesLost + 1);
      setGameOverModal("lose");
    }
  };

  const checkWin = (checkBoard) => {
    // Check here if won
    for (let o = 0; o < checkBoard.length; o++) {
      for (let p = 0; p < checkBoard[0].length; p++) {
        let cellToCheck = checkBoard[o][p];
        if (cellToCheck === "o") return false;
      }
    }
    return true;
  };

  // Make a check win function

  // This works

  // cell click should trigger renderBoard again? the purpose of renderboard is to
  // show the user what the board looks like so far

  const renderBoard = (board) => {
    let returnBoard = [];

    // At some point here, we should randomize if a cell is a mine, number, or nothing

    // Odds 0.1 that its a mine
    // 0.7 that its a number
    // 0.2 that its nothing
    for (let i = 0; i < board.length; i++) {
      let row = [];
      for (let j = 0; j < board[i].length; j++) {
        let cell = (
          <Cell
            key={`${i}${j}`}
            y={i}
            x={j}
            board={board}
            endGame={endGame}
            checkWin={checkWin}
            setBoard={setBoard}
            gameNum={gameNum}
            type={board[i][j]}
          />
        );
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
      {showGameOverModal === "n" ? (
        ""
      ) : (
        <GameOverModal
          setGameNum={setGameNum}
          gameNum={gameNum}
          setGameOverModal={setGameOverModal}
          createStartingBoard={createStartingBoard}
          context={showGameOverModal}
          setInPlay={props.setInPlay}
        />
      )}
    </div>
  );
};

export default Board;
