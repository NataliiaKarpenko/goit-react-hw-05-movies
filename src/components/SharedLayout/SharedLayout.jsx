import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledSharedLayout, StyledNavLink } from './SharedLayout.styled';
import { Container } from '../Container/Container.jsx';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <StyledSharedLayout>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </StyledSharedLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
