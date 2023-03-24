import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  margin-bottom: 50px;
  padding-top: 32px;
  padding-bottom: 32px;
  box-shadow: 0 10px 6px -6px #777;

  & .NavLink {
    color: #113f67;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
  }

  & .NavLink:hover {
    color: #142d4c;
  }

  & .NavLink:not(:last-child) {
    display: inline-block;
    margin-right: 50px;
  }

  & .NavLink.active {
    color: #ec729c;
  }
`;
