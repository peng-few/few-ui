import { ThemeMode } from '../src';
import ThemePreview, { SelectedTheme, themes } from './decorators/ThemePreview';

export type GlobalTypes = {
  selectedTheme: SelectedTheme['name'];
  mode: ThemeMode;
  themes: themes;
};

export const globalTypes = {
  mode: {
    name: 'Theme Mode',
    description: 'chose dark mode or light mode',
    defaultValue: ThemeMode.Light,
    toolbar: {
      title: 'Theme',
      items: [
        { value: ThemeMode.Light, title: '☀️ Light' },
        { value: ThemeMode.Dark, title: '🌙 Dark' },
      ],
      dynamicTitle: true,
    },
  },
};

export const globals = {
  selectedTheme: 'default',
  themes,
};

export const decorators = [ThemePreview];
