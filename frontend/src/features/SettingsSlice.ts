import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  ThemeMode,
  ThemeLayout,
  ThemeContrast,
  ThemeDirection,
} from "../app/constants";

// Settings State Type
export interface ThemeSettings {
  themeMode: ThemeMode;
  themeDirection: ThemeDirection;
  themeContrast: ThemeContrast;
  themeLayout: ThemeLayout;
  themeColorPresets: string;
  themeStretch: boolean;
}

// Initial State
const initialState: ThemeSettings = {
  themeMode: ThemeMode.LIGHT,
  themeDirection: ThemeDirection.LTR,
  themeContrast: ThemeContrast.DEFAULT,
  themeLayout: ThemeLayout.HORIZONTAL,
  themeColorPresets: "default",
  themeStretch: false,
};

// Create Slice
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleMode(state) {
      state.themeMode =
        state.themeMode === ThemeMode.LIGHT
          ? ThemeMode.DARK
          : ThemeMode.LIGHT;
    },
    setMode(state, action: PayloadAction<ThemeMode>) {
      state.themeMode = action.payload;
    },

    toggleLayout(state) {
      state.themeLayout =
        state.themeLayout === ThemeLayout.VERTICAL
          ? ThemeLayout.HORIZONTAL
          : ThemeLayout.VERTICAL;
    },
    setLayout(state, action: PayloadAction<ThemeLayout>) {
      state.themeLayout = action.payload;
    },

    toggleDirection(state) {
      state.themeDirection =
        state.themeDirection === ThemeDirection.LTR
          ? ThemeDirection.RTL
          : ThemeDirection.LTR;
    },
    setDirection(state, action: PayloadAction<ThemeDirection>) {
      state.themeDirection = action.payload;
    },
    setDirectionByLang(state, action: PayloadAction<string>) {
      state.themeDirection =
        action.payload === "ar"
          ? ThemeDirection.RTL
          : ThemeDirection.LTR;
    },

    toggleContrast(state) {
      state.themeContrast =
        state.themeContrast === ThemeContrast.DEFAULT
          ? ThemeContrast.BOLD
          : ThemeContrast.DEFAULT;
    },
    setContrast(state, action: PayloadAction<ThemeContrast>) {
      state.themeContrast = action.payload;
    },

    setColor(state, action: PayloadAction<string>) {
      state.themeColorPresets = action.payload;
    },

    toggleStretch(state) {
      state.themeStretch = !state.themeStretch;
    },

    resetSettings() {
      return { ...initialState };
    },
  },
});

// Export actions and reducer
export const {
  toggleMode,
  setMode,
  toggleLayout,
  setLayout,
  toggleDirection,
  setDirection,
  setDirectionByLang,
  toggleContrast,
  setContrast,
  setColor,
  toggleStretch,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
