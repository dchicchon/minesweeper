import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";

function AppState(props) {
  const isPlaying = props.inPlay;
  if (isPlaying) {
    return <Game setInPlay={props.setInPlay} />;
  } else {
    return <MainMenu setInPlay={props.setInPlay} />;
  }
}

const App = () => {
  const [inPlay, setInPlay] = useState(false);

  return <AppState inPlay={inPlay} setInPlay={setInPlay} />;
};

export default App;
