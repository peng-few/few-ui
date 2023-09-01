import { Global, css } from '@emotion/react';
import { useTheme } from '../theme';
export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        html,
        body {
          background-color: ${theme.palette.background};
          color: ${theme.palette.text};
        }
        * {
          font-family: 'Noto Sans TC', 'Microsoft JhengHei UI',
            'Microsoft JhengHei', sans-serif;
          box-sizing: border-box;
        }
      `}
    />
  );
};
