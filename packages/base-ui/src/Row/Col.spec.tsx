import { render } from '../../test-util';

import Col from './Col';

describe('Col', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Col data-testid="col" />);
    expect(getByTestId('col')).toBeInTheDocument();
  });
});
