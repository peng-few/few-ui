import { DefaultFieldName } from './hook/useFieldName';
import { GenericBreakpoint, ModalProps } from '@pengfew/base-ui';

export interface BaseOption {
  [name: string]: any;
}
export interface DefaultOption extends BaseOption {
  [DefaultFieldName.Value]: string | number;
  [DefaultFieldName.Label]: string;
  [DefaultFieldName.Children]?: DefaultOption[];
}

export interface TreeMenuProps<Option> extends Omit<ModalProps, 'onChange'> {
  title?: string;
  valueName?: string;
  labelName?: string;
  childreName?: string;
  options: Option[];
  /** 決定選單顯示到幾層與每層的grid */
  grids?: Partial<GenericBreakpoint<number>>[];
  multiple?: true;
  value?: string[];
  onChange: (value: string[]) => void;
}
