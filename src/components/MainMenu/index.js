import React, { useState } from "react";
import "./mainmenu.css";
const MainMenu = (props) => {
  const changeSize = (index, value) => {
    let newSize = props.boardSize.slice();
    newSize[index] = parseInt(value);
    props.setBoardSize(newSize);
  };
  return (
    <div id="main-menu">
      <h1>MineSweeper</h1>
      <h3>Set Game Board</h3>
      <div style={{ float: "left", marginRight: "20px" }}>
        <label>Width</label>
        <input
          onChange={(e) => changeSize(0, e.target.value)}
          name="width"
          value={props.boardSize[0]}
        />
      </div>
      <div style={{ float: "left", marginRight: "20px" }}>
        <label>Height</label>
        <input
          name="height"
          value={props.boardSize[1]}
          onChange={(e) => changeSize(1, e.target.value)}
        />
      </div>
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
