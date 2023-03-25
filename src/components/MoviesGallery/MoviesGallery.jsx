import PropTypes from 'prop-types';

import { MovieItem } from '../MovieItem/MovieItem';
import { StyledMoviesGalleryContainer } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies, headline }) => {
  return (
    <StyledMoviesGalleryContainer>
      <h1>{headline}</h1>
      <ul>
        {movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </ul>
    </StyledMoviesGalleryContainer>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.array,
  headline: PropTypes.string,
};
