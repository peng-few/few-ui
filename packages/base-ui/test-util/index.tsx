import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider, GlobalStyles, createTheme } from '../src';

const LightProviders = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

const DarkProviders = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({ mode: 'dark' });
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

const lightRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: LightProviders, ...options });

const darkRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: DarkProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { lightRender as render, darkRender };
