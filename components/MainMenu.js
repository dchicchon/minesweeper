import React from "react";
import styles from '../styles/index.module.css'
import { CHANGE_IN_PLAY } from "../utils/actions";
import { useDispatchContext } from "../utils/GameContext";

const MainMenu = (props) => {
    const dispatch = useDispatchContext();
    return (
        <div id={styles.main_menu}>
            <h1>Minesweeper</h1>
            <button
                className='button'
                onClick={() => {
                    console.log("Click on button")
                    return dispatch({
                        type: CHANGE_IN_PLAY
                    })
                }
                }>
                Start Game
            </button>
        </div>
    );
};


export default MainMenu