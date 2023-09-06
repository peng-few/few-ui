import React from 'react';
import { FontToken } from '../theme';
import { Interpolation, Theme } from '@emotion/react';

export type CheckboxSizeProp = { size?: keyof FontToken };
export interface CheckboxProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'>,
    CheckboxSizeProp {
  css?: Interpolation<Theme>;
  checked: boolean;
  onChange: () => void;
}
