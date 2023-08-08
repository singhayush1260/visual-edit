
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  drawings: [],
  brushSize: 5,
  brushColor: "#000000",
  // ...other drawing properties
};

export const drawingReducer = createReducer(initialState, {

});