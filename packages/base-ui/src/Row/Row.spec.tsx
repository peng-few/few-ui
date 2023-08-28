import { render, screen } from '../../test-util';
import Row from './Row';

describe('Row', () => {
  it('should render successfully', () => {
    render(<Row data-testid="target" />);
    const row = screen.getByTestId('target');
    expect(row).toBeInTheDocument();
  });
});
