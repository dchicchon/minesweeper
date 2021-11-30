import React, { useState, useEffect } from "react";
import styles from '../styles/game.module.css'
import { useStateContext } from "../utils/GameContext";

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds >= 60 ? seconds - mins * 60 : seconds;
    const time = `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs
        }`;
    return time;
};

const Dashboard = () => {
    const state = useStateContext()
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let timer = "";
        if (state.gameStatus === 0) {
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
            {/* <p>Tiles Left: 25</p> */}
            {/* <p>Bombs: 20</p> */}
        </div>
    );
};

export default Dashboard