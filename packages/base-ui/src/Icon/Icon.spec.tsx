import { render, screen } from '../../test-util';
import { IconClose, IconLoad } from '.';

describe('Icon', () => {
  it('should render IconClose correctly', () => {
    render(<IconClose data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
  it('should render IconLoad correctly', () => {
    render(<IconLoad data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
