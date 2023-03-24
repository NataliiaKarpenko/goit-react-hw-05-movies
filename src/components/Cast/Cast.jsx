import PropTypes from 'prop-types';

import imgNotAvailable from '../../images/imgNotAvailable.jpeg';
import { StyledCast } from './Cast.styled';

export const Cast = ({ actingCast }) => {
  return (
    <StyledCast>
      {actingCast.map(
        ({ id, profile_path, original_name, name, character }) => {
          return (
            <li key={id}>
              <div className="ImageContainer">
                <img
                  width={200}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                      : imgNotAvailable
                  }
                  alt={original_name}
                />
              </div>

              <div className="InfoContainer">
                <p className="title">{name}</p>
                <p className="text">
                  <span>Character:</span> {character}
                </p>
              </div>
            </li>
          );
        }
      )}
    </StyledCast>
  );
};

Cast.propTypes = {
  actingCast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile_path: PropTypes.string,
      original_name: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};
