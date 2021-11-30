import React, { useEffect, useReducer } from "react";
import styles from "../styles/game.module.css";

import { EXIT_GAME, NEW_GAME } from "../utils/actions";
import reducer from "../utils/reducer";
import { useGameContext } from "../utils/GameContext";

// a file that has a component
// that can pass data to our child components

const GameOverModal = (props) => {
  const initialState = useGameContext();
  const [state, dispatch] = useReducer(reducer, initialState);


  if (!state.gameStatus) {
    return "";
  }
  // Show modal in the middle of everything
  return (
    <div id={styles.gameOverModal}>
      {state.gameStatus === 2 ? <h1>You Win!</h1> : <h1>Game Over!</h1>}
      <button
        className="button"
        onClick={() => {
          dispatch({
            type: NEW_GAME,
          });
        }}
      >
        Play Again?
      </button>
      <button
        className="button"
        onClick={() => {
          dispatch({
            type: EXIT_GAME,
          });
          props.setInPlay(false);
        }}
      >
        Quit
      </button>
    </div>
  );
};
export default GameOverModal;
