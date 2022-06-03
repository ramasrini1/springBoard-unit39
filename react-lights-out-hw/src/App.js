import React from "react";
import Board from "./Boardf";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <Board nrows={2} ncols={2} chanceLightStartsOn={0.25}/>
      {/* <Board/> */}
    </div>
  );
}

export default App;
