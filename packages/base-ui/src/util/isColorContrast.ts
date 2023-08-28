import getContrastRatio from 'get-contrast-ratio';
import { Color } from '../styles';

export function isColorContrast(x: Color, y: Color, contrastThreshold = 3) {
  return getContrastRatio(x, y) >= contrastThreshold;
}

export default isColorContrast;
