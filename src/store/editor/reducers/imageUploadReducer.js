import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  showImageUploadDialog: false,
  originalImage:null,
  croppedImage: null,
  imageLink: null,
  tempRenderedImage:null,
  savedRenderedImage:null,
};

export const imageUploadReducer = createReducer(initialState, {
  showDialog: (state) => {
    state.showImageUploadDialog = true;
  },
  hideDialog: (state) => {
    state.showImageUploadDialog = false;
  },
  setOriginalImage: (state, action) => {
    state.originalImage = action.payload;
  },
  setCroppedImage: (state, action) => {
    state.croppedImage = action.payload;
  },
  setTempRenderedImage: (state, action) => {
    console.log('inside setTempRenderedImage');
    state.tempRenderedImage = action.payload;
    console.log('state.tempRenderedImage',state.tempRenderedImage);
  },
  saveImage: (state) => {
    state.savedRenderedImage = state.tempRenderedImage;
  },
});
