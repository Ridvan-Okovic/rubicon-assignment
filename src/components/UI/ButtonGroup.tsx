import { Link } from 'react-router-dom';
import './ButtonGroup.css';

const ButtonGroup = () => {
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
        className="input"
        placeholder="Enter the name of a movie/series"
      ></input>
    </div>
  );
};

export default ButtonGroup;
