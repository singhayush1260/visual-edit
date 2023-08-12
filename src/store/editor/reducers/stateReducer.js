import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentEditType: "", // keeps track of current edit type
};

export const stateReducer = createReducer(initialState, {
  setCurrentEditType: (state, action) => {
    state.currentEditType = state.currentEditType==="crop" ? "" : action.payload;
  },
});
