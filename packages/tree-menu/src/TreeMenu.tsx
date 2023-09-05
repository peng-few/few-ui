import styled from '@emotion/styled';
import { Row, Modal, useTheme } from '@pengfew/base-ui';
import { FieldNameProvider, DefaultFieldName } from './hook/useFieldName';
import { TreeMenuProps, BaseOption, DefaultOption } from './TreeMenu.type';
import { Theme } from '@emotion/react';
import usefocusOption from './hook/useFocusOption';
import SwiperCol from './component/SwpierCol';
import classNames from 'classnames';

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
  // '&.is-last': {
  //   display: 'grid',
  //   gridTemplateColumns: '1fr 1fr',
  //   gap: '10px',
  //   padding: '10px',
  //   'li': {
  //     border: `1px solid ${theme.palette.grey.light}`,
  //     borderRadius: '10px',
  //     overflow: 'hidden'
  //   }
  // }
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
  grid = defaultGrid,
  options: lv1Options,
}: TreeMenuProps<Option>) => {
  const theme = useTheme();
  const [focusOption, setFocusOption] = usefocusOption<Option>();
  const levelOptions: Option[][] = [
    lv1Options,
    ...focusOption.map((option) => option?.[childreName]),
  ];

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
          {grid.map((breakpoint, level) => (
            <SwiperCol
              {...breakpoint}
              slideHeight={levelOptions[level]?.length}
            >
              <StyleList
                theme={theme}
                className={classNames({ 'is-last': level === grid.length - 1 })}
              >
                {levelOptions[level] && level !== 0 && (
                  <li>
                    <label>
                      <input type="checkbox"></input>
                      全選
                    </label>
                  </li>
                )}
                {levelOptions[level]?.map((option) => (
                  <li
                    onClick={() => setFocusOption(level, option)}
                    className={
                      focusOption[level]?.[valueName] === option[valueName]
                        ? 'active'
                        : ''
                    }
                  >
                    <label>
                      {level === grid.length - 1 && (
                        <input type="checkbox"></input>
                      )}
                      {option[labelName]}
                    </label>
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
