import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  showDraggableDialogBox:false,
  isMoving:false,
  isCropping: false,
  isZooming:false,
  showRotationSlider: false,
  isResizing:false,
  isDrawing:false,
  addText:false,
  isEditing: false,
  showCustomFilterDialog:false,
  currentEditType: "", 
  renderedImage:null

};

export const stateReducer = createReducer(initialState, {
    setEditingState: (state, action) => {
    console.log('action.payload',action.payload)
    const editType=action.payload;
    state.isMoving = editType === "move" ? !state.isMoving : false;
    state.isCropping = editType === "crop" ? !state.isCropping : false;
    state.isZooming = editType === "zoom" ? !state.isZooming : false;
    state.showRotationSlider = editType === "rotate" ? !state.showRotationSlider : false;
    state.isResizing = editType === "resize" ? !state.isResizing : false;
    state.isDrawing = editType === "draw" ? !state.isDrawing : false;
    state.addText = editType === "text" ? !state.addText : false;
    state.currentEditType = editType;
  },
  toggleIsEditing: (state) => {
    state.isEditing = !state.isEditing;
  },
  toggleDraggableDialogBoxVisibility: (state) => {
    state.showDraggableDialogBox = !state.showDraggableDialogBox;
  },
  enableCropping: (state) => {
    state.isCropping = true;
  },
  disableCropping: (state) => {
    state.isCropping = false;
  },
  enableRotation: (state) => {
    state.showRotationSlider = !state.showRotationSlider;
  },
  disableRotation: (state) => {
    state.showRotationSlider = false;
  },
  enableZoom: (state) => {
    state.isZooming = !state.isZooming;
  },
  disableZoom: (state) => {
    state.isZooming = false;
  },
  enableResizing: (state) => {
    state.isResizing = !state.isResizing;
  },
  disableResizing: (state) => {
    state.isResizing = false;
  },
  toggleCustomFilterDialogVisibility:(state)=>{
    state.showCustomFilterDialog=!state.showCustomFilterDialog;
  },
  setCurrentEditType: (state, action) => {
    state.currentEditType =
      state.currentEditType === "crop" ? "" : action.payload;
  },
  setRenderedImage:(state, action)=>{
    state.renderedImage=action.payload;
  }
});
