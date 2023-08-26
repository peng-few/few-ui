import { ColorOption } from './palette/type';
import { createPalette, Palette } from './palette';
import { getThemeMode, ThemeMode } from './themeMode';
import { createFont, FontToken } from './font/createFont';
import { Breakpoint, createBreakpoint } from './breakpoint';

export interface ThemeOption {
  mode?: ThemeMode;
  colorOption?: ColorOption;
  fontOption?: Partial<FontToken>;
  breakpointOption?: Partial<Breakpoint>;
}

export interface Theme {
  palette: Palette;
  mode: ThemeMode;
  font: FontToken;
  breakpoint: Breakpoint;
}

const createTheme = (themeOption: ThemeOption = {}): Theme => {
  const {
    mode = 'light',
    colorOption = {},
    fontOption = {},
    breakpointOption = {},
  } = themeOption;

  const { isDarkMode } = getThemeMode(mode);
  const palette = createPalette(colorOption, isDarkMode);
  const font = createFont(fontOption);
  const breakpoint = createBreakpoint(breakpointOption);

  return {
    palette: palette,
    mode,
    font,
    breakpoint,
  };
};

export default createTheme;
