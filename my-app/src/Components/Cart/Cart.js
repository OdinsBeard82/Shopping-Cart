// src/Components/Cart/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './Cart.css';

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>Quantity: {item.quantity}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
