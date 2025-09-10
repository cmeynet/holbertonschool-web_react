/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

// creating a RowElement Object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// insert row
const newRowID: RowID = CRUD.insertRow(row);

// update row : add age field
const updateRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
