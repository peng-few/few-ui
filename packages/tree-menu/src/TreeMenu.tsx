import styled from '@emotion/styled';
import { Row, Modal, useTheme, Checkbox } from '@pengfew/base-ui';
import { FieldNameProvider, DefaultFieldName } from './hook/useFieldName';
import { TreeMenuProps, BaseOption, DefaultOption } from './TreeMenu.type';
import { Theme } from '@emotion/react';
import usefocusOption from './hook/useFocusOption';
import SwiperCol from './component/SwpierCol';
import classNames from 'classnames';
import useSelections from './hook/useSelections';
import { useEffect } from 'react';

export const StyleTitle = styled.h3(({ theme }) => ({
  fontSize: theme.font.lg,
  letterSpacing: '1.8px',
  fontWeight: '500',
  margin: '12px 0 0',
  span: {
    marginRight: '10px',
    verticalAlign: 'middle',
  },
}));

export const StyleList = styled.ul(({ theme }) => ({
  listStyle: 'none',
  cursor: 'pointer',
  paddingLeft: '0',
  marginTop: '0',
  marginBottom: 0,
  '&>li': {
    position: 'relative',
    fontSize: '0.924rem',
    lineHeight: '1.3',
    fontWeight: '500',
    padding: '18px 15px 18px 19px',
    '&:hover': {
      background: `${theme.palette.primary.lighter}`,
    },
    '&:after': {
      content: '""',
      height: '100%',
      width: 0,
      background: theme.palette.primary.main,
      position: 'absolute',
      left: 0,
      top: 0,
      transition: '0.15s',
    },
    '&.active': {
      color: theme.palette.primary.main,
      '&:after': {
        width: '6px',
      },
    },
  },
  '&.is-last': {
    li: {
      '&:after': {
        display: 'none',
      },
      '&.active': {
        color: 'currentcolor',
      },
    },
  },
}));

export const modalCss = (theme: Theme) => ({
  '.few-modal-head': {
    borderBottom: `1px solid ${theme.palette.grey.light}`,
  },
  '.few-modal-body': {
    padding: 0,
  },
});

export const rowCss = (theme: Theme) => ({
  '&>div': {
    borderRight: `1px solid ${theme.palette.grey.light}`,
  },
});

export const defaultGrid = [
  { xs: 24, lg: 6 },
  { xs: 24, lg: 6 },
  { xs: 24, lg: 12 },
];

export const TreeMenu = <Option extends BaseOption = DefaultOption>({
  visible,
  onClose,
  width = '65%',
  title = '',
  valueName = DefaultFieldName.Value,
  labelName = DefaultFieldName.Label,
  childreName = DefaultFieldName.Children,
  grids = defaultGrid,
  options: lv1Options,
  value,
  onChange,
}: TreeMenuProps<Option>) => {
  const theme = useTheme();
  const { focusOptions, setFocusOptions, selections, selectionChange } =
    useSelections<Option>(value);

  const levelOptions: Option[][] = [
    lv1Options,
    ...focusOptions.map((option) => option?.[childreName]),
  ];

  const focusValues = focusOptions.map((option) => option[valueName]);
  const isLastLevel = (level: number) => level === grids.length - 1;
  const hasParent = (level: number) => levelOptions[level] && level !== 0;
  const isChecked = (value: string, level: number) => {
    return (
      selections.has(value) ||
      !!focusValues.slice(0, level).find((value) => selections.has(value))
    );
  };

  useEffect(() => {
    onChange([...selections]);
  }, [selections]);

  return (
    <FieldNameProvider
      valueName={valueName}
      labelName={labelName}
      childrenName={childreName}
    >
      <Modal
        visible={visible}
        onClose={onClose}
        css={modalCss(theme)}
        width={width}
        modalTitle={<StyleTitle theme={theme}>{title}</StyleTitle>}
      >
        <Row css={rowCss(theme)}>
          {grids.map((grid, level) => (
            <SwiperCol
              key={level}
              {...grid}
              slideHeight={levelOptions[level]?.length}
            >
              <StyleList
                theme={theme}
                className={classNames({ 'is-last': isLastLevel(level) })}
              >
                {hasParent(level) && (
                  <li
                    onClick={() =>
                      setFocusOptions(level, focusOptions[level - 1])
                    }
                  >
                    <Checkbox
                      onChange={(event) =>
                        selectionChange({
                          event,
                          level,
                          option: focusOptions[level - 1],
                        })
                      }
                      checked={isChecked(focusValues[level - 1], level)}
                    >
                      全選
                    </Checkbox>
                  </li>
                )}
                {levelOptions[level]?.map((option) => (
                  <li
                    key={option[valueName]}
                    onClick={() => setFocusOptions(level, option)}
                    className={
                      focusValues[level] === option[valueName] ? 'active' : ''
                    }
                  >
                    {isLastLevel(level) ? (
                      <Checkbox
                        onChange={(event) =>
                          selectionChange({ event, level, option })
                        }
                        checked={isChecked(option[valueName], level)}
                      >
                        {option[valueName]}
                        {option[labelName]}
                      </Checkbox>
                    ) : (
                      option[labelName]
                    )}
                  </li>
                ))}
              </StyleList>
            </SwiperCol>
          ))}
        </Row>
      </Modal>
    </FieldNameProvider>
  );
};
export default TreeMenu;
