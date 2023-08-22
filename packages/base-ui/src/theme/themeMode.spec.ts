import { ThemeMode, getThemeMode } from './themeMode';

describe('getThemeMode', () => {
  it('should return dark mode info when input true(boolean)', () => {
    const { isDarkMode, mode } = getThemeMode(true);
    expect(isDarkMode).toBeTruthy();
    expect(mode).toEqual(ThemeMode.Dark);
  });

  it('should return light mode info when input false(boolean)', () => {
    const { isDarkMode, mode } = getThemeMode(false);
    expect(isDarkMode).toBeFalsy();
    expect(mode).toEqual(ThemeMode.Light);
  });

  it('should return dark mode info when input "dark"', () => {
    const { isDarkMode, mode } = getThemeMode('dark');
    expect(isDarkMode).toBeTruthy();
    expect(mode).toEqual(ThemeMode.Dark);
  });

  it('should return light mode info when input "light"', () => {
    const { isDarkMode, mode } = getThemeMode('light');
    expect(isDarkMode).toBeFalsy();
    expect(mode).toEqual(ThemeMode.Light);
  });
});
