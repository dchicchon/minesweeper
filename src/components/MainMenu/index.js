import React, { useState } from "react";

const MainMenu = (props) => {
  return (
    <div>
      <h1>Main menu</h1>
      <h3>Set Game Board</h3>
      {/* Set game board size here */}
      {/* <input></input> */}
      <button
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
