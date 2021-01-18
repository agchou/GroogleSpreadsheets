import React, { Profiler } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Profiler
      onRender={(id, phase, actualTime, baseTime, startTime, commitTime) => {
        console.log(`actualTime: ${actualTime}`);
      }}
    >
      <App />
    </Profiler>
  </React.StrictMode>,
  rootElement
);
