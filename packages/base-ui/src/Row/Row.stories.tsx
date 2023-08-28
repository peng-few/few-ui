import type { Meta, StoryObj } from '@storybook/react';
import { Row, Col } from '.';
import Button from '../Button';
import styled from '@emotion/styled';

const Story: Meta<typeof Row> = {
  component: Row,
  title: 'Grid',
};
export default Story;
type Story = StoryObj<typeof Button>;

const Box = styled.div({
  background: '#efdbff',
  padding: '10px 30px',
});
export const Overview = () => {
  return (
    <div>
      <h1>Grid system</h1>
      <p>為12格柵欄系統，可設定不同breakpoint時的行/列間距</p>
      <hr />
      <p>行間距: xs: 10, md: 20, xl: 30 &nbsp;&nbsp;&nbsp;列間距: 10</p>
      <Row gutter={{ xs: 10, md: 20, xl: 30 }} rowGutter={10}>
        <Col xs={12} sm={6} md={4}>
          <Box>sm: 12 / md: 6 / md:4</Box>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Box>sm: 12 / md: 6 / md:4</Box>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Box>sm: 12 / md: 6 / md:4</Box>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Box>sm: 12 / md: 6 / md:4</Box>
        </Col>
      </Row>
    </div>
  );
};
