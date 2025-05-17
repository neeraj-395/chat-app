import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../features/SidebarSlice';
import settingsReducer from '../features/SettingsSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    settings: settingsReducer,
  }
});

// Export typed hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
