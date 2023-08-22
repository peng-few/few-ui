import { Palette } from '../theme';
import { modifyColor } from '../util';
import { css, SerializedStyles } from '@emotion/react';
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

export const sizeStyle: Record<Size, SerializedStyles> = {
  xs: css({
    padding: '3px 8px',
    fontSize: '0.8125rem',
    borderRadius: '4px',
  }),
  sm: css({
    padding: '5px 12px',
    fontSize: '0.9rem',
    borderRadius: '6px',
  }),
  md: css({
    padding: '5px 13px',
    fontSize: '1rem',
    borderRadius: '7px',
  }),
  lg: css({
    padding: '8px 18px',
    fontSize: '1.125rem',
    borderRadius: '8px',
  }),
};

export const getVariantStyle = (
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
