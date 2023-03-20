// import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import { fetchTrendingMovies } from './APIServices/APIServices';

import { TrendingMoviesGallery } from './MoviesGallery/MoviesGallery';
import { HomePage } from './Pages/HomePage';
import { MoviesPage } from './Pages/MoviesPage';
import { MovieDetailsPage } from './Pages/MovieDetailsPage';

// const [movies, setMovies] = useState([]);

//   async fetchAllGenres() {
//     const request = '/genre/movie/list';
//     const allGenresResponse = await axios.get(
//       `${TMDBApi.URL}${request}?api_key=${TMDBApi.API_KEY}&language=en-US`
//     );
//     const { data } = allGenresResponse;
//     const AllGenresArr = data.genres;
//     return AllGenresArr;
//   }
// }

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};
