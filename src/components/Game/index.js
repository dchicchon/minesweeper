import React from "react";
import "./game.css";
import Board from "../Board";
import Dashboard from "../Dashboard";

// Once the game is over, do this

const Game = (props) => {
  return (
    <div id="main-game">
      <h1 className="title">Minesweeper</h1>
      <Board setInPlay={props.setInPlay} boardArray={props.boardArray} />
      {/* <Dashboard /> */}
    </div>
  );
};

export default Game;
