import { Route, Routes, Navigate } from 'react-router-dom';
import Movies from './pages/Movies';
import MovieDetailsPage from './pages/MovieDetailsPage';
import TvSeries from './pages/TvSeries';
import TvSeriesDetailsPage from './pages/TvSeriesDetailsPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="tv-series" />} />

        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/tv-series/:seriesID" element={<TvSeriesDetailsPage />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieID" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
