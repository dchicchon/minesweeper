import React, { useState, useEffect } from "react";
import { pad } from "lodash";
import "./dashboard.css";

const Timer = (props) => {
  // Set to 0 on game restart
  // useEffect(() => {
  //   console.log("Game restart");
  //   setSeconds(0);
  // }, [props.gameNum]);
  // function formatTime() {
  //   return [pad(parseInt(seconds / 60)), pad(seconds % 60)].join(":");
  // }
  // return <p>Time: {seconds}</p>;
};

const Dashboard = (props) => {
  // Change anytime gameNum changes
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {}, [props.gameNum]);

  return (
    <div id="dashboard">
      {/* <Timer gameNum={props.gameNum} /> */}
      <p>Time: {seconds}</p>
      <p>Games Won: {props.gamesWon}</p>
      <p>Games Lost: {props.gamesLost} </p>
      <p>Tiles Left: 25</p>
      <p>Bombs: 20</p>
    </div>
  );
};

export default Dashboard;
