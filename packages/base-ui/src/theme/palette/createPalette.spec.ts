import createPalette from './createPalette';

describe('createPalette', () => {
  it('should create color shade correctly', () => {
    const palette = createPalette({});
    expect(palette).toEqual({
      background: '#ffffff',
      common: {
        black: '#22272e',
        white: '#ffffff',
      },
      error: {
        dark: '#d93237',
        darker: '#8c121e',
        light: '#ffc8c2',
        lighter: '#fff2f0',
        main: '#ff4848',
      },
      grey: {
        dark: '#999999',
        darker: '#4d4d4d',
        light: '#e6e6e6',
        lighter: '#ffffff',
        main: '#bfbfbf',
      },
      info: {
        dark: '#3290d9',
        darker: '#124f8c',
        light: '#c2edff',
        lighter: '#f0fbff',
        main: '#48b5ff',
      },
      link: '#0000FF',
      primary: {
        dark: '#1a6dc7',
        darker: '#04357a',
        light: '#a8deff',
        lighter: '#f0faff',
        main: '#2a8fed',
      },
      success: {
        dark: '#5ca300',
        darker: '#2b5700',
        light: '#cef07f',
        lighter: '#f9ffe6',
        main: '#7dca0b',
      },
      text: '#2b3f5b',
      warning: {
        dark: '#d98532',
        darker: '#8c4712',
        light: '#ffe9c2',
        lighter: '#fffaf0',
        main: '#ffa948',
      },
    });
  });
});
