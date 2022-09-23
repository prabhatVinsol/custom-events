/* eslint-disable react/prop-types */
import React from 'react';
import silver from '../ImageResources/silver.jpeg';
import grey from '../ImageResources/grey.jpeg';
import gold from '../ImageResources/gold.jpg';
import green from '../ImageResources/green.jpeg';
import { publish } from './Event';

function Product(props) {
  const { product, renderConditionForButton } = props;
  const getImage = () => {
    switch (product.image) {
    case 'silver':
      return silver;
    case 'grey':
      return grey;
    case 'gold':
      return gold;
    default:
      return green;
    }
  };

  const productAddRemoveButton = () => {
    switch (renderConditionForButton) {
    case 'Products':
      return (
        <div>
          <button type="button" onClick={() => publish('addToCart', product)}>ADD TO CART</button>
        </div>
      );
    case 'Cart':
      return (
        <div className="Remove">
          <button type="button" onClick={() => publish('removeFromCart', product)}>REMOVE</button>
        </div>
      );
    default:
      return null;
    }
  };
  return (
    <div className="Product">
      <div className="ImageContainer">
        <img src={getImage()} className="ProductImage" alt={product.image} />
      </div>
      <div className="ProductDetail">
        <p>{product.name}</p>
        <p>
          $
          {product.price}
          {' '}
          (
          {product.storage}
          )
        </p>
        {productAddRemoveButton()}
      </div>
    </div>
  );
}

export default Product;
