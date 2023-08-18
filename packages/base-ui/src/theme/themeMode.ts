type ModeOutput = { mode: ThemeMode; isDarkMode: boolean };

export const ThemeMode = {
  Light: 'light',
  Dark: 'dark',
} as const;

export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];

export function getThemeMode(modeName: ThemeMode): ModeOutput;
export function getThemeMode(isDarkMode: boolean): ModeOutput;
export function getThemeMode(
  isDarkModeOrName: boolean | ThemeMode,
): ModeOutput {
  let mode, isDarkMode;
  if (typeof isDarkModeOrName === 'boolean') {
    isDarkMode = isDarkModeOrName;
    mode = isDarkMode ? ThemeMode.Dark : ThemeMode.Light;
  } else {
    isDarkMode = isDarkModeOrName === ThemeMode.Dark;
    mode = isDarkModeOrName;
  }

  return { mode, isDarkMode };
}
