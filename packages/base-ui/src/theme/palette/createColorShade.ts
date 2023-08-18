import { generate } from '@ant-design/colors';
import { Hex, Color } from '../../styles';
import type { ColorShadeOption, ColorShade } from './type';

export default function createColorShade({
  color,
  isDarkMode = false,
  background,
}: ColorShadeOption): ColorShade {
  const args: {
    backgroundColor: Color;
    theme: 'dark' | 'default';
  } = {
    backgroundColor: background,
    theme: isDarkMode ? 'dark' : 'default',
  };
  const colors = generate(color, args) as Hex[];

  return {
    lighter: colors[0],
    light: colors[2],
    main: colors[5],
    dark: colors[6],
    darker: colors[8],
  };
}
