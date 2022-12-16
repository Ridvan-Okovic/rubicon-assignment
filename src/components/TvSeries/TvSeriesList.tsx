import ButtonGroup from '../UI/ButtonGroup';
import Card from '../UI/Card';
import { useState, useCallback, useEffect } from 'react';
import TvSeries from './TvSeries';

interface ISeries {
  poster: string;
  title: string;
  id: string;
}

const initialSeries: ISeries[] = [];

const TvSeriesList = () => {
  const [series, setSeries] = useState(initialSeries);

  const fetchSeriesHandler = useCallback(async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=991c249df4d7793b64c2668a4b2c1f92'
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    const transformedMovies = data.results
      .slice(0, 10)
      .map((seriesData: any) => {
        return {
          id: seriesData.id,
          title: seriesData.name,
          poster: seriesData.poster_path,
        };
      });

    setSeries(transformedMovies);
  }, []);

  useEffect(() => {
    fetchSeriesHandler();
  }, [fetchSeriesHandler]);
  return (
    <>
      <ButtonGroup />
      <Card>
        {series.map((item) => (
          <TvSeries id={item.id} title={item.title} poster={item.poster} />
        ))}
      </Card>
    </>
  );
};

export default TvSeriesList;
