import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [remainingTime, setRemainingTime] = useState();

  const handelKeyDown = (event) => {
    const value = event.target.value;
    console.log(value);
    if (event.keyCode === 13) {
      if (!isNaN(value) && parseInt(value)>=0) {
        setRemainingTime(value);
      } else setRemainingTime(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime && remainingTime > 0) {
        const reduceTime = remainingTime - 1;
        setRemainingTime(reduceTime);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <div>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(e) => handelKeyDown(e)}
          />{" "}
          sec.
        </div>
      </div>
      <div id="current-time">{remainingTime}</div>
    </div>
  );
};

export default App;
