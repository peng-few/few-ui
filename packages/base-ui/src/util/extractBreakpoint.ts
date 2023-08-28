import { Breakpoint } from '../theme/breakpoint';

export type GenericBreakpoint<T> = Partial<Record<keyof Breakpoint, T>>;
export const extractBreakpoint = <T extends string | number>(
  props: Record<string, any> & GenericBreakpoint<T>,
) => {
  const { xs, sm, md, lg, xl } = props;
  const breakpoints: GenericBreakpoint<T> = {
    xs,
    sm,
    md,
    lg,
    xl,
  };
  return breakpoints;
};
export default extractBreakpoint;
