import React, { useEffect, useState } from "react";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";

function AppState(props) {
  const isPlaying = props.inPlay;
  if (isPlaying) {
    return (
      <Game
        inPlay={props.inPlay}
        setInPlay={props.setInPlay}
        boardArray={props.boardSize}
      />
    );
  } else {
    return (
      <MainMenu
        inPlay={props.inPlay}
        setInPlay={props.setInPlay}
        boardSize={props.boardSize}
        setBoardSize={props.setBoardSize}
      />
    );
  }
}

const App = () => {
  const [inPlay, setInPlay] = useState(false);
  const [boardSize, setBoardSize] = useState([10, 10]);

  return (
    <AppState
      inPlay={inPlay}
      setInPlay={setInPlay}
      boardSize={boardSize}
      setBoardSize={setBoardSize}
    />
  );
};

export default App;
