import React, { useState, useEffect } from "react";
import { pad } from "lodash";
import "./dashboard.css";
const Dashboard = (props) => {
  let [time, setTime] = useState(0);

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     console.log("Update");
  //     setTime(time + 1);
  //   }, 1000);
  // }, []);

  function formatTime() {
    return [pad(parseInt(time / 60)), pad(time % 60)].join(":");
  }

  return (
    <div id="dashboard">
      <p>Time: {formatTime()} </p>
      <p>Games Won: {props.gamesWon}</p>
      <p>Games Lost: {props.gamesLost} </p>
      <p>Tiles Left: 25</p>
      <p>Bombs: 20</p>
    </div>
  );
};

export default Dashboard;
