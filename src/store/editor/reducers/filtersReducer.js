import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  noFilter: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  appliedFilters: "none",
};

export const filtersReducer = createReducer(initialState, {
  addFilter: (state, action) => {
    state.appliedFilters = action.payload;
  },
});
