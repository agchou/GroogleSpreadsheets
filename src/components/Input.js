import React, { useState } from "react";

import { parseCoordinate } from "../lib/spreadsheet";

export default function ({ onSubmit }) {
  const [coordinate, setCoordinate] = useState("");
  const [cellValue, setCellValue] = useState("");

  // store input value for coordinate
  function handleCoordinate(e) {
    setCoordinate(e.target.value);
  }

  // store input value for cell
  function handleValue(e) {
    setCellValue(e.target.value);
  }

  function resetInputs() {
    setCoordinate("");
    setCellValue("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const { row, col } = parseCoordinate(coordinate);

        onSubmit(row, col, cellValue);
        resetInputs();
      }}
    >
      <label>
        Cell:
        <input onChange={handleCoordinate} value={coordinate} />
      </label>
      <label>
        Value:
        <input onChange={handleValue} value={cellValue} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
