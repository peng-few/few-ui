import extractBreakpoint from '../extractBreakpoint';

describe('extractBreakpoin', () => {
  it('should only return breakpoints prop', () => {
    const breakpoint = extractBreakpoint({
      xs: 200,
      md: 100,
      apple: '24',
      pineapple: '100',
    });
    expect(breakpoint).toEqual({
      xs: 200,
      sm: undefined,
      md: 100,
      lg: undefined,
      xl: undefined,
    });
  });
});
