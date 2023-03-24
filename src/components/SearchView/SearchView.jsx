import movies from '../../images/movies.jpeg';
import { StyledSearchView } from './Search.styled';

export const SearchView = () => {
  return (
    <StyledSearchView>
      <p>Enter a keyword please👆.</p>
      <img src={movies} alt="popcorn" width="300" />
    </StyledSearchView>
  );
};
