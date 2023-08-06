import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { type ButtonWithRef, Color, Variant, BaseProps } from './Button.type';
import { RippleEffect, RippleAction } from './RippleEffect';
import React, { useMemo, useRef } from 'react';
import { baseStyle, getVariantStyle, getSizeStyle } from './Button.style';

const StyleButton = styled('button')<BaseProps>(
  baseStyle,
  ({
    color = Color.Primary,
    variant = Variant.Default,
    rounded,
    size = 'md',
  }) => {
    const theme = useTheme();
    const variantStyle = useMemo(
      () => getVariantStyle(theme, color, variant),
      [theme, color, variant],
    );

    const sizeStyle = useMemo(() => getSizeStyle(size), [size]);

    return [
      variantStyle,
      sizeStyle,
      rounded ? css({ borderRadius: '100px' }) : '',
    ];
  },
);

const ButtonWithRef: ButtonWithRef = (inProps, ref) => {
  const {
    href,
    disabled,
    as = 'button',
    target,
    rel = '',
    children,
    type,
    ...rest
  } = inProps;

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

  const rippleRef = useRef<RippleAction>(null);
  const handleRipple =
    (action: keyof RippleAction) => (event: React.SyntheticEvent) => {
      if (rippleRef.current) {
        rippleRef.current[action](event);
      }
    };
  return (
    <StyleButton
      {...props}
      ref={ref}
      onMouseDown={handleRipple('start')}
      onMouseUp={handleRipple('stop')}
    >
      {children}
      <RippleEffect ref={rippleRef}></RippleEffect>
    </StyleButton>
  );
};

// use named export can automately generated storybook props table from TypeScript types
export const Button = React.forwardRef(ButtonWithRef) as ButtonWithRef;

Button.displayName = 'Button';
