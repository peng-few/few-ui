import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { CheckboxProps, CheckboxSizeProp } from './Checkbox.type';
import { Theme, keyframes } from '@emotion/react';
import classNames from 'classnames';
import { FontToken, useTheme } from '../theme';
import { rescaleCss } from '../util';
import { Transition } from 'react-transition-group';

const originInputCss = (theme: Theme, size: keyof FontToken) => {
  const inputSize = rescaleCss(theme.font[size], 0.8);
  return {
    opacity: 0,
    width: inputSize,
    height: inputSize,
    borderRadius: rescaleCss(theme.font[size], 0.16),
    margin: '0 4px 0 0',
  };
};

const checkedKetframe = keyframes`
from {
  transform: scale(1.1)
}
to {
  transform: scale(2);
  opacity: 0
}
`;

const StyleRipple = styled.span<Required<CheckboxSizeProp>>(
  ({ theme, size }) => ({
    ...originInputCss(theme, size),
    background: theme.palette.primary.light,
    opacity: 0.8,
    animation: `${checkedKetframe} 0.2s ease-in`,
    position: 'absolute',
    display: 'block',
    zIndex: 0,
  }),
);

const StyleLabel = styled.label<Required<CheckboxSizeProp>>(
  ({ theme, size }) => ({
    position: 'relative',
    fontSize: theme.font[size],
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  }),
);

const StyledCheckbox = styled.span<Required<CheckboxSizeProp>>(
  ({ theme, size }) => ({
    ...originInputCss(theme, size),
    opacity: 1,
    border: `1px solid ${theme.palette.grey.light}`,
    position: 'absolute',
    transition: '0.15s',
    zIndex: '2',
    '&:after': {
      content: '""',
      transform: 'rotate(15deg) scale(0) translate(-50%, -50%)',
      transition: '0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s',
      position: 'absolute',
      top: '50%',
      left: '20.5%',
      width: rescaleCss(theme.font[size], 0.2),
      height: rescaleCss(theme.font[size], 0.4),
      borderRight: `2px solid ${theme.palette.common.white}`,
      borderBottom: `2px solid ${theme.palette.common.white}`,
      zIndex: '1',
    },
    '&.checked': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.dark,
      '&:after': {
        transform: 'rotate(45deg) scale(1) translate(-50%, -50%)',
      },
    },
    '&.disabled': {
      background: theme.palette.grey.light,
      borderColor: theme.palette.grey.main,
      '&:after': {
        borderColor: theme.palette.grey.main,
      },
    },
  }),
);

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      size = 'md',
      children,
      css,
      style,
      className,
      onChange,
      disabled,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const [prevChecked, setPrevChecked] = useState(checked);
    const isCheckChange = prevChecked !== checked;

    useEffect(() => {
      setPrevChecked(checked);
    }, [checked, setPrevChecked]);

    return (
      <StyleLabel
        theme={theme}
        size={size}
        css={css}
        style={style}
        className={className}
      >
        <input
          css={originInputCss(theme, size)}
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <Transition
          in={isCheckChange}
          timeout={150}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <StyleRipple theme={theme} size={size} />
        </Transition>
        <StyledCheckbox
          {...props}
          theme={theme}
          size={size}
          className={classNames({
            checked: checked,
            disabled: disabled,
          })}
        />
        {children}
      </StyleLabel>
    );
  },
);

export default Checkbox;
