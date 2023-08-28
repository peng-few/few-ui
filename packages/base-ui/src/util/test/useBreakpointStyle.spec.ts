import useBreakpointStyle, { formatBreakpoint } from '../useBreakpointStyle';
import { defaultBreakpoint } from '../../theme/breakpoint';
import { css } from '@emotion/react';
import React from 'react';

describe('useBreakpointStyle', () => {
  // mock useContext return breakpoint property
  beforeEach(() => {
    React.useContext = jest.fn();
    React.useContext.mockReturnValue({ breakpoint: defaultBreakpoint });
  });

  it('should format primitives to breakpoint', () => {
    const result = formatBreakpoint(25);
    expect(result).toEqual({
      xs: 25,
      sm: undefined,
      md: undefined,
      lg: undefined,
      xl: undefined,
    });
  });

  it('should format breakpoint correctly', () => {
    const result = formatBreakpoint({ md: 500 });
    expect(result).toEqual({
      xs: undefined,
      sm: undefined,
      md: 500,
      lg: undefined,
      xl: undefined,
    });
  });

  it('should return breakpoint style correctly', () => {
    const styles = useBreakpointStyle({ md: 500 }, (value) => {
      return { fontWeight: value };
    });

    const expectStyles = css({
      '@media (min-width: 768px)': {
        fontWeight: '500',
      },
    });
    expect(styles.styles).toEqual(expectStyles.styles);
  });
});
