import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cropData: { aspect: 16 / 9 },
  rotation: 0,
  resizing: false,
};

export const transformationReducer = createReducer(initialState, {
  crop: (state, action) => {
    state.cropData = action.payload
  },
});