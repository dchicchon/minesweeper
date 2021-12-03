import React from "react";
import { GameProvider, useStateContext } from '../utils/GameContext';
import MainMenu from '../components/MainMenu'
import Game from '../components/Game'
import styles from '../styles/index.module.css'

const AppState = () => {
  const state = useStateContext()
  return state.inPlay ? <Game /> : <MainMenu />
}
const Minesweeper = () => {
  return (
    <div id={styles.minesweeper}>
      <GameProvider>
        <AppState />
      </GameProvider>
    </div>
  );
};

export default Minesweeper