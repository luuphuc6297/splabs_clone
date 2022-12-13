import { combineReducers, configureStore } from '@reduxjs/toolkit';
import settingReducer from 'features/slices/settingSlice';

const rootReducer = combineReducers({
  settings: settingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
