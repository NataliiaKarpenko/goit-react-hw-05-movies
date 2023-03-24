import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import {
//   StyledNavigation,
//   StyledNavLink,
// } from './Navigation/Navigation.styled';
import { Container } from './Container/Container.jsx';
import { Loader } from './Loader/Loader';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));
const CastPage = lazy(() => import('./Pages/CastPage'));
const ReviewsPage = lazy(() => import('./Pages/ReviewsPage'));

export const App = () => {
  return (
    <>
      {/* <StyledNavigation>
        <Container>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Container>
      </StyledNavigation> */}
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Container>
          <Routes>
            {/* <Route index element={<HomePage />} /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
          </Routes>
          {/* </Suspense> */}
        </Container>
      </Suspense>
    </>
  );
};

export default App;
