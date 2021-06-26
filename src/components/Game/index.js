import React, { useState } from "react";
import "./game.css";
import Board from "../Board";
import Dashboard from "../Dashboard";

// Once the game is over, do this

const Game = (props) => {
  let [gamesWon, setGamesWon] = useState(0);
  let [gamesLost, setGamesLost] = useState(0);
  let [gameNum, setGameNum] = useState(0); // anytime game num change, rerender the dashboard for timer sake
  let [gameStatus, setGameStatus] = useState(0); // 0 is active, 1 is game lost, 2 is game won

  return (
    <div id="main-game">
      <h1 className="title">Minesweeper</h1>
      <Board
        setInPlay={props.setInPlay}
        boardArray={props.boardArray}
        gamesWon={gamesWon}
        gamesLost={gamesLost}
        gameNum={gameNum}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setGameNum={setGameNum}
        setGamesWon={setGamesWon}
        setGamesLost={setGamesLost}
      />
      <Dashboard gamesWon={gamesWon} gamesLost={gamesLost} gameNum={gameNum} />
    </div>
  );
};

export default Game;
