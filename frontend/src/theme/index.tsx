import { type ReactNode, useMemo } from 'react';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { CssBaseline } from '@mui/material';
import { useAppSelector } from '../app/hook';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  type ThemeOptions,
} from '@mui/material/styles';

interface ThemeProviderProps { children: ReactNode; }

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeMode = useAppSelector(state => state.settings.themeMode);
  const themeDirection = useAppSelector(state => state.settings.themeDirection);

  const isLight = themeMode === 'light';

  const themeOptions: ThemeOptions = useMemo(() => ({
      palette: isLight ? palette.light : palette.dark,
      typography: typography,
      breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
  }), [isLight, themeDirection]);

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeProvider;