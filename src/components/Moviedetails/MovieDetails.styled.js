import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
  padding-bottom: 40px;

  & .MainInfoContainer {
    display: flex;
    gap: 30px;
  }

  & img {
    display: block;
    height: auto;
    border-radius: 5px;
  }

  & .InfoContainer {
    color: #22313f;
  }

  & p {
    font-size: 20px;
  }

  & .AdditionalInfoContainer {
    color: #22313f;
  }

  & .Link {
    color: #113f67;
    font-size: 18px;
    text-decoration: none;
  }

  & .Link:hover {
    color: #142d4c;
    text-decoration: underline;
  }

  & .Link.active {
    color: #ec729c;
  }

  & .Link.active:hover {
    text-decoration: none;
    cursor: default;
  }

  & .FirstLink {
    margin-bottom: 15px;
  }

  & .Genres {
    display: flex;
    gap: 15px;
  }

  & button {
    margin-bottom: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    color: #113f67;
    border: 1px solid #113f67;
    border-radius: 5px;
  }

  & button:hover {
    scale: 1.05;
  }
`;
