import ItemCard from '../UI/ItemCard';

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
        <h2>{title}</h2>
      </section>
    </ItemCard>
  );
};

export default TvSeries;
