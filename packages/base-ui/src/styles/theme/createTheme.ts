import { ColorOption } from '../palette/type';
import { createPalette, Palette } from '../palette';
import { getThemeMode, ThemeMode } from './themeMode';

export type ThemeOption = {
  mode?: ThemeMode;
  colorOption?: ColorOption;
};

export interface Theme {
  palette: Palette;
  mode: ThemeMode;
}

const createTheme = ({
  mode = 'light',
  colorOption = {},
}: ThemeOption): Theme => {
  const { isDarkMode } = getThemeMode(mode);
  const palette = createPalette(colorOption, isDarkMode);

  return {
    palette: palette,
    mode,
  };
};

export default createTheme;
