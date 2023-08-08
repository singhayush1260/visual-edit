import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  crop: {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  },
  rotation: 0,
  resizing: false,
  // ...other transformation properties
};

export const transformationReducer = createReducer(initialState, {
  // ...transformation action cases
});