import deepmerge from 'deepmerge';
import createColorShade from './createColorShade';
import defaultColorOption from './defaultColorOption';
import { ColorOption, ColorShade, Palette, PaletteColor } from './type';
import { getThemeMode } from '../../theme';

const createColors = (
  colorVars: Required<ColorOption>,
  isDarkMode: boolean,
) => {
  const { background } = colorVars;

  return Object.values(PaletteColor).reduce((colors, colorName) => {
    const args = {
      color: colorVars[colorName],
      background,
      isDarkMode,
    };
    colors[colorName] = createColorShade(args);

    return colors;
  }, {} as Record<PaletteColor, ColorShade>);
};

const createPalette = (
  colorOption: ColorOption,
  isDarkMode = false,
): Palette => {
  const { mode } = getThemeMode(isDarkMode);
  const colorVars: Required<ColorOption> = deepmerge(
    defaultColorOption[mode],
    colorOption,
  );

  const paletteOutput: Palette = {
    ...colorVars,
    ...createColors(colorVars, isDarkMode),
  };

  return paletteOutput;
};

export default createPalette;
