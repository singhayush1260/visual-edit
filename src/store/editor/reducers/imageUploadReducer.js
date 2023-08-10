import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  selectedImage: "",
  croppedImage:"",
};

export const imageUploadReducer = createReducer(initialState, {
  upload: (state, action) => {
    state.selectedImage = action.payload;
  },
  setCroppedImage:(state, action)=>{
    state.croppedImage = action.payload;
  }
});
