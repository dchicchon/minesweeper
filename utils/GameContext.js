import React, { useContext, createContext, useState } from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const gamesWon = 0;
  const gamesLost = 0;
  const gameNumber = 0;
  const gameStatus = 0;
  const lives = 3;

  //   let [gamesWon, setGamesWon] = useState(0);
  //   let [gamesLost, setGamesLost] = useState(0);
  //   let [gameNum, setGameNum] = useState(0); // anytime game num change, rerender the dashboard for timer sake
  //   let [gameStatus, setGameStatus] = useState(0); // 0 is active, 1 is game lost, 2 is game won
  //   let [lives, setLives] = useState(3);

  return (
    <GameContext.Provider
      value={{ lives, gamesWon, gamesLost, gameStatus, lives, gameNumber }}
    >
      {children}
    </GameContext.Provider>
  );
};
