import PropTypes from 'prop-types';

import { StyledReviews } from './Reviews.styled';

export const Reviews = ({ reviewsInfo }) => {
  return (
    <StyledReviews>
      {reviewsInfo.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </StyledReviews>
  );
};

Reviews.propTypes = {
  reviewsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
