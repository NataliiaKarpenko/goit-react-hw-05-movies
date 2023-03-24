import { NavLink } from 'react-router-dom';

import { StyledNavigation } from './Navigation.styled';
import { Container } from '../Container/Container.jsx';

const Navigation = () => {
  return (
    <StyledNavigation>
      <Container>
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" to="/movies">
          Movies
        </NavLink>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
