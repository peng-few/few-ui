import { PropsWithChildren } from 'react';
import { Theme, ThemeProvider } from '@emotion/react';

/* eslint-disable-next-line */
export interface ProviderProps {
  theme: Theme;
}

export function Provider({
  children,
  theme,
}: PropsWithChildren<ProviderProps>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Provider;
