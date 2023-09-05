import SimpleMenuDemo from './SimpleMenuDemo';
import { GlobalStyles, ThemeProvider, createTheme } from '@pengfew/base-ui';
import '@fontsource/noto-sans-tc/400.css';
import '@fontsource/noto-sans-tc/500.css';
import '@fontsource/noto-sans-tc/700.css';
export function App() {
  return (
    <>
      <GlobalStyles />
      <SimpleMenuDemo />
    </>
  );
}

export default App;
