import React from "react";
import Dashboard from "./Dashboard";
import GameOverModal from "./GameOverModal";
import styles from "../styles/game.module.css";
import Scene from "./Scene";
import { useStateContext } from "../utils/GameContext";

const Game = () => {
  // const state = useStateContext(); // this works
  return (
    <div id={styles.main_game}>
      <h1 className={styles.title}>Minesweeper</h1>
      <Dashboard />
      <Scene />
      <GameOverModal />
    </div>
  );
};

export default Game;
