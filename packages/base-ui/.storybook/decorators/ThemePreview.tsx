import { Decorator } from '@storybook/react';
import { GlobalTypes } from '../preview';
import { ThemeProvider } from '@emotion/react';
import { createTheme, defaultColorOption, GlobalStyles } from '../../src';
import { useMemo } from 'react';
import { autumnColorOption } from './colorOption';

export const themes = [
  {
    name: 'default',
    color: defaultColorOption.light.primary,
    themeObject: defaultColorOption,
  },
  {
    name: 'autumn',
    color: autumnColorOption.light.primary,
    themeObject: autumnColorOption,
  },
] as const;

export type themes = typeof themes;
export type SelectedTheme = (typeof themes)[number];

const ThemePreview: Decorator = (Story, context) => {
  const {
    mode,
    selectedTheme: themeName,
    themes,
  } = context.globals as GlobalTypes;
  const selectedTheme = themes.find(
    (target) => target.name === themeName,
  ) as SelectedTheme;
  const paletteOpt = selectedTheme.themeObject[mode];

  const theme = useMemo(() => {
    return createTheme({
      colorOption: paletteOpt,
      mode,
    });
  }, [mode, paletteOpt]);

  return (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default ThemePreview;
