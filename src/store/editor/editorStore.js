import { configureStore } from "@reduxjs/toolkit";
import { imageAdjustmentsReducer } from "./reducers/imageAdjustmentsReducer";
import { drawingReducer } from "./reducers/drawingReducer";
import { filtersReducer } from "./reducers/filtersReducer";
import { overlaysReducer } from "./reducers/overlaysReducer";
import { transformationReducer } from "./reducers/transformationReducer";
import { imageUploadReducer } from "./reducers/imageUploadReducer";
import { undoRedoReducer } from './reducers/undoRedoReducer';
import {editorActionsReducer} from './reducers/editorActionsReducer';

const editorStore = configureStore({
  reducer: {
    imageAdjustmentsReducer,
    drawingReducer,
    filtersReducer,
    overlaysReducer,
    transformationReducer,
    imageUploadReducer,
    undoRedoReducer,
    editorActionsReducer
  },
});

export default editorStore;
