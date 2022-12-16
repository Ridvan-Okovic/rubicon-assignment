import ItemCard from '../UI/ItemCard';
import './Movie.css';

interface IMovie {
  id: string;
  title: string;
  poster: string;
}

const Movie = ({ id, title, poster }: IMovie) => {
  return (
    <ItemCard>
      <section className="main">
        <img
          src={`https://www.themoviedb.org/t/p/original${poster}`}
          alt="poster"
        ></img>
      </section>
      <section className="title">
        <h2>{title}</h2>
      </section>
    </ItemCard>
  );
};

export default Movie;
