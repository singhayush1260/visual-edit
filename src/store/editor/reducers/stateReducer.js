import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isCropping:false,
  isEditing:false,
  currentEditType: "", // keeps track of current edit type
};

export const stateReducer = createReducer(initialState, {
  toggleIsEditing:(state)=>{
  state.isEditing=!state.isEditing;
  },
  enableCropping:(state)=>{
    state.isCropping=true;
    },
    disableCropping:(state)=>{
      state.isCropping=false;
      },
  setCurrentEditType: (state, action) => {
    state.currentEditType = state.currentEditType==="crop" ? "" : action.payload;
  },
});
