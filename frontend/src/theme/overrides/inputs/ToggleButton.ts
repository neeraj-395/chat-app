import { alpha, type Theme, type Palette, type PaletteColor } from '@mui/material/styles';

export default function ToggleButton(theme: Theme) {
  const style = (color: keyof Palette) => {
    const pcolor = theme.palette[color] as PaletteColor;
    return {
      props: { color },
      style: {
        '&:hover': {
          borderColor: alpha(pcolor.main, 0.48),
          backgroundColor: alpha(pcolor.main, theme.palette.action.hoverOpacity),
        },
        '&.Mui-selected': {
          borderColor: alpha(pcolor.main, 0.48),
        },
      },
    }
  };

  return {
    MuiToggleButton: {
      variants: [
        {
          props: { color: 'standard' },
          style: {
            '&.Mui-selected': {
              backgroundColor: theme.palette.action.selected,
            },
          },
        },
        style('primary'),
        style('secondary'),
        style('info'),
        style('success'),
        style('warning'),
        style('error'),
      ],
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          border: `solid 1px ${theme.palette.grey[500_12]}`,
          '& .MuiToggleButton-root': {
            margin: 4,
            borderColor: 'transparent !important',
            borderRadius: `${theme.shape.borderRadius}px !important`,
          },
        },
      },
    },
  };
}
