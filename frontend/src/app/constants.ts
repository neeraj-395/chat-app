export const ThemeMode = {
    LIGHT: "light",
    DARK: "dark",
} as const;
export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];

export const ThemeLayout = {
    VERTICAL: "vertical",
    HORIZONTAL: "horizontal",
} as const;
export type ThemeLayout = (typeof ThemeLayout)[keyof typeof ThemeLayout];

export const ThemeDirection = {
    LTR: "ltr",
    RTL: "rtl",
} as const;
export type ThemeDirection = (typeof ThemeDirection)[keyof typeof ThemeDirection];

export const ThemeContrast = {
    DEFAULT: "default",
    BOLD: "bold",
} as const;
export type ThemeContrast = (typeof ThemeContrast)[keyof typeof ThemeContrast];

export const SidebarType = {
    CONTACT: "contact",
    STARRED: "starred",
    SHARED: "shared",
} as const;


export type SidebarType = (typeof SidebarType)[keyof typeof SidebarType];
