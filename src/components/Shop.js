// eslint-disable-next-line import/named
import React, { useState, useEffect } from 'react';
import '../Stylesheet/Shop.css';
import Products from './Products';
import { ProductsData } from '../DataModel/ProductData';
import Cart from './Cart';
import { subscribe, unsubscribe } from './Event';

function Shop() {
  const [cartItems, setCart] = useState([]);
  useEffect(() => {
    subscribe('addToCart', (data) => {
      setCart([...cartItems, data.detail]);
    });
    subscribe('removeFromCart', (data) => {
      setCart(cartItems.filter((cartItem) => cartItem.id !== data.detail.id));
    });

    return () => {
      unsubscribe('addToCart');
      unsubscribe('removeFromCart');
    };
  }, [cartItems]);
  return (
    <div className="Shop">
      <div className="ProductContainer">
        <Products productList={ProductsData} />
      </div>
      <div className="CartContainer">
        <Cart cartList={cartItems} />
      </div>
    </div>
  );
}

export default Shop;
