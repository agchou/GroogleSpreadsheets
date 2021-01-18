import React, { useState } from "react";
import ss, { parseCoordinate } from "../lib/spreadsheet";

export default function Cell({ content, row, col, raw }) {
  const isFunction = content[0] === "=";

  return isFunction ? (
    <ComputedCell expression={content} raw={raw} />
  ) : (
    <td>{content}</td>
  );
}

function ComputedCell({ expression, raw = false }) {
  function evaluate(expression) {
    try {
      console.log(expression);
      const coordinates = expression.match(/[a-zA-Z][0-9]*/g);
      coordinates.forEach((coordinate) => {
        const { row, col } = parseCoordinate(coordinate);
        expression = expression.replace(coordinate, ss.getCell(row, col));
      });
      return eval(expression.slice(1));
    } catch {
      return "#VALUE";
    }
  }

  const content = raw ? expression : evaluate(expression);

  return <td>{content}</td>;
}
