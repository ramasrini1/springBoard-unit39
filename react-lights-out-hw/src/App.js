import React from "react";
import "./App.css";
import Board from "./Board";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <div className="Board">
        <Board />
      </div>
     
    </div>
     
  );
}

export default App;
