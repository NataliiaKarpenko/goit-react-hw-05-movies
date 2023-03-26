import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledMovieDetails } from './MovieDetails.styled';
import imgNotAvailable from '../../images/imgNotAvailable.jpeg';

export const MovieDetails = ({ movieDetails }) => {
  const { poster_path, title, releaseYear, voteAverage, overview, genres } =
    movieDetails;
  const location = useLocation();
  const navigate = useNavigate();
  const backlinkHref = location.state?.from ?? '/movies';

  const handleBtnClick = () => {
    navigate(backlinkHref ?? '/', { replace: true });
  };

  return (
    <StyledMovieDetails>
      <button onClick={handleBtnClick} type="button">
        👈 Go back
      </button>
      <div className="MainInfoContainer">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : imgNotAvailable
          }
          alt={title}
        />
        <div className="InfoContainer">
          <h1>
            {title} ({releaseYear})
          </h1>
          <p>User Score: {voteAverage}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p className="Genres">
            {genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </p>
        </div>
      </div>

      <div className="AdditionalInfoContainer">
        <h3>Addditional information</h3>
        <ul>
          <li className="FirstLink">
            <NavLink
              state={{ from: location.state?.from }}
              to="cast"
              className="Link"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              state={{ from: location.state?.from }}
              to="reviews"
              className="Link"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </StyledMovieDetails>
  );
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    releaseYear: PropTypes.number,
    voteAverage: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
