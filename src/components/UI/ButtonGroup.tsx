import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ButtonGroup.css';

interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}

const ButtonGroup = () => {
  const [query, setQuery] = useState('');

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

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
        className="input"
        placeholder="Enter the name of a movie/series"
      ></input>
    </div>
  );
};

export default ButtonGroup;
