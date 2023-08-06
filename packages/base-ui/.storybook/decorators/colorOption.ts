import { ColorOption, ThemeMode } from '../../src';

export const autumnColorOption: Record<ThemeMode, Required<ColorOption>> = {
  [ThemeMode.Light]: {
    primary: '#cda20b',
    grey: '#bfbfbf',
    background: '#ffffff',
    warning: '#ffa948',
    error: '#ff4848',
    success: '#74ff48',
    info: '#48b5ff',
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
    warning: '#ffa948',
    error: '#ff4848',
    success: '#74ff48',
    info: '#48b5ff',
    background: '#22272e',
    common: {
      black: '#22272e',
      white: '#f3f6fa',
    },
    link: '#00acff',
    text: '#f3f6fa',
  },
};
