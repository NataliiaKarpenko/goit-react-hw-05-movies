import styled from 'styled-components';

export const StyledSearchView = styled.div`
  position: relative;
  // top: 150px;
  // left: 50%;
  // transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translate(-50%);
    width: 600px;
    height: auto;
    margin-bottom: 15px;
  }

  p {
    font-size: 25px;
    font-weight: 500;
    color: #34495e;
  }
`;
