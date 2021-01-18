import React from "react";

import SheetHeader from "./sheet/SheetHeader";
import Cell from "./Cell";

export default function Sheet({ data, headers, showRaw }) {
  const tableContent = data.map((row, rIdx) => {
    return (
      <tr>
        <td style={styles.axis}>{rIdx + 1}</td>
        {row.map((value, cIdx) => {
          return <Cell content={value} row={rIdx} col={cIdx} raw={showRaw} />;
        })}
      </tr>
    );
  });

  return (
    <table>
      <SheetHeader headers={headers} />
      <tbody>{tableContent}</tbody>
    </table>
  );
}

const styles = {
  axis: { backgroundColor: "lightgrey" }
};
