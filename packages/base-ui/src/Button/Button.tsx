import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ButtonWithRef, Color, Variant, BaseProps } from './Button.type';
import { RippleEffect, useRipple } from './RippleEffect';
import React, { useMemo } from 'react';
import { baseStyle, getVariantStyle, sizeStyle } from './Button.style';
import { getThemeMode } from '../theme';

const StyleButton = styled('button')<BaseProps>(
  baseStyle,
  ({
    color = Color.Primary,
    variant = Variant.Default,
    rounded,
    size = 'md',
    theme,
  }) => {
    const { mode, palette } = theme;
    const { isDarkMode } = getThemeMode(mode);
    const variantStyle = useMemo(
      () => getVariantStyle(palette, isDarkMode, color, variant),
      [palette, color, isDarkMode, variant],
    );

    return [
      variantStyle,
      sizeStyle[size],
      rounded ? css({ borderRadius: '100px' }) : '',
    ];
  },
);

// use named export can automately generated storybook props table from TypeScript types
export const Button = React.forwardRef(
  (
    {
      href,
      disabled,
      as = 'button',
      target,
      rel = '',
      children,
      type,
      ...rest
    },
    ref,
  ) => {
    const isAnchor = (!!href && as === 'button') || as === 'a';
    const component: React.ElementType = isAnchor ? 'a' : as;

    const isButton = component === 'button';
    const disabledName = isButton ? 'disabled' : 'aria-disabled';
    const getRel = (rel: string) => {
      if (target === '_blank' && !href?.startsWith(window.location.href)) {
        return rel + ' noopener noreferer';
      }
      return rel;
    };

    const props = {
      [disabledName]: disabled,
      type: isButton ? type ?? 'button' : type,
      target,
      href,
      as: component,
      className: disabled ? 'disabled' : '',
      rel: isAnchor ? getRel(rel) : undefined,
      ...rest,
    };

    const { rippleRef, rippleEvents } = useRipple();
    return (
      <StyleButton {...props} ref={ref} {...rippleEvents}>
        {children}
        <RippleEffect ref={rippleRef}></RippleEffect>
      </StyleButton>
    );
  },
) as ButtonWithRef;

Button.displayName = 'Button';
