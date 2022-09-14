/* eslint-disable react/prop-types */
import React from 'react';
import silver from '../ImageResources/silver.jpeg';
import grey from '../ImageResources/grey.jpeg';
import gold from '../ImageResources/gold.jpg';
import green from '../ImageResources/green.jpeg';

function Product(props) {
  const { product, addToCart } = props;
  const getImage = () => {
    if (product.image === 'silver') {
      return silver;
    } if (product.image === 'grey') {
      return grey;
    } if (product.image === 'gold') {
      return gold;
    }
    return green;
  };
  return (
    <div className="Product">
      <div className="ImageContainer">
        <img src={getImage()} className="ProductImage" alt={product.image} />
      </div>
      <div className="ProductDetail">
        <p>{product.name}</p>
        <p>
          {product.price}
          {' '}
          {product.storage}
        </p>
        <button type="button" onClick={() => addToCart(product)}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default Product;
