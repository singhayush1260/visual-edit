import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  showImageUploadDialog: false,
  originalImage:null,
  originalDimension:{width:0, heigt:0},
  croppedImage: null,
  imageLink: null,
};

export const imageReducer = createReducer(initialState, {
  setOriginalDimension:(state, action)=>{
    console.log('sord',action)
    state.originalDimension=action.payload;
  }
});
