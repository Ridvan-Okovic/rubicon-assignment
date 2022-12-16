import React from 'react';
import './Card.css';

const Card = (props: any) => {
  return (
    <div className="card-wrapper">
      <div className="card">{props.children}</div>
    </div>
  );
};

export default Card;
