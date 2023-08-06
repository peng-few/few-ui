import getContrastRatio from 'get-contrast-ratio';
import { Color } from '../styles';

export default function isColorContrast(
  x: Color,
  y: Color,
  contrastThreshold = 3,
) {
  return getContrastRatio(x, y) >= contrastThreshold;
}
