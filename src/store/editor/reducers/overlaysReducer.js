import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  textOverlays: [],
  stickerOverlays: [],
  shapeOverlays: [],
 
};

export const overlaysReducer = createReducer(initialState, {

});