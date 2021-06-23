import React, { useState } from "react";
import "./game.css";
import Board from "../Board";
import Dashboard from "../Dashboard";

// Once the game is over, do this

const Game = (props) => {
  let [gamesWon, setGamesWon] = useState(0);
  let [gamesLost, setGamesLost] = useState(0);
  return (
    <div id="main-game">
      <h1 className="title">Minesweeper</h1>
      <Board
        setInPlay={props.setInPlay}
        boardArray={props.boardArray}
        gamesWon={gamesWon}
        gamesLost={gamesLost}
        setGamesLost={setGamesWon}
        setGamesLost={setGamesLost}
      />
      <Dashboard gamesWon={gamesWon} gamesLost={gamesLost} />
    </div>
  );
};

export default Game;
