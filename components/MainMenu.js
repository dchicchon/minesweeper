import React, { useState } from "react";
import styles from '../styles/index.module.css'
import { CHANGE_IN_PLAY } from "../utils/actions";
import { useDispatchContext } from "../utils/GameContext";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())

const TopScores = ({ error, data }) => {
    let mapData = () => {
        if (Object.keys(data).length > 0) {
            let scoreList = Object.keys(data).map(key => ({ name: key, time: data[key] }))
            scoreList.sort((a, b) => {
                if (b.time < a.time) {
                    return 1
                }
                if (a.time < b.time) {
                    return -1;
                }
                return 0
            })
            return scoreList
        } else {
            return [{ name: '', time: 'No Scores Posted' }]
        }
    }
    if (error) return <div>Failed to get scores</div>
    if (!data) return <div>Fetching Scores...</div>
    return (<div>
        {mapData().map((elm, i) => (
            <p key={i}>{i + 1}.{' '}{elm.name}: {elm.time}</p>
        ))}
    </div>)
}

const SecretCommands = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [command, setCommand] = useState('')

    const executeCommand = async (e) => {
        e.preventDefault();
        await fetch('/api/commands', {
            method: 'POST',
            headers: { 'Context-Type': 'application/json' },
            body: JSON.stringify({ command })
        })
        setCommand('')
    }

    // dont show on mobile 
    if (showMenu) {
        return (
            <div className={styles.secretMenu}>
                <h4 style={{ margin: '0px' }}>Developer Menu</h4>
                <p>This is a console for me only. If you aren&apos;t Danny, get out of the menu please! -Danny</p>
                <div className={styles.secretCommand}>
                    <input value={command} onChange={(e) => setCommand(e.target.value)} placeholder='Enter Command' className={styles.secretInput} />
                    <button onClick={executeCommand} className='button'>Execute</button>
                </div>

                <button className='button' onClick={() => setShowMenu(false)}>Done</button>
            </div>
        )
    }

    return (
        <div onClick={() => setShowMenu(true)} className={styles.secret}>
            +
        </div>
    )
}

const MainMenu = () => {
    const { data, error } = useSWR('/api/scores', fetcher)
    const dispatch = useDispatchContext();

    // make a call to axios
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
            <div id={styles.scores}>
                <h2>Top Scores</h2>
                <TopScores data={data} error={error} />
                {/* list of top scores here */}
            </div>
            <SecretCommands />
        </div>
    );
};


export default MainMenu