import React from 'react';
import { Breakpoint } from '../theme/breakpoint';

export type PartailBreakpoint = Partial<Breakpoint>;
export type Gutter = PartailBreakpoint | number;

export interface RowProps extends React.ComponentProps<'div'> {
  /** 對應 flex-wrap : wrap, nowrap */
  nowrap?: boolean;
  /** col之間的 margin */
  gutter?: Gutter;
  /** row 之間的 margin */
  rowGutter?: Gutter;
}
