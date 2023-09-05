import { PaletteColor } from '../theme';
import { Override } from '../util';
import React from 'react';

export const Variant = {
  Outlined: 'outlined',
  Text: 'text',
  Filled: 'filled',
  Default: 'default',
} as const;
export type Variant = (typeof Variant)[keyof typeof Variant];

const { Grey, ...ButtonColor } = PaletteColor;
export { ButtonColor };
export type ButtonColor = Exclude<PaletteColor, 'grey'>;

export type Size = 'xs' | 'sm' | 'md' | 'lg';

export type BaseProps = {
  /** 按鈕的類型 */
  variant?: Variant;
  /** 按鈕的顏色 */
  color?: ButtonColor;
  /** 使否為圓角按鈕 */
  rounded?: boolean;
  /** 按鈕的大小 */
  size?: Size;
  /** 按鈕是否停用 */
  disabled?: boolean;
  /** 按鈕的連結 */
  href?: string;
  /** render為其他element */
  as?: React.ElementType;
  /** 按鈕的 icon (非instance) */
  icon?: React.ElementType;
};

export type ButtonProps<Default extends React.ElementType> = Override<
  React.ComponentPropsWithRef<Default>,
  BaseProps
>;

export interface ButtonWithRef {
  <As>(props: Props<As>, ref: React.ForwardedRef<As>): JSX.Element;
  displayName?: string;
}

export type DefaultProps = ButtonProps<'button'> & ButtonProps<'a'>;

export type Props<As> = As extends React.ElementType
  ? { as: As } & ButtonProps<As>
  : DefaultProps;
