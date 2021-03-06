import React from "react";
import Dashboard from "./Dashboard";
import GameOverModal from "./GameOverModal";
import styles from "../styles/game.module.css";
import Scene from "./Scene";
import reducer from "../utils/reducer";
import { useGameContext } from "../utils/GameContext";

const Game = () => {
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
