import React, { useState } from "react";
import "./App.css";
import Light from "./light";

const trafficLights = [{ red: "yellow", yellow: "green", green: "red" }];
const colors = ["red", "yellow", "green"];

function App() {
  return (
    <div className="App">
      <div className="container">
        {colors.map((color) => {
          console.log(color);
          return <Light color={color} />;
        })}
      </div>
    </div>
  );
}

export default App;
