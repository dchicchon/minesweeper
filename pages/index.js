import styles from '../styles/index.module.css'
import React, { useState } from "react";
import MainMenu from '../components/MainMenu'
import Game from '../components/Game'

const AppState = () => {
  const [inPlay, setInPlay] = useState(false);
  if (inPlay) {
    return <Game setInPlay={setInPlay} />;
  } else {
    return <MainMenu setInPlay={setInPlay} />;
  }
}

const Minesweeper = () => {
  return (
    <div id={styles.minesweeper}>
      <AppState />
    </div>
  );
};

export default Minesweeper