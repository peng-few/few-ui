import { Color, Hex } from '../type';

export interface CommonColor {
  black: Color;
  white: Color;
}

export interface BaseColor {
  background: Color;
  common: CommonColor;
  link: Color;
  text: Color;
}

export const PaletteColor = {
  Primary: 'primary',
  Grey: 'grey',
  Warning: 'warning',
  Error: 'error',
  Success: 'success',
  Info: 'info',
} as const;

export type PaletteColor = (typeof PaletteColor)[keyof typeof PaletteColor];

export type ColorOption = Partial<BaseColor> &
  Partial<Record<PaletteColor, Hex>>;

export type Palette = Record<PaletteColor, ColorShade> & BaseColor;

export type ColorShadeOption = Pick<BaseColor, 'background'> & {
  color: Hex;
  isDarkMode?: boolean;
};

export type ColorShade = Record<
  'lighter' | 'light' | 'main' | 'dark' | 'darker',
  Hex
>;
