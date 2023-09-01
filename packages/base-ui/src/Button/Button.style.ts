import { getThemeMode, Palette, useTheme } from '../theme';
import { modifyColor } from '../util';
import { css } from '@emotion/react';
import { Color, Variant, Size, BaseProps } from './Button.type';
import styled from '@emotion/styled';
import { useMemo } from 'react';

const paddingStyle = (size: Size, iconOnly: boolean) => {
  const options: Record<Size, string> = {
    xs: iconOnly ? '3px' : '3px 8px',
    sm: iconOnly ? '5px' : '5px 12px',
    md: iconOnly ? '5px' : '5px 13px',
    lg: iconOnly ? '8px' : '8px 18px',
  };
  return options[size];
};

export const sizeStyle: Record<
  Size,
  Record<'fontSize' | 'borderRadius', string>
> = {
  xs: {
    fontSize: '0.8125rem',
    borderRadius: '4px',
  },
  sm: {
    fontSize: '0.9rem',
    borderRadius: '6px',
  },
  md: {
    fontSize: '1rem',
    borderRadius: '7px',
  },
  lg: {
    fontSize: '1.125rem',
    borderRadius: '8px',
  },
};

export const getColorStyle = (
  palette: Palette,
  isDarkMode: boolean,
  color: Color,
  variant: Variant,
) => {
  const mainColorShade = palette[color];
  const clearMainColor = isDarkMode
    ? modifyColor(mainColorShade.main, { brighten: 20, darken: 10 })
    : mainColorShade.main;

  switch (variant) {
    case Variant.Default:
      return css({
        backgroundColor: palette.background,
        borderColor: palette.grey.light,
        color: palette.text,
        '&:hover': {
          backgroundColor: modifyColor(mainColorShade.main, { setAlpha: 0.1 }),
          color: clearMainColor,
          borderColor: mainColorShade.light,
        },
        '&.disabled': {
          backgroundColor: palette.grey.light,
          borderColor: palette.grey.light,
          color: palette.grey.dark,
        },
      });

    case Variant.Filled:
      return css({
        backgroundColor: mainColorShade.main,
        borderColor: mainColorShade.main,
        color: palette.common.white,
        '&:hover': {
          backgroundColor: modifyColor(mainColorShade.main, { darken: 15 }),
          borderColor: modifyColor(mainColorShade.main, { darken: 8 }),
        },
        '&.disabled': {
          backgroundColor: palette.grey.light,
          borderColor: palette.grey.light,
          color: palette.grey.dark,
        },
      });

    case Variant.Outlined:
      return css({
        backgroundColor: 'transparent',
        borderColor: clearMainColor,
        color: clearMainColor,
        '&:hover': {
          backgroundColor: modifyColor(mainColorShade.light, {
            setAlpha: isDarkMode ? 0.5 : 0.3,
          }),
          color: clearMainColor,
        },
        '&.disabled': {
          backgroundColor: 'transparent',
          borderColor: palette.grey.light,
          color: palette.grey.dark,
        },
      });

    case Variant.Text:
      return css({
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: clearMainColor,
        '&:hover': {
          backgroundColor: modifyColor(mainColorShade.light, {
            setAlpha: isDarkMode ? 0.5 : 0.3,
          }),
        },
        '&.disabled': {
          color: palette.grey.dark,
        },
      });
  }
};

export const StyleButton = styled('button')<BaseProps & { iconOnly: boolean }>(
  ({
    color = Color.Primary,
    variant = Variant.Default,
    rounded,
    size = 'md',
    iconOnly,
  }) => {
    const { mode, palette } = useTheme();
    const { isDarkMode } = getThemeMode(mode);
    const colorStyle = useMemo(
      () => getColorStyle(palette, isDarkMode, color, variant),
      [palette, color, isDarkMode, variant],
    );
    const { fontSize, borderRadius } = sizeStyle[size];

    return [
      {
        cursor: 'pointer',
        border: '1px solid',
        fontWeight: 'bold',
        transition: '0.12s',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        letterSpacing: '0.2px',
        position: 'relative',
        overflow: 'hidden',
        padding: paddingStyle(size, iconOnly),
        lineHeight: iconOnly ? 0 : 1,
        fontSize,
        borderRadius: rounded ? '100%' : borderRadius,
        '&>*': {
          verticalAlign: 'middle',
        },
        '&.disabled': {
          pointerEvents: 'none',
          cursor: 'default',
        },
      },
      colorStyle,
    ];
  },
);
