import styled from '@emotion/styled';
import React from 'react';
import { Breakpoint } from '../theme/breakpoint';
import { extractBreakpoint, useBreakpointStyle } from '../util';

export interface ColProps
  extends React.ComponentProps<'div'>,
    Partial<Record<keyof Breakpoint, number>> {
  /** 對應 flex-wrap : wrap, nowrap, reverse */
}
const StyledCol = styled.div<ColProps>((props) => {
  const widthBreakpoint = extractBreakpoint(props);
  const styles = useBreakpointStyle(widthBreakpoint, (value) => {
    return {
      width: `${(100 / 24) * value}%`,
    };
  });

  return [{ flex: '0 0 auto' }, styles];
});

export function Col({ children, ...props }: ColProps) {
  return <StyledCol {...props}>{children}</StyledCol>;
}

export default Col;
