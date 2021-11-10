import React from "react";
import styles from '../styles/index.module.css'

const MainMenu = (props) => {
    return (
        <div id={styles.main_menu}>
            <h1>Minesweeper</h1>
            <button
                className='button'
                onClick={() => props.setInPlay(true)}>
                Start Game
            </button>
        </div>
    );
};


export default MainMenu