import { render, screen } from '../../test-util';
import { Backdrop } from './Backdrop';

describe('Backdrop', () => {
  it('should render successfully', () => {
    render(<Backdrop visible={true}>text</Backdrop>);
    const backdrop = screen.getByText('text');
    expect(backdrop).toBeInTheDocument();
  });
});
