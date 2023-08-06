import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-left: 40px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &.active {
    color: orange;
  }
`;

export const Container = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;
