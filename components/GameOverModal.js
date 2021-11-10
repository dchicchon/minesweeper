import React from "react";
import styles from '../styles/game.module.css'

const GameOverModal = (props) => {
    const playAgain = () => {
        props.setGameNum((prevState) => prevState + 1);
        props.setGameStatus(0);
    };

    // Show modal in the middle of everything
    return (
        <div id={styles.gameOverModal}>
            {props.gameStatus === 2 ? <h1>You Win!</h1> : <h1>Game Over!</h1>}
            <button className="button" onClick={playAgain}>
                Play Again?
            </button>
            <button className="button" onClick={() => props.setInPlay(false)}>
                Quit
            </button>
        </div>
    );
};
export default GameOverModal