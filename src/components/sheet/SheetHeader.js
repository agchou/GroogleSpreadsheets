import React from "react";

export default function SheetHeader({ headers }) {
  const columns = headers.map((col) => {
    return <td style={styles.axis}>{col}</td>;
  });

  // note: potential performance issues from unshift();
  columns.unshift(<td style={styles.axis} />);

  return <thead>{columns}</thead>;
}

const styles = {
  axis: { backgroundColor: "lightgrey" }
};
