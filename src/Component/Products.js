/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

function Products(props) {
  const { productList, addToCart } = props;
  return (
    <div className="ProductGrid">
      {
        productList.map((product) => <Product product={product} addToCart={addToCart} />)
      }

    </div>
  );
}

export default Products;
