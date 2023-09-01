import { Theme } from '@emotion/react';

export const defaultTheme: Theme = {
  palette: {
    primary: {
      lighter: '#f0faff',
      light: '#a8deff',
      main: '#2a8fed',
      dark: '#1a6dc7',
      darker: '#04357a',
    },
    grey: {
      lighter: '#ffffff',
      light: '#e6e6e6',
      main: '#bfbfbf',
      dark: '#999999',
      darker: '#4d4d4d',
    },
    warning: {
      lighter: '#fffaf0',
      light: '#ffe9c2',
      main: '#ffa948',
      dark: '#d98532',
      darker: '#8c4712',
    },
    error: {
      lighter: '#fff2f0',
      light: '#ffc8c2',
      main: '#ff4848',
      dark: '#d93237',
      darker: '#8c121e',
    },
    success: {
      lighter: '#f9ffe6',
      light: '#cef07f',
      main: '#7dca0b',
      dark: '#5ca300',
      darker: '#2b5700',
    },
    info: {
      lighter: '#f0fbff',
      light: '#c2edff',
      main: '#48b5ff',
      dark: '#3290d9',
      darker: '#124f8c',
    },
    common: { black: '#22272e', white: '#ffffff' },
    background: '#ffffff',
    text: '#2b3f5b',
    link: '#0000FF',
  },
  mode: 'light',
  font: { xl: '23px', lg: '18px', md: '16px', sm: '14px', xs: '11px' },
  breakpoint: { xl: 1400, lg: 992, md: 768, sm: 576, xs: 0 },
};

export default defaultTheme;
