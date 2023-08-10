import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  history: {crop:[],resize:[]},
};

export const undoRedoReducer = createReducer(initialState, {
  addCropHistory: (state, action) => {
    state.history.crop.push(action.payload);
  },
  undo: (state, action) => {
    state;
  },
  redo: (state, action) => {
    state;
  },
});
