/**
 * Fork for completion
 */

import React, { useState } from "react";
import "./styles.css";

import ss from "./lib/spreadsheet";

import Input from "./components/Input";
import Sheet from "./components/Sheet";

export default function App() {
  // Initialize State
  const [data, setData] = useState(ss.getData());
  const [showRaw, setShowRaw] = useState(true);

  // store input value to spreadsheet and reset state
  function submitCell(row, col, value) {
    ss.addCell(row, col, value);
    setData(ss.getData());
  }

  function toggleRaw() {
    setShowRaw(!showRaw);
  }

  return (
    <div className="App">
      <Input onSubmit={submitCell} />
      <label>
        Show raw formulas:
        <input type="checkbox" checked={showRaw} onClick={toggleRaw} />
      </label>

      <Sheet data={data} headers={ss.getHeaders()} showRaw={showRaw} />
    </div>
  );
}
