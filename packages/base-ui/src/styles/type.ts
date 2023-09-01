export type Rgb = `rgb(${number}, ${number}, ${number})`;
export type Rgba = `rgba(${number}, ${number}, ${number}, ${number})`;
export type Hex = `#${string}`;

export type Color =
  | Rgb
  | Rgba
  | Hex
  | 'transparent'
  | 'white'
  | 'black'
  | 'currentcolor';
