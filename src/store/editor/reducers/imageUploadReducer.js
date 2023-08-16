import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  showImageUploadDialog: false,
  originalImage:null,
  imageName:'',
  croppedImage: null,
  imageLink: null,
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
    console.log('setCroppedImage',action.payload)
    state.croppedImage = action.payload;
  },
  setName:(state,action)=>{
    state.imageName=action.payload;
  }
});
