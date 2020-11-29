import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [remTime, setRemTime] = useState();

  const handelKeyDown = (event) => {
    const value = event.target.value;
    console.log(value);
    if (event.keyCode === 13) {
      if (!isNaN(value) && parseInt(value)>=0) {
        setRemTime(value);
      } else setRemTime(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (remTime && remTime > 0) {
        const reduceTime = remTime - 1;
        setRemTime(reduceTime);
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
      <div id="current-time">{remTime}</div>
    </div>
  );
};

export default App;
