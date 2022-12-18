import ButtonGroup from '../UI/ButtonGroup';
import Movie from './Movie';
import Card from '../UI/Card';
import '../UI/Card.css';
import { useState, useCallback, useEffect } from 'react';

interface IMovie {
  poster: string;
  title: string;
  id: string;
  key: string;
}

const initialMovies: IMovie[] = [];

const MoviesList = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [movieQuery, setMovieQuery] = useState('');

  const fetchSearchedMovie = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=991c249df4d7793b64c2668a4b2c1f92&query=${movieQuery}`
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    const searchedMovies = data.results.slice(0, 4).map((movieData: any) => {
      return {
        id: movieData.id,
        title: movieData.title,
        poster: movieData.poster_path,
      };
    });

    setMovies(searchedMovies);
    console.log(searchedMovies);
  }, [movieQuery]);

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

  const addSearchMovie = (movieData: string) => {
    setMovieQuery(movieData);
    // fetchMoviesHandler();
  };

  return (
    <>
      <ButtonGroup onAddSearchMovie={addSearchMovie} />
      <h1 className="movies-title">Top 10 Movies</h1>
      <Card>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
          />
        ))}
      </Card>
    </>
  );
};

export default MoviesList;
