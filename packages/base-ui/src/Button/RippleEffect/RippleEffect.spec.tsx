import { render, screen } from '../../../test-util';
import { NOOP } from '../../util';
import { PositionedRipple, getRippleRect, RippleEffect } from './RippleEffect';

const RippleTarget = () => {
  return <div style={{ width: '200px', height: '200px' }}>text</div>;
};
const mockMouseEvent = {
  pageX: 550,
  pageY: 550,
} as React.MouseEvent;

const mockRippleRect = {
  left: 350,
  size: 400,
  top: 350,
};

describe('Ripple Effect', () => {
  beforeEach(() => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 200,
        height: 200,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: NOOP,
      };
    });
  });
  it('should render correctly', () => {
    render(
      <div data-testid="target">
        <RippleEffect />
      </div>,
    );
    const target = screen.getByTestId('target');
    expect(target.children[0]).toBeInTheDocument();
  });
  it('should calculate correct ripple rect using "getRippleRect"', () => {
    render(<RippleTarget />);
    const target = screen.getByText('text');
    const rect = getRippleRect(target, mockMouseEvent);
    expect(rect).toEqual(mockRippleRect);
  });

  it('should render <PositionedRipple/> with correct position', () => {
    render(
      <PositionedRipple
        data-testid="target"
        size={mockRippleRect.size}
        top={mockRippleRect.top}
        left={mockRippleRect.left}
        timeout={550}
      />,
    );
    const target = screen.getByTestId('target');
    expect(target).toHaveStyle({
      width: `${mockRippleRect.size}px`,
      height: `${mockRippleRect.size}px`,
      top: `${mockRippleRect.top}px`,
      left: `${mockRippleRect.left}px`,
    });
  });
});
