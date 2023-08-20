import { Color, Hex } from '../../styles';

/** 基本黑與白顏色 */
export interface CommonColor {
  black: Color;
  white: Color;
}

/** 基本的通用顏色，不需要產生色階 */
export interface BaseColor {
  background: Color;
  common: CommonColor;
  link: Color;
  text: Color;
}

/** 會需要產生色階表的顏色 */
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

// 色階表
export type ColorShade = Record<
  'lighter' | 'light' | 'main' | 'dark' | 'darker',
  Hex
>;
