// filtersReducer.js
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  appliedFilters: [],
  // ...other filter properties
};

export const filtersReducer = createReducer(initialState, {
  // ...filter action cases
});