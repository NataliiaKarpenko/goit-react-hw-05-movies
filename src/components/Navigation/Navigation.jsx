import { StyledNavigation, StyledNavLink } from './Navigation.styled';
import { Container } from '../Container/Container.jsx';

const Navigation = () => {
  return (
    <StyledNavigation>
      <Container>
        <StyledNavLink className="NavLink" to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink className="NavLink" to="/movies">
          Movies
        </StyledNavLink>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
