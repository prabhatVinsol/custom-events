// eslint-disable-next-line import/named
import React, { useState, useEffect } from 'react';
import '../Stylesheet/Shop.css';
import Products from './Products';
import { ProductsData } from '../DataModel/ProductData';
import Cart from './Cart';
import { subscribe, unsubscribe } from './Event';
import Product from './Product';

function Shop() {
  const [cartItems, setCart] = useState([]);
  const [orderedItems, setOrderedItem] = useState([]);
  useEffect(() => {
    subscribe('addToCart', (data) => {
      setOrderedItem([]);
      setCart([...cartItems, data.detail]);
    });

    return () => {
      unsubscribe('addToCart');
    };
  }, [cartItems]);

  useEffect(() => {
    subscribe('removeFromCart', (data) => {
      setCart(cartItems.filter((cartItem) => cartItem.id !== data.detail.id));
    });

    return () => {
      unsubscribe('removeFromCart');
    };
  }, [cartItems]);

  useEffect(() => {
    subscribe('orderCartItems', () => {
      setOrderedItem(cartItems);
      setCart([]);
    });

    return () => {
      unsubscribe('orderCartItems');
    };
  }, [orderedItems, cartItems]);

  const showOrderSummary = (orderedItems.length > 0)
  && (
    <div className="order-summary-container">
      <h1>
        Order Summary
      </h1>
      <h3>
        Total items:
        {' '}
        {orderedItems.length}
      </h3>
      <h3>
        Total value:
        {'  $'}
        {orderedItems.reduce(
          (accumulator, currentVal) => accumulator + currentVal.price,
          0,
        )}
      </h3>
      <div className="ProductGrid">
        { orderedItems.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="Shop">
      <div>
        <div className="ProductContainer">
          <Products productList={ProductsData} />
        </div>
        <div className="CartContainer">
          <Cart cartList={cartItems} />
        </div>
      </div>
      {showOrderSummary}
    </div>
  );
}

export default Shop;
