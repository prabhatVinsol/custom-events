/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

function Cart(props) {
  const { cartList, removeFromCart } = props;
  const getTotal = () => {
    let total = 0;
    cartList.forEach((product) => {
      total += product.price;
    });
    return total;
  };
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
            key={product.image}
            product={product}
            addToCart={removeFromCart}
            remove
          />
        ))}
      </div>
      <div className="Order">
        <button type="button" className="OrderButton">ORDER</button>
      </div>
    </div>
  );
}

export default Cart;
