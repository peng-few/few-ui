import defaultFontToken from './defaultBreakpoint';
import deepmerge from 'deepmerge';

export interface Breakpoint {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

export const createBreakpoint = (pointOption: Partial<Breakpoint>) => {
  return deepmerge(defaultFontToken, pointOption);
};
