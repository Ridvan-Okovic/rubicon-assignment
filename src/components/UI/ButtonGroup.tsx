import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ButtonGroup.css';

interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}

interface SearchFunction {
  onAddSearchMovie: (query: string) => void;
}

const ButtonGroup = ({ onAddSearchMovie }: SearchFunction) => {
  const [movieData, setMovieData] = useState([]);
  const [query, setQuery] = useState('');
  const [validInput, setValidInput] = useState(false);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
    onAddSearchMovie(query);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Checking validity of search');
      setValidInput(query.length > 3);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div className="select-wrap">
      <div className="button-wrap">
        <Link to="/movies">
          <button className="movies-btn">Movies</button>
        </Link>
        <Link to="/tv-series">
          <button className="series-btn">Tv-Series</button>
        </Link>
      </div>

      <input
        onChange={searchHandler}
        placeholder="Enter the name of a movie/series"
      />
    </div>
  );
};

export default ButtonGroup;
