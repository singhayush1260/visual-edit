import { configureStore } from "@reduxjs/toolkit";
import { imageAdjustmentsReducer } from "./reducers/imageAdjustmentsReducer";
import { drawingReducer } from "./reducers/drawingReducer";
import { filtersReducer } from './reducers/filtersReducer';
import { overlaysReducer } from "./reducers/overlaysReducer";
import { transformationReducer } from "./reducers/transformationReducer";
const editorStore=configureStore({
    reducer:{
      imageAdjustmentsReducer,
      drawingReducer,
      filtersReducer,
      overlaysReducer,
      transformationReducer
    }
});


export default editorStore;