import React, { useState, useEffect, useReducer } from "react";
import styles from "../styles/game.module.css";

import { useGameContext } from "../utils/GameContext";
import reducer from "../utils/reducer";

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds >= 60 ? seconds - mins * 60 : seconds;
  const time = `${mins < 10 ? "0" + mins : mins}:${
    secs < 10 ? "0" + secs : secs
  }`;
  return time;
};

const Dashboard = (props) => {
  // Change anytime gameNum changes
  const [seconds, setSeconds] = useState(0);
  const initialState = useGameContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer = "";
    if (props.gameStatus === 0) {
      setSeconds(0);
      timer = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state.gameStatus]);

  return (
    <div id={styles.dashboard}>
      <p>Time: {formatTime(seconds)}</p>
      <p>Games Won: {state.gamesWon}</p>
      <p>Games Lost: {state.gamesLost} </p>
      <p>Lives left: </p>
      <div id={styles.lifeContainer}>
        {[...Array(state.lives)].map((e, i) => (
          <div className={styles.life} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
