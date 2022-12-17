import ItemCard from '../UI/ItemCard';
import { Link } from 'react-router-dom';

interface ISeries {
  id: string;
  title: string;
  poster: string;
}

const TvSeries = ({ id, title, poster }: ISeries) => {
  return (
    <ItemCard>
      <section className="main">
        <img
          src={`https://www.themoviedb.org/t/p/original${poster}`}
          alt="poster"
        ></img>
      </section>
      <section className="title">
        <Link to={`/tv-series/${id}`}>
          <h2>{title}</h2>
        </Link>
      </section>
    </ItemCard>
  );
};

export default TvSeries;
