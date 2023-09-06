export const rescaleCss = (cssValue: string, scale: number) => {
  const value = parseInt(cssValue);

  if (isNaN(value)) return cssValue;

  const unit = cssValue.slice(`${value}`.length);

  return value * scale + unit;
};

export default rescaleCss;
