import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  zoomLevel: 1,
  brightness: 100,
  contrast: 100,
  saturation: 100,
  exposure: 0,
  hue: 0,
  sharpness: 0,
  vignette: 0,
  temperature: 6500,
};

export const imageAdjustmentsReducer = createReducer(initialState, {
  defaultZoom: (state) => {
    state.zoomLevel = 1;
  },
  zoomIn: (state) => {
    state.zoomLevel += 0.1;
  },
  zoomOut: (state) => {
    state.zoomLevel -= 0.1;
  },
  adjustBrightness: (state, action) => {
    state.brightness = action.payload;
  },
  adjustContrast: (state, action) => {
    state.contrast = action.payload;
  },
  adjustSaturation: (state, action) => {
    state.saturation = action.payload;
  },
  adjustExposure: (state, action) => {
    state.exposure = action.payload;
  },
  adjustHue: (state, action) => {
    state.hue = action.payload;
  },
  adjustSharpness: (state, action) => {
    state.sharpness = action.payload;
  },
  adjustVignette: (state, action) => {
    state.vignette = action.payload;
  },
  adjustTemperature: (state, action) => {
    state.temperature = action.payload;
  },
});






