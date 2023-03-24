import styled from 'styled-components';

export const StyledMovieItem = styled.li`
  margin-bottom: 10px;
  font-size: 20px;

  & .Link {
    color: #34495e;
    text-decoration: none;
  }

  & .Link:hover {
    color: #22313f;
    text-decoration: underline;
  }
`;
