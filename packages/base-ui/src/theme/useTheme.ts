import { useTheme as Emotion_useTheme, Theme } from '@emotion/react';
import defaultTheme from './defaultTheme';

export function useTheme(): Theme {
  const theme = Emotion_useTheme();
  if (Object.values(theme).length === 0) {
    return defaultTheme;
  }
  return theme;
}

export default useTheme;
