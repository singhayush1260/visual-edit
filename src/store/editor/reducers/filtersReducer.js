import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  showCustomFilterDialog:false,
  customFilter:"5.000  2.000  0.000  0.000  0.000 1.000  0.000  0.000  0.000  0.000 1.000  0.000  1.000  0.000  0.000 0.000  0.000  0.000  1.000  0.000",
  noFilter: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  appliedFilter: "none",
};

export const filtersReducer = createReducer(initialState, {
  addFilter: (state, action) => {
    state.appliedFilter = action.payload;
  },
  setCustomFilter:(state,action)=>{
    state.customFilter=action.payload;
  }
});
