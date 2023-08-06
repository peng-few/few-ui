import { ColorOption } from './type';
import { ThemeMode } from '../theme';

const defaultColorOption: Record<ThemeMode, Required<ColorOption>> = {
  [ThemeMode.Light]: {
    primary: '#2a8fed',
    grey: '#bfbfbf',
    warning: '#ffa948',
    error: '#ff4848',
    success: '#7dca0b',
    info: '#48b5ff',
    common: {
      black: '#22272e',
      white: '#ffffff',
    },
    background: '#ffffff',
    text: '#2b3f5b',
    link: '#0000FF',
  },
  [ThemeMode.Dark]: {
    primary: '#2a8fed',
    grey: '#bfbfbf',
    warning: '#ffa948',
    error: '#ff4848',
    success: '#7dca0b',
    info: '#48b5ff',
    common: {
      black: '#22272e',
      white: '#f3f6fa',
    },
    background: '#22272e',
    text: '#e4e4e4',
    link: '#00acff',
  },
};

export default defaultColorOption;
