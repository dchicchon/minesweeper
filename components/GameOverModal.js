import React from "react";
import styles from "../styles/game.module.css";
import { EXIT_GAME, NEW_GAME } from "../utils/actions";
import { useStateContext, useDispatchContext } from "../utils/GameContext";

const GameOverModal = (props) => {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  if (!state.gameStatus) {
    return "";
  }
  // Show modal in the middle of everything
  return (
    <div id={styles.gameOverModal}>
      {state.gameStatus === 2 ? <h1>You Win!</h1> : <h1>Game Over!</h1>}
      <button className="button" onClick={() => dispatch({ type: NEW_GAME })}>
        Play Again?
      </button>
      <button className="button" onClick={() => dispatch({ type: EXIT_GAME })}>
        Quit
      </button>
    </div>
  );
};
export default GameOverModal;
