import { ColorOption } from './palette/type';
import { createPalette, Palette } from './palette';
import { getThemeMode, ThemeMode } from './themeMode';
import { createFont, FontToken } from './font/createFont';

export interface ThemeOption {
  mode?: ThemeMode;
  colorOption?: ColorOption;
  fontOption?: Partial<FontToken>;
}

export interface Theme {
  palette: Palette;
  mode: ThemeMode;
  font: FontToken;
}

const createTheme = (themeOption: ThemeOption = {}): Theme => {
  const { mode = 'light', colorOption = {}, fontOption = {} } = themeOption;
  const { isDarkMode } = getThemeMode(mode);
  const palette = createPalette(colorOption, isDarkMode);
  const font = createFont(fontOption);

  return {
    palette: palette,
    mode,
    font,
  };
};

export default createTheme;
