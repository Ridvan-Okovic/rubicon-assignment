import ButtonGroup from '../UI/ButtonGroup';
import Movie from './Movie';
import Card from '../UI/Card';
import { useState, useCallback, useEffect } from 'react';

interface IMovie {
  poster: string;
  title: string;
  id: string;
}

const initialMovies: IMovie[] = [];

const MoviesList = () => {
  const [movies, setMovies] = useState(initialMovies);

  const fetchMoviesHandler = useCallback(async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=991c249df4d7793b64c2668a4b2c1f92'
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    const transformedMovies = data.results
      .slice(0, 10)
      .map((movieData: any) => {
        return {
          id: movieData.id,
          title: movieData.title,
          poster: movieData.poster_path,
        };
      });

    setMovies(transformedMovies);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <>
      <ButtonGroup />
      <Card>
        {movies.map((movie) => (
          <Movie id={movie.id} title={movie.title} poster={movie.poster} />
        ))}
      </Card>
    </>
  );
};

export default MoviesList;
