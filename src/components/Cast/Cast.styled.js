import styled from 'styled-components';

export const StyledCast = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;

  li {
    flex-basis: calc((100% - 60px) / 4);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .ImageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 500px;
    overflow-y: hidden;
    border-radius: 5px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .InfoContainer {
    padding: 10px;
    color: #22313f;
  }

  .title {
    margin: 0;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
  }
  .text {
    margin: 0;
    font-size: 17px;
  }

  span {
    font-style: italic;
  }
`;
