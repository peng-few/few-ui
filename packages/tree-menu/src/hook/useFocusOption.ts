import { useState } from 'react';
import { BaseOption, DefaultOption } from '../TreeMenu.type';

/**
 * usage: const [selectedLv1Value,setSelectedLv1,Lv2Options] = useSelectOption({})
 * return  [
 *  [0] : 目前選取值得各層的option e.g. {value: 5,label: 'name', children: {...}}
 *  [1] : setState function
 * ]
 */
export const useFocusOption = <Option extends BaseOption = DefaultOption>(
  defaultOption = [],
) => {
  const [focusOption, setFocusOption] = useState<Option[]>(defaultOption);

  const setNewFocusOption = (level: number, option: Option) => {
    setFocusOption([...focusOption.slice(0, level), option]);
  };

  return [focusOption, setNewFocusOption] as const;
};

export default useFocusOption;
