import { getThemeMode } from '../theme';
import { modifyColor } from '../util';
import { css, Theme } from '@emotion/react';
import { Color, Variant, Size } from './Button.type';

export const baseStyle = css({
  cursor: 'pointer',
  border: '1px solid',
  fontWeight: 'bold',
  transition: '0.12s',
  textDecoration: 'none',
  display: 'inline-block',
  letterSpacing: '0.2px',
  position: 'relative',
  overflow: 'hidden',
  '&.disabled': {
    pointerEvents: 'none',
    cursor: 'default',
  },
});

export const getSizeStyle = (size: Size) => {
  switch (size) {
    case 'xs':
      return css({
        padding: '3px 8px',
        fontSize: '0.8125rem',
        borderRadius: '4px',
      });
    case 'sm':
      return css({
        padding: '5px 12px',
        fontSize: '0.9rem',
        borderRadius: '6px',
      });
    case 'md':
      return css({
        padding: '5px 13px',
        fontSize: '1rem',
        borderRadius: '7px',
      });
    case 'lg':
      return css({
        padding: '8px 18px',
        fontSize: '1.125rem',
        borderRadius: '8px',
      });
  }
};

export const getVariantStyle = (
  { palette, mode }: Theme,
  color: Color,
  variant: Variant,
) => {
  const colorType = palette[color];

  const { isDarkMode } = getThemeMode(mode);
  const clearMainColor = isDarkMode
    ? modifyColor(colorType.main, { brighten: 20, darken: 10 })
    : colorType.main;

  switch (variant) {
    case Variant.Default:
      return css({
        backgroundColor: palette.background,
        borderColor: palette.grey.light,
        color: palette.text,
        '&:hover': {
          backgroundColor: modifyColor(colorType.main, { setAlpha: 0.1 }),
          color: clearMainColor,
          borderColor: colorType.light,
        },
        '&.disabled': {
          backgroundColor: palette.grey.light,
          borderColor: palette.grey.light,
          color: palette.grey.dark,
        },
      });

    case Variant.Filled:
      return css({
        backgroundColor: colorType.main,
        borderColor: colorType.main,
        color: palette.common.white,
        '&:hover': {
          backgroundColor: modifyColor(colorType.main, { darken: 15 }),
          borderColor: modifyColor(colorType.main, { darken: 8 }),
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
          backgroundColor: modifyColor(colorType.light, {
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
          backgroundColor: modifyColor(colorType.light, {
            setAlpha: isDarkMode ? 0.5 : 0.3,
          }),
        },
        '&.disabled': {
          color: palette.grey.dark,
        },
      });
  }
};
