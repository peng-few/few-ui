import defaultFontToken from './defaultFontToken';
import deepmerge from 'deepmerge';

export interface FontToken {
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

export const createFont = (fontOption: Partial<FontToken>) => {
  return deepmerge(defaultFontToken, fontOption);
};
