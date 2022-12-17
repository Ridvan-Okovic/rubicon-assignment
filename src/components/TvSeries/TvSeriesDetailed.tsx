import { useNavigate, useParams } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import Card from '../UI/Card';
import { BiArrowBack } from 'react-icons/bi';

interface SeriesInterface {
  name: string;
  poster_path: string;
  overview: string;
}

const TvSeriesDetailed = () => {
  const params = useParams();

  const [series, setSeries] = useState<SeriesInterface>();

  const fetchMovieDetailsHandler = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${params.seriesID}?api_key=991c249df4d7793b64c2668a4b2c1f92`
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();

    setSeries(data);
  }, [params.seriesID]);

  useEffect(() => {
    fetchMovieDetailsHandler();
  }, [fetchMovieDetailsHandler]);

  const title = series?.name;
  const poster = series?.poster_path;
  const overview = series?.overview;

  let navigate = useNavigate();
  const revertStateHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="back-button" onClick={revertStateHandler}>
        <BiArrowBack />
      </button>
      <Card>
        <img
          className="detailed-poster"
          src={`https://www.themoviedb.org/t/p/original${poster}`}
          alt="poster"
        ></img>
        <h1>{title}</h1>
        <p>{overview}</p>
      </Card>
    </>
  );
};

export default TvSeriesDetailed;
