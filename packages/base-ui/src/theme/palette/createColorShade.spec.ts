import createColorShade from './createColorShade';

describe('createColorShade', () => {
  it('should create color shade correctly', () => {
    const shade = createColorShade({
      color: '#5eba7d',
      background: 'white',
    });
    expect(shade).toEqual({
      dark: '#449461',
      darker: '#1a472e',
      light: '#d3e0d6',
      lighter: '#ebfaed',
      main: '#5eba7d',
    });
  });
  it('should create color shade with dark mode', () => {
    const shade = createColorShade({
      color: '#5eba7d',
      background: 'black',
      isDarkMode: true,
    });
    expect(shade).toEqual({
      dark: '#78b38a',
      darker: '#cdd9d0',
      light: '#1c3826',
      lighter: '#07110b',
      main: '#509e6a',
    });
  });
});
