import type { PaletteColor, Theme } from '@mui/material';
import ThemeIcon from '../ThemeIcon';

export default function Alert(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  const standardStyle = (color: PaletteColor) => ({
      color: color[isLight ? 'lighter' : 'darker'],
      backgroundColor: color[isLight ? 'lighter' : 'darker'],
      '& .MuiAlert-icon': {
        color: color[isLight ? 'main' : 'light'],
      },
  });

  const filledStyle = (color: PaletteColor) => ({ color: color.contrastText });

  const outlinedStyle = (color: PaletteColor) => ({
    color: color[isLight ? 'darker' : 'lighter'],
    border: `solid 1px ${color[isLight ? 'light' : 'dark']}`,
    backgroundColor: color[isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: color[isLight ? 'main' : 'light'],
    },
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          info: <ThemeIcon name={'info'}/>,
          success: <ThemeIcon name={'success'}/>,
          warning: <ThemeIcon name={'warning'}/>,
          error: <ThemeIcon name={'error'}/>,
        },
      },

      styleOverrides: {
        message: {
          '& .MuiAlertTitle-root': {
            marginBottom: theme.spacing(0.5),
          },
        },
        action: {
          '& button:not(:first-of-type)': {
            marginLeft: theme.spacing(1),
          },
        },

        standardInfo: standardStyle(theme.palette.info),
        standardSuccess: standardStyle(theme.palette.success),
        standardWarning: standardStyle(theme.palette.warning),
        standardError: standardStyle(theme.palette.error),

        filledInfo: filledStyle(theme.palette.info),
        filledSuccess: filledStyle(theme.palette.success),
        filledWarning: filledStyle(theme.palette.warning),
        filledError: filledStyle(theme.palette.error),

        outlinedInfo: outlinedStyle(theme.palette.info),
        outlinedSuccess: outlinedStyle(theme.palette.success),
        outlinedWarning: outlinedStyle(theme.palette.warning),
        outlinedError: outlinedStyle(theme.palette.error),
      },
    },
  };
}
