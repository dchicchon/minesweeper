import React, { useState, useEffect } from "react";
import styles from "../styles/game.module.css";
import { SET_TIME } from "../utils/actions";
import { useDispatchContext, useStateContext } from "../utils/GameContext";

const formatTime = (ms) => {
  // every 10 of ms is a real second
  let seconds = Math.floor(ms / 10);
  let mill = ms >= 10 ? ms - seconds * 10 : ms;
  const mins = Math.floor(seconds / 60);
  const secs = seconds >= 60 ? seconds - mins * 60 : seconds;
  const time = `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs
    }.${mill}`;
  return time;
};

const Dashboard = () => {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let timer = "";
    if (state.gameStatus === 0) {
      setMilliseconds(0);
      timer = setInterval(() => {
        setMilliseconds((prevState) => prevState + 1);
      }, 100);
    } else if (state.gameStatus === 2) {
      dispatch({
        type: SET_TIME,
        payload: formatTime(milliseconds)
      })
    }
    return () => clearInterval(timer);
  }, [state.gameStatus]);

  return (
    <div id={styles.dashboard}>
      <p>Time: {formatTime(milliseconds)}</p>
      {/* <p>Tiles Left: 25</p> */}
      {/* <p>Bombs: 20</p> */}
    </div>
  );
};

export default Dashboard;
