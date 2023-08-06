import deepmerge from 'deepmerge';
import createColorShade from './createColorShade';
import defaultColorOption from './defaultColorOption';
import { ColorOption, ColorShade, Palette, PaletteColor } from './type';
import { getThemeMode } from '../theme';

const createPalette = (
  colorOption: ColorOption,
  isDarkMode = false,
): Palette => {
  const { mode: ThemeMode } = getThemeMode(isDarkMode);
  const colorVars: Required<ColorOption> = deepmerge(
    defaultColorOption[ThemeMode],
    colorOption,
  );
  const { background, common } = colorVars;

  const createColors = () => {
    return Object.values(PaletteColor).reduce((colors, colorName) => {
      const args = {
        color: colorVars[colorName],
        background,
        common,
        isDarkMode,
      };
      colors[colorName] = createColorShade(args);

      return colors;
    }, {} as Record<PaletteColor, ColorShade>);
  };

  const paletteOutput: Palette = {
    ...colorVars,
    ...createColors(),
  };

  return paletteOutput;
};

export default createPalette;
