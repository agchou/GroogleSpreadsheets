// 26 columns, 100 rows
class Spreadsheet {
  constructor(rows = 100, cols = 26) {
    const spreadsheet = Array(rows);

    for (var i = 0; i < spreadsheet.length; i++) {
      spreadsheet[i] = Array(cols);
      for (var j = 0; j < spreadsheet[i].length; j++) {
        spreadsheet[i][j] = "";
      }
    }

    this.rows = rows;
    this.cols = cols;
    this.data = spreadsheet;
  }

  getData() {
    return this.data.slice();
  }

  addCell(row, col, value) {
    this.data[row][col] = value;
  }

  getCell(row, col) {
    return this.data[row][col];
  }

  getHeaders() {
    const headers = [];
    for (var i = 0; i < this.cols; i++) {
      headers.push(String.fromCharCode(97 + i));
    }
    return headers;
  }
}

export function parseCoordinate(coorString) {
  const row = coorString.match(/\d+/)[0];
  const rawCol = coorString.match(/[a-zA-Z]*/)[0];

  const parsedCol = rawCol.toLowerCase().charCodeAt() - "a".charCodeAt();
  return { row: Number(row) - 1, col: parsedCol };
}

export function generateHeaders(numCols) {
  const headers = [];
  for (var i = 0; i < numCols; i++) {
    headers.push(String.fromCharCode(97 + i));
  }
  return headers;
}

// Initialize spreadsheet
const ss = new Spreadsheet(100, 26);
ss.addCell(0, 0, 1);
ss.addCell(0, 1, 2);
ss.addCell(1, 0, "=A1+B1");

export default ss;
