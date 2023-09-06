import { render, screen } from '../../test-util';
import { NOOP } from '../util';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('should render successfully', () => {
    render(
      <Checkbox checked={true} onChange={NOOP}>
        checkbox
      </Checkbox>,
    );
    const checkbox = screen.getByText('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
