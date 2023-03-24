import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Container } from './Container/Container.jsx';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('./Pages/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));
const CastPage = lazy(() => import('./Pages/CastPage'));
const ReviewsPage = lazy(() => import('./Pages/ReviewsPage'));
const Navigation = lazy(() => import('./Navigation/Navigation'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* <StyledNavigation>
        <Container>
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
          <NavLink className="NavLink" to="/movies">
            Movies
          </NavLink>
        </Container>
      </StyledNavigation> */}
        <Navigation />
        <Container>
          {/* <Suspense fallback={<Loader />}> */}
          <Routes>
            <Route index element={<HomePage />} />
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
