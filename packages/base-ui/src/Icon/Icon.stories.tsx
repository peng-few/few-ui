import type { Meta } from '@storybook/react';
import { IconProps } from './Icon.type';
import IconClose from './IconClose';
import IconLoad from './Iconload';
import IconSearch from './IconSearch';
import styled from '@emotion/styled';

const Story: Meta<IconProps> = {
  title: 'Icon',
};
export default Story;

const width = 30;
const height = 30;
const color = '#bbc0c9';
const Col = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '20px',
  fontSize: '14px',
  color: '#4a5266',
  height: '52px',
});

export const Overview = {
  render: () => {
    return (
      <div style={{ display: 'flex' }}>
        <Col>
          <IconClose width={27} height={27} color={color} />
          close
        </Col>
        <Col>
          <IconLoad width={28} height={28} color={color} />
          loading
        </Col>
        <Col>
          <IconSearch width={width} height={height} color={color} />
          search
        </Col>
      </div>
    );
  },
};
