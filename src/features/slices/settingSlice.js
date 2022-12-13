import { createSlice } from '@reduxjs/toolkit';
import { en } from 'languages';

const initialState = {
  library: en,
  applicationConfig: null,
};

const settingSlices = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.library = action.payload;
    },
  },
});

export const settingAction = settingSlices.actions;

export const selectLibrary = (state) => state.settings.library;

// Reducer
const settingReducer = settingSlices.reducer;
export default settingReducer;
