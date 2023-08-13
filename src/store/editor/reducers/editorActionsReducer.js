import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isButtonClicked: {
    saveButton: false,
    downloadButton: false,
  },
};

export const editorActionsReducer = createReducer(initialState, {
  save: (state, action) => {
    state.isButtonClicked.saveButton = action.payload;
  },
  download: (state, action) => {
    state.isButtonClicked.downloadButton = action.payload;
  },
});
