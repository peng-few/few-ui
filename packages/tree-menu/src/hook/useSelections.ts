import { useState } from 'react';
import usefocusOption from './useFocusOption';
import { BaseOption, DefaultOption } from '../TreeMenu.type';
import useFieldName from './useFieldName';

export type selectionChangeProps<Option> = {
  event: React.ChangeEvent<HTMLInputElement>;
  level: number;
  option: Option;
};
export const useSelections = <Option extends BaseOption = DefaultOption>(
  defaultValue?: string[],
) => {
  const [focusOptions, setFocusOptions] = usefocusOption<Option>();
  const { valueName, childrenName } = useFieldName();
  const [selections, setSelections] = useState<Set<string>>(
    new Set(defaultValue),
  );
  const [optionCount, setOptionCount] = useState({});

  const selectedDescendant =
    (selections: Set<string>) => (result: Option[], option: Option) => {
      if (selections.has(option[valueName])) {
        result.push(option);
      } else if (option[childrenName]) {
        option[childrenName].reduce(selectedDescendant(selections), result);
      }
      return result;
    };

  const getSelectedDescendant = (
    selections: Set<string>,
    rootOption: Option,
  ): Option[] => {
    if (!rootOption[childrenName]) return [];

    return rootOption[childrenName].reduce(
      (result: Option[], option: Option) => {
        if (selections.has(option[valueName])) {
          result.push(option);
        }

        if (option[childrenName]) {
          result.push(...getSelectedDescendant(selections, option));
        }

        return result;
      },
      [],
    );
  };

  const removeChildSelections = (targetOption: Option) => {
    setSelections((prevSelections) => {
      const nextSelections = new Set(prevSelections);

      getSelectedDescendant(nextSelections, targetOption).forEach((option) => {
        nextSelections.delete(option[valueName]);
      });

      return nextSelections;
    });
  };

  const addChildSelections = (targetOption: Option) => {
    const childOptions: Option[] | undefined = targetOption[childrenName];
    childOptions?.forEach((option) => {
      addSelection(option);
    });
  };

  const addSelection = (option: Option) => {
    setSelections((prev) => {
      const next = new Set(prev);
      next.add(option[valueName]);
      return next;
    });

    removeChildSelections(option);
  };

  const removeSelection = (option: Option, level: number) => {
    if (!selections.has(option[valueName])) {
      removeSelection(focusOptions[level - 1], level - 1);
      addChildSelections(focusOptions[level - 1]);
    }

    setSelections((prev) => {
      const next = new Set(prev);
      next.delete(option[valueName]);
      return next;
    });
  };

  const selectionChange = ({
    event,
    level,
    option,
  }: selectionChangeProps<Option>) => {
    const {
      target: { checked },
    } = event;

    if (checked) {
      addSelection(option);
    } else {
      removeSelection(option, level);
    }
  };

  return {
    focusOptions,
    setFocusOptions,
    selections,
    selectionChange,
    optionCount,
  };
};

export default useSelections;
