import defaultFontToken from './defaultBreakpoint';
import deepmerge from 'deepmerge';

export const Breakpoint = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Breakpoint = { [key in (typeof Breakpoint)[number]]: number };

export const createBreakpoint = (pointOption: Partial<Breakpoint>) => {
  return deepmerge(defaultFontToken, pointOption);
};
