import styled from '@emotion/styled';
import { RowProps } from './Row.type';
import { css } from '@emotion/react';
import { useBreakpointStyle } from '../util';

const StyledRow = styled.div<RowProps>(
  ({ nowrap = false, gutter = 0, rowGutter = 0 }) => {
    const flexWrap = nowrap ? 'nowrap' : 'wrap';

    const baseStyle = css({
      display: 'flex',
      boxSizing: 'border-box',
      flexWrap,
    });

    const gutterXStyle = useBreakpointStyle(gutter, (value) => {
      const marginX = value / 2;
      return {
        marginRight: `${marginX * -1}px`,
        marginLeft: `${marginX * -1}px`,
        '& > *': {
          paddingRight: `${marginX}px`,
          paddingLeft: `${marginX}px`,
        },
      };
    });

    const gutterYStyle = useBreakpointStyle(rowGutter, (value) => {
      const marginY = value / 2;
      return {
        marginTop: `${marginY * -1}px`,
        marginBottom: `${marginY * -1}px`,
        '& > *': {
          paddingTop: `${marginY}px`,
          paddingBottom: `${marginY}px`,
        },
      };
    });

    return [baseStyle, gutterXStyle, gutterYStyle];
  },
);

export function Row({
  nowrap,
  children,
  gutter,
  rowGutter,
  ...props
}: RowProps) {
  return (
    <StyledRow {...props} nowrap={nowrap} gutter={gutter} rowGutter={rowGutter}>
      {children}
    </StyledRow>
  );
}

export default Row;
