import { type ButtonWithRef } from './Button.type';
import { RippleEffect, useRipple } from './RippleEffect';
import React from 'react';
import { StyleButton } from './Button.style';
import { ButtonIcon } from './ButtonIcon';

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
      icon,
      className,
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
      className: disabled ? `${className} disabled` : className,
      rel: isAnchor ? getRel(rel) : undefined,
      ...rest,
    };

    const { rippleRef, rippleEvents } = useRipple();
    return (
      <StyleButton {...props} ref={ref} {...rippleEvents}>
        {icon && (
          <ButtonIcon size={props.size} as={icon} iconOnly={!children} />
        )}
        {children}
        <RippleEffect ref={rippleRef}></RippleEffect>
      </StyleButton>
    );
  },
) as ButtonWithRef;

Button.displayName = 'Button';
export default Button;
