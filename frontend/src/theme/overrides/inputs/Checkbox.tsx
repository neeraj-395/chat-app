import type { Theme } from "@mui/material";
import ThemeIcon from "../ThemeIcon";

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <ThemeIcon name={'checkbox'} />,
        checkedIcon: <ThemeIcon name={'checkedbox'} />,
        indeterminateIcon: <ThemeIcon name={'checkboxind'} />,
      },

      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.action.disabled,
          },
          '& .MuiSvgIcon-fontSizeMedium': {
            width: 24,
            height: 24,
          },
          '& .MuiSvgIcon-fontSizeSmall': {
            width: 20,
            height: 20,
          },
          svg: {
            fontSize: 24,
            '&[font-size=small]': {
              fontSize: 20,
            },
          },
        },
      },
    },
  };
}
