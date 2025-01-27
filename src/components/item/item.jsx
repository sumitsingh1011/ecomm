import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, image, name = "Unnamed Product", new_price = 0, old_price = 0 }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-prices-new">${new_price.toFixed(2)}</div>
        <div className="item-prices-old">${old_price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Item;
