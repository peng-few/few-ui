import tinycolor, { ColorInput, Instance } from 'tinycolor2';

export type Methods = {
  [key in keyof Instance as ReturnType<Instance[key]> extends Instance
    ? key
    : never]: Parameters<Instance[key]>[0];
};

export function modifyColor(
  color: ColorInput,
  options: Partial<Methods>,
): string {
  const tinyColor = tinycolor(color);
  const modifyName = Object.keys(options) as (keyof typeof options)[];
  return modifyName
    .reduce((instance: Instance, methodName) => {
      const value = options[methodName];
      return instance[methodName](value as number);
    }, tinyColor)
    .toString();
}

export default modifyColor;
