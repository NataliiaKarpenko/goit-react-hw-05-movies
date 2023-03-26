import PropTypes from 'prop-types';

import errorImg from '../../images/errorImg.jpeg';
import { StyledErrorView } from './ErrorView.styled';

export const ErrorView = ({ message }) => {
  return (
    <StyledErrorView>
      <img src={errorImg} alt="red button" width="300" />
      <p>{message}</p>
    </StyledErrorView>
  );
};

ErrorView.propTypes = {
  message: PropTypes.string,
};
