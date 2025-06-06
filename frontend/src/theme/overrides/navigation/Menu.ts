import type { Theme } from "@mui/material";

export default function Menu(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
  };
}
