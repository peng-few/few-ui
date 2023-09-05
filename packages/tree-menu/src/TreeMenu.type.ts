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

export interface TreeMenuProps<Option> extends ModalProps {
  title?: string;
  valueName?: string;
  labelName?: string;
  childreName?: string;
  options: Option[];
  /** 決定選單顯示到幾層與買層的grid */
  grid: Partial<GenericBreakpoint<number>>[];
}
