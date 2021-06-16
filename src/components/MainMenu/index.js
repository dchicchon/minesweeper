import React, { useState } from "react";
import "./mainmenu.css";
const MainMenu = (props) => {
  return (
    <div id="main-menu">
      <h1>MineSweeper</h1>
      <h3>Set Game Board</h3>
      {/* Set game board size here */}
      {/* <input></input> */}
      <button
        className="button"
        onClick={() => {
          props.setInPlay(true);
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default MainMenu;
