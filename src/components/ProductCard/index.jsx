/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.scss'
import Rating from '@mui/material/Rating';
const ProductCard = ({
  title,
  rating,
  ratingNumber,
  brand,
  img,
  price,
  offerPrice,
}) => {
  const [value, setValue] =useState(0);
  return (
    <div className="product-card">
    <div className="product-image">
      <img src={img} alt={title} />
    </div>
    <div className="product-details">
      <h2 className="product-title">{title}</h2>
      <div className="product-brand">{brand}</div>
      <div className="product-rating">
      <Rating
        precision={0.5}
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        <span className="rating">{rating}</span>
        <span className="rating-number">({ratingNumber})</span>
      </div>
      <div className="product-price">
        <span className="original-price">Rs {price}</span>
        <span className="offer-price">Rs {offerPrice}</span>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
