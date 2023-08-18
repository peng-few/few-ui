import { render } from '../../test-util';
import ThemeProvider from './ThemeProvider';
import { createTheme } from '../theme';

describe('Provider', () => {
  it('should render successfully', () => {
    const theme = createTheme();
    const { baseElement } = render(<ThemeProvider theme={theme} />);
    expect(baseElement).toBeTruthy();
  });
});
