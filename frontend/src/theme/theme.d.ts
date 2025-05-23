import { 
  Theme as MuiTheme, 
  PaletteColor, 
  TypeAction,
  Color, 
  TypeBackground
} from "@mui/material";

// ---------------------
// 1. Extend `PaletteColor`
// ---------------------
declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  // ---------------------
  // 2. Extend `Palette`
  // ---------------------
  interface Palette {
    gradients: Record<string, string>;
    chart: Record<string, string[]>;
    contrastThreshold?: number;
    tonalOffset?: number;
    getContrastText?: (background: string) => string;
    augmentColor?: (options: PaletteAugmentColorOptions) => PaletteColor;
  }

  interface PaletteOptions {
    gradients?: Record<string, string>;
    chart?: Record<string, string[]>;
    grey?: Palette["grey"];
    action?: Partial<Palette["action"]>;
  }

  // ---------------------
  // 3. Extend Theme
  // ---------------------

  interface CustomShadows {
    z1: string;
    z8: string;
    z12: string;
    z16: string;
    z20: string;
    z24: string;
    primary: string;
    info: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    card: string;
    dialog: string;
    dropdown: string;
  }

  interface Theme { customShadows: CustomShadows; }

  interface ThemeOptions {
    customShadows?: Theme["customShadows"];
  }

  interface TypeAction {
    selectedOpacity?: number;
    focusOpacity?: number;
    activatedOpacity?: number;
  }

  interface Color {
    0: string;
    50?: string;
    A100?: string;
    A200?: string;
    A400?: string;
    A700?: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }

  interface TypeBackground { neutral: string; }
}
