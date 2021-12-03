import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "../styles/game.module.css";
import { EXIT_GAME, NEW_GAME } from "../utils/actions";
import { useStateContext, useDispatchContext } from "../utils/GameContext";

const fetcher = (url) => fetch(url).then(res => res.json())

const TopScoresTable = ({ state, data }) => {

  let [showTable, setShowTable] = useState(false)
  const [name, setName] = useState('-----')

  useEffect(() => {
    if (Object.keys(data).length < 5) {
      setShowTable(true)
    } else {
      let isWinner = false;
      for (let key in data) {
        if (data[key] > state.time) {
          isWinner = true
          break;
        }
      }
      if (isWinner) {
        setShowTable(true)
      }
    }
  }, [data, state])

  const handleSubmit = async (e) => {
    // take name and time and make a post request
    e.preventDefault();
    setShowTable(false)
    const dataToSend = {
      name,
      time: state.time
    }
    fetch('/api/scores', {
      method: 'POST',
      headers: { 'Context-Type': 'application/json' },
      body: JSON.stringify(dataToSend)
    })
  }
  if (!showTable) return ''
  return (<div style={{ padding: '5px' }}>
    <h5>You&apos;ve placed in the top scores! Add your name to the list</h5>
    <div className={styles.score}>
      1.<input value={name} onChange={(e) => setName(e.target.value)} maxLength={5} />:
      <p style={{ margin: '0px' }}>{state.time}</p>
      <button className='button' onClick={handleSubmit}>Submit</button>
    </div>
  </div>)
}

const GameOverModal = () => {
  const state = useStateContext()
  const dispatch = useDispatchContext();
  const { data, error } = useSWR('/api/scores', fetcher)


  if (!state.gameStatus) {
    return "";
  }
  // Show modal in the middle of everything

  if (state.gameStatus === 1) {
    return (
      <div id={styles.gameOverModal}>
        <h1>Game Over!</h1>
        <button className="button" onClick={() => dispatch({ type: NEW_GAME })}>
          Play Again?
        </button>
        <button className="button" onClick={() => dispatch({ type: EXIT_GAME })}>
          Quit
        </button>
      </div>
    )
  }

  return (
    <div id={styles.gameOverModal}>
      <h1>You Win!</h1>
      <TopScoresTable state={state} data={data} />
      <button className="button" onClick={() => dispatch({ type: NEW_GAME })}>
        Play Again?
      </button>
      <button className="button" onClick={() => dispatch({ type: EXIT_GAME })}>
        Quit
      </button>
    </div>
  )
};
export default GameOverModal;
