import { render, screen } from '@testing-library/react';
import useTheme from './useTheme';

const Component = () => {
  const theme = useTheme();
  return <h1>{theme.mode}</h1>;
};
describe('useTheme', () => {
  it('should render successfully', () => {
    render(<Component />);
    const target = screen.getByText('light');
    expect(target).toBeInTheDocument();
  });
});
