import React, { useState, useEffect } from "react";
import "./board.css";

// Should be initial board and main board

const Cell = (props) => {
  let [checked, setChecked] = useState(false);
  let [type, setType] = useState(props.type);
  let [flag, setFlag] = useState(false);

  // When the game num changes, go ahead and rerender this cell

  // Whats happening is that this is happening before we make a new board.
  // bad

  useEffect(() => {
    console.log("Game over, rerender cell");
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
    else if (type === "x") props.endGame(false);
    // if cell is 'x', game is over!
    else {
      // Check board to see if there are any 'o's left

      // x is column, y is row
      let { x, y } = props;
      let mineNum = 0;

      // 0   1   2
      // o | o | o  0
      // x | o | x  1
      // o | x | o  2
      // Current Coord: (1,1)
      // use our cells current coordinate and add it to
      // our for loops to check the surrounding cells

      for (let row = -1; row <= 1; row++) {
        for (let col = -1; col <= 1; col++) {
          if (row === 0 && col === 0) continue; // dont check current cell
          if (y + row < 0 || y + row >= props.board.length) continue; // dont check y out of bounds
          if (x + col < 0 || x + col >= props.board[0].length) continue; // dont check x out of bounds
          let thisCell = props.board[y + row][x + col]; // get the value at this coordinate
          if (thisCell === "x") mineNum++; // if this cell has a mine, add to num
        }
      }

      // This works as long as were in the center somewhat
      // Dependent on y! Make this better later forsure bb

      // only do this if number of mines is 0
      if (mineNum === 0) {
        // we only click since all other cells not be mines
        let cells = document.getElementsByClassName("cell");
        // Should we split up cells based on our board array?
        // Check surrounding cells

        // what is x and y?
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
          }
        }
      }

      let copyBoard = props.board.slice(); // get our current board
      copyBoard[y][x] = mineNum;
      props.setBoard(copyBoard); // maybe this is bad too

      // You win!
      if (props.checkWin(copyBoard)) {
        props.endGame(true);
      }

      setType(mineNum);
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
  function playAgain() {
    console.log("Play again");
    props.setGameNum(props.gameNum + 1);
    props.setGameStatus(0);
  }

  // Show modal in the middle of everything
  return (
    <div id="gameOverModal">
      {props.gameStatus === 2 ? <h1>You Win!</h1> : <h1>Game Over!</h1>}
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

  // Runs anytime the game number changes
  useEffect(() => {
    console.log("Create starting board");
    createStartingBoard();
  }, [props.gameNum]);

  const createStartingBoard = () => {
    let mainBoard = [];
    // This is where we should start doing the random mines cells
    for (let i = 0; i < props.boardArray[0]; i++) {
      let row = [];
      for (let j = 0; j < props.boardArray[1]; j++) {
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
    console.log("New board");
    console.log(mainBoard);
    setBoard(mainBoard);
  };

  const endGame = (didWin) => {
    if (didWin) {
      props.setGamesWon(props.gamesWon + 1);
      props.setGameStatus(2);
    } else {
      props.setGameStatus(1);
      props.setGamesLost(props.gamesLost + 1);
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

  // I think that this is not running once the game ends
  const renderBoard = (board) => {
    let returnBoard = [];

    console.log("Render board");

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
            gameNum={props.gameNum}
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
      {props.gameStatus === 0 ? (
        ""
      ) : (
        <GameOverModal
          createStartingBoard={createStartingBoard}
          gameNum={props.gameNum}
          setGameNum={props.setGameNum}
          gameStatus={props.gameStatus}
          setGameStatus={props.setGameStatus}
          setInPlay={props.setInPlay}
        />
      )}
    </div>
  );
};

export default Board;
