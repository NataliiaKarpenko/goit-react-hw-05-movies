import styled from 'styled-components';

export const StyledSearchBar = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #34495e;
  overflow: hidden;

  & .SearchBtn {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: none;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  .SearchBtn:hover {
    opacity: 1;
  }

  & .Input {
    marging-bottom: 100px;
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 4px 6px;
  }

  & .Input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
