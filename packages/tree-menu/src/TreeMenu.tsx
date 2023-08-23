import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TreeMenuProps {}

const StyledTreeMenu = styled.div`
  color: pink;
`;

export function TreeMenu(props: TreeMenuProps) {
  return (
    <StyledTreeMenu>
      <h1>Welcome to TreeMenu!</h1>
    </StyledTreeMenu>
  );
}

export default TreeMenu;
