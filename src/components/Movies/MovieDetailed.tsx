import { useNavigate, useParams } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';

interface MovieInterface {
  title: string;
  poster_path: string;
  overview: string;
}

const MovieDetailed = () => {
  const params = useParams();

  const [movie, setMovie] = useState<MovieInterface>();

  const fetchMovieDetailsHandler = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.movieID}?api_key=991c249df4d7793b64c2668a4b2c1f92`
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();

    setMovie(data);
  }, [params.movieID]);

  useEffect(() => {
    fetchMovieDetailsHandler();
  }, [fetchMovieDetailsHandler]);

  const title = movie?.title;
  const poster = movie?.poster_path;
  const overview = movie?.overview;

  let navigate = useNavigate();
  const revertStateHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={revertStateHandler}>Back</button>
      <img
        src={`https://www.themoviedb.org/t/p/original${poster}`}
        alt="poster"
      ></img>
      <h1>{title}</h1>
      <p>{overview}</p>
    </>
  );
};

export default MovieDetailed;
