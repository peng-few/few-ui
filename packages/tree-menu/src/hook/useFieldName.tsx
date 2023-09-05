import React, { createContext, useContext } from 'react';

export interface FieldNameProps extends React.ComponentProps<'div'> {
  valueName: string;
  labelName: string;
  childrenName: string;
}

export enum DefaultFieldName {
  Value = 'value',
  Label = 'label',
  Children = 'children',
}

const FieldNameContext = createContext<FieldNameProps>({
  valueName: DefaultFieldName.Value,
  labelName: DefaultFieldName.Label,
  childrenName: DefaultFieldName.Children,
});

export function FieldNameProvider({
  children,
  valueName,
  labelName,
  childrenName,
}: FieldNameProps) {
  return (
    <FieldNameContext.Provider value={{ valueName, labelName, childrenName }}>
      {children}
    </FieldNameContext.Provider>
  );
}

export const useFieldName = () => {
  return useContext(FieldNameContext);
};
export default useFieldName;
