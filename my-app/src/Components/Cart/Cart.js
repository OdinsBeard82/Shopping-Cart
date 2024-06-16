import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import './Cart.css';

function Cart() {
  const { cartItems } = useContext(CartContext);

  // Calculate the total cost
  const totalCost = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('£', ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{item.price}</div>
                  <div className="cart-item-quantity">Quantity: {item.quantity}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total Cost: </span>
            <span>£{totalCost.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
