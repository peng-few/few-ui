import { render, screen } from '../../test-util';
import { IconClose } from './IconClose';
describe('Icon', () => {
  it('should render IconClose correctly', () => {
    render(<IconClose data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
