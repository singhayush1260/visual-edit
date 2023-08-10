import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  showPreview: false,
  previewCanvasRef: null,
  cropData: { aspect: 1 / 1 },
  rotation: 0,
  resizing: false,
  isButtonClicked: {
    cropButton: false,
    resizeButton: false,
    rotateButton: false,
  },
};

export const transformationReducer = createReducer(initialState, {
  setPreview: (state, action) => {
    console.log("setPreview", action.payload);
    state.showPreview = action.payload;
  },
  setPreviewCanvasRef: (state, action) => {
    console.log("cvref", action.payload);
    state.previewCanvasRef = action.payload;
  },
  crop: (state, action) => {
    state.cropData = action.payload;
  },
  rotate: (state, action) => {
    state.rotation = action.payload;
  },
  transform: (state, action) => {
    if (action.payload.buttonType === "crop") {
      state.isButtonClicked = {
        ...state.isButtonClicked,
        cropButton: action.payload.value,
      };
    } else if (action.payload.buttonType === "resize") {
      state.isButtonClicked = {
        ...state.isButtonClicked,
        resizeButton: action.payload.value,
      };
    } else {
      console.log("inside rot", ac);
      state.isButtonClicked = {
        ...state.isButtonClicked,
        rotateButton: action.payload.value,
      };
    }
  },
});
