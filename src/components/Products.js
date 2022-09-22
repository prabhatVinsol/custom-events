/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

function Products(props) {
  const { productList } = props;
  return (
    <div className="ProductGrid">
      {
        productList.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))
      }

    </div>
  );
}

export default Products;
