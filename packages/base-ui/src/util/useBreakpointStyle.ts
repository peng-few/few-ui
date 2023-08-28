import { CSSObject, css, useTheme } from '@emotion/react';
import { Breakpoint } from '../theme/breakpoint';
import extractBreakpoint from './extractBreakpoint';

export type Input<V> = V | Partial<Record<keyof Breakpoint, V>>;
export type CssValue = string | number;
/**
 *
 * @param input 單一值或 breakpoints object,ex: {xs: 10,md:20}
 * @returns breakpoints object
 */
export const formatBreakpoint = <Value extends CssValue>(
  input: Input<Value>,
) => {
  const breakpointGutter: Partial<Record<keyof Breakpoint, Value>> =
    typeof input === 'string' || typeof input === 'number'
      ? { xs: input }
      : input;

  return extractBreakpoint(breakpointGutter);
};

/**
 *
 * @param value
 * @param cb value: 對應該 breakpoint 的值, point: breakpoint 名稱
 * @returns
 */
export const useBreakpointStyle = <T extends CssValue>(
  value: Input<T>,
  cb: (value: T, point: keyof Breakpoint) => void | CSSObject,
) => {
  const { breakpoint } = useTheme();
  const styles: Record<string, CSSObject> = {};
  const valueBreakpoint = formatBreakpoint<T>(value);

  Breakpoint.forEach((point) => {
    const value = valueBreakpoint[point];
    if (typeof value === 'undefined') return;

    const result = cb(value, point);
    const media = `@media (min-width: ${breakpoint[point]}px)`;

    if (result) {
      styles[media] = result;
    }
  });

  return css(styles);
};

export default useBreakpointStyle;
