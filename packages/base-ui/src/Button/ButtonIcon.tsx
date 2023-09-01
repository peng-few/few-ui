import { css } from '@emotion/react';
import { Size } from './Button.type';

export type ButtonIconProps = {
  size?: Size;
  iconOnly: boolean;
  as: React.ElementType;
};

export const ButtonIcon = ({
  size = 'md',
  iconOnly = false,
  as: Icon,
}: ButtonIconProps) => {
  const sizeOptions: Record<Size, number> = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
  };

  const cssValue = css({
    marginRight: iconOnly ? 0 : '5px',
  });

  return <Icon size={sizeOptions[size]} css={cssValue} />;
};
