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
        boardArray={[10, 10]}
      />
    );
  } else {
    return <MainMenu inPlay={props.inPlay} setInPlay={props.setInPlay} />;
  }
}

const App = () => {
  const [inPlay, setInPlay] = useState(false);

  return <AppState inPlay={inPlay} setInPlay={setInPlay} />;
};

export default App;
