import React from 'react';
import './ItemCard.css';

const ItemCard = (props: any) => {
  return <div className="item-card">{props.children}</div>;
};

export default ItemCard;
