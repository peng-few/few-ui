import { ColorOption, ThemeMode } from '../../src';

export const autumnColorOption: Record<ThemeMode, Required<ColorOption>> = {
  [ThemeMode.Light]: {
    primary: '#cda20b',
    grey: '#bfbfbf',
    background: '#ffffff',
    warning: '#f7d24d',
    error: '#f2705e',
    success: '#8bac5e',
    info: '#8eaaf0',
    common: {
      black: '#22272e',
      white: '#ffffff',
    },
    link: '#0000FF',
    text: '#22272e',
  },
  [ThemeMode.Dark]: {
    primary: '#cda20b',
    grey: '#bfbfbf',
    warning: '#f7d24d',
    error: '#f2705e',
    success: '#8bac5e',
    info: '#8eaaf0',
    background: '#22272e',
    common: {
      black: '#22272e',
      white: '#f3f6fa',
    },
    link: '#00acff',
    text: '#f3f6fa',
  },
};
