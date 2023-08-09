import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  selectedImage: "",
};

export const imageReducer = createReducer(initialState, {
  upload: (state, action) => {
    state.selectedImage = action.payload;
  },
});
