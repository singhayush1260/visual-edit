import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isButtonClicked: {
    newUploadButton: false,
    saveButton: false,
    downloadButton: false,
  },
};

export const editorActionsReducer = createReducer(initialState, {
  newUpload: (state, action) => {
    state.newUploadButton = action.payload;
  },
  save: (state, action) => {
    state.isButtonClicked.saveButton = action.payload;
  },
  download: (state, action) => {
    state.isButtonClicked.downloadButton = action.payload;
  },
});
