/* eslint-disable react/prop-types */
import React from 'react';
import { publish } from './Event';
import Product from './Product';

function Cart(props) {
  const { cartList } = props;
  const getTotal = () => cartList.reduce((accumulator, currentValue) => accumulator
    + currentValue.price, 0);

  return (
    <div>
      <div className="Cart">
        <h1>
          Cart:
          {' '}
          $
          {getTotal()}
        </h1>
        {cartList.map((product) => (
          <Product
            key={product.id}
            product={product}
            renderConditionForButton="Cart"
          />
        ))}
      </div>
      <div className="Order">
        <button type="button" className="OrderButton" onClick={() => publish('orderCartItems')}>ORDER</button>
      </div>
    </div>
  );
}

export default Cart;
