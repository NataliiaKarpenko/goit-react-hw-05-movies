import styled from 'styled-components';

export const StyledErrorView = styled.div`
  position: absolute;
  bottom: 10;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 300px;
    height: auto;
    margin-bottom: 15px;
  }

  & p {
    font-size: 18px;
    color: #34495e;
  }
`;
