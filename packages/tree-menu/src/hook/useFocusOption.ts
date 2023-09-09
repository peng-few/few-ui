import { useState } from 'react';
import { BaseOption, DefaultOption } from '../TreeMenu.type';

/**
 *
 * return  [
 *  [0] : {[valueName]: string,[labelName]: string, [childrenName]: Option}[]
 *  [1] : setState function
 * ]
 */
export const useFocusOption = <Option extends BaseOption = DefaultOption>(
  defaultOption = [],
) => {
  const [focusOptions, setFocusOptions] = useState<Option[]>(defaultOption);
  const isSelectAllOption = (option: Option) =>
    focusOptions[focusOptions.length - 1] === option;

  const setNewFocusOptions = (level: number, option: Option) => {
    if (isSelectAllOption(option)) return;

    setFocusOptions([...focusOptions.slice(0, level), option]);
  };

  return [focusOptions, setNewFocusOptions] as const;
};

export default useFocusOption;
