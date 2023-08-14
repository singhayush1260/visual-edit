import { configureStore } from "@reduxjs/toolkit";
import { imageAdjustmentsReducer } from "./reducers/imageAdjustmentsReducer";
import { drawingReducer } from "./reducers/drawingReducer";
import { filtersReducer } from "./reducers/filtersReducer";
import { overlaysReducer } from "./reducers/overlaysReducer";
import { transformationReducer } from "./reducers/transformationReducer";
import { imageUploadReducer } from "./reducers/imageUploadReducer";
import { undoRedoReducer } from './reducers/undoRedoReducer';
import {editorActionsReducer} from './reducers/editorActionsReducer';
import { themeReducer } from "./reducers/themeReducer";
import { stateReducer } from "./reducers/stateReducer";
import { imageReducer } from "./reducers/imageReducer";

const editorStore = configureStore({
  reducer: {
    stateReducer,
    imageReducer,
    imageAdjustmentsReducer,
    drawingReducer,
    filtersReducer,
    overlaysReducer,
    transformationReducer,
    imageUploadReducer,
    undoRedoReducer,
    editorActionsReducer,
    themeReducer,

  },
});

export default editorStore;
