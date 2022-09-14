// eslint-disable-next-line import/named
import React, { useState } from 'react';
import '../Stylesheet/Shop.css';
import Products from './Products';
import { products } from '../DataModel/ProductData';
import Cart from './Cart';

function Shop() {
  const [cartItems, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart([...cartItems, product]);
  };
  const removeFromCart = (product) => {
    setCart(cartItems.filter((cartItem) => cartItem.image !== product.image));
  };
  return (
    <div className="Shop">
      <div className="ProductContainer">
        <Products productList={products} addToCart={handleAddToCart} />
      </div>
      <div className="CartContainer">
        <Cart cartList={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default Shop;
