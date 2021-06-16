import React from "react";
import Board from "../Board";
import Dashboard from "../Dashboard";

// Once the game is over, do this

const Game = (props) => {
  return (
    <div>
      <h1>Minesweeper</h1>
      <Board setInPlay={props.setInPlay} boardArray={props.boardArray} />
      {/* <Dashboard /> */}
    </div>
  );
};

export default Game;
