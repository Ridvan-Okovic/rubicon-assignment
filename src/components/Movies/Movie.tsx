import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import ItemCard from '../UI/ItemCard';

import './Movie.css';

interface IMovie {
  key: string;
  id: string;
  title: string;
  poster: string;
}

const Movie = ({ id, title, poster }: IMovie) => {
  return (
    <>
      <ItemCard>
        <section className="main">
          <img
            src={`https://www.themoviedb.org/t/p/original${poster}`}
            alt="poster"
          ></img>
        </section>
        <section className="title">
          <Link to={`/movies/${id}`}>
            <h2>{title}</h2>
          </Link>
        </section>
      </ItemCard>
    </>
  );
};

export default Movie;
