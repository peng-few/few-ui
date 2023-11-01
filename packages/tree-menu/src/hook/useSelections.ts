import React, { useMemo, useState } from 'react';
import usefocusOption from './useFocusOption';
import { BaseOption, DefaultOption } from '../TreeMenu.type';
import useFieldName from './useFieldName';

export type selectionChangeProps<Option> = {
  event: React.ChangeEvent<HTMLInputElement>;
  level: number;
  option: Option;
};
export interface useSelectionsType<Option> {
  value?: string[];
  onChange: (value: string[], labels: string[]) => void;
  options: Option[];
}
export const useSelections = <Option extends BaseOption = DefaultOption>({
  value: defaultValue,
  onChange,
  options,
}: useSelectionsType<Option>) => {
  const [focusOptions, setFocusOptions] = usefocusOption<Option>();
  const { valueName, childrenName, labelName } = useFieldName();
  const [selections, setSelectionState] = useState<Set<string>>(
    new Set(defaultValue),
  );

  const optionLabels = useMemo(() => {
    const labelMap = new Map();
    const setOptionLabel = (selects: Option) => {
      labelMap.set(selects[valueName], selects[labelName]);
      if (selects[childrenName]) {
        (selects[childrenName] as Option[]).forEach((selects) =>
          setOptionLabel(selects),
        );
      }
    };
    options.forEach((selects) => setOptionLabel(selects));
    return labelMap;
  }, [options, labelName, valueName, childrenName]);

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

  const setSelections = (newState: React.SetStateAction<Set<string>>) => {
    setSelectionState((prevSelection) => {
      const newSelections =
        typeof newState === 'function' ? newState(prevSelection) : newState;
      const selectionArr = [...newSelections];
      const selectedOption = selectionArr.map((select) =>
        optionLabels.get(select),
      );
      onChange(selectionArr, selectedOption);
      return newSelections;
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
  };
};

export default useSelections;
