import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledSharedLayout = styled.nav`
  margin-bottom: 50px;
  padding-top: 32px;
  padding-bottom: 32px;
  box-shadow: 0 10px 6px -6px #777;
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  color: #113f67;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #142d4c;
  }

  &:not(:last-child) {
    display: inline-block;
    margin-right: 50px;
  }

  &.active {
    color: #ec729c;
  }
`;
