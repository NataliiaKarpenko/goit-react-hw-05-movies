import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledMovieItem } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const location = useLocation();

  return (
    <StyledMovieItem>
      <Link
        state={{ from: location }}
        to={`/movies/${movie.id}`}
        className="Link"
      >
        {movie.title}
      </Link>
    </StyledMovieItem>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
