import { createContext } from "react";

import Spreadsheet from "../lib/spreadsheet";

// Initialize spreadsheet
const ss = new Spreadsheet(5, 26);
ss.addCell(0, 0, 1);
ss.addCell(0, 1, 2);
ss.addCell(1, 0, "=A12+B1");

export default createContext(ss);
