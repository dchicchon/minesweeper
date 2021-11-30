import React, { useState, useReducer, useEffect } from "react";
import Dashboard from "./Dashboard";
import GameOverModal from "./GameOverModal";
import styles from "../styles/game.module.css";
import Scene from "./Scene";
import reducer from "../utils/reducer";
import { useGameContext } from "../utils/GameContext";

const Game = (props) => {
  const initialState = useGameContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  }, []);
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
