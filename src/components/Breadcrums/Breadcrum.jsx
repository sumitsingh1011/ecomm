import React from 'react';
import './Breadcum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="arrow" /> SHOP  
      <img src={arrow_icon} alt="arrow" /> {product?.category || "Unknown Category"}  
      <img src={arrow_icon} alt="arrow" /> {product?.name || "Unknown Product"}
    </div>
  );
};

export default Breadcrum;
